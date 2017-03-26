 (function(angular) {
     'use strict';

     function controller(secondaryRegistrationModel, scope) {
         /* jshint validthis:true */
         var vm = this;
         vm.init = function() {
             vm.model = secondaryRegistrationModel;
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
         .controller('secondaryRegistrationCtrl', controller);

     controller.$inject = ['secondaryRegistrationModel', '$scope'];
 })(angular);