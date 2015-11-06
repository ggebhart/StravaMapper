/*
Isolates off the service methods that are specific to athlete data to make them reusable across controllers as needed
TODO:  Make the API calls to Strava to get live data
*/

app.service('athleteService', ['$http', '$q', function ($http, $q) {
    // Load some information about the athlete
    this.loadAthleteData = function (athleteId) {
        return $http.get("/assets/json/athleteData.json")
            .then(function (response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    // invalid response
                    return $q.reject("Athlete data was not correctly formatted as an object.  " + response.data);
                }
            }, function (response) {
                // something went wrong
                return $q.reject(response.data);
            })
    }; // loadAthleteData

    // Find information about the athlete's friends
    this.loadAthleteFriends = function (athleteId) {
        return $http.get("/assets/json/athleteFriends.json")
            .then(function (response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    // invalid response
                    return $q.reject("Athlete data was not correctly formatted as an object.  " + response.data);
                }
            }, function (response) {
                // something went wrong
                return $q.reject(response.data);
            })
    }; // loadAthleteData

    // Find information about the athlete's followers
    this.loadAthleteFollowers = function (athleteId) {
        return $http.get("/assets/json/athleteFollowers.json")
            .then(function (response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    // invalid response
                    return $q.reject("Athlete data was not correctly formatted as an object.  " + response.data);
                }
            }, function (response) {
                // something went wrong
                return $q.reject(response.data);
            })
    }; // loadAthleteData

    // Find information about the athlete's activities
    this.loadAthleteActivities = function (athleteId) {
        return $http.get("/assets/json/athleteActivities.json")
            .then(function (response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    // invalid response
                    return $q.reject("Athlete data was not correctly formatted as an object.  " + response.data);
                }
            }, function (response) {
                // something went wrong
                return $q.reject(response.data);
            })
    };// loadAthleteData

    // Load the lat / lng and distance data about an activity
    this.loadActivityStream = function (activityId) {
        return $http.get("/assets/json/activity" + activityId + ".json")
            .then(function (response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    // invalid response
                    return $q.reject("Athlete data was not correctly formatted as an object.  " + response.data);
                }
            }, function (response) {
                // something went wrong
                return $q.reject(response.data);
            })
    };// loadAthleteData

}]);

