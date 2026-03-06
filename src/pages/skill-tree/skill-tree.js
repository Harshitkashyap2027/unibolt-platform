/**
 * Skill Tree — Interactive DAG skill visualizer
 */

import { requireAuth, logout } from '../../js/core/auth-service.js';
import { getSkillTree, unlockSkill, startSkill } from '../../js/services/firestore-api.js';
import { toast } from '../../js/components/toast-notifications.js';
import { initScrollReveal } from '../../js/components/intersection-observer.js';

// ── Helpers ───────────────────────────────────────────────────

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ── Skills Data ───────────────────────────────────────────────

/**
 * Skill definitions laid out in a left-to-right DAG.
 * Columns: 0=80, 1=280, 2=480, 3=680, 4=880
 * Rows per category lane:
 *   Programming  → y: 100–220
 *   Data Science → y: 340–460
 *   Web Dev      → y: 560–680
 *   Soft Skills  → y: 800–880
 */
const SKILLS_DATA = [
  /* ── Programming ──────────────────────────────────────────── */
  {
    id: 'python',
    name: 'Python',
    category: 'programming',
    icon: '🐍',
    description: 'Master Python fundamentals: variables, loops, functions, OOP, and standard libraries.',
    prerequisites: [],
    x: 80,
    y: 100,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'programming',
    icon: '🟨',
    description: 'Core JavaScript: DOM manipulation, async/await, closures, and ES6+ syntax.',
    prerequisites: [],
    x: 80,
    y: 220,
  },
  {
    id: 'java',
    name: 'Java',
    category: 'programming',
    icon: '☕',
    description: 'Java fundamentals: OOP principles, Collections, Streams, and JVM internals.',
    prerequisites: [],
    x: 80,
    y: 340,
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'programming',
    icon: '⚙️',
    description: 'C++ essentials: pointers, memory management, STL, and competitive programming.',
    prerequisites: [],
    x: 80,
    y: 460,
  },

  /* ── Data Science ─────────────────────────────────────────── */
  {
    id: 'numpy',
    name: 'NumPy',
    category: 'data-science',
    icon: '🔢',
    description: 'Numerical computing with N-dimensional arrays, broadcasting, and linear algebra.',
    prerequisites: ['python'],
    x: 280,
    y: 100,
  },
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'data-science',
    icon: '🐼',
    description: 'Data manipulation and analysis with DataFrames, Series, groupby, and merging.',
    prerequisites: ['numpy'],
    x: 480,
    y: 100,
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'data-science',
    icon: '🔥',
    description: 'Deep learning with PyTorch: tensors, autograd, neural networks, and model training.',
    prerequisites: ['pandas'],
    x: 680,
    y: 100,
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    category: 'data-science',
    icon: '👁️',
    description: 'Image classification, object detection, and segmentation using CNNs and OpenCV.',
    prerequisites: ['pytorch'],
    x: 880,
    y: 60,
  },
  {
    id: 'nlp',
    name: 'NLP',
    category: 'data-science',
    icon: '💬',
    description: 'Natural Language Processing: tokenization, transformers, BERT, and text generation.',
    prerequisites: ['pytorch'],
    x: 880,
    y: 160,
  },

  /* ── Web Dev ──────────────────────────────────────────────── */
  {
    id: 'html-css',
    name: 'HTML/CSS',
    category: 'web-dev',
    icon: '🎨',
    description: 'Semantic HTML5, CSS3 layouts (Flexbox, Grid), responsive design, and accessibility.',
    prerequisites: [],
    x: 80,
    y: 580,
  },
  {
    id: 'react',
    name: 'React',
    category: 'web-dev',
    icon: '⚛️',
    description: 'Component-based UI with hooks, state management, and the React ecosystem.',
    prerequisites: ['html-css', 'javascript'],
    x: 480,
    y: 540,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'web-dev',
    icon: '▲',
    description: 'Full-stack React with SSR, SSG, API routes, and performance optimisations.',
    prerequisites: ['react'],
    x: 680,
    y: 540,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'web-dev',
    icon: '🟢',
    description: 'Server-side JavaScript with Express, REST APIs, middleware, and authentication.',
    prerequisites: ['javascript'],
    x: 280,
    y: 580,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'web-dev',
    icon: '🔷',
    description: 'Static typing for JavaScript: interfaces, generics, decorators, and type safety.',
    prerequisites: ['javascript'],
    x: 280,
    y: 460,
  },

  /* ── Soft Skills ──────────────────────────────────────────── */
  {
    id: 'communication',
    name: 'Communication',
    category: 'soft-skills',
    icon: '🗣️',
    description: 'Effective verbal and written communication in professional and technical contexts.',
    prerequisites: [],
    x: 80,
    y: 720,
  },
  {
    id: 'leadership',
    name: 'Leadership',
    category: 'soft-skills',
    icon: '👑',
    description: 'Team leadership, delegation, conflict resolution, and building team culture.',
    prerequisites: ['communication'],
    x: 280,
    y: 720,
  },
  {
    id: 'technical-writing',
    name: 'Tech Writing',
    category: 'soft-skills',
    icon: '✍️',
    description: 'Documentation, READMEs, technical blogs, and clear specification writing.',
    prerequisites: ['communication'],
    x: 280,
    y: 820,
  },
];

