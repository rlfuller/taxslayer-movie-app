(function () {
    var homeController = function ($scope, $log, movieData) {

    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.movies = [];

    function handleMovieDataError(data, status, headers, config) {
        $log.log(data.error + " " + status);
    }

    function moviesToList(movies) {
        if (!movies) {
            return [];
        } else {
            var arr = [];
            for (var key in movies) {
                var value = movies[key];
                value._id = key;
                arr.push(value);
            }
            return arr;
        }
    }

    function init () {
        movieData.getMovies()
            .then(function(response){
                $scope.movies = moviesToList(response.data);
                console.log(response);
            }, handleMovieDataError);
        };

        init();

        $scope.doSort = function(propName){
            $scope.sortBy=propName;
            $scope.reverse=!$scope.reverse;
        };

        $scope.deleteMovie = function(movie){
            console.log(movie);
            movieData.deleteMovie(movie._id)
                .then(function(resp) {
                    if (resp.status === 200) {
                        $scope.movies.splice($scope.movies.indexOf(movie), 1);
                    } else {
                        // unable to delete movie
                    }
                }, handleMovieDataError);
        }

    };
  
    angular.module("movieApp")
        .controller("homeController", ["$scope", "$log", "movieData", homeController]);
})();
