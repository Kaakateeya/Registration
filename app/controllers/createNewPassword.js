regApp.controller('createNewPwdCtrl', ['$scope', 'cerateNewPwd', '$stateParams', 'authSvc', 'route', function(scope, cerateNewPwd, stateParams, authSvc, route) {
    scope.custID = '0';
    scope.Email = '';
    scope.profileID = '';

    cerateNewPwd.getEmailAndProfileID(stateParams.eid).then(function(res) {
        var custData = (res.data).split(';');
        console.log(custData);
        scope.Email = custData[0];
        scope.profileID = custData[1];
        scope.custID = custData[2];
    });

    scope.CerateNewPwdSubmit = function(obj) {
        cerateNewPwd.createNewPwdSub(scope.custID, obj.txtPassword).then(function(res) {
            console.log(res);
            authSvc.login(scope.profileID, obj.txtPassword).then(function(response) {
                authSvc.user(response.response !== null ? response.response[0] : null);
                sessionStorage.removeItem("LoginPhotoIsActive");
                if (response.response[0].isemailverified === true && response.response[0].isnumberverifed === true) {
                    // window.location = "home";
                    route.go('dashboard', { type: 'C' });

                } else {
                    // window.location = "mobileverf";
                    route.go('mobileverf', {});
                }

            });
        });
    };
}]);