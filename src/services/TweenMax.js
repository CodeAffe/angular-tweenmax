(function(TweenMax) {
  tweenmaxApp.factory('TweenMax', function($window) {
    delete $window.TweenMax;

    return TweenMax;
  });
})(TweenMax);