regApp.factory('editmanagePhotoServices', ['$http', function(http) {
    return {
        getPhotoData: function(obj) {
            return http.get(regApp.apipath + 'CustomerPersonal/GetphotosofCustomer', { params: { Custid: obj, EmpID: 2 } });
        },
        submituploadData: function(obj1) {
            return http.post(regApp.apipath + 'CustomerPersonalUpdate/Savephotosofcustomer', JSON.stringify(obj1));
        },
        linqSubmits: function(Custid, iflag) {
            return http.get(regApp.apipath + 'CustomerPersonalUpdate/getPhotoPassword', { params: { CustID: Custid, ipassword: iflag } });
        }
    };
}]);