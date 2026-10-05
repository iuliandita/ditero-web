export function initCarousel(): void {
  const root = document.querySelector<HTMLElement>('[data-carousel]');
  if (!root) return;
  const track = root.querySelector<HTMLElement>('[data-track]');
  const panes = Array.from(root.querySelectorAll<HTMLElement>('[data-pane]'));
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-tab]'));
  const controls = Array.from(root.querySelectorAll<HTMLElement>('[data-controls]'));
  const status = root.querySelector<HTMLElement>('[data-status]');
  if (!track || !panes.length) return;
  const of = root.dataset.of ?? '/';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  // Above this width the stylesheet shows every group as a grid; the scroller exists only below it.
  const compact = matchMedia('(max-width: 800px)');
  let current = 0;

  track.setAttribute('role', 'group');
  track.setAttribute('aria-label', root.dataset.label ?? '');
  panes.forEach((pane, i) => {
    pane.setAttribute('role', 'group');
    pane.setAttribute('aria-label', `${pane.dataset.title ?? ''} (${i + 1} ${of} ${panes.length})`);
  });

  const behavior = (): ScrollBehavior => (reduced.matches ? 'auto' : 'smooth');
  // Scroll only the tab strip, so the page never jumps vertically and focus stays where it is.
  const revealTab = (): void => {
    const tab = tabs[current];
    const strip = tab?.parentElement;
    if (!tab || !strip) return;
    const t = tab.getBoundingClientRect();
    const s = strip.getBoundingClientRect();
    if (t.left >= s.left && t.right <= s.right) return;
    strip.scrollBy({ left: t.left + t.width / 2 - (s.left + s.width / 2), behavior: behavior() });
  };
  const render = (reveal: boolean): void => {
    tabs.forEach((tab, i) => { if (i === current) tab.setAttribute('aria-current', 'true'); else tab.removeAttribute('aria-current'); });
    if (reveal) revealTab();
  };
  // Announce only deliberate navigation so swiping does not chatter.
  const announce = (): void => {
    if (status) status.textContent = `${current + 1} ${of} ${panes.length}: ${panes[current].dataset.title ?? ''}`;
  };
  const go = (index: number): void => {
    if (!compact.matches) return;
    const target = Math.max(0, Math.min(panes.length - 1, index));
    const offset = panes[target].getBoundingClientRect().left - track.getBoundingClientRect().left;
    track.scrollTo({ left: track.scrollLeft + offset, behavior: behavior() });
    current = target;
    render(true);
    announce();
  };
  const sync = (): void => {
    if (!compact.matches) return;
    const box = track.getBoundingClientRect();
    const middle = box.left + box.width / 2;
    let best = 0;
    let distance = Infinity;
    panes.forEach((pane, i) => {
      const rect = pane.getBoundingClientRect();
      const d = Math.abs(rect.left + rect.width / 2 - middle);
      if (d < distance) { distance = d; best = i; }
    });
    if (best !== current) { current = best; render(true); }
  };
  const applyMode = (): void => {
    if (compact.matches) track.tabIndex = 0; else track.removeAttribute('tabindex');
    controls.forEach(el => { el.hidden = !compact.matches; });
  };

  let frame = 0;
  track.addEventListener('scroll', () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(sync); }, { passive: true });
  track.addEventListener('keydown', event => {
    if (!compact.matches || event.target !== track || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
    const rtl = getComputedStyle(track).direction === 'rtl';
    const steps: Record<string, number> = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 };
    if (event.key === 'Home' || event.key === 'End' || event.key in steps) {
      event.preventDefault();
      go(event.key === 'Home' ? 0 : event.key === 'End' ? panes.length - 1 : current + steps[event.key]);
    }
  });
  tabs.forEach((tab, i) => tab.addEventListener('click', () => go(i)));
  compact.addEventListener('change', applyMode);
  applyMode();
  render(false);
}
