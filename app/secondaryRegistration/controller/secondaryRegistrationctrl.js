 (function(angular) {
     'use strict';

     function controller(secondaryRegistrationModel, scope) {
         /* jshint validthis:true */
         var vm = this;
         vm.init = function() {
             vm.model = secondaryRegistrationModel;
             vm.model.scope = scope;
         };

         vm.init();
     }
     angular
         .module('KaakateeyaEmpReg')
         .controller('secondaryRegistrationCtrl', controller);

     controller.$inject = ['secondaryRegistrationModel', '$scope'];
 })(angular);