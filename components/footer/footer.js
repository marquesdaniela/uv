(function () {
    'use strict';

    angular
        .module('app.footerDirective', [])
        .directive('footer', footerFactory);

    function footerFactory() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'components/footer/footer.html'
        };
    }

})();