// ── State ─────────────────────────────────────────────────────

let currentUser = null;
let userSkillState = {};   // { skillId: 'locked' | 'available' | 'in-progress' | 'unlocked' }
let activeCategory = 'all';
let selectedSkillId = null;

// SVG pan/zoom state
const viewport = { x: 40, y: 40, scale: 1 };
let isDragging = false;
let dragStart = { x: 0, y: 0 };
let viewportAtDragStart = { x: 0, y: 0 };

// Node element map for quick lookup
const nodeElements = new Map();   // skillId → <g> element

// ── Init ──────────────────────────────────────────────────────

async function init() {
  currentUser = await requireAuth('/src/pages/auth/auth.html');
  if (!currentUser) return;

  setupLogout();
  renderUserAvatar();
  initScrollReveal();

  try {
    const skillTreeData = await getSkillTree(currentUser.uid);
    applySkillTreeData(skillTreeData);
  } catch {
    // Start with all locked; derive available from prerequisites
  }

  computeAvailability();
  renderSVG();
  updateStats();

  setupCategoryTabs();
  setupPanelClose();
  setupCanvasControls();
  setupPanZoom();
  hideLoading();
}

// ── Auth ──────────────────────────────────────────────────────

function setupLogout() {
  document.getElementById('logout-btn')?.addEventListener('click', async () => {
    try {
      await logout();
      window.location.href = '/src/pages/auth/auth.html';
    } catch {
      toast.error('Failed to log out. Please try again.');
    }
  });
}

function renderUserAvatar() {
  const avatarImg = document.getElementById('user-avatar');
  const avatarFallback = document.getElementById('avatar-fallback');
  const displayName = currentUser.displayName || currentUser.email || 'U';
  const initials = displayName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

  if (currentUser.photoURL && avatarImg) {
    avatarImg.src = currentUser.photoURL;
  }
  if (avatarFallback) avatarFallback.textContent = initials;
}

// ── Skill State ───────────────────────────────────────────────

function applySkillTreeData(data) {
  if (!data || !data.skills) return;
  Object.entries(data.skills).forEach(([id, state]) => {
    userSkillState[id] = state;
  });
}

function computeAvailability() {
  SKILLS_DATA.forEach((skill) => {
    if (userSkillState[skill.id] === 'unlocked' || userSkillState[skill.id] === 'in-progress') return;

    const allPrereqsMet = skill.prerequisites.every(
      (pid) => userSkillState[pid] === 'unlocked',
    );

    if (allPrereqsMet && !userSkillState[skill.id]) {
      userSkillState[skill.id] = 'available';
    } else if (!userSkillState[skill.id]) {
      userSkillState[skill.id] = 'locked';
    }
  });
}

function getSkillState(skillId) {
  return userSkillState[skillId] || 'locked';
}

// ── SVG Rendering ─────────────────────────────────────────────

const SVG_NS = 'http://www.w3.org/2000/svg';
const NODE_R = 30; // circle radius

