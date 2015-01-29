'use strict';

// Declare app level module which depends on views, and components
angular.module('dbpiper', [
  'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.template.html',
        controller: 'HomeCtrl'
    })
}]);
