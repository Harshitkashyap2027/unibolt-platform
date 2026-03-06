/**
 * Landing Page Logic — Parallax, animations, carousel, scroll effects
 */
import { initScrollReveal, initCounters, staggerReveal } from '../../js/components/intersection-observer.js';

// ── Init ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initCounters();
  initNavScroll();
  initCarousel();
  initMobileNav();
  initHeroParallax();
  staggerFeaturesOnLoad();
});

// ── Nav scroll behavior ───────────────────────────────────────────────────
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const observer = new IntersectionObserver(
    ([entry]) => nav.classList.toggle('scrolled', !entry.isIntersecting),
    { threshold: 0, rootMargin: '-64px 0px 0px 0px' }
  );

  const hero = document.getElementById('hero');
  if (hero) observer.observe(hero);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── Hero Parallax ─────────────────────────────────────────────────────────
function initHeroParallax() {
  const hero = document.querySelector('.hero-content');
  const orbs = document.querySelectorAll('.hero-orb');
  if (!hero || !orbs.length) return;

  let ticking = false;
  document.addEventListener('mousemove', (e) => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 15;
        orb.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
      });
      ticking = false;
    });
  });

  // Scroll hide scroll indicator
  const scrollIndicator = document.getElementById('scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '1';
    }, { passive: true });
  }
}

// ── Features stagger ─────────────────────────────────────────────────────
function staggerFeaturesOnLoad() {
  const grid = document.querySelector('.features-grid');
  if (!grid) return;
  const items = grid.querySelectorAll('.card-feature');
  items.forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });
}

// ── Testimonials Carousel ─────────────────────────────────────────────────
function initCarousel() {
  const track      = document.getElementById('testimonial-track');
  const prevBtn    = document.getElementById('carousel-prev');
  const nextBtn    = document.getElementById('carousel-next');
  const dotsContainer = document.getElementById('carousel-dots');
  if (!track) return;

  const cards       = track.querySelectorAll('.card-testimonial');
  const total       = cards.length;
  let   current     = 0;
  let   autoplay;

  // Create dots
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `carousel-dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer?.appendChild(dot);
  });

  function goTo(index) {
    current = ((index % total) + total) % total;
    const cardWidth = cards[0].offsetWidth + 24; // 24 = gap
    track.style.transform = `translateX(-${current * cardWidth}px)`;
    dotsContainer?.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  prevBtn?.addEventListener('click', () => { prev(); resetAutoplay(); });
  nextBtn?.addEventListener('click', () => { next(); resetAutoplay(); });

  function resetAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(next, 5000);
  }

  // Touch/swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      dx < 0 ? next() : prev();
      resetAutoplay();
    }
  });

  // Pause on hover
  track.parentElement?.addEventListener('mouseenter', () => clearInterval(autoplay));
  track.parentElement?.addEventListener('mouseleave', resetAutoplay);

  resetAutoplay();
}

// ── Mobile Nav ────────────────────────────────────────────────────────────
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (!toggle || !links) return;

  let isOpen = false;

  toggle.addEventListener('click', () => {
    isOpen = !isOpen;
    links.style.display = isOpen ? 'flex' : '';
    links.style.position = isOpen ? 'fixed' : '';
    links.style.top = isOpen ? '64px' : '';
    links.style.left = isOpen ? '0' : '';
    links.style.right = isOpen ? '0' : '';
    links.style.flexDirection = isOpen ? 'column' : '';
    links.style.background = isOpen ? 'rgba(10,10,26,0.97)' : '';
    links.style.padding = isOpen ? '24px' : '';
    links.style.gap = isOpen ? '16px' : '';
    links.style.borderBottom = isOpen ? '1px solid rgba(99,102,241,0.2)' : '';

    // Animate hamburger to X
    const spans = toggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Close on link click
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      isOpen = false;
      links.style.display = '';
      const spans = toggle.querySelectorAll('span');
      spans.forEach((s) => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}
