﻿app.controller('athleteActivitiesController', ['$scope', '$http', 'athleteService', function ($scope, $http, athleteService) {
    // Initialization Block
    $scope.athleteActivities = null;

    // Get a listing of the athlete's activities to display on a list
    athleteService.loadAthleteActivities(0)
        .then(function (data) {
            var activities = angular.fromJson(data);
            $scope.athleteActivities = activities;
            $scope.message = "success";
            $scope.$apply();

            $("a:contains('Walt')").click(function () {
                populateMap($(this).attr('id'));
            })

        }, function (error) {
            $scope.message = "Error: " + error;
            console.log("Error: " + error);
        });

    // Build up the data structures needed to draw a course map
    function populateMap(activityId) {
        athleteService.loadActivityStream(activityId)
            .then(function (data) {
                var stream = angular.fromJson(data);
                var coordinates = new Array();

                angular.forEach(stream[0].data, function (value, key) {
                    var coor = {
                        lat: value[0],
                        lng: value[1]
                    }
                    coordinates.push(coor);
                });

                $scope.activityStream = stream;
                $scope.coordinates = coordinates;
                $scope.message = "success";
                $scope.$apply(); // Needed to refresh the data on the screen after the async call returns
                drawMap();
            }, function (error) {
                $scope.message = "Error: " + error;
                console.log("Error: " + error);
            });
    }

    // Draws a Google map with the start and finish markers and draws to course taken
    function drawMap() {

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 28.38, lng: -81.54 },
            scrollwheel: true,
            zoom: 14
        });

        // Create a marker and set its position.
        var startMarker = new google.maps.Marker({
            map: map,
            position: $scope.coordinates[0],
            title: 'Start',
            animation: google.maps.Animation.DROP
        });

        // Create a marker and set its position.
        var finishMarker = new google.maps.Marker({
            map: map,
            position: $scope.coordinates[$scope.coordinates.length - 1],
            title: 'Finish',
            animation: google.maps.Animation.DROP
        });

        var flightPath = new google.maps.Polyline({
            path: $scope.coordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        flightPath.setMap(map);
    }

}]);

// Makes the athlete profile reusable in an easier way
app.directive('athleteActivities', function () {
    return {
        templateUrl: 'app/shared/athleteActivities/athleteActivities.html',
        controller: 'athleteActivitiesController'
    };
});