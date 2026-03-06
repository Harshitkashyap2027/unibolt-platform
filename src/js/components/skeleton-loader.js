/**
 * Skeleton Loader — Programmatic skeleton screen generator
 */

/**
 * Generate skeleton HTML for common layouts.
 * @param {'card'|'stat'|'list'|'table'|'profile'|'chat'|'internship'} type
 * @param {number} [count] - Number of items (for list/table types)
 * @returns {string} HTML string
 */
export function skeletonHTML(type, count = 3) {
  switch (type) {
    case 'stat':
      return `
        <div class="skeleton-stat-card">
          <div class="skeleton skeleton-stat-number"></div>
          <div class="skeleton skeleton-stat-label"></div>
        </div>`;

    case 'card':
      return `
        <div class="skeleton-card">
          <div class="skeleton skeleton-heading"></div>
          <div class="skeleton skeleton-text skeleton-text--long"></div>
          <div class="skeleton skeleton-text skeleton-text--medium"></div>
          <div class="skeleton skeleton-text skeleton-text--short" style="margin-top:12px"></div>
        </div>`;

    case 'internship':
      return `
        <div class="skeleton-card">
          <div style="display:flex;gap:12px;align-items:center;margin-bottom:16px">
            <div class="skeleton skeleton-avatar skeleton-avatar-lg" style="border-radius:12px"></div>
            <div style="flex:1">
              <div class="skeleton skeleton-text-lg skeleton-text--medium" style="margin-bottom:8px"></div>
              <div class="skeleton skeleton-text skeleton-text--short"></div>
            </div>
          </div>
          <div class="skeleton skeleton-text skeleton-text--full"></div>
          <div class="skeleton skeleton-text skeleton-text--long"></div>
          <div style="display:flex;gap:8px;margin-top:12px">
            <div class="skeleton skeleton-badge"></div>
            <div class="skeleton skeleton-badge"></div>
            <div class="skeleton skeleton-badge"></div>
          </div>
        </div>`;

    case 'list':
      return Array.from({ length: count }, () => `
        <div class="skeleton-list-item">
          <div class="skeleton skeleton-avatar"></div>
          <div style="flex:1">
            <div class="skeleton skeleton-text skeleton-text--medium" style="margin-bottom:6px"></div>
            <div class="skeleton skeleton-text-sm skeleton-text--short"></div>
          </div>
          <div class="skeleton skeleton-badge"></div>
        </div>`).join('');

    case 'table':
      return Array.from({ length: count }, (_, i) => `
        <div class="skeleton-table-row" style="--stagger-index:${i}">
          <div class="skeleton skeleton-avatar skeleton-avatar-sm"></div>
          <div class="skeleton skeleton-text skeleton-text--medium" style="flex:1"></div>
          <div class="skeleton skeleton-text skeleton-text--short" style="width:60px"></div>
          <div class="skeleton skeleton-text skeleton-text--short" style="width:80px"></div>
          <div class="skeleton skeleton-badge"></div>
        </div>`).join('');

    case 'profile':
      return `
        <div class="skeleton-profile-header">
          <div class="skeleton skeleton-avatar skeleton-avatar-xl"></div>
          <div style="flex:1">
            <div class="skeleton skeleton-heading" style="width:200px;margin-bottom:8px"></div>
            <div class="skeleton skeleton-text skeleton-text--medium" style="margin-bottom:6px"></div>
            <div class="skeleton skeleton-badge"></div>
          </div>
        </div>
        <div class="skeleton skeleton-text skeleton-text--full"></div>
        <div class="skeleton skeleton-text skeleton-text--long"></div>
        <div class="skeleton skeleton-chart" style="margin-top:24px"></div>`;

    case 'chat':
      return `
        <div style="display:flex;flex-direction:column;gap:16px;padding:16px">
          <div style="display:flex;align-items:flex-end;gap:8px">
            <div class="skeleton skeleton-avatar skeleton-avatar-sm"></div>
            <div class="skeleton" style="height:48px;width:60%;border-radius:16px 16px 16px 4px"></div>
          </div>
          <div style="display:flex;align-items:flex-end;gap:8px;justify-content:flex-end">
            <div class="skeleton" style="height:36px;width:45%;border-radius:16px 16px 4px 16px"></div>
          </div>
          <div style="display:flex;align-items:flex-end;gap:8px">
            <div class="skeleton skeleton-avatar skeleton-avatar-sm"></div>
            <div class="skeleton" style="height:60px;width:70%;border-radius:16px 16px 16px 4px"></div>
          </div>
          <div style="display:flex;align-items:flex-end;gap:8px;justify-content:flex-end">
            <div class="skeleton" style="height:36px;width:50%;border-radius:16px 16px 4px 16px"></div>
          </div>
        </div>`;

    default:
      return `<div class="skeleton" style="height:100px;border-radius:12px"></div>`;
  }
}

/**
 * Replace an element's content with a skeleton, then restore it after the promise resolves.
 * @param {Element}        element   - Container element
 * @param {Promise}        loadPromise
 * @param {'card'|'list'|'table'|'stat'|'profile'|'chat'|'internship'} [type]
 * @param {number}         [count]
 * @returns {Promise<any>} Resolved value of loadPromise
 */
export async function withSkeleton(element, loadPromise, type = 'card', count = 3) {
  const original = element.innerHTML;
  element.innerHTML = skeletonHTML(type, count);
  try {
    const result = await loadPromise;
    return result;
  } finally {
    // Content is set by the caller after the promise resolves
  }
}

/**
 * Show a loading overlay on an element.
 * @param {Element} element
 * @returns {Function} Call to remove overlay
 */
export function showLoadingOverlay(element) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position:absolute;inset:0;background:rgba(10,10,26,0.7);
    display:flex;align-items:center;justify-content:center;
    z-index:10;border-radius:inherit;backdrop-filter:blur(4px);
  `;
  overlay.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:12px">
      <div style="width:32px;height:32px;border:3px solid rgba(99,102,241,0.3);border-top-color:#6366f1;border-radius:50%;animation:spin 0.8s linear infinite"></div>
      <span style="font-size:0.875rem;color:#a5b4fc">Loading...</span>
    </div>`;

  const prevPosition = element.style.position;
  if (!element.style.position || element.style.position === 'static') {
    element.style.position = 'relative';
  }
  element.appendChild(overlay);

  return () => {
    overlay.remove();
    element.style.position = prevPosition;
  };
}
