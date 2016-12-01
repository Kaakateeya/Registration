regApp.directive('datePicker', function() {
    return {
        scope: {
            myDate: '=ngModel',
            strdisplay: '@',
            classval: '@'
        },
        template: '<md-input-container class="{{classval}}">' +
            '<label style="padding-left:61px">{{strdisplay}}</label><md-datepicker ng-model="myDate" md-min-date="minDate" md-max-date="maxDate">' +
            '</md-datepicker> </md-input-container>',
        link: function(scope) {

        }
    };
});