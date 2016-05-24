(function () {
    'use strict';

    angular
        .module('app.jumbotronDirective', [])
        .directive('jumbotron', jumbotronFactory);

    function jumbotronFactory() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'components/jumbotron/jumbotron.html'
        };
    }

})();