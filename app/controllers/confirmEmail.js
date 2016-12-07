regApp.controller('confirmEmailCtrl', ['$scope', 'emailVerificationService', function(scope, emailVerificationService) {
    emailVerificationService.verifyEmail('010022CED05EF32F2C9808F42CE9D6906144AD1461FF12CC0996').then(function(res) {
        console.log(res);
        if (res.data !== '0' && res.data !== 0) {
            window.location = "#/registration/CreatePwd/010022CED05EF32F2C9808F42CE9D6906144AD1461FF12CC0996";
        } else {

        }
    });

}]);