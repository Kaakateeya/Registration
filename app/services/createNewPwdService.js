regApp.factory('cerateNewPwd', ['$http', function(http) {
    return {
        createNewPwdSub: function(custID, newpwd) {
            return http.get(regApp.apipath + 'StaticPages/getCreateNewPassword', { params: { intCusID: custID, strPassword: newpwd } });
        },
        getEmailAndProfileID: function(obj) {
            console.log(JSON.stringify({ VerificationCode: obj, i_EmilMobileVerification: 1, CustContactNumbersID: '' }));
            return http.get(regApp.apipath + 'StaticPages/getEmilVerificationCode', { params: { VerificationCode: obj, i_EmilMobileVerification: 1, CustContactNumbersID: '' } });

        }
    };
}]);