(function () {
    'use strict';
    
    angular
        .module('app.404', ['ngRoute'])
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/404', {
                templateUrl: '404/404.html'
            });
    }

})();