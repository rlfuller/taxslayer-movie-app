(function () {
    var movieData = function ($http) {
        var apiBase = "https://moviedb-9c6cb.firebaseio.com";
        var getMovies = function(){
            return $http.get(apiBase + "/movie.json");
        };
        var deleteMovie = function(id) {
            return $http.delete(apiBase + "/movie/" + id + ".json");
        };

        var addMovie = function(data) {
            return $http.post(apiBase + "/movie.json", data);
        }

        var editMovie = function(id, data) {
            return $http.put(apiBase + "/movie/" + id + ".json", data);
        }

        var getOneMovie = function(id) {
            return $http.get(apiBase + "/movie/" + id + ".json");
        }

        var handleMovieDataError = function(data, status, headers, config) {
            $log.log(data.error + " " + status);
        }


        return {
            getMovies: getMovies,
            getOneMovie: getOneMovie,
            deleteMovie: deleteMovie,
            addMovie: addMovie,
            handleMovieDataError: handleMovieDataError,
            editMovie: editMovie
            
        };

    };

    angular.module("movieApp").service("movieData", ["$http", movieData]);

})();