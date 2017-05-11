(function(angular) {
    'use strict';

    function factory(http) {
        return {
            submitSecodaryRegistration: function(obj) {
                return http.post(regapp.apipath + 'Registration/CustomerRegProfileDetails', JSON.stringify(obj));
            },
            emailExists: function(obj) {
                return http.get(regapp.apipath + 'StaticPages/getEmailMobilenumberexists', { params: obj });
            }
        };
    }

    angular
        .module('KaakateeyaEmpReg')
        .factory('secondaryRegistrationService', factory);

    factory.$inject = ['$http'];
})(angular);