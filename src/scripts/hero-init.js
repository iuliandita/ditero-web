(() => {
  const capture = document.currentScript.parentElement;
  const picture = capture.querySelector('picture');
  const image = picture.querySelector('img');
  const source = picture.querySelector('source');
  const system = matchMedia('(prefers-color-scheme: dark)');
  const update = () => {
    const saved = document.documentElement.dataset.theme;
    const dark = saved === 'dark' || (!saved && system.matches);
    const desktopSrc = dark ? capture.dataset.darkDesktop : capture.dataset.lightDesktop;
    const desktopSrcset = dark ? capture.dataset.darkDesktopSrcset : capture.dataset.lightDesktopSrcset;
    const mobileSrc = dark ? capture.dataset.darkMobile : capture.dataset.lightMobile;
    if (source.getAttribute('srcset') !== mobileSrc) source.srcset = mobileSrc;
    if (image.getAttribute('srcset') !== desktopSrcset) image.srcset = desktopSrcset;
    if (image.getAttribute('src') !== desktopSrc) image.src = desktopSrc;
  };
  update();
  picture.hidden = false;
  system.addEventListener('change', update);
  document.addEventListener('ditero-theme-change', update);
})();
