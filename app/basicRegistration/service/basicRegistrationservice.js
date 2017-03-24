(function(angular) {
    'use strict';

    function factory(http) {
        return {
            submitBasicRegistration: function(obj) {
                console.log(obj);
                // return http.post(regapp.apipath + 'Registration/RegisterCustomerHomepages', JSON.stringify(obj));
                return http.post(regapp.apipath + 'Registration/EmployeeRegisterCustomerHomepages', JSON.stringify(obj));
            },
            emailExists: function(obj) {
                return http.get(regapp.apipath + 'StaticPages/getEmailMobilenumberexists', { params: obj });
            }
        };
    }

    angular
        .module('KaakateeyaEmpReg')
        .factory('basicRegistrationService', factory);

    factory.$inject = ['$http'];
})(angular);