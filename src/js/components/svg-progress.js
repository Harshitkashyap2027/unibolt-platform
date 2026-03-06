/**
 * SVG Progress Component — Progress rings and line charts
 */

/**
 * Create an SVG progress ring.
 * @param {Object} options
 * @param {number} options.value       - Current value (0–max)
 * @param {number} [options.max]       - Maximum value (default 100)
 * @param {number} [options.size]      - SVG size in px (default 80)
 * @param {number} [options.stroke]    - Stroke width (default 6)
 * @param {string} [options.color]     - Stroke color
 * @param {string} [options.label]     - Label below number
 * @param {string} [options.trackColor]
 * @returns {SVGElement}
 */
export function createProgressRing({
  value = 0,
  max   = 100,
  size  = 80,
  stroke = 6,
  color  = '#6366f1',
  label  = '',
  trackColor = 'rgba(99,102,241,0.15)',
  animate = true,
} = {}) {
  const pct    = Math.min(1, Math.max(0, value / max));
  const r      = (size - stroke) / 2;
  const cx     = size / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - pct);

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.style.display = 'block';

  // Track circle
  const track = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  track.setAttribute('cx', cx);
  track.setAttribute('cy', cx);
  track.setAttribute('r', r);
  track.setAttribute('fill', 'none');
  track.setAttribute('stroke', trackColor);
  track.setAttribute('stroke-width', stroke);
  svg.appendChild(track);

  // Progress circle
  const progress = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  progress.setAttribute('cx', cx);
  progress.setAttribute('cy', cx);
  progress.setAttribute('r', r);
  progress.setAttribute('fill', 'none');
  progress.setAttribute('stroke', color);
  progress.setAttribute('stroke-width', stroke);
  progress.setAttribute('stroke-linecap', 'round');
  progress.setAttribute('stroke-dasharray', circumference);
  progress.setAttribute('stroke-dashoffset', animate ? circumference : offset);
  progress.setAttribute('transform', `rotate(-90 ${cx} ${cx})`);
  if (animate) {
    progress.style.transition = 'stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1)';
    requestAnimationFrame(() => {
      progress.setAttribute('stroke-dashoffset', offset);
    });
  }
  svg.appendChild(progress);

  // Center text
  const textGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  const valueText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  valueText.setAttribute('x', cx);
  valueText.setAttribute('y', label ? cx - 4 : cx + 6);
  valueText.setAttribute('text-anchor', 'middle');
  valueText.setAttribute('dominant-baseline', 'middle');
  valueText.setAttribute('fill', '#f0f0ff');
  valueText.setAttribute('font-size', size * 0.22);
  valueText.setAttribute('font-weight', '700');
  valueText.setAttribute('font-family', 'Inter, system-ui, sans-serif');
  valueText.textContent = Math.round(value);
  textGroup.appendChild(valueText);

  if (label) {
    const labelText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    labelText.setAttribute('x', cx);
    labelText.setAttribute('y', cx + size * 0.15);
    labelText.setAttribute('text-anchor', 'middle');
    labelText.setAttribute('fill', '#6b7280');
    labelText.setAttribute('font-size', size * 0.13);
    labelText.setAttribute('font-family', 'Inter, system-ui, sans-serif');
    labelText.textContent = label;
    textGroup.appendChild(labelText);
  }

  svg.appendChild(textGroup);
  return svg;
}

/**
 * Create an SVG line chart from data points.
 * @param {Object} options
 * @param {number[]} options.data       - Array of values
 * @param {string[]} [options.labels]   - X-axis labels
 * @param {number} [options.width]
 * @param {number} [options.height]
 * @param {string} [options.color]
 * @param {string} [options.label]      - Series label
 * @returns {SVGElement}
 */
