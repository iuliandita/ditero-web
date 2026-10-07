(() => {
  const saved = document.documentElement.dataset.theme;
  const dark = saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme: dark)').matches);
  const size = matchMedia('(max-width: 700px)').matches ? 'mobile' : 'desktop';
  const preload = document.createElement('link');
  preload.rel = 'preload';
  preload.as = 'image';
  preload.href = `/images/list-${size}-${dark ? 'dark' : 'light'}.webp`;
  preload.fetchPriority = 'high';
  document.head.append(preload);
})();
