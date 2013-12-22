'use strict';

angular.module('yamaApp')
  .controller('EventsCtrl', function ($scope, $http) {
    $http.get('/api/events').success(function(events) {
      $scope.events = events;
    });

    $scope.eventList = [];
    $scope.newEvent = {};
    $scope.init = function(eventList) {
      $scope.eventList = eventList;
    };

    $scope.save = function(form) {
      $http.post('/api/events.json', { event: $scope.newEvent }).success(function(res) {
        for (var field in form) {
          if (form[field].$error) {
            form[field].$error.mongoose = null;
          }
        }

        if (res.error) {
          for (var error in res.error.errors) {
            form[error].$error.mongoose = res.error.errors[error].type;
          }
        } else if (res.eventList) {
          $scope.eventList = res.eventList;
          $scope.newEvent = {};
        }
      });
    };
  });
