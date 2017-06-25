(function () {
    var homeController = function ($scope, movieData) {

    function init () {
        movieData.getMovies()
            .then(function(response){
                $scope.movies = response.data;
                console.log(response);
            }, function(data, status, headers, config){
                $log.log(data.error + " " + status);
            });

        };

        init();

    };
  
    angular.module("movieApp")
        .controller("homeController", ["$scope", "movieData", homeController]);
})();
