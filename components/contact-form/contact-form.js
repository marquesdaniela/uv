(function () {
    'use strict';

    angular
        .module('app.contactFormDirective', [])
        .directive('contactForm', contactForm);

    function contactForm($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'components/contact-form/contact-form.html',
            link: function(scope, element, attrs) {
                scope.message = {};
                scope.submitContactForm = function () {
                    scope.message = {};

                    scope.form.$setUntouched();

                    $timeout(function() {
                        scope.form.$setPristine();
                    }, 3000);
                };
            }
        };
    }

})();


