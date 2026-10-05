export function initTheme(): void {
  const button = document.querySelector<HTMLButtonElement>('#theme-toggle');
  if (!button) return;
  const system = matchMedia('(prefers-color-scheme: dark)');
  const isDark = (): boolean => {
    const theme = document.documentElement.dataset.theme;
    return theme === 'dark' || (!theme && system.matches);
  };
  const render = (): void => button.setAttribute('aria-pressed', String(isDark()));
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
