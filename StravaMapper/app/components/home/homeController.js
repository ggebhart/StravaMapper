app.controller('homeController', function ($scope, $http) {
    $scope.navigationCommands = [
        { name: "View Sample Data", src: "/athlete/5755658" },
        { name: "Log into Strava", src: "/login" }
    ];
});  // app.controller