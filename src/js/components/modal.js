/**
 * Reusable Modal Component
 */

/**
 * Create and show a modal.
 * @param {Object} options
 * @param {string} options.title
 * @param {string|Element} options.content
 * @param {Array}  [options.actions]   - [{label, type, onClick, close}]
 * @param {string} [options.size]      - 'sm'|'md'|'lg'|'xl'
 * @param {boolean}[options.closable]  - Show X button
 * @param {Function}[options.onClose]
 * @returns {{ close: Function, overlay: Element }}
 */
export function showModal({ title, content, actions = [], size = 'md', closable = true, onClose } = {}) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  const sizeMap = { sm: 'modal-sm', md: '', lg: 'modal-lg', xl: 'modal-xl' };
  const sizeClass = sizeMap[size] || '';

  overlay.innerHTML = `
    <div class="modal ${sizeClass}" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal-header">
        <h3 class="modal-title" id="modal-title">${escapeHtml(title || '')}</h3>
        ${closable ? `<button class="modal-close" aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button>` : ''}
      </div>
      <div class="modal-body"></div>
      ${actions.length ? `<div class="modal-footer"></div>` : ''}
    </div>
  `;

  // Set content
  const body = overlay.querySelector('.modal-body');
  if (typeof content === 'string') {
    body.innerHTML = content;
  } else if (content instanceof Element) {
    body.appendChild(content);
  }

  // Set actions
  if (actions.length) {
    const footer = overlay.querySelector('.modal-footer');
    actions.forEach(({ label, type = 'secondary', onClick, closeOnClick = true }) => {
      const btn = document.createElement('button');
      btn.className = `btn btn-${type}`;
      btn.textContent = label;
      btn.addEventListener('click', async () => {
        if (onClick) await onClick();
        if (closeOnClick) close();
      });
      footer.appendChild(btn);
    });
  }

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  // Animate in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => overlay.classList.add('open'));
  });

  const close = () => {
    overlay.classList.remove('open');
    onClose?.();
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, 300);
  };

  // Close handlers
  overlay.querySelector('.modal-close')?.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      close();
      document.removeEventListener('keydown', escHandler);
    }
  });

  return { close, overlay };
}

/**
 * Show a confirmation dialog.
 * @param {Object} options
 * @param {string} options.title
 * @param {string} options.message
 * @param {'warning'|'danger'|'success'} [options.variant]
 * @param {string} [options.confirmLabel]
 * @param {string} [options.cancelLabel]
 * @returns {Promise<boolean>}
 */
export function confirm({ title, message, variant = 'warning', confirmLabel = 'Confirm', cancelLabel = 'Cancel' } = {}) {
  return new Promise((resolve) => {
    const icons = {
      warning: '⚠️',
      danger:  '🗑️',
      success: '✅',
    };
    const content = `
      <div style="text-align:center;padding:8px">
        <div style="font-size:3rem;margin-bottom:16px">${icons[variant] || '⚠️'}</div>
        <p style="color:#a5b4fc;line-height:1.6">${escapeHtml(message || '')}</p>
      </div>`;

    const { close } = showModal({
      title,
      content,
      size: 'sm',
      actions: [
        {
          label: cancelLabel,
          type: 'secondary',
          onClick: () => resolve(false),
          closeOnClick: true,
        },
        {
          label: confirmLabel,
          type: variant === 'danger' ? 'danger' : 'primary',
          onClick: () => resolve(true),
          closeOnClick: true,
        },
      ],
      onClose: () => resolve(false),
    });
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
