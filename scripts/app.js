'use strict';

angular.module('mobileAngularUiTestApp', [
  'ngRoute',
  'mobile-angular-ui'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
