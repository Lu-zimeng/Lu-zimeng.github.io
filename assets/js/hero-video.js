/* Decorative Home video with a static-poster fallback and motion preference. */
(() => {
  'use strict';
  const video = document.querySelector('.hero-video');
  if (!video) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let visible = false, loaded = false;
  video.muted = true;
  video.defaultMuted = true;
  function sync() {
    if (reduced.matches || document.hidden || !visible) {
      video.pause();
      return;
    }
    if (!loaded) {
      video.querySelectorAll('source[data-src]').forEach(source => {
        source.src = source.dataset.src;
      });
      loaded = true;
      video.load();
    }
    // Browser power-saving policies may block autoplay; keep the poster usable.
    const play = video.play();
    if (play) play.catch(() => {});
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
    }).observe(video.closest('.hero'));
  } else { visible = true; sync(); }
  document.addEventListener('visibilitychange', sync);
  if (reduced.addEventListener) reduced.addEventListener('change', sync);
  else reduced.addListener(sync);
  addEventListener('pagehide', () => video.pause());
  addEventListener('pageshow', sync);
})();
