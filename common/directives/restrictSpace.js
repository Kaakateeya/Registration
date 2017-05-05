(function() {
    'use strict';

    angular
        .module('KaakateeyaEmpReg')
        .directive('restrictField', directive);

    directive.$inject = ['$window'];

    function directive($window) {

        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                restrictField: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {
            var regex = /\s/g;
            scope.$watch('restrictField', function(newValue, oldValue) {
                if (newValue != oldValue && regex.test(newValue)) {
                    scope.restrictField = newValue.replace(regex, '');
                }
            });
        }
    }

})();