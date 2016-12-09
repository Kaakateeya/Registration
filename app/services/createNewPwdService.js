regApp.factory('cerateNewPwd', ['$http', function(http) {
    return {
        createNewPwdSub: function(custID, newpwd) {
            return http.get(regApp.apipath + 'StaticPages/getCreateNewPassword', { params: { intCusID: custID, strPassword: newpwd } });
        },
        getEmailAndProfileID: function(obj) {
            return http.get(regApp.apipath + 'StaticPages/getEmilVerificationCode', { params: { VerificationCode: obj, i_EmilMobileVerification: 1, CustContactNumbersID: '' } });
        }
    };
}]);