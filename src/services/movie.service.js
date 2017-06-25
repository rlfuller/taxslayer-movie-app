(function () {
    var movieData = function ($http) {
        var getMovies = function(){
            return $http.get("https://moviedb-9c6cb.firebaseio.com/movie.json");
        };

        return {
            getMovies: getMovies
        };

    };

    angular.module("movieApp").service("movieData", ["$http", movieData]);

})();