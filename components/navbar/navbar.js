(function () {
    'use strict';

    angular
        .module('app.navbarDirective', [])
        .directive('navbar', navbarFactory);

    function navbarFactory($location) {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'components/navbar/navbar.html',
            scope: {},
            link: function (scope) {
                scope.selected = function () {
                    return $location.path().match(/\/([^\/]*)\/?/)[1];
                }
            }
        };
    }

})();


