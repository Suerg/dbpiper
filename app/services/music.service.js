/**
 * Created by dp0613 on 2/6/2015.
 */
var MusicService = function($http) {
    this.$http = $http;
};

MusicService.prototype.getSpotifyUser = function(userId, successCallback, errorCallback) {
    var baseUrl = 'https://api.spotify.com/v1/users/';
    var userUrl = baseUrl + userId;
    this.$http.get(userUrl).success(successCallback).error(errorCallback);
};

angular.module('dbpiper').service('music', ['$http', MusicService]);