 (function(angular) {
     'use strict';

     function controller(basicRegistrationModel, scope) {

         var vm = this,
             model;

         vm.init = function() {
             model = {};
             vm.model = model = basicRegistrationModel;
             vm.model.scope = scope;
             model.reg.Chkfree_reg = true;
             scope.$on("$destroy", scope.destroy);
             // write destroy method 
         };
         scope.destroy = function() {
             model.casteArr = [];
             model.reg = {};
             model.reg.Chkprivacy = true;
             model.reg.Chkfree_reg = true;
             scope.regForm.$setPristine();
             scope.regForm.$setUntouched();
         };
         vm.init();
     }
     angular
         .module('KaakateeyaEmpReg')
         .controller('basicRegistrationCtrl', controller);

     controller.$inject = ['basicRegistrationModel', '$scope'];
 })(angular);