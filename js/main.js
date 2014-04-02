
(function() {
  var parallaxElement = document.querySelector('#parallax')
    , scrollInfo = document.querySelector('.scroll');

  function parallaxScroll(e) {
    var parallaxFactor = 0.9
      , parallaxScrollY = (window.scrollY * parallaxFactor);

    parallaxElement.style.webkitTransform = 'translate3d(0px, ' + parallaxScrollY + 'px, 0px)';
    scrollInfo.innerHTML = 'Actual: ' + window.scrollY + '; Parallax: ' + parallaxScrollY;
  }

  window.addEventListener('scroll', parallaxScroll);
})();
