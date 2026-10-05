(() => {
  try {
    const saved = localStorage.getItem('ditero-theme');
    if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
  } catch { /* The system theme remains available without storage. */ }
})();