function createSVGElement(tag, attrs = {}) {
  const el = document.createElementNS(SVG_NS, tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function renderSVG() {
  const container = document.getElementById('skill-tree-svg-container');

  // Remove old SVG if re-rendering
  const old = container.querySelector('svg');
  if (old) old.remove();
  nodeElements.clear();

  const W = 1080;
  const H = 920;

  const svg = createSVGElement('svg', {
    width: W,
    height: H,
    viewBox: `0 0 ${W} ${H}`,
    'aria-hidden': 'true',
    class: 'skill-tree-svg',
  });

  // Gradient defs
  const defs = createSVGElement('defs');
  defs.innerHTML = `
    <linearGradient id="edge-grad-unlocked" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22c55e" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.4"/>
    </linearGradient>
    <linearGradient id="edge-grad-available" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.3"/>
    </linearGradient>
    <filter id="glow-green">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="glow-blue">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  `;
  svg.appendChild(defs);

  // Apply viewport transform
  const rootG = createSVGElement('g', {
    id: 'svg-root',
    transform: `translate(${viewport.x},${viewport.y}) scale(${viewport.scale})`,
  });

  const edgesG = createSVGElement('g', { id: 'edges-layer' });
  const nodesG = createSVGElement('g', { id: 'nodes-layer' });

  // Build a lookup for skill positions
  const posMap = {};
  SKILLS_DATA.forEach((s) => { posMap[s.id] = { x: s.x, y: s.y }; });

  // ── Draw edges ──
  SKILLS_DATA.forEach((skill) => {
    skill.prerequisites.forEach((preId) => {
      const from = posMap[preId];
      const to   = posMap[skill.id];
      if (!from || !to) return;

      const fromState = getSkillState(preId);
      const toState   = getSkillState(skill.id);

      let edgeClass = 'skill-edge edge-locked';
      let stroke = 'rgba(107,114,128,0.25)';

      if (fromState === 'unlocked' && (toState === 'unlocked' || toState === 'in-progress')) {
        edgeClass = 'skill-edge edge-unlocked';
        stroke = 'url(#edge-grad-unlocked)';
      } else if (fromState === 'unlocked' && toState === 'available') {
        edgeClass = 'skill-edge edge-available';
        stroke = 'url(#edge-grad-available)';
      }

      // Curved path
      const mx = (from.x + to.x) / 2;
      const d  = `M ${from.x} ${from.y} C ${mx} ${from.y}, ${mx} ${to.y}, ${to.x} ${to.y}`;

      const path = createSVGElement('path', {
        d,
        class: edgeClass,
        stroke,
        'data-from': preId,
        'data-to': skill.id,
      });
      edgesG.appendChild(path);
    });
  });

  // ── Draw nodes ──
  SKILLS_DATA.forEach((skill) => {
    const state = getSkillState(skill.id);
    const g = createSVGElement('g', {
      class: `skill-node-group cat-${skill.category}`,
      'data-id': skill.id,
      role: 'button',
      tabindex: '0',
      'aria-label': `${skill.name}: ${state}`,
    });

    // Circle
    const circle = createSVGElement('circle', {
      cx: skill.x,
      cy: skill.y,
      r: NODE_R,
      class: `skill-node-circle state-${state}`,
      'data-id': skill.id,
    });

    // Emoji icon
    const icon = createSVGElement('text', {
      x: skill.x,
      y: skill.y,
      class: 'skill-node-icon',
    });
    icon.textContent = state === 'locked' ? '🔒' : skill.icon;

    // Label
    const label = createSVGElement('text', {
      x: skill.x,
      y: skill.y + NODE_R + 8,
      class: 'skill-node-label',
    });
    label.textContent = skill.name;

    g.appendChild(circle);
    g.appendChild(icon);
    g.appendChild(label);

    // Click / keyboard
    g.addEventListener('click', () => openNodePanel(skill.id));
    g.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openNodePanel(skill.id); }
    });

    nodesG.appendChild(g);
    nodeElements.set(skill.id, g);
  });

  rootG.appendChild(edgesG);
  rootG.appendChild(nodesG);
  svg.appendChild(rootG);
  container.appendChild(svg);

  applyFilter(activeCategory);
}

