 (function(angular) {
     'use strict';

     function controller(regManagePhotoModel, scope, window) {
         /* jshint validthis:true */
         var vm = this;
         vm.init = function() {
             window.scrollTo(0, 0);
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

     controller.$inject = ['regManagePhotoModel', '$scope', '$window'];
 })(angular);