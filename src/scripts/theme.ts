export function initTheme(): void {
  const button = document.querySelector<HTMLButtonElement>('#theme-toggle');
  if (!button) return;
  const system = matchMedia('(prefers-color-scheme: dark)');
  const isDark = (): boolean => document.documentElement.dataset.theme === 'dark' || (!document.documentElement.dataset.theme && system.matches);
  const render = (): void => {
    const label = isDark() ? button.dataset.lightLabel : button.dataset.darkLabel;
    button.setAttribute('aria-label', label ?? 'Change theme');
    button.title = label ?? 'Change theme';
    const text = button.querySelector('[data-theme-label]');
    if (text) text.textContent = isDark() ? (document.documentElement.lang === 'de' ? 'Hell' : 'Light') : (document.documentElement.lang === 'de' ? 'Dunkel' : 'Dark');
  };
  render();
  button.hidden = false;
  system.addEventListener('change', render);
  button.addEventListener('click', () => {
    const theme = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    render();
    try { localStorage.setItem('ditero-theme', theme); } catch { /* The choice still applies to this page. */ }
  });
}
