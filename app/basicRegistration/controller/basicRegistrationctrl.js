 (function(angular) {
     'use strict';

     function controller(basicRegistrationModel, scope) {

         var vm = this,
             model;
         scope.$destroy = function() {
             model.reg = {};
             model.reg.Chkprivacy = true;
             scope.regForm.$setPristine();
             scope.regForm.$setUntouched();
         };
         vm.init = function() {
             model = {};
             vm.model = model = basicRegistrationModel;
             vm.model.scope = scope;
             model.reg.Chkfree_reg = false;
             scope.$on("$destroy", scope.destroy);
             // write destroy method 
         };
         vm.init();
     }
     angular
         .module('KaakateeyaEmpReg')
         .controller('basicRegistrationCtrl', controller);

     controller.$inject = ['basicRegistrationModel', '$scope'];
 })(angular);