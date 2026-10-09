(() => {
  const saved = document.documentElement.dataset.theme;
  const dark = saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme: dark)').matches);
  const size = matchMedia('(max-width: 700px)').matches ? 'mobile' : 'desktop';
  const preload = document.createElement('link');
  preload.rel = 'preload';
  preload.as = 'image';
  preload.href = `/images/list-${size}-${dark ? 'dark' : 'light'}.webp`;
  if (size === 'desktop') preload.imageSrcset = `${preload.href} 1x, /images/list-desktop-${dark ? 'dark' : 'light'}-2x.webp 2x`;
  preload.fetchPriority = 'high';
  document.head.append(preload);
})();
