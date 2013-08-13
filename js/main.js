
(function(window, document) {
  var parallaxElement = document.querySelector('#parallax')
    , scrollInfo = document.querySelector('.scroll');

  var parallaxScroll = function(e) {
    // Uses CPU
    // parallaxElement.style.marginTop = (window.scrollY/2) + 'px'

    // Uses GPU
    parallaxElement.style.transform = 'translate3d(0px, ' + (window.scrollY/2) + 'px, 0px)'

    scrollInfo.innerHTML = 'Actual: ' + window.scrollY + '; Parallax: ' + (window.scrollY/2)
  }

  window.onscroll = parallaxScroll;

})(window, document);
