export function initCarousel(): void {
  const root = document.querySelector<HTMLElement>('[data-carousel]');
  if (!root) return;
  const track = root.querySelector<HTMLElement>('[data-track]');
  const panes = Array.from(root.querySelectorAll<HTMLElement>('[data-pane]'));
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-tab]'));
  const prev = root.querySelector<HTMLButtonElement>('[data-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-next]');
  const status = root.querySelector<HTMLElement>('[data-status]');
  if (!track || !panes.length || !prev || !next) return;
  const of = root.dataset.of ?? '/';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;

  const render = (): void => {
    tabs.forEach((tab, i) => { if (i === current) tab.setAttribute('aria-current', 'true'); else tab.removeAttribute('aria-current'); });
    prev.disabled = current === 0;
    next.disabled = current === panes.length - 1;
    if (status) status.textContent = `${current + 1} ${of} ${panes.length}: ${panes[current].dataset.title ?? ''}`;
  };
  const go = (index: number): void => {
    const target = Math.max(0, Math.min(panes.length - 1, index));
    panes[target].scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'nearest', inline: 'start' });
    current = target;
    render();
  };
  const sync = (): void => {
    const box = track.getBoundingClientRect();
    const middle = box.left + box.width / 2;
    let best = 0;
    let distance = Infinity;
    panes.forEach((pane, i) => {
      const rect = pane.getBoundingClientRect();
      const d = Math.abs(rect.left + rect.width / 2 - middle);
      if (d < distance) { distance = d; best = i; }
    });
    if (best !== current) { current = best; render(); }
  };

  let frame = 0;
  track.addEventListener('scroll', () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(sync); }, { passive: true });
  track.addEventListener('keydown', event => {
    if (event.target !== track || event.ctrlKey || event.metaKey || event.altKey) return;
    const rtl = getComputedStyle(track).direction === 'rtl';
    const steps: Record<string, number> = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 };
    if (event.key === 'Home' || event.key === 'End' || event.key in steps) {
      event.preventDefault();
      go(event.key === 'Home' ? 0 : event.key === 'End' ? panes.length - 1 : current + steps[event.key]);
    }
  });
  prev.addEventListener('click', () => go(current - 1));
  next.addEventListener('click', () => go(current + 1));
  tabs.forEach((tab, i) => tab.addEventListener('click', () => go(i)));
  root.querySelectorAll<HTMLElement>('[data-controls]').forEach(el => { el.hidden = false; });
  render();
}
