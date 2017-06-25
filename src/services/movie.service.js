(function () {
    var movieData = function ($http) {
        var apiBase = "https://moviedb-9c6cb.firebaseio.com";
        var getMovies = function(){
            return $http.get(apiBase + "/movie.json");
        };
        var deleteMovie = function(id) {
            return $http.delete(apiBase + "/movie/" + id + ".json");
        };

        return {
            getMovies: getMovies,
            deleteMovie: deleteMovie
        };

    };

    angular.module("movieApp").service("movieData", ["$http", movieData]);

})();