export function createLineChart({
  data   = [],
  labels = [],
  width  = 400,
  height = 160,
  color  = '#6366f1',
  label  = '',
  fill   = true,
} = {}) {
  const padding = { top: 16, right: 16, bottom: 32, left: 40 };
  const chartW  = width  - padding.left - padding.right;
  const chartH  = height - padding.top  - padding.bottom;

  if (data.length < 2) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('width', '100%');
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', width / 2);
    text.setAttribute('y', height / 2);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', '#6b7280');
    text.setAttribute('font-size', '14');
    text.textContent = 'Not enough data';
    svg.appendChild(text);
    return svg;
  }

  const minVal = Math.min(...data);
  const maxVal = Math.max(...data);
  const range  = maxVal - minVal || 1;

  const points = data.map((v, i) => ({
    x: padding.left + (i / (data.length - 1)) * chartW,
    y: padding.top  + chartH - ((v - minVal) / range) * chartH,
    value: v,
  }));

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.setAttribute('width', '100%');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  const gradId = `line-fill-${Math.random().toString(36).slice(2)}`;

  // Gradient def
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
  grad.setAttribute('id', gradId);
  grad.setAttribute('x1', '0');
  grad.setAttribute('y1', '0');
  grad.setAttribute('x2', '0');
  grad.setAttribute('y2', '1');
  const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop1.setAttribute('offset', '0%');
  stop1.setAttribute('stop-color', color);
  stop1.setAttribute('stop-opacity', '0.3');
  const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop2.setAttribute('offset', '100%');
  stop2.setAttribute('stop-color', color);
  stop2.setAttribute('stop-opacity', '0');
  grad.appendChild(stop1);
  grad.appendChild(stop2);
  defs.appendChild(grad);
  svg.appendChild(defs);

  // Grid lines
  [0, 0.25, 0.5, 0.75, 1].forEach((fraction) => {
    const y = padding.top + chartH * (1 - fraction);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', padding.left);
    line.setAttribute('x2', padding.left + chartW);
    line.setAttribute('y1', y);
    line.setAttribute('y2', y);
    line.setAttribute('stroke', 'rgba(255,255,255,0.05)');
    line.setAttribute('stroke-width', '1');
    svg.appendChild(line);

    const valText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    valText.setAttribute('x', padding.left - 6);
    valText.setAttribute('y', y + 4);
    valText.setAttribute('text-anchor', 'end');
    valText.setAttribute('fill', '#6b7280');
    valText.setAttribute('font-size', '10');
    valText.textContent = Math.round(minVal + range * fraction);
    svg.appendChild(valText);
  });

  // X labels
  if (labels.length) {
    points.forEach((pt, i) => {
      if (labels[i]) {
        const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        t.setAttribute('x', pt.x);
        t.setAttribute('y', height - 6);
        t.setAttribute('text-anchor', 'middle');
        t.setAttribute('fill', '#6b7280');
        t.setAttribute('font-size', '10');
        t.textContent = labels[i];
        svg.appendChild(t);
      }
    });
  }

  // Fill area
  if (fill) {
    const areaPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const d = points.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`).join(' ') +
      ` L ${points[points.length - 1].x} ${padding.top + chartH} L ${points[0].x} ${padding.top + chartH} Z`;
    areaPath.setAttribute('d', d);
    areaPath.setAttribute('fill', `url(#${gradId})`);
    svg.appendChild(areaPath);
  }

  // Line path
  const linePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const d = points.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`).join(' ');
  linePath.setAttribute('d', d);
  linePath.setAttribute('fill', 'none');
  linePath.setAttribute('stroke', color);
  linePath.setAttribute('stroke-width', '2');
  linePath.setAttribute('stroke-linecap', 'round');
  linePath.setAttribute('stroke-linejoin', 'round');
  svg.appendChild(linePath);

  // Data points
  points.forEach((pt) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', pt.x);
    circle.setAttribute('cy', pt.y);
    circle.setAttribute('r', '3');
    circle.setAttribute('fill', color);
    circle.setAttribute('stroke', '#0a0a1a');
    circle.setAttribute('stroke-width', '2');
    svg.appendChild(circle);
  });

  return svg;
}
