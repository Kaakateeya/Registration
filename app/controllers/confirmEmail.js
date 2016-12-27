regApp.controller('confirmEmailCtrl', ['$scope', 'emailVerificationService', '$stateParams', function(scope, emailVerificationService, stateParams) {

    var verificationCode = stateParams.vid;

    emailVerificationService.verifyEmail(verificationCode).then(function(res) {
        console.log(res);
        if (res.data !== '0' && res.data !== 0) {
            window.location = "registration/CreatePwd/" + verificationCode;
        } else {

        }
    });

}]);