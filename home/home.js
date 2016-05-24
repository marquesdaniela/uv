(function () {
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home/home.html'
            });
    }

    angular
        .module('app.home', ['ngRoute'])
        .config(config);

})();