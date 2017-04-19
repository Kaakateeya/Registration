 (function(angular) {
     'use strict';

     function controller(secondaryRegistrationModel, scope) {
         /* jshint validthis:true */
         var vm = this;
         scope.$destroy = function() {
             model.regsec = {};
             scope.secregForm.$setPristine();
             scope.secregForm.$setUntouched();
         };
         vm.init = function() {
             vm.model = secondaryRegistrationModel;
             vm.model.scope = scope;
             scope.$on("$destroy", scope.destroy);
         };
         vm.init();
     }
     angular
         .module('KaakateeyaEmpReg')
         .controller('secondaryRegistrationCtrl', controller);

     controller.$inject = ['secondaryRegistrationModel', '$scope'];
 })(angular);