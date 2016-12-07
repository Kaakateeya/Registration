regApp.factory('emailVerificationService', ['$http', function(http) {
    return {
        verifyEmail: function(obj) {
            return http.get(regApp.apipath + 'StaticPages/getConfirmUserEmail', { params: { VerificationCode: obj } });
        }
    };
}]);