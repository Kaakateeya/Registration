 (function(angular) {
     'use strict';

     function controller(regManagePhotoModel, scope) {
         /* jshint validthis:true */
         var vm = this;
         vm.init = function() {
             vm.model = regManagePhotoModel;
             vm.model.scope = scope;
             $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
                 event.preventDefault();
                 event.stopPropagation();
                 $(this).parent().siblings().removeClass('open');
                 $(this).parent().toggleClass('open');
             });
         };
         vm.init();
     }
     angular
         .module('KaakateeyaEmpReg')
         .controller('regManagePhotoCtrl', controller);

     controller.$inject = ['regManagePhotoModel', '$scope'];
 })(angular);