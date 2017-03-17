 (function(angular) {
     'use strict';

     function controller(regManagePhotoModel, scope) {
         /* jshint validthis:true */
         var vm = this;
         vm.init = function() {
             vm.model = regManagePhotoModel;
             vm.model.scope = scope;
         };
         vm.init();
     }
     angular
         .module('KaakateeyaEmpReg')
         .controller('regManagePhotoCtrl', controller);

     controller.$inject = ['regManagePhotoModel', '$scope'];
 })(angular);