function applyViewportTransform() {
  const rootG = document.getElementById('svg-root');
  if (rootG) {
    rootG.setAttribute(
      'transform',
      `translate(${viewport.x},${viewport.y}) scale(${viewport.scale})`,
    );
  }
}

// ── Category Filter ───────────────────────────────────────────

function setupCategoryTabs() {
  const tabsContainer = document.getElementById('category-tabs');
  tabsContainer?.querySelectorAll('.filter-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.filter-tab').forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      activeCategory = tab.dataset.category;
      applyFilter(activeCategory);
    });
  });
}

function applyFilter(category) {
  const edgesLayer = document.getElementById('edges-layer');
  const nodesLayer = document.getElementById('nodes-layer');
  if (!nodesLayer || !edgesLayer) return;

  // Hide/show nodes
  nodesLayer.querySelectorAll('.skill-node-group').forEach((g) => {
    const cat = g.className.baseVal.match(/cat-([\w-]+)/)?.[1];
    const hide = category !== 'all' && cat !== category;
    g.style.opacity = hide ? '0.12' : '1';
    g.style.pointerEvents = hide ? 'none' : '';
  });

  // Hide/show edges: hide if either endpoint is in a filtered-out category
  edgesLayer.querySelectorAll('.skill-edge').forEach((path) => {
    const fromId = path.dataset.from;
    const toId   = path.dataset.to;
    const fromSkill = SKILLS_DATA.find((s) => s.id === fromId);
    const toSkill   = SKILLS_DATA.find((s) => s.id === toId);
    const hide = category !== 'all'
      && fromSkill?.category !== category
      && toSkill?.category !== category;
    path.style.opacity = hide ? '0.06' : '1';
  });
}

// ── Node Detail Panel ─────────────────────────────────────────

function openNodePanel(skillId) {
  const skill = SKILLS_DATA.find((s) => s.id === skillId);
  if (!skill) return;
  selectedSkillId = skillId;

  const state = getSkillState(skillId);

  document.getElementById('panel-skill-icon').textContent = state === 'locked' ? '🔒' : skill.icon;
  document.getElementById('panel-skill-name').textContent = skill.name;
  document.getElementById('panel-skill-category').textContent = skill.category.replace('-', ' ');
  document.getElementById('panel-description').textContent = skill.description;

  const statusBadge = document.getElementById('panel-status-badge');
  const statusText  = document.getElementById('panel-status-text');
  statusBadge.className = `panel-status-badge status-${state}`;
  statusText.textContent = {
    locked: 'Locked',
    available: 'Available',
    'in-progress': 'In Progress',
    unlocked: 'Unlocked',
  }[state] || state;

  // Prerequisites
  const prereqSection = document.getElementById('panel-prereqs-section');
  const prereqList    = document.getElementById('panel-prereqs-list');
  prereqList.innerHTML = '';
  if (skill.prerequisites.length > 0) {
    prereqSection.style.display = '';
    skill.prerequisites.forEach((pid) => {
      const preSkill = SKILLS_DATA.find((s) => s.id === pid);
      const met = getSkillState(pid) === 'unlocked';
      const li = document.createElement('li');
      li.className = `panel-prereq-item ${met ? 'prereq-met' : 'prereq-unmet'}`;
      li.innerHTML = `<span>${met ? '✅' : '🔒'}</span><span>${esc(preSkill?.name || pid)}</span>`;
      prereqList.appendChild(li);
    });
  } else {
    prereqSection.style.display = 'none';
  }

  // Buttons
  const unlockBtn    = document.getElementById('panel-unlock-btn');
  const startBtn     = document.getElementById('panel-start-btn');
  const completedBadge = document.getElementById('panel-completed-badge');

  unlockBtn.style.display    = 'none';
  startBtn.style.display     = 'none';
  completedBadge.style.display = 'none';

  if (state === 'available') {
    startBtn.style.display = '';
    startBtn.onclick = () => handleStartSkill(skillId);
  } else if (state === 'in-progress') {
    unlockBtn.style.display = '';
    unlockBtn.onclick = () => handleUnlockSkill(skillId);
  } else if (state === 'unlocked') {
    completedBadge.style.display = '';
  }

  const panel    = document.getElementById('node-detail-panel');
  const backdrop = document.getElementById('panel-backdrop');
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  backdrop.classList.add('visible');
}

