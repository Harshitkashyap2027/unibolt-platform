/**
 * IntersectionObserver Utility — Scroll-triggered animations and lazy loading
 */

// ── Scroll Reveal Observer ────────────────────────────────────────────────

let revealObserver = null;

/**
 * Observe elements with .reveal, .reveal-left, .reveal-right classes
 * and add .visible when they enter the viewport.
 * @param {Element} [root] - Container element (default: document)
 */
export function initScrollReveal(root = document) {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
  );

  root.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
    revealObserver.observe(el);
  });
}

/**
 * Add staggered reveal to children of a container.
 * @param {Element} container
 * @param {string}  childSelector
 * @param {number}  [delayStep] - ms between each child (default 100ms)
 */
export function staggerReveal(container, childSelector = '*', delayStep = 100) {
  const children = container.querySelectorAll(childSelector);
  children.forEach((child, i) => {
    child.classList.add('reveal');
    child.style.setProperty('--stagger-index', i);
    child.style.transitionDelay = `${i * delayStep}ms`;
  });
  initScrollReveal(container);
}

// ── Lazy Image Observer ───────────────────────────────────────────────────

let lazyObserver = null;

/**
 * Lazy-load images with data-src attribute.
 * @param {Element} [root]
 */
export function initLazyImages(root = document) {
  if (lazyObserver) lazyObserver.disconnect();

  lazyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.remove('lazy');
          }
          lazyObserver.unobserve(img);
        }
      });
    },
    { threshold: 0, rootMargin: '200px 0px' }
  );

  root.querySelectorAll('img[data-src]').forEach((img) => {
    lazyObserver.observe(img);
  });
}

// ── Counter Animation Observer ────────────────────────────────────────────

/**
 * Animate number counters when they enter the viewport.
 * Elements should have data-target attribute with the target number.
 * @param {Element} [root]
 */
export function initCounters(root = document) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  root.querySelectorAll('[data-counter]').forEach((el) => {
    counterObserver.observe(el);
  });
}

function animateCounter(el) {
  const target   = parseFloat(el.dataset.target || '0');
  const duration = parseInt(el.dataset.duration || '1500', 10);
  const suffix   = el.dataset.suffix || '';
  const prefix   = el.dataset.prefix || '';
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const start    = performance.now();
  const from     = 0;

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease     = easeOutExpo(progress);
    const value    = from + (target - from) * ease;
    el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

// ── Generic Callback Observer ─────────────────────────────────────────────

/**
 * Observe an element and call a callback when it enters/leaves the viewport.
 * @param {Element}  element
 * @param {Function} onEnter
 * @param {Function} [onLeave]
 * @param {Object}   [options]
 * @returns {Function} Cleanup function
 */
export function observeElement(element, onEnter, onLeave, options = {}) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onEnter?.(entry);
        } else {
          onLeave?.(entry);
        }
      });
    },
    { threshold: 0.1, ...options }
  );

  observer.observe(element);
  return () => observer.disconnect();
}
