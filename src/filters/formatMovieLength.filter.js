(function (){
  function formatMovieLength (){
    return function(length){
        var movieLength, time, hours, minutes;

        
        time = parseInt(length);
        hours = Math.floor(time/60);
        minutes = time % 60;
        movieLength = hours + "h " + minutes + "m";
        
        return movieLength;
      };
  };


  angular.module("movieApp").filter("formatMovieLength", formatMovieLength);
})();