function closeNodePanel() {
  const panel    = document.getElementById('node-detail-panel');
  const backdrop = document.getElementById('panel-backdrop');
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  backdrop.classList.remove('visible');
  selectedSkillId = null;
}

function setupPanelClose() {
  document.getElementById('panel-close-btn')?.addEventListener('click', closeNodePanel);
  document.getElementById('panel-backdrop')?.addEventListener('click', closeNodePanel);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNodePanel();
  });
}

// ── Skill Actions ─────────────────────────────────────────────

async function handleStartSkill(skillId) {
  const skill = SKILLS_DATA.find((s) => s.id === skillId);
  if (!skill) return;

  // Check prerequisites
  const allMet = skill.prerequisites.every((pid) => getSkillState(pid) === 'unlocked');
  if (!allMet) {
    toast.warning('Complete prerequisite skills first!');
    return;
  }

  try {
    await startSkill(currentUser.uid, skillId);
    userSkillState[skillId] = 'in-progress';
    toast.info(`Started learning ${skill.name}!`);
    refreshNode(skillId);
    updateStats();
    openNodePanel(skillId); // refresh panel
  } catch {
    toast.error('Failed to start skill. Please try again.');
  }
}

async function handleUnlockSkill(skillId) {
  const skill = SKILLS_DATA.find((s) => s.id === skillId);
  if (!skill) return;

  try {
    await unlockSkill(currentUser.uid, skillId);
    userSkillState[skillId] = 'unlocked';
    // Re-compute availability for dependents
    computeAvailability();
    toast.success(`🎉 ${skill.name} unlocked!`);
    celebrateNode(skillId);
    updateStats();
    openNodePanel(skillId); // refresh panel
    // Re-render edges to reflect new state
    renderEdges();
  } catch {
    toast.error('Failed to unlock skill. Please try again.');
  }
}

function refreshNode(skillId) {
  const g      = nodeElements.get(skillId);
  const skill  = SKILLS_DATA.find((s) => s.id === skillId);
  if (!g || !skill) return;

  const state  = getSkillState(skillId);
  const circle = g.querySelector('.skill-node-circle');
  const icon   = g.querySelector('.skill-node-icon');

  if (circle) {
    circle.setAttribute('class', `skill-node-circle state-${state}`);
  }
  if (icon) {
    icon.textContent = state === 'locked' ? '🔒' : skill.icon;
  }
  g.setAttribute('aria-label', `${skill.name}: ${state}`);
}

function refreshAllNodes() {
  SKILLS_DATA.forEach((s) => refreshNode(s.id));
}

function renderEdges() {
  const edgesG = document.getElementById('edges-layer');
  if (!edgesG) return;
  edgesG.innerHTML = '';

  const posMap = {};
  SKILLS_DATA.forEach((s) => { posMap[s.id] = { x: s.x, y: s.y }; });

  SKILLS_DATA.forEach((skill) => {
    skill.prerequisites.forEach((preId) => {
      const from = posMap[preId];
      const to   = posMap[skill.id];
      if (!from || !to) return;

      const fromState = getSkillState(preId);
      const toState   = getSkillState(skill.id);

      let edgeClass = 'skill-edge edge-locked';
      let stroke    = 'rgba(107,114,128,0.25)';

      if (fromState === 'unlocked' && (toState === 'unlocked' || toState === 'in-progress')) {
        edgeClass = 'skill-edge edge-unlocked';
        stroke = 'url(#edge-grad-unlocked)';
      } else if (fromState === 'unlocked' && toState === 'available') {
        edgeClass = 'skill-edge edge-available';
        stroke = 'url(#edge-grad-available)';
      }

      const mx = (from.x + to.x) / 2;
      const d  = `M ${from.x} ${from.y} C ${mx} ${from.y}, ${mx} ${to.y}, ${to.x} ${to.y}`;

      const path = createSVGElement('path', {
        d,
        class: edgeClass,
        stroke,
        'data-from': preId,
        'data-to': skill.id,
      });
      edgesG.appendChild(path);
    });
  });

  applyFilter(activeCategory);
}

