(function () {

  var app = angular.module("movieApp", ["ngRoute", "ngSanitize"]);

  function config ($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    controller: "homeController",
    templateUrl: "home/home.view.html"
  })
  .otherwise({redirectTo: "/"});
    $locationProvider.html5Mode(true).hashPrefix("");
  };

  app.config(["$routeProvider", "$locationProvider", config]);

})();