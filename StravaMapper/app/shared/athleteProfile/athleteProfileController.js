app.controller('athleteProfileController', ['$scope', '$http', 'athleteService', function ($scope, $http, athleteService) {
    // Initialization Block
    $scope.showDetail = false;
    $scope.toggleText = "more";
    $scope.infoLevelText = "Summary";
    $scope.athlete = null;

    // Toggles between summary and detail information
    $scope.toggleDetail = function () {
        $scope.showDetail = !$scope.showDetail;
        $scope.toggleText = ($scope.showDetail ? "less" : "more");
        $scope.infoLevelText = ($scope.showDetail ? "Detail" : "Summary");
    }; // toggleDetail

    // Load an athlete by default
    // TODO:  Accept a route param to control which athlete loads
    athleteService.loadAthleteData(0)
        .then(function (data) {
            var athlete = angular.fromJson(data);
            athlete.fullName = function () {
                return $scope.athlete.firstname + " " + $scope.athlete.lastname;
            }
            athlete.address = function () {
                return $scope.athlete.city + ", " + $scope.athlete.state;
            }
            $scope.athlete = athlete;

            if ($scope.athlete.premium) {
                $("#athleteInfo").addClass("premium");
            }
            
            $scope.message = "success";
            $scope.$apply();
        }, function (error) {
            $scope.message = "Error: " + error;
            console.log("Error: " + error);
        })
}]);

// Makes the athlete profile reusable in an easier way
app.directive('athleteProfile', function () {
    return {
        templateUrl: 'app/shared/athleteProfile/athleteProfile.html',
        controller: 'athleteProfileController'
    };
});