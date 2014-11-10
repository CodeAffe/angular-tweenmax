tweenmaxApp.service('Scroller', function(TweenMax) {

  this.scrollTo = function(duration, options) {
    if (navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)) {
      window.scrollTo(x, y);
    } else if (navigator.userAgent.match(/Firefox/i) || navigator.userAgent.match(/MSIE/i)) {
      TweenMax.to(document.documentElement, duration, options);
    } else {
      TweenMax.to(document.body, duration, options);
    }
  };

});