(function () {
    var editMovieController = function ($scope, $routeParams, $location, $log, movieData) {

        var currentMovie = {};
        var id = $routeParams.id;

        movieData.getOneMovie(id)
            .then(function(resp){
                if(resp.status === 200){
                    //console.log(resp.data);
                    currentMovie = resp.data;
                    handleSavedMovieData(currentMovie);
                }
            }, movieData.handleMovieDataError);
        
        function handleSavedMovieData(savedMovie) {
            $scope.formData = {};
            $scope.formData.name = savedMovie.name;
            $scope.formData.director = savedMovie.director;
            $scope.formData.year = new Date(savedMovie.releaseDt).getFullYear();
            $scope.formData.hours = Math.floor(savedMovie.length / 60);
            $scope.formData.minutes = Math.floor(savedMovie.length % 60);
        }
        
        $scope.years = [];
        var now = new Date();
        for (var i = now.getFullYear(); i >= 1900; i--) {
            $scope.years.push(i);
        }

        $scope.onSubmit = function($event) {
            $event.preventDefault();
            
            var data = $scope.formData;
            data.minutes = data.minutes || 0;
            data.hours = data.hours || 0;

            currentMovie.length = data.minutes + (data.hours * 60);
            currentMovie.releaseDt = new Date(data.year + "/01/01").toISOString();
            currentMovie.name = data.name;
            currentMovie.director = data.director;
            
            movieData.editMovie(id, currentMovie)
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
        .controller("editMovieController", ["$scope", "$routeParams", "$location", "$log", "movieData", editMovieController]);
})();
