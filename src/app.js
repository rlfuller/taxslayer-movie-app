(function () {

  var app = angular.module("movieApp", ["ngRoute", "ngSanitize"]);

  function config ($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    controller: "homeController",
    templateUrl: "home/home.view.html"
  })
  .when("/add-movie", {
    controller: "addMovieController",
    templateUrl: "addMovie/addMovie.view.html"  
  })
  .when("/edit-movie/:id", {
      controller: "editMovieController",
      templateUrl: "addMovie/addMovie.view.html"
  })
  .otherwise({redirectTo: "/"});
    $locationProvider.html5Mode(true).hashPrefix("");
  };

  app.config(["$routeProvider", "$locationProvider", config]);

})();