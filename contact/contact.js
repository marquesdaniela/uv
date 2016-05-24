(function () {

    angular
        .module('app.contact', ['ngRoute'])
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/contact', {
                templateUrl: 'contact/contact.html'
            });
    }
    
})();