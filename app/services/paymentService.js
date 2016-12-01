regApp.factory('myAppFactory', ["$http", function(http) {
    return {
        getData: function() {
            return http({
                method: 'GET',
                url: 'http://angular-data-grid.github.io/demo/data.json'
            });
        },
        getpayment: function(custid) {

            return http.get(regApp.apipath + 'Payment/GetPaymentDetails', { params: { CustID: custid } });
        }
    };
}]);