function celebrateNode(skillId) {
  const g = nodeElements.get(skillId);
  if (!g) return;
  const circle = g.querySelector('.skill-node-circle');
  if (!circle) return;

  circle.classList.add('celebrating');
  circle.setAttribute('class', `skill-node-circle state-unlocked celebrating`);
  setTimeout(() => circle.classList.remove('celebrating'), 700);

  const icon = g.querySelector('.skill-node-icon');
  const skill = SKILLS_DATA.find((s) => s.id === skillId);
  if (icon && skill) icon.textContent = skill.icon;
}

// ── Stats ─────────────────────────────────────────────────────

function updateStats() {
  let unlocked = 0;
  let inProgress = 0;
  SKILLS_DATA.forEach((s) => {
    const st = getSkillState(s.id);
    if (st === 'unlocked') unlocked++;
    if (st === 'in-progress') inProgress++;
  });

  const totalEl     = document.getElementById('stat-total');
  const unlockedEl  = document.getElementById('stat-unlocked');
  const progressEl  = document.getElementById('stat-inprogress');

  if (totalEl)    totalEl.textContent    = SKILLS_DATA.length;
  if (unlockedEl) unlockedEl.textContent = unlocked;
  if (progressEl) progressEl.textContent = inProgress;
}

// ── Canvas Controls ───────────────────────────────────────────

function setupCanvasControls() {
  document.getElementById('zoom-in-btn')?.addEventListener('click', () => {
    viewport.scale = Math.min(3, viewport.scale + 0.2);
    applyViewportTransform();
  });

  document.getElementById('zoom-out-btn')?.addEventListener('click', () => {
    viewport.scale = Math.max(0.3, viewport.scale - 0.2);
    applyViewportTransform();
  });

  document.getElementById('reset-view-btn')?.addEventListener('click', () => {
    viewport.x     = 40;
    viewport.y     = 40;
    viewport.scale = 1;
    applyViewportTransform();
  });
}

// ── Pan & Zoom ────────────────────────────────────────────────

function setupPanZoom() {
  const container = document.getElementById('skill-tree-svg-container');
  if (!container) return;

  // Mouse drag
  container.addEventListener('mousedown', (e) => {
    if (e.target.closest('.skill-node-group')) return;
    isDragging = true;
    dragStart = { x: e.clientX, y: e.clientY };
    viewportAtDragStart = { x: viewport.x, y: viewport.y };
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    viewport.x = viewportAtDragStart.x + (e.clientX - dragStart.x);
    viewport.y = viewportAtDragStart.y + (e.clientY - dragStart.y);
    applyViewportTransform();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    if (container) container.style.cursor = '';
  });

  // Wheel zoom
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    viewport.scale = Math.min(3, Math.max(0.3, viewport.scale + delta));
    applyViewportTransform();
  }, { passive: false });

  // Touch pan
  let lastTouch = null;
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      lastTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      viewportAtDragStart = { x: viewport.x, y: viewport.y };
    }
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1 && lastTouch) {
      const dx = e.touches[0].clientX - lastTouch.x;
      const dy = e.touches[0].clientY - lastTouch.y;
      viewport.x = viewportAtDragStart.x + dx;
      viewport.y = viewportAtDragStart.y + dy;
      applyViewportTransform();
    }
  }, { passive: true });

  container.addEventListener('touchend', () => { lastTouch = null; });

  // Mobile sidebar toggle
  const toggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  toggle?.addEventListener('click', () => {
    sidebar?.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(sidebar?.classList.contains('open')));
  });
}

// ── Misc ──────────────────────────────────────────────────────

function hideLoading() {
  const el = document.getElementById('skill-tree-loading');
  if (el) el.style.display = 'none';
}

// ── Bootstrap ────────────────────────────────────────────────

init().catch((err) => {
  console.error('Skill Tree init failed:', err);
  toast.error('Failed to load skill tree. Please refresh.');
});
