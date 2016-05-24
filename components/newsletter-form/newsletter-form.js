(function () {
    'use strict';

    angular
        .module('app.newsletterFormDirective', [])
        .directive('newsletterForm', newsletterForm);

    function newsletterForm($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'components/newsletter-form/newsletter-form.html',
            link: function(scope, element, attrs) {
                scope.subscriber = {};
                scope.submitNewsletterForm = function () {
                    scope.subscriber = {};
                    scope.newsLetterform.$setUntouched();
                    $timeout(function() {
                        scope.newsLetterform.$setPristine();
                    }, 3000);
                };
            }
        };
    }

})();