/**
 * Created by dp0613 on 2/6/2015.
 */
var MusicCtrl = function($scope, music) {
    this.$scope = $scope;
    this.$scope.music = this;
    this._music = music;
    this.suerg = null;
};

MusicCtrl.prototype.getSuerg = function() {
    var suergId = 'Suerg';
    var self = this;

    this._music.getSpotifyUser(suergId, function(data) {
        self.suerg = data;
        debugger;
    });

};

angular.module('dbpiper').controller('MusicCtrl', ['$scope', 'music', MusicCtrl]);