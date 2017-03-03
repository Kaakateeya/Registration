regApp.controller('confirmEmailCtrl', ['$scope', 'emailVerificationService', '$stateParams', 'route', function(scope, emailVerificationService, stateParams, route) {

    var verificationCode = stateParams.vid;

    emailVerificationService.verifyEmail(verificationCode).then(function(res) {
        console.log(res);
        if (res.data !== '0' && res.data !== 0) {
            // window.location = "registration/CreatePwd/" + verificationCode;
            route.go('registration.CreatePwd', { eid: verificationCode });


        } else {

        }
    });

}]);