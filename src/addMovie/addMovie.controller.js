(function () {
    var addMovieController = function ($scope, $location, $log, movieData) {

        $scope.formData = {};
        $scope.years = [];
        var now = new Date();
        for (var i = 1900; i <= now.getFullYear(); i++) {
            $scope.years.push(i);
        }

        $scope.onSubmit = function($event) {
            $event.preventDefault();
            
            var movie = {};
            var data = $scope.formData;
            data.minutes = data.minutes || 0;
            data.hours = data.hours || 0;

            movie.length = data.minutes + (data.hours * 60);
            movie.releaseDt = new Date(data.year + "/01/01").toISOString();
            movie.name = data.name;
            movie.director = data.director;
            
            movieData.addMovie(movie)
                .then(function(resp) {
                    if (resp.status === 200) {
                        // everything good, redirect
                        $location.path("/");
                    } else {
                        // something bad, reload form?
                    }
                }, movieData.handleMovieDataError);
        }

    }
    angular.module("movieApp")
        .controller("addMovieController", ["$scope", "$location", "$log", "movieData", addMovieController]);
})();
