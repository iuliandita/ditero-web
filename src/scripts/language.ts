export function initLanguage(): void {
  const menu = document.querySelector<HTMLDetailsElement>('[data-lang-menu]');
  if (!menu) return;
  const close = (): void => { menu.open = false; };
  document.addEventListener('click', event => { if (menu.open && !menu.contains(event.target as Node)) close(); });
  menu.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !menu.open) return;
    close();
    menu.querySelector<HTMLElement>('summary')?.focus();
  });
  menu.addEventListener('focusout', event => {
    const next = event.relatedTarget as Node | null;
    if (next && !menu.contains(next)) close();
  });
}
