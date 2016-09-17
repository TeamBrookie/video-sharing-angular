'use strict';

/**
 * @ngdoc function
 * @name oneDoesSimplyWatchApp.controller:VideoCtrl
 * @description
 * # VideoCtrl
 * Controller of the oneDoesSimplyWatchApp
 */
angular.module('oneDoesSimplyWatchApp')
  .controller('VideoCtrl',['$scope', function ($scope) {
    $scope.play = false;
$scope.duration = 0;
    $scope.remainingTime = 0;
    $scope.currentTime = 0;
    /*this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
    var myPlayer = videojs('my-video');


    $scope.updateTime = function(){
      $scope.remainingTime = myPlayer.remainingTime();
      $scope.currentTime = myPlayer.currentTime();
      $scope.duration = myPlayer.duration();
    }

    $scope.togglePlayPause = function(){
      if ($scope.play) {
        //console.log("pause");
        myPlayer.pause();
        $scope.updateTime();
        $scope.play = false;
      }
      else {
        //console.log("play");
        myPlayer.play();
        $scope.updateTime();
        $scope.play = true;
      }
    }

  }]);
