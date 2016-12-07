regApp.controller('createNewPwdCtrl', ['$scope', 'cerateNewPwd', '$stateParams', function(scope, cerateNewPwd, stateParams) {
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
        });
    };
}]);