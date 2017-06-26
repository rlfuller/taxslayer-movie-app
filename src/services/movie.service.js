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

        var editMovie = function(data) {
            return $http.put(apiBase + "/movie/" + data._id + ".json", data);
        }

        var handleMovieDataError = function(data, status, headers, config) {
            $log.log(data.error + " " + status);
        }

        var savedMovieData = {};
        function set(movie){
            savedMovieData = movie;
            console.log("reache");
        };

        function get(){
            console.log("here");
            console.log("savedMovieData", savedMovieData);
            return savedMovieData;
        }

        return {
            getMovies: getMovies,
            deleteMovie: deleteMovie,
            addMovie: addMovie,
            handleMovieDataError: handleMovieDataError,
            editMovie: editMovie,
            set: set,
            get: get
        };

    };

    angular.module("movieApp").service("movieData", ["$http", movieData]);

})();