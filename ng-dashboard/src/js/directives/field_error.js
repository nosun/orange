angular.module('orange').directive("appFieldError", function () {
    return {
        restrict: 'E',
        scope: {
            error: '='
        },
        templateUrl: 'html/directives_templates/field_error.html'
    };
});
