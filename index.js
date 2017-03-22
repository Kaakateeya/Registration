/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */

var regapp = angular.module('KaakateeyaEmpReg', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'angular-loading-bar', 'ngAnimate', 'ngIdle', 'ngMaterial',
    'ngMessages', 'ngAria', 'ngPassword', 'jcs-autoValidate', 'angularPromiseButtons', 'oc.lazyLoad', 'ngMdIcons'
]);
regapp.apipath = 'http://183.82.0.58:8025/Api/';
// regapp.apipath = 'http://183.82.0.58:8010/Api/';
regapp.env = 'dev';

regapp.GlobalImgPath = 'http://d16o2fcjgzj2wp.cloudfront.net/';
regapp.GlobalImgPathforimage = 'https://s3.ap-south-1.amazonaws.com/kaakateeyaprod/';

regapp.prefixPath = 'Images/ProfilePics/';
regapp.S3PhotoPath = '';
regapp.Mnoimage = regapp.GlobalImgPath + "Images/customernoimages/Mnoimage.jpg";
regapp.Fnoimage = regapp.GlobalImgPath + "Images/customernoimages/Fnoimage.jpg";
regapp.accesspathdots = regapp.GlobalImgPathforimage + regapp.prefixPath;

regapp.BucketName = 'kaakateeyaprod';
regapp.editName = 'edit/:custId/';

regapp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {
    var states = [
        { name: 'reg', url: '', subname: [], abstract: true },
        { name: 'reg.basicRegistration', url: '/Registration', subname: [] },
        { name: 'reg.secondaryRegistration', url: '/secondaryReg/:CustID/:fn/:ln/:countryID/:genderID', subname: ['common/directives/datePickerDirective.js'] },
        { name: 'reg.regManagePhoto', url: '/ManagePhoto/:CustID/:genderID', subname: ['common/services/fileUploadSevice.js', 'common/directives/fileUploadDirective.js'] },

    ];
    $ocLazyLoadProvider.config({
        debug: true
    });
    $urlRouterProvider.otherwise('/Registration');

    _.each(states, function(item) {

        var innerView = {};
        var regitem = item.name.slice(4);
        innerView = {
            "topbar@": {
                templateUrl: "templates/topheader.html"
            },
            "lazyLoadView@": {
                templateUrl: 'app/' + regitem + '/index.html',
                controller: regitem + 'Ctrl as page'
            },
            "bottompanel@": {
                templateUrl: "templates/footer.html"
            }
        };

        $stateProvider.state(item.name, {
            url: item.url,
            views: innerView
                // resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                //     loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                //         // you can lazy load files for an existing module
                //         if (regapp.env === 'dev') {
                //             return $ocLazyLoad.load(['app/' + regitem + '/controller/' + regitem + 'ctrl.js', 'app/' + regitem + '/model/' + regitem + 'Mdl.js', 'app/' + regitem + '/service/' + regitem + 'service.js', item.subname,
                //                 'app/' + regitem + '/css/style.css'
                //             ]);
                //         } else {
                //             return $ocLazyLoad.load(['app/' + regitem + '/src/script.min.js', item.subname]);
                //         }
                //     }]
                // }
        });
        $locationProvider.html5Mode(true);
    });

}]);