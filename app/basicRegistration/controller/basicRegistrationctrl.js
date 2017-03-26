 (function(angular) {
     'use strict';

     function controller(basicRegistrationModel, scope) {
         /* jshint validthis:true */
         var vm = this,
             model;
         vm.init = function() {
             model = {};
             vm.model = model = basicRegistrationModel;
             vm.model.scope = scope;
             model.reg.Chkfree_reg = false;
             $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
                 event.preventDefault();
                 event.stopPropagation();
                 $(this).parent().siblings().removeClass('open');
                 $(this).parent().toggleClass('open');
             });
         };


         scope.$watch(function() {
             return model.reg.ddlcountry;
         }, function(current, original) {
             model.reg.ddllandcountry = model.reg.ddlmobilecountry = current;
         });


         vm.init();
     }
     angular
         .module('KaakateeyaEmpReg')
         .controller('basicRegistrationCtrl', controller);

     controller.$inject = ['basicRegistrationModel', '$scope'];
 })(angular);