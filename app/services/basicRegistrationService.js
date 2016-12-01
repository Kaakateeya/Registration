regApp.factory('basicRegistrationService', ['$http', function(http) {
    return {
        submitBasicRegistration: function(obj) {
            return http.post(regApp.apipath + 'Registration/RegisterCustomerHomepages', JSON.stringify(obj));
        },
        emailExists: function(obj) {
            return http.get(regApp.apipath + 'StaticPages/getEmailMobilenumberexists', { params: obj });
        }
    };
}]);