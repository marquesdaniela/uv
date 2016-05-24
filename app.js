
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/home'
            })
            .otherwise({
                redirectTo: '/404' // redirect to 404 page not found.
            });
    }

    angular
        .module('app', [
            'ngRoute',
            'app.404',
            'app.home',
            'app.contact',
            'app.navbarDirective',
            'app.jumbotronDirective',
            'app.footerDirective',
            'app.contactFormDirective',
            'app.newsletterFormDirective'
        ])
        .config(config);

