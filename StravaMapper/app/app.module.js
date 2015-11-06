var app = angular.module('stravaMapper', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/components/home/homeView.html",
                controller: "homeController"
            })
            .when("/athlete/:id", {
                templateUrl: "app/components/athleteDashboard/athleteDashboardView.html",
                controller: "athleteDashboardController"
            })
            .when("/login", {
                templateUrl: "app/components/login/loginView.html",
                controller: "loginController"
            })
            .otherwise({
                redirectTo: "/"
            })

        // Used in combination with the <base href="/"> meta to preety format the browser URL and remove the #
        $locationProvider.html5Mode(true);
});