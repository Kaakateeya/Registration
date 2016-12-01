regApp.factory('SecondaryRegistrationService', ['$http', function(http) {
    return {
        submitSecodaryRegistration: function(obj) {
            return http.post(regApp.apipath + 'Registration/CustomerRegProfileDetails', JSON.stringify(obj));
        }
    };
}]);