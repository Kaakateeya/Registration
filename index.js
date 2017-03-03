/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */

var regApp = angular.module('KaakateeyaRegistration', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngMaterial', 'ngMessages', 'ngAria', 'ngMdIcons', 'ngPassword', 'jcs-autoValidate']);
// regApp.apipath = 'http://54.169.133.223:8070/Api/';
regApp.apipath = 'http://183.82.0.58:8010/Api/';
// regApp.apipath = '/webroot/Api/';

//regApp.apipath = 'http://52.66.131.254:8010/Api/';

regApp.templateroot = 'registration/';
// regApp.templateroot = '';
regApp.GlobalImgPath = 'http://d16o2fcjgzj2wp.cloudfront.net/';
regApp.GlobalImgPathforimage = 'https://s3.ap-south-1.amazonaws.com/kaakateeyaprod/';

regApp.prefixPath = 'Images/ProfilePics/';
regApp.S3PhotoPath = '';
regApp.Mnoimage = regApp.GlobalImgPath + "Images/customernoimages/Mnoimage.jpg";
regApp.Fnoimage = regApp.GlobalImgPath + "Images/customernoimages/Fnoimage.jpg";
regApp.accesspathdots = regApp.GlobalImgPathforimage + regApp.prefixPath;
regApp.BucketName = 'kaakateeyaprod';

// regApp.templateroot = '';

regApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    var states = [
        { name: 'registration', url: '/registration', templateUrl: regApp.templateroot + 'app/views/basicRegistration.html', controller: 'basicRegistrationctrl' },
        { name: 'registration.basicRegistration', url: '/basicRegistration', templateUrl: regApp.templateroot + 'app/views/basicRegistration.html', controller: 'basicRegistrationctrl' },
        { name: 'registration.seconadryRegistration', url: '/seconadryRegistration/:fn/:ln/:countryID/:genderID', templateUrl: regApp.templateroot + 'app/views/secondaryRegisrtation.html', controller: 'secondaryRegistrationctrl' },
        { name: 'registration.managePhoto', url: '/managePhoto/:genderID', templateUrl: regApp.templateroot + 'app/views/managePhoto.html', controller: 'managePhotoCtrl' },
        { name: 'registration.upgradeMemberShip', url: '/upgradeMemberShip', templateUrl: regApp.templateroot + 'app/views/payment.html', controller: 'upgrademembership' },
        { name: 'registration.CreatePwd', url: '/CreatePwd/:eid', templateUrl: regApp.templateroot + 'app/views/createNewPassoward.html', controller: 'createNewPwdCtrl' },
        { name: 'registration.confirmEmail', url: '/confirmEmail/:vid', templateUrl: regApp.templateroot + 'app/views/confirmEmail.html', controller: 'confirmEmailCtrl' },
        { name: 'registration.photoGuideLines', url: '/photoGuideLines', templateUrl: regApp.templateroot + 'app/views/photoGuideLines.html', controller: 'photoGuideLinesctrl' },
        { name: 'registration.uploadTips', url: '/uploadTips', templateUrl: regApp.templateroot + 'app/views/uploadTips.html', controller: 'uploadTipsctrl' }

    ];

    $urlRouterProvider.otherwise('registration');

    _.each(states, function(item) {
        var innerView = {
            "topbar@": {
                templateUrl: regApp.templateroot + (item.url === '/confirmEmail' || item.url === '/uploadTips' ? '' : "masterTemplate/headerTemplate.html")
            },
            "content@": {
                templateUrl: item.templateUrl,
                controller: item.controller
            },
            "bottompanel@": {
                templateUrl: regApp.templateroot + "masterTemplate/footerTemplate.html"
            }
        };
        $stateProvider.state(item.name, {
            url: item.url,
            views: innerView
        })
        $locationProvider.html5Mode(true);
    });
});