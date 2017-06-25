(function (){
    function objectToArray (){
        return function(obj){
            if (!obj) {
                return;
            } else {
                var arr = [];
                for (var key in obj) {
                    var value = obj[key];
                    value._id = key;
                    arr.push(value);
                }
                return arr;
            }
        };
    };

    angular.module("movieApp").filter("objectToArray", objectToArray);
})();