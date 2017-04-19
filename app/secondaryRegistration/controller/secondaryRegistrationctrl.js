 (function(angular) {
     'use strict';

     function controller(secondaryRegistrationModel, scope) {
         /* jshint validthis:true */
         var vm = this,
             model;
         vm.init = function() {
             model = {};
             vm.model = model = secondaryRegistrationModel;
             vm.model.scope = scope;
             scope.$on("$destroy", scope.destroy);
         };
         vm.init();
         scope.$destroy = function() {
             model.regsec = {};
             scope.secregForm.$setPristine();
             scope.secregForm.$setUntouched();
         };
     }
     angular
         .module('KaakateeyaEmpReg')
         .controller('secondaryRegistrationCtrl', controller);

     controller.$inject = ['secondaryRegistrationModel', '$scope'];
 })(angular);