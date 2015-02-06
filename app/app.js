'use strict';

// Declare app level module which depends on views, and components
angular.module('dbpiper', [
  'ngRoute'
]).config(['$routeProvider', '$logProvider', function($routeProvider, $logProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.template.html',
        controller: 'HomeCtrl'
    });
    $routeProvider.when('/music', {
        templateUrl: 'templates/music.template.html',
        controller: 'MusicCtrl'
    });
    $logProvider.debugEnabled(true);
}]);
