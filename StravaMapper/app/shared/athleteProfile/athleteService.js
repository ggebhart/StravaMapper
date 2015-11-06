// Load some information about the athlete
app.service('athleteService', ['$http', '$q', function ($http, $q) {
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

