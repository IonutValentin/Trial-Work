/* lazy loads elements with default selector as '.lozad' */

(function() {
  const lazyImageLoad = lozad();
  lazyImageLoad.observe();
  AOS.init();
})()