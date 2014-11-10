var tweenmaxApp = angular.module('tweenmaxApp', []);
(function(TweenMax) {
  tweenmaxApp.factory('TweenMax', function($window) {
    delete $window.TweenMax;

    return TweenMax;
  });
})(TweenMax);