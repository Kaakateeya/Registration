'use strict';
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
regApp.constant('arrayConstantsreg', {
    'MaritalStatus': [

        { "label": "Unmarried", "title": "Unmarried", "value": 43 },
        { "label": "Divorce", "title": "Divorce", "value": 44 },
        { "label": "Widow/Widower", "title": "Widow/Widower", "value": 45 },
        { "label": "Separated", "title": "Separated", "value": 46 }
    ],
    "height": [

        { "label": "4'0 in - 122 cms", "title": "4'0 in - 122 cms", "value": 1 }, { "label": "4'1 in - 124 cms", "title": "4'1 in - 124 cms", "value": 2 },
        { "label": "4'2 in - 127 cms", "title": "4'2 in - 127 cms", "value": 3 },
        { "label": "4'3 in - 130 cms", "title": "4'3 in - 130 cms", "value": 4 }, { "label": "4'4 in - 132 cms", "title": "4'4 in - 132 cms", "value": 5 },
        { "label": "4'5 in - 135 cms", "title": "4'5 in - 135 cms", "value": 6 }, { "label": "4'6 in - 137 cms", "title": "4'6 in - 137 cms", "value": 7 },
        { "label": "4'7 in - 140 cms", "title": "4'7 in - 140 cms", "value": 8 },
        { "label": "4'8 in - 142 cms", "title": "4'8 in - 142 cms", "value": 9 },
        { "label": "4'9 in - 144 cms", "title": "4'9 in - 144 cms", "value": 10 }, { "label": "4'10 in - 147 cms", "title": "4'10 in - 147 cms", "value": 11 },
        { "label": "4'11 in - 150 cms", "title": "4'11 in - 150 cms", "value": 12 }, { "label": "5'0 in - 152 cms", "title": "5'0 in - 152 cms", "value": 13 },
        { "label": "5'1 in - 155 cms", "title": "5'1 in - 155 cms", "value": 14 }, { "label": "5'2 in - 157 cms", "title": "5'2 in - 157 cms", "value": 15 },
        { "label": "5'3 in - 160 cms", "title": "5'3 in - 160 cms", "value": 16 }, { "label": "5'4 in - 162 cms", "title": "5'4 in - 162 cms", "value": 17 },
        { "label": "5'5 in - 165 cms", "title": "5'5 in - 165 cms", "value": 18 }, { "label": "5'6 in - 167 cms", "title": "5'6 in - 167 cms", "value": 19 },
        { "label": "5'7 in - 170 cms", "title": "5'7 in - 170 cms", "value": 20 }, { "label": "5'8 in - 172 cms", "title": "5'8 in - 172 cms", "value": 21 },
        { "label": "5'9 in - 175 cms", "title": "5'9 in - 175 cms", "value": 22 }, { "label": "5'10 in - 177 cms", "title": "5'10 in - 177 cms", "value": 23 },
        { "label": "5'11 in - 180 cms", "title": "5'11 in - 180 cms", "value": 24 }, { "label": "6'0 in - 183 cms", "title": "6'0 in - 183 cms", "value": 25 },
        { "label": "6'1 in - 185 cms", "title": "6'1 in - 185 cms", "value": 26 }, { "label": "6'2 in - 188 cms", "title": "6'2 in - 188 cms", "value": 27 },
        { "label": "6'3 in - 190 cms", "title": "6'3 in - 190 cms", "value": 28 }, { "label": "6'4 in - 193 cms", "title": "6'4 in - 193 cms", "value": 29 },
        { "label": "6'5 in - 195 cms", "title": "6'5 in - 195 cms", "value": 30 }, { "label": "6'6 in - 198 cms", "title": "6'6 in - 198 cms", "value": 31 },
        { "label": "6'7 in - 200 cms", "title": "6'7 in - 200 cms", "value": 32 }, { "label": "6'8 in - 203 cms", "title": "6'8 in - 203 cms", "value": 33 },
        { "label": "6'9 in - 205 cms", "title": "6'9 in - 205 cms", "value": 34 }, { "label": "6'10 in - 208 cms", "title": "6'10 in - 208 cms", "value": 35 },
        { "label": "6'11 in - 210 cms", "title": "6'11 in - 210 cms", "value": 36 }, { "label": "7'0 in - 213 cms\t", "title": "7'0 in - 213 cms\t", "value": 37 },
        { "label": "7'1 in - 215 cms\t", "title": "7'1 in - 215 cms\t", "value": 38 }, { "label": "7'2 in - 218 cms\t", "title": "7'2 in - 218 cms\t", "value": 39 }
    ],
    "Religion": [

        { "label": "Hindu", "title": "Hindu", "value": 1 },
        { "label": "Christian", "title": "Christian", "value": 2 },
        { "label": "Muslim", "title": "Muslim", "value": 3 },
        { "label": "Other", "title": "Other", "value": 6 },
        { "label": "Catholic", "title": "Catholic", "value": 9 },
        { "label": "Roma Catholic", "title": "Roma Catholic", "value": 15 },
        { "label": "ROMAN CATHOLIC", "title": "ROMAN CATHOLIC", "value": 16 }
    ],
    "Mothertongue": [

        { "label": "Telugu", "title": "Telugu", "value": 1 },
        { "label": "Tamil", "title": "Tamil", "value": 2 },
        { "label": "Kannada", "title": "Kannada", "value": 3 },
        { "label": "Hindi", "title": "Hindi", "value": 4 },
        { "label": "Punjabi", "title": "Punjabi", "value": 5 },
        { "label": "Urdu", "title": "Urdu", "value": 6 },
        { "label": "Lambadi", "title": "Lambadi", "value": 7 },
        { "label": "Marati", "title": "Marati", "value": 8 },
        { "label": "Gujaraathi", "title": "Gujaraathi", "value": 9 },
        { "label": "English", "title": "English", "value": 10 },
        { "label": "Malayalam", "title": "Malayalam", "value": 11 },
        { "label": "Saurashtra", "title": "Saurashtra", "value": 12 }, { "label": "Orea", "title": "Orea", "value": 13 },
        { "label": "telugu", "title": "telugu", "value": 14 }
    ],
    "educationcategory": [

        { "label": "Bachelors in Engineering", "title": "Bachelors in Engineering", "value": 1 },
        { "label": "Bachelors in Degree", "title": "Bachelors in Degree", "value": 2 },
        { "label": "Diploma", "title": "Diploma", "value": 3 },
        { "label": "Doctorate/phd", "title": "Doctorate/phd", "value": 4 },
        { "label": "Masters in Engineering", "title": "Masters in Engineering", "value": 5 },
        { "label": "Bachelors in Medicine", "title": "Bachelors in Medicine", "value": 6 },
        { "label": "Masters in Degree", "title": "Masters in Degree", "value": 7 },
        { "label": "Finance - ICWAI/CA/CS", "title": "Finance - ICWAI/CA/CS", "value": 10 },
        { "label": "Union Public Service Commision-Civil Services", "title": "Union Public Service Commision-Civil Services", "value": 11 },
        { "label": "Masters in Medicine", "title": "Masters in Medicine", "value": 13 },
        { "label": "Below Graduation", "title": "Below Graduation", "value": 15 },
        { "label": "Not given", "title": "Not given", "value": 21 },
        { "label": "Other", "title": "Other", "value": 22 }
    ],
    "visastatus": [

        { "label": "Student Visa", "title": "Student Visa", "value": 284 },
        { "label": "Work Permit", "title": "Work Permit", "value": 285 },
        { "label": "Temporary Visa", "title": "Temporary Visa", "value": 286 },
        { "label": "Citizen", "title": "Citizen", "value": 521 },
        { "label": "Permanent Resident", "title": "Permanent Resident", "value": 522 },
        { "label": "Green Card", "title": "Green Card", "value": 553 }
    ],
    "stars": [

        { "label": "Bharani", "title": "Bharani", "value": 2 },
        { "label": "Krithika", "title": "Krithika", "value": 3 },
        { "label": "Rohini", "title": "Rohini", "value": 4 },
        { "label": "Mrigasira", "title": "Mrigasira", "value": 5 },
        { "label": "Arudra", "title": "Arudra", "value": 6 },
        { "label": "Punarvasu", "title": "Punarvasu", "value": 7 },
        { "label": "Pushyami", "title": "Pushyami", "value": 8 },
        { "label": "Aslesha", "title": "Aslesha", "value": 9 },
        { "label": "Makha", "title": "Makha", "value": 10 },
        { "label": "Pubba", "title": "Pubba", "value": 11 },
        { "label": "Utharapalguni", "title": "Utharapalguni", "value": 12 },
        { "label": "Hastham", "title": "Hastham", "value": 13 },
        { "label": "Chitta", "title": "Chitta", "value": 14 },
        { "label": "Swathi", "title": "Swathi", "value": 15 },
        { "label": "Vishaka", "title": "Vishaka", "value": 16 },
        { "label": "Anuradha", "title": "Anuradha", "value": 18 },
        { "label": "Jesta", "title": "Jesta", "value": 19 },
        { "label": "Moola", "title": "Moola", "value": 20 },
        { "label": "Poorvashada", "title": "Poorvashada", "value": 21 },
        { "label": "Utharashada", "title": "Utharashada", "value": 22 },
        { "label": "Sravanam", "title": "Sravanam", "value": 23 },
        { "label": "Dhanishta", "title": "Dhanishta", "value": 24 },
        { "label": "Sathabisham", "title": "Sathabisham", "value": 25 },
        { "label": "Poorvabadra", "title": "Poorvabadra", "value": 26 },
        { "label": "Uthirabadra", "title": "Uthirabadra", "value": 27 },
        { "label": "Revathi", "title": "Revathi", "value": 28 },
        { "label": "Anuradha", "title": "Anuradha", "value": 30 },
        { "label": "Arudra", "title": "Arudra", "value": 31 },
        { "label": "Ashwini", "title": "Ashwini", "value": 32 },
        { "label": "Aslesha", "title": "Aslesha", "value": 33 },
        { "label": "Chitra", "title": "Chitra", "value": 34 },
        { "label": "Dhanshita", "title": "Dhanshita", "value": 35 },
        { "label": "Hasta", "title": "Hasta", "value": 36 },
        { "label": "Jyehsta", "title": "Jyehsta", "value": 37 },
        { "label": "Kritika", "title": "Kritika", "value": 38 },
        { "label": "Magha", "title": "Magha", "value": 39 },
        { "label": "Moola", "title": "Moola", "value": 40 },
        { "label": "Mrigasira", "title": "Mrigasira", "value": 41 },
        { "label": "Poorvabhadra", "title": "Poorvabhadra", "value": 42 },
        { "label": "Poorvashadha", "title": "Poorvashadha", "value": 43 },
        { "label": "Punarvasu", "title": "Punarvasu", "value": 44 },
        { "label": "Poorvaphalguni", "title": "Poorvaphalguni", "value": 45 },
        { "label": "Pushya", "title": "Pushya", "value": 46 },
        { "label": "Satabisha", "title": "Satabisha", "value": 47 },
        { "label": "Sravana", "title": "Sravana", "value": 48 },
        { "label": "Swati", "title": "Swati", "value": 49 },
        { "label": "Uttarashadha", "title": "Uttarashadha", "value": 50 },
        { "label": "Uttarabhadrapada", "title": "Uttarabhadrapada", "value": 51 },
        { "label": "Uttaraphalguni", "title": "Uttaraphalguni", "value": 52 },
        { "label": "Visakha", "title": "Visakha", "value": 53 },
        { "label": "Uttara", "title": "Uttara", "value": 54 },
        { "label": "Uttarabhadra", "title": "Uttarabhadra", "value": 55 }
    ],
    'starLanguage': [

        { "label": "Telugu", "title": "Telugu", "value": 1 },
        { "label": "Tamil", "title": "Tamil", "value": 2 },
        { "label": "Kannada", "title": "Kannada", "value": 3 },
    ],
    'region': [

        { "label": "AP", "title": "AP", "value": 408 },
        { "label": "TN", "title": "TN", "value": 409 },
        { "label": "KT", "title": "KT", "value": 410 }
    ],
    'bodyType': [

        { "label": "Athletic", "title": "Athletic", "value": 21 },
        { "label": "Average", "title": "Average", "value": 22 },
        { "label": "Slim", "title": "Slim", "value": 23 },
        { "label": "Heavy", "title": "Heavy", "value": 24 },
        { "label": "Doesn't Matter", "title": "Doesn't Matter", "value": 37 }
    ],
    'bloodGroup': [

        { "label": "O+", "title": "O+", "value": 61 },
        { "label": "A+", "title": "A+", "value": 63 },
        { "label": "B+", "title": "B+", "value": 64 },
        { "label": "AB+", "title": "AB+", "value": 65 },
        { "label": "O-", "title": "O-", "value": 66 },
        { "label": "A-", "title": "A-", "value": 67 },
        { "label": "B-", "title": "B-", "value": 68 }
    ],
    'healthCondition': [

        { "label": "No Health Problems", "title": "No Health Problems", "value": 220 },
        { "label": "HIV", "title": "HIV", "value": 222 },
        { "label": "Diabetes", "title": "Diabetes", "value": 223 },
        { "label": "LowBP", "title": "LowBP", "value": 224 },
        { "label": "HighBP", "title": "HighBP", "value": 225 },
        { "label": "Heart Ailments", "title": "Heart Ailments", "value": 226 }
    ],
    'lagnam': [

        { "label": "Dhansu", "title": "Dhansu", "value": 1 },
        { "label": "Kanya", "title": "Kanya", "value": 2 },
        { "label": "Karkatakam", "title": "Karkatakam", "value": 3 },
        { "label": "Khumbam", "title": "Khumbam", "value": 4 },
        { "label": "Makhram", "title": "Makhram", "value": 5 },
        { "label": "Meenam", "title": "Meenam", "value": 6 },
        { "label": "Mesham", "title": "Mesham", "value": 7 },
        { "label": "Midhunam", "title": "Midhunam", "value": 8 },
        { "label": "Simham", "title": "Simham", "value": 9 },
        { "label": "Thula", "title": "Thula", "value": 10 },
        { "label": "Vrichikam", "title": "Vrichikam", "value": 11 },
        { "label": "Vrushabam", "title": "Vrushabam", "value": 12 }
    ],
    'ZodaicSign': [

        { "label": "mesha", "title": "mesha", "value": 527 },
        { "label": "vrushaba", "title": "vrushaba", "value": 528 },
        { "label": "midhuna", "title": "midhuna", "value": 529 },
        { "label": "karkataka", "title": "karkataka", "value": 530 },
        { "label": "Simha", "title": "Simha", "value": 531 },
        { "label": "Kanya", "title": "Kanya", "value": 532 },
        { "label": "Thula", "title": "Thula", "value": 533 },
        { "label": "Vruchika", "title": "Vruchika", "value": 534 },
        { "label": "Dhanu", "title": "Dhanu", "value": 535 },
        { "label": "Makara", "title": "Makara", "value": 536 },
        { "label": "Kumbha", "title": "Kumbha", "value": 537 },
        { "label": "Meena", "title": "Meena", "value": 538 },
    ],
    'paadam': [

        { "label": "1", "title": "1", "value": 304 },
        { "label": "2", "title": "2", "value": 305 },
        { "label": "3", "title": "3", "value": 306 },
        { "label": "4", "title": "4", "value": 539 },

    ],
    'familyStatus': [

        { "label": "Lower Middle Class", "title": "Lower Middle Class", "value": 290 },
        { "label": "Middle Class", "title": "Middle Class", "value": 291 },
        { "label": "Upper Middle Class", "title": "Upper Middle Class", "value": 292 },
        { "label": "Rich", "title": "Rich", "value": 293 },
        { "label": "Affluent", "title": "Affluent", "value": 294 },
        { "label": "Others", "title": "Others", "value": 516 },
        { "label": "High Class", "title": "High Class", "value": 517 }
    ],
    'RelationshipType': [

        { "label": "Friend", "title": "Friend", "value": 318 },
        { "label": "Relative", "title": "Relative", "value": 319 },
        { "label": "Not Given", "title": "Not Given", "value": 549 },

    ],
    "childStayingWith": [
        // { "label": "--select-- ", "title": "--select--", "value": 0 },
        { "label": "Father", "title": "Father", "value": 39 },
        { "label": "Mother", "title": "Mother", "value": 40 },
        { "label": "YoungerBrother", "title": "YoungerBrother", "value": 41 },
        { "label": "ElderBrother", "title": "ElderBrother", "value": 42 },
        { "label": "Self", "title": "Self", "value": 283 },
        { "label": "YoungerSister", "title": "YoungerSister", "value": 321 },
        { "label": "ElderSister", "title": "ElderSister", "value": 322 },
        { "label": "FatherYoungerBrother", "title": "FatherYoungerBrother", "value": 323 },
        { "label": "FatherElderBrother", "title": "FatherElderBrother", "value": 324 },
        { "label": "FatherYoungerSister", "title": "FatherYoungerSister", "value": 325 },
        { "label": "FatherElderSister", "title": "FatherElderSister", "value": 326 },
        { "label": "MotherYoungerBrother", "title": "MotherYoungerBrother", "value": 327 },
        { "label": "MotherElderBrother", "title": "MotherElderBrother", "value": 328 },
        { "label": "MotherYoungerSister", "title": "MotherYoungerSister", "value": 329 },
        { "label": "MotherElderSister", "title": "MotherElderSister", "value": 320 },
        { "label": "Spouse", "title": "Spouse", "value": 334 },
        { "label": "XRelation", "title": "XRelation", "value": 554 },
        { "label": "GrandFather", "title": "GrandFather", "value": 556 },
        { "label": "GrandMother", "title": "GrandMother", "value": 557 },
        { "label": "SisterHusband", "title": "SisterHusband", "value": 558 },
        { "label": "Friend", "title": "Friend", "value": 559 },
        { "label": "Relative", "title": "Relative", "value": 560 },
        { "label": "Uncle", "title": "Uncle", "value": 561 },
        { "label": "Aunt", "title": "Aunt", "value": 562 }

    ],
    'Complexion': [

        { "label": "Very Fair", "title": "Very Fair", "value": 17 },
        { "label": "Fair", "title": "Fair", "value": 18 },
        { "label": "Medium", "title": "Medium", "value": 19 },
        { "label": "Dark", "title": "Dark", "value": 20 },
        { "label": "Doesn't Matter", "title": "Doesn't Matter", "value": 38 }
    ],
    'PhysicalStatus': [

        { "label": "Normal", "title": "Normal", "value": 25 },
        { "label": "Physically Challenged", "title": "Physically Challenged", "value": 26 }
    ]

});
regApp.controller('basicRegistrationctrl', ['$scope', 'getArray', 'Commondependency',
    'basicRegistrationService', '$filter', 'authSvc', '$timeout', 'route', 'SelectBindServicereg',
    function(scope, getArray, commondependency, basicRegistrationService, filter, authSvc, timeout, route, SelectBindServicereg) {
        scope.childStayingWith = 'childStayingWith';
        scope.Religion = 'Religion';
        //scope.Mothertongue = 'Mothertongue';
        scope.Caste = 'Caste';
        scope.Country = 'Country';
        // scope.countryCode = 'countryCode';
        scope.month = 'month';
        scope.reg = {};
        scope.monthArr = [];

        var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        scope.monthBind = function() {

            var option = [];

            _.each(monthArr, function(item) {
                option.push({ "label": item, "title": item, "value": item });
            });
            return option;
        };
        scope.date = function(str, from, to) {
            var Arr = [];
            // Arr.push({ "label": str, "title": str, "value": '' });
            for (var i = from; i <= to; i++) {
                var strValue = null;
                if (i <= 9) {
                    strValue = "0" + i;
                } else {
                    strValue = i;
                }
                Arr.push({ "label": strValue, "title": strValue, "value": strValue });
            }
            return Arr;
        };

        scope.year = function(str, from, to) {
            var Arr = [];
            // Arr.push({ "label": str, "title": str, "value": '' });
            for (var i = to; i >= from; i--) {
                Arr.push({ "label": i, "title": i, "value": i });
            }
            return Arr;
        };
        scope.monthArr = scope.monthBind();
        scope.dateArr = scope.date('', 1, 31);
        scope.yearArr = scope.year('', 1936, 1998);

        timeout(function() {
            scope.postedby = getArray.GArray('childStayingWith');
            scope.religion = getArray.GArray('Religion');
            scope.Mothertongue = getArray.GArray('Mothertongue');
            scope.Caste = getArray.GArray('Caste');
            scope.countryCode = getArray.GArray('countryCode');
            scope.Country = getArray.GArray('Country');
        }, 1000);
        timeout(function() {


            // var Country = [],
            //     CountryCode = [];
            // SelectBindServicereg.CountryWithCode().then(function(response) {

            //     _.each(response.data, function(item) {
            //         Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            //         CountryCode.push({ "label": item.CountryCode, "title": item.CountryCode, "value": item.ID });
            //     });

            //     console.log('test..');
            //     console.log(Country);

            //     scope.Country = Country;
            //     scope.countryCode = CountryCode;
            // });

        }, 100);

        scope.statuses = ['Planned', 'Confirmed', 'Cancelled'];

        scope.dayChange = function(obj, type) {

            var months31 = 'Jan,Mar,May,Jul,Aug,Oct,Dec';
            var minth30 = 'Apr,Jun,Sep,Nov';
            var month28 = 'Feb';
            if ((obj.ddlDD <= 30 && minth30.indexOf(obj.ddlMM) !== -1) || (obj.ddlDD <= 31 && months31.indexOf(obj.ddlMM) !== -1) || ((obj.ddlDD <= 28 && month28.indexOf(obj.ddlMM) !== -1))) {

            } else {
                if (type === 'day') {
                    obj.ddlMM = '';
                } else {
                    scope.dateArr = [];
                    scope.dateArr = scope.date('DD', 1, 31);
                    obj.ddlDD = '';
                }
            }
        };

        scope.changeBind = function(parentval, parentval2) {
            if (parentval !== undefined && parentval !== null && parentval !== '' && parentval2 !== undefined && parentval2 !== null && parentval2 !== '')
                scope.casteArr = commondependency.casteDepedency(commondependency.listSelectedVal(parentval), commondependency.listSelectedVal(parentval2));

        };

        scope.regSubmit = function(obj) {

            var valmm = _.indexOf(monthArr, obj.ddlMM);

            valmm = (valmm != -1 ? parseInt(valmm) + 1 : 0);
            valmm = valmm >= 10 ? valmm : '0' + valmm;
            var date = obj.ddlDD + '-' + valmm + '-' + obj.ddlYear;
            var inputObj = {
                strFirstName: obj.txtfirstname,
                strLastName: obj.txtlastname,
                dtDOB: date !== '' ? filter('date')(date, 'yyyy-MM-dd') : null,
                intGenderID: obj.rbtngender,
                intReligionID: obj.ddlreligion,
                intMotherTongueID: obj.ddlmothertongue,
                intCasteID: obj.ddlcaste,
                intCountryLivingID: obj.ddlcountry,
                intMobileCode: obj.ddlmobilecountry,
                intLandCode: obj.ddllandcountry,
                IsCustomer: 1,
                strMobileNo: obj.txtMobileNo,
                ID: 1,
                strAreaCode: obj.txtArea !== '' ? obj.txtArea : '',
                strLandNo: obj.txtlandNum !== '' ? obj.txtlandNum : '',
                strEmail: obj.txtEmail,
                strPassword: obj.txtpassword,
                intProfileRegisteredBy: null,
                intEmpID: null,
                intCustPostedBY: obj.ddlpostedby,
                //strMobileVerificationCode: obj.
            };
            console.log(inputObj);
            basicRegistrationService.submitBasicRegistration(inputObj).then(function(res) {
                console.log(res);
                scope.genderID = 0;
                authSvc.login(scope.reg.txtEmail, scope.reg.txtpassword).then(function(response) {
                    console.log(response);
                    authSvc.user(response.response !== null ? response.response[0] : null);
                    scope.genderID = response.response[0].GenderID;
                    //  window.location = "registration/seconadryRegistration/" + obj.txtfirstname + "/" + obj.txtlastname + "/" + obj.ddlcountry + "/" + response.response[0].GenderID;
                    route.go('registration.seconadryRegistration', { fn: obj.txtfirstname, ln: obj.txtlastname, countryID: obj.ddlcountry, genderID: response.response[0].GenderID });
                    return false;
                });
            });
        };

        scope.valueExists = function(type, flag, val) {
            if (val !== undefined) {
                basicRegistrationService.emailExists({ iflagEmailmobile: flag, EmailMobile: val }).then(function(response) {
                    console.log(response);
                    if (response.data === 1) {
                        if (type === 'email') {
                            scope.reg.txtEmail = '';
                            alert('Email Already Exists');
                        } else {
                            scope.reg.txtMobileNo = '';
                            alert('Mobile number Already Exists');
                        }
                    }
                });
            }
        };


        scope.$watch(function() {
            return scope.reg.ddlcountry;
        }, function(current, original) {
            scope.reg.ddllandcountry = scope.reg.ddlmobilecountry = current;
        });



        scope.redirectprivacy = function(type) {
            window.open('privacyPolicy', '_blank');
        };



    }
]);
regApp.controller('confirmEmailCtrl', ['$scope', 'emailVerificationService', '$stateParams', 'route', function(scope, emailVerificationService, stateParams, route) {

    var verificationCode = stateParams.vid;

    emailVerificationService.verifyEmail(verificationCode).then(function(res) {
        console.log(res);
        if (res.data !== '0' && res.data !== 0) {
            // window.location = "registration/CreatePwd/" + verificationCode;
            route.go('registration.CreatePwd', { eid: verificationCode });


        } else {

        }
    });

}]);
regApp.controller('createNewPwdCtrl', ['$scope', 'cerateNewPwd', '$stateParams', 'authSvc', 'route', function(scope, cerateNewPwd, stateParams, authSvc, route) {
    scope.custID = '0';
    scope.Email = '';
    scope.profileID = '';

    cerateNewPwd.getEmailAndProfileID(stateParams.eid).then(function(res) {
        var custData = (res.data).split(';');
        console.log(custData);
        scope.Email = custData[0];
        scope.profileID = custData[1];
        scope.custID = custData[2];
    });

    scope.CerateNewPwdSubmit = function(obj) {
        cerateNewPwd.createNewPwdSub(scope.custID, obj.txtPassword).then(function(res) {
            console.log(res);
            authSvc.login(scope.profileID, obj.txtPassword).then(function(response) {
                authSvc.user(response.response !== null ? response.response[0] : null);
                sessionStorage.removeItem("LoginPhotoIsActive");
                if (response.response[0].isemailverified === true && response.response[0].isnumberverifed === true) {
                    // window.location = "home";
                    route.go('dashboard', { type: 'C' });

                } else {
                    // window.location = "mobileverf";
                    route.go('mobileverf', {});
                }

            });
        });
    };
}]);
regApp.controller("managePhotoCtrl", ['$uibModal', '$scope', 'Commondependency', 'editmanagePhotoServices', '$http', 'fileUpload', 'authSvc', '$stateParams', '$window', function(uibModal, scope, Commondependency, editmanagePhotoServices, http, fileUpload, authSvc, stateParams, window) {

    var up = {};

    var EmpIDQueryString = '2';

    var logincustid = authSvc.getCustId();
    var CustID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;

    scope.photorowID = 0;

    scope.imgArr = [];
    scope.cancel = function() {
        Commondependency.closepopup();
    };

    scope.refreshPageLoad = function(Arr) {
        _.each(Arr, function(item) {

            scope.rbtProtectPassword = item.PhotoPassword === 'Admin@123' ? '1' : '0';
            var imagepath = regApp.accesspathdots;

            if (item.IsActive === 0 && item.PhotoName !== null) {
                var strCustDirName1 = "KMPL_" + CustID + "_Images";
                var path1 = imagepath + strCustDirName1 + "/" + item.PhotoName;
                item.ImageUrl = path1 + '?decache=' + Math.random();
                item.addButtonvisible = false;
                item.deleteVisibility = true;
                item.keyname = strCustDirName1 + "/" + item.PhotoName;

            } else if (item.IsActive === 1 && item.IsThumbNailCreated === 1) {

                var strCustDirName = "KMPL_" + CustID + "_Images";
                item.addButtonvisible = false;
                item.deleteVisibility = true;
                switch (item.DisplayOrder) {
                    case 1:
                        var photoshoppath = "Img1_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                        var path = imagepath + strCustDirName + "/" + photoshoppath;
                        item.ImageUrl = path;
                        item.keyname = strCustDirName + "/" + photoshoppath;
                        break;
                    case 2:
                        var photoshoppathnew = "Img2_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                        var pathnew = imagepath + strCustDirName + "/" + photoshoppathnew;
                        item.ImageUrl = pathnew;
                        item.keyname = strCustDirName + "/" + photoshoppathnew;
                        break;
                    case 3:
                        var photoshoppathneew3 = "Img3_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                        var pathneww = imagepath + strCustDirName + "/" + photoshoppathneew3;
                        item.ImageUrl = pathneww;
                        item.keyname = strCustDirName + "/" + photoshoppathneew3;
                        break;
                }
            } else if (item.IsActive === 0 && item.PhotoName === null) {
                item.addButtonvisible = true;
                item.deleteVisibility = false;
                item.ImageUrl = stateParams.genderID === '1' || stateParams.genderID === 1 ? regApp.Mnoimage : regApp.Fnoimage;
            }
        });
        return Arr;
    };

    scope.getData = function() {

        editmanagePhotoServices.getPhotoData(CustID).then(function(response) {
            var StrCustID = CustID;
            console.log(response.data);
            scope.manageArr = response.data;
            scope.refreshPageLoad(scope.manageArr);
        });
    };

    scope.getData();


    scope.AddImage = function(index, Cust_Photos_ID, DisplayOrder, IsActive) {
        scope.photorowID = index;
        scope.Cust_Photos_ID = Cust_Photos_ID;
        scope.DisplayOrder = DisplayOrder;
        scope.IsActive = IsActive;
        Commondependency.open('AddimagePopup.html', scope, uibModal, 'sm');
    };
    scope.upload = function(obj) {
        console.log(obj.myFile);
        var extension = (obj.myFile.name !== '' && obj.myFile.name !== undefined && obj.myFile.name !== null) ? (obj.myFile.name.split('.'))[1] : null;
        extension = angular.lowercase(extension);
        var gifFormat = "gif, jpeg, png,jpg";

        if (typeof(obj.myFile.name) != "undefined") {

            var size = parseFloat(obj.myFile.size / 1024).toFixed(2);
            if (extension !== null && gifFormat.indexOf(angular.lowercase(extension)) === -1) {
                alert('Your uploaded image contains an unapproved file formats.');
            } else if (size > 4 * 1024) {
                alert('Sorry,Upload Photo Size Must Be Less than 1 mb');
            } else {
                console.log(obj.myFile);
                // var extension = ((obj.myFile.name).split('.'))[1];
                var keyname = regApp.prefixPath + 'KMPL_' + CustID + '_Images/Img' + scope.photorowID + '.' + extension;

                fileUpload.uploadFileToUrl(obj.myFile, '/photoUplad', keyname).then(function(res) {
                    console.log(res.status);
                    if (res.status == 200) {
                        Commondependency.closepopup();
                        scope.uploadData = {
                            GetDetails: {
                                ID: scope.Cust_Photos_ID,
                                url: 'Img' + scope.photorowID + '.' + extension,
                                order: scope.DisplayOrder,
                                IsProfilePic: 0,
                                DisplayStatus: scope.DisplayOrder,
                                Password: 0,
                                IsReviewed: 0,
                                TempImageUrl: regApp.GlobalImgPath + keyname,
                                IsTempActive: Commondependency.checkvals(scope.IsActive) ? scope.IsActive : '0',
                                DeletedImageurl: null,
                                IsImageDeleted: 0,
                                PhotoStatus: null,
                                PhotoID: scope.DisplayOrder,
                                PhotoPassword: null
                            },
                            customerpersonaldetails: {
                                intCusID: CustID,
                                EmpID: null,
                                Admin: null
                            }
                        };

                        editmanagePhotoServices.submituploadData(scope.uploadData).then(function(response) {
                            console.log(response);
                            if (response.status === 200) {
                                alert('submitted Succesfully');
                                scope.manageArr = response.data;
                                scope.refreshPageLoad(scope.manageArr);

                            } else {
                                alert('Updation failed');
                            }
                        });

                    }
                });
            }
        } else {
            alert("This browser does not support HTML5.");
        }
    };

    scope.DeleteImage = function(key, Cust_Photoid) {
        scope.deleteKey = key;
        scope.DCust_Photos_ID = Cust_Photoid;
        Commondependency.open('deleteimagePopup.html', scope, uibModal, 'sm');
    };

    scope.Delete = function() {
        var keynameq = regApp.prefixPath + scope.deleteKey;
        http.post('/photoDelete', JSON.stringify({ keyname: keynameq })).then(function(data) {

        });

        editmanagePhotoServices.linqSubmits(scope.DCust_Photos_ID, 3).then(function(response) {

            if (response.data === 1) {
                Commondependency.closepopup();
                scope.getData();
            }
        });
    };

    scope.setAsProfilePic = function(cust_photoID) {
        editmanagePhotoServices.linqSubmits(cust_photoID, 2).then(function(response) {
            console.log(response.data);

            if (response.data === 1) {
                Commondependency.closepopup();
                scope.getData();
            }
        });
    };

    scope.setPhotoPassword = function(obj) {

        editmanagePhotoServices.linqSubmits(CustID, obj).then(function(response) {
            console.log(response);
            if (response.data === 1) {

                if (obj === '1') {
                    alert('Protect with Password  Uploaded Successfully');
                } else {
                    alert('Protect with Password Removed Successfully');
                }
            }
        });

    };

    scope.skip = function() {
        //window.location = "#/registration/managePhoto" + stateParams.genderID;
    };
    scope.redirectPage = function(type) {

        switch (type) {
            case 'PhotoGuideLines':
                window.open('registration/photoGuideLines', '_blank');
                break;
            case 'Faqs':
                window.open('faqs', '_blank');
                break;
            case 'uploadTips':
                window.open('registration/uploadTips', '_blank');
                break;
        }
    };

}]);
regApp.controller("upgrademembership", ['$scope', '$interval', 'myAppFactory',
    'authSvc', 'alert',
    function(scope, $interval, myAppFactory, authSvc, alerts) {
        scope.paymentarray = [];
        var logincustid = authSvc.getCustId();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        myAppFactory.getpayment(scope.custid).then(function(response) {
            console.log(response);
            scope.paymentarray = [];
            scope.paymentarray.push({
                MembershipName: "Services & Features",
                MembershipAmount: "My Plans",
                AllottedServicePoints: "Profile Count",
                onlineaccess: "Online Access",
                offlineaccess: "Offline Access"
            });
            _.each(response.data, function(item) {
                scope.paymentarray.push(item);
            });
        });

        scope.selectpaymantoption = function(membershipd, amount, profilecount, discount, custid, servicename, year) {
            var paymentobject = {
                MembershipID: membershipd,
                Amount: amount,
                Points: profilecount,
                DiscountID: discount,
                CustID: custid,
                MembershipName: servicename,
                Duration: year
            };
            sessionStorage.setItem("paymentobject", JSON.stringify(paymentobject));
            var realpath = 'paymentresponse';
            window.open(realpath, "_self");
        };

        scope.sendsmspayment = function(payment) {
            myAppFactory.sendsms(15, scope.custid, payment.mobilenumber).then(function(response) {
                console.log(response);
                alerts.open("Thanks ! You shall be contacted soon by our priority manager", 'success');
            });
        };
        scope.ccavenuepage = function() {
            window.open("https://secure.ccavenue.com/transaction/TransactionInitiator", "_self");
        };
    }
]);
regApp.controller('photoGuideLinesctrl', ['$scope', function(scope) {


}]);
regApp.controller("secondaryRegistrationctrl", ['$scope', 'getArray', 'Commondependency', 'SecondaryRegistrationService', '$filter', '$timeout', '$stateParams', 'authSvc', 'route', function(scope, getArray, commondependency, SecondaryRegistrationService, filter, timeout, stateParams, authSvc, route) {

    scope.MaritalStatus = getArray.GArray('MaritalStatus');
    scope.Complexion = getArray.GArray('Complexion');
    scope.PhysicalStatus = getArray.GArray('PhysicalStatus');
    scope.height = getArray.GArray('height');
    scope.educationcategory = getArray.GArray('educationcategory');
    scope.visastatus = getArray.GArray('visastatus');
    scope.regsec = {};
    scope.noOfsibblingsArr = commondependency.numbersBind('', 0, 5);
    var countryID = stateParams.countryID;
    scope.regsec.LabelName = stateParams.fn + ' ' + stateParams.ln;
    // scope.regsec.ddlCountryLivingIn = stateParams.countryID;
    scope.stateArr = commondependency.StateBind(stateParams.countryID);

    var logincustid = authSvc.getCustId();
    var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;

    timeout(function() {
        scope.Country = getArray.GArray('Country');
        scope.ProfCatgory = getArray.GArray('ProfCatgory');
        scope.ProfGroup = getArray.GArray('ProfGroup');
        scope.currency = getArray.GArray('currency');
    }, 2000);


    timeout(function() {
        scope.regsec.ddlCountryLivingIn = stateParams.countryID;
    }, 4000);


    scope.changeBind = function(type, paerntval, countryVal) {

        switch (type) {
            case 'educat':
                scope.edugroup = commondependency.educationGroupBind(paerntval);
                break;
            case 'edugroup':
                scope.eduSplArr = commondependency.educationSpeciakisationBind(paerntval);
                break;
            case 'profGroup':
                scope.professionArr = commondependency.professionBind(paerntval);
                break;
            case 'Country':
                scope.stateArr = commondependency.StateBind(paerntval);
                break;
            case 'state':
                if (countryVal === '1' || countryVal === 1) {
                    scope.districtArr = commondependency.districtBind(paerntval);
                } else {
                    scope.districtArr = [];
                    scope.cityArr = [];
                    scope.cityArr = commondependency.districtBind(paerntval);
                }
                break;
            case 'district':
                scope.cityArr = commondependency.cityBind(paerntval);
                break;

        }
    };

    scope.secondRegSubmit = function(obj) {
        var regInput = {
            GetDetails: {
                NAME: obj.LabelName,
                Maritalstatus: obj.rbtnmarital,
                Heights: obj.ddlHeight,
                Complexion: obj.rbtncomplexion,
                Physicalstatus: obj.rbtnphysicalstatus,
                Citizenship: obj.ddlBornCitizenship,
                BornCitizenship: obj.ddlBornCitizenship,
                EducationCategory: obj.ddlEduCategory,
                EducationGroup: obj.ddlEduGroup,
                EducationSpl: obj.ddlEduSpecialisation,
                EducationDetails: obj.txtEducationMerits,
                EmployeeIN: obj.ddlEmployedIn,
                ProfessionGroup: obj.ddlProfessionalGroup,
                Profession: obj.ddlProfession,
                CompanyName: obj.txtCompanyName,
                OccupationDetails: obj.txtOcccupationDetails,
                AnnualIncome: 0,
                Currency: obj.ddlcurrency,
                Salary: obj.txtSalary,
                CountryLivingIn: obj.ddlCountryLivingIn,
                StateLivingIn: obj.ddlStatelivingIn,
                DistictLivingIn: obj.ddlDistricLivingIn,
                CityLivingIN: obj.ddlcityLivingIn,
                Cityother: null,
                VisaStatus: obj.ddlVisaStatus,
                ResidingSince: obj.from !== '' ? filter('date')(obj.from, 'yyyy-MM-dd') : null,
                FatherName: obj.txtFatherName,
                FatherEducation: null,
                FastherProfession: null,
                FatherNative: obj.txtfathernative,
                MotherName: obj.txtMotherName,
                MotherEducation: null,
                MotherProfession: null,
                MotherNative: obj.txtmothernative,
                NOofbrother: obj.ddlBrothers,
                NOofSisters: obj.ddlSisters,
                AboutYourself: obj.txtabouturself,
                fathereducationdetails: obj.txtFatherEducation,
                fatherProfessiondetails: obj.txtFatherProfession,
                mothereducationdetails: obj.txtMotherEducation,
                motherProfessiondetails: obj.txtMotherprofession
            },
            customerpersonaldetails: {
                intCusID: custID,
                EmpID: null,
                Admin: null
            }
        };
        console.log(scope.secondRegSubmit);
        SecondaryRegistrationService.submitSecodaryRegistration(regInput).then(function(res) {
            console.log(res);
            // window.location = "registration/managePhoto/" + stateParams.genderID;

            route.go('registration.managePhoto', { genderID: stateParams.genderID });

        });

    };

    // scope.redirect = function() {
    //     window.location = "#/registration/managePhoto/0";
    // };

}]);
regApp.controller('uploadTipsctrl', ['$scope', function(scope) {


}]);
regApp.factory('alert', ['$mdDialog', function($mdDialog) {
    var modalinstance;
    return {
        open: function(msg, classname) {
            classname = classname || "success";
            toastr.options = {
                "closeButton": true,
                "debug": true,
                "newestOnTop": true,
                "progressBar": true,
                "positionClass": app.global.alertType,
                "preventDuplicates": false,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": 5000,
                "extendedTimeOut": 2000,
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut",
                "onclick": null
            };
            switch (classname) {
                case 'success':
                    toastr.success(msg, "done");
                    break;
                case 'error':
                    toastr.error(msg, 'Oops');
                    break;
                case 'warning':
                    toastr.warning(msg, 'Alert');
                    break;
                case 'info':
                    toastr.info(msg, 'Info');
                    break;
                default:
                    toastr.success(msg, 'Done');
                    break;
            }
        },
        dynamicpopup: function(url, scope, uibModal, custid, size) {
            modalinstance = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: url,
                scope: scope,
                size: size || 'lg'
            });
        },
        dynamicpopupclose: function() {
            modalinstance.close();
        },
        showloginpopup: function() {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'login.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,

            });
        },
        mddiologcancel: function() {
            $mdDialog.hide();
        }


    };
}]);
regApp.directive('accessibleForm', function() {
    return {
        restrict: 'A',
        link: function(scope, elem) {
            // set up event handler on the form element
            elem.on('submit', function() {

                var firstInvalid = elem[0].querySelector('.ng-invalid');
                if (firstInvalid !== null)
                    firstInvalid.focus();

                var firstInvalidselect = elem[0][1];
                $('select').each(function() {

                    console.log('valilog');
                    var testtt = $(this).attr('class');
                    if (testtt.indexOf('ng-invalid-required') !== -1) {
                        firstInvalidselect.focus();
                        return false;
                    }
                });
            });
        }
    };
});
regApp.directive('datePickerreg', function() {
    return {

    };
});
regApp.directive("materialMultiselect", ["$injector", function($injector) {
    return {
        restrict: "E",
        scope: {
            array: '=',
            change: '=',
            model: '='
        },
        templateUrl: "app/views/materialMultiSelect.html",
        link: function(scope, element, attrs) {
            scope.Caste = scope.array !== undefined && scope.array !== "" && scope.array !== null ? scope.array : [];
            scope.selectall = function() {
                if (scope.model.length === scope.Caste.length) {
                    scope.model = [];
                } else if (scope.model.length === 0 || scope.model.length > 0) {
                    _.each(scope.Caste, function(item) {
                        scope.model.push(item.value);
                    });
                }
            };
            scope.isChecked = function() {
                return scope.model.length === scope.Caste.length;
            };
            scope.exists = function(item) {
                return scope.Caste.indexOf(item) > -1;
            };

            element.find('input').on('keydown', function(ev) {
                ev.stopPropagation();
            });
        }
    };
}]);
regApp.directive('textboxDirective', function() {
    return {
        scope: {
            strdisplay: '=',
            name: '=',
            errmsg: '='
        },
        template: "<md-input-container class='md-block span4'>" +
            "<label>{{strdisplay}}</label>" +
            "<input maxlength='8' required='' md-no-asterisk='' name='name' ng-model='reg.txtlandNum'>" +
            "<div ng-messages='name.$error'>" +
            "<div ng-message='required'>{{errmsg}}</div>" +
            "</div>" +
            "</md-input-container>",
        link: function(scope, element, attr) {
            console.log(scope.strdisplay);
        }
    };
});

//  <textbox-directive strdisplay="'First name'" name="'txtfirstname'" errmsg="reg.txtfirstname"></textbox-directive>
regApp.factory('emailVerificationService', ['$http', function(http) {
    return {
        verifyEmail: function(obj) {
            return http.get(regApp.apipath + 'StaticPages/getConfirmUserEmail', { params: { VerificationCode: obj } });
        }
    };
}]);
regApp.factory('basicRegistrationService', ['$http', function(http) {
    return {
        submitBasicRegistration: function(obj) {
            console.log(obj);
            return http.post(regApp.apipath + 'Registration/RegisterCustomerHomepages', JSON.stringify(obj));
        },
        emailExists: function(obj) {
            return http.get(regApp.apipath + 'StaticPages/getEmailMobilenumberexists', { params: obj });
        }
    };
}]);
regApp.factory('cerateNewPwd', ['$http', function(http) {
    return {
        createNewPwdSub: function(custID, newpwd) {
            return http.get(regApp.apipath + 'StaticPages/getCreateNewPassword', { params: { intCusID: custID, strPassword: newpwd } });
        },
        getEmailAndProfileID: function(obj) {
            console.log(JSON.stringify({ VerificationCode: obj, i_EmilMobileVerification: 1, CustContactNumbersID: '' }));
            return http.get(regApp.apipath + 'StaticPages/getEmilVerificationCode', { params: { VerificationCode: obj, i_EmilMobileVerification: 1, CustContactNumbersID: '' } });

        }
    };
}]);
regApp.factory('Commondependency', ['SelectBindServicereg', function(SelectBindService) {
    var modalpopupopen;

    return {
        open: function(url, scope, uibModal, size) {
            modalpopupopen = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: url,
                scope: scope,
                size: size
            });
        },
        closepopup: function() {
            modalpopupopen.close();
        },
        listSelectedVal: function(val) {
            var str = '';
            if (val !== null && val !== undefined && val !== '') {
                if (angular.isString(val)) {
                    str = val === '' ? '' : val;
                } else if (angular.isNumber(val)) {
                    str = val;
                } else {
                    str = val.join(',');
                }
            }
            return str;
        },
        StateBind: function(parentval) {
            var stateArr = [];
            // stateArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.stateSelect(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    stateArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return stateArr;
        },
        districtBind: function(parentval) {
            var disttrictArr = [];
            // disttrictArr.push({ "label": "--select--", "title": "--select--", "value": "" });

            SelectBindService.districtSelect(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    disttrictArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return disttrictArr;
        },
        cityBind: function(parentval) {
            var cityeArr = [];
            // cityeArr.push({ "label": "--select--", "title": "--select--", "value": "" });

            SelectBindService.citySelect(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    cityeArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return cityeArr;
        },

        professionBind: function(parentval) {
            var professionArr = [];
            // professionArr.push({ "label": "--select--", "title": "--select--", "value": "" });

            SelectBindService.ProfessionSpecialisation(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    professionArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return professionArr;
        },
        educationGroupBind: function(parentval) {
            var educationGroupArr = [];
            // educationGroupArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.EducationGroup(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    educationGroupArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return educationGroupArr;
        },
        educationSpeciakisationBind: function(parentval) {
            var educationSpecialArr = [];
            // educationSpecialArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.EducationSpecialisation(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    educationSpecialArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return educationSpecialArr;
        },

        numbersBind: function(str, from, to) {
            var numArr = [];

            // numArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            for (var i = from; i <= to; i++) {
                numArr.push({ "label": i + " " + str, "title": i + " " + str, "value": i });
            }
            return numArr;
        },
        numberBindWithZeros: function(str, from, to) {
            var numArr = [];
            var y;
            numArr.push({ "label": str, "title": str, "value": "" });
            for (var x = from; x <= to; x++) {
                if (x < 10)
                    y = ("0" + x);
                else
                    y = x;
                numArr.push({ "label": y, "title": y, "value": parseInt(y) });
            }
            return numArr;
        },
        starBind: function(parentval) {
            var starArr = [];
            // starArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.stars(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    starArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return starArr;
        },
        casteDepedency: function(parentval1, parentval2) {
            var casteArr = [];
            // casteArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.castedependency(parentval1, parentval2).then(function(response) {
                _.each(response.data, function(item) {
                    casteArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return casteArr;
        },
        subCaste: function(parentval1) {
            var subcasteArr = [];
            // subcasteArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.subCasteBind(parentval1).then(function(response) {
                _.each(response.data, function(item) {
                    subcasteArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return subcasteArr;
        },
        branch: function(parentval1) {
            var branchArr = [];
            // branchArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.branch(parentval1).then(function(response) {
                _.each(response.data, function(item) {
                    branchArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return branchArr;
        },
        showConfirm: function(ev, mdDialog, header, okTxt, cancelTxt) {

            var status = false;
            var confirm = mdDialog.confirm()
                .title(header)
                //.textContent('All of the banks have agreed to forgive you your debts.')
                .ariaLabel('Lucky day')
                //.targetEvent(ev)
                .cancel(cancelTxt)
                .ok(okTxt);

            return confirm;

        },
        checkvals: function(val) {
            return (val !== undefined && val !== null && val !== '') ? true : false;
        }

    };

}]);
regApp.service('fileUpload', ['$http', function($http) {
    this.uploadFileToUrl = function(file, uploadUrl, keyname) {
        var fd = new FormData();
        fd.append('file', file);
        fd.append('keyname', keyname);
        return $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        });
    };
}]);
regApp.factory('getArray', ['arrayConstantsreg', 'SelectBindServicereg', 'countryArrayModel',
    'eduprofArrayModel', 'otherArrayModel',
    function(cons, service, countryArrayModel, eduprofArrayModel, otherArrayModel) {
        return {
            GArray: function(type) {
                var option = [];
                switch (type) {

                    case 'MaritalStatus':
                        option = cons.MaritalStatus;
                        break;

                    case 'height':
                        option = cons.height;
                        break;

                    case 'Religion':
                        option = cons.Religion;
                        break;

                    case 'Mothertongue':
                        option = cons.Mothertongue;
                        break;

                    case 'educationcategory':
                        option = cons.educationcategory;
                        break;

                    case 'visastatus':
                        option = cons.visastatus;
                        break;

                    case 'stars':
                        option = cons.stars;
                        break;

                    case 'region':
                        option = cons.region;
                        break;

                    case 'bodyType':
                        option = cons.bodyType;
                        break;

                    case 'bloodGroup':
                        option = cons.bloodGroup;
                        break;

                    case 'healthCondition':
                        option = cons.healthCondition;
                        break;

                    case 'starLanguage':
                        option = cons.starLanguage;
                        break;

                    case 'lagnam':
                        option = cons.lagnam;
                        break;

                    case 'ZodaicSign':
                        option = cons.ZodaicSign;
                        break;

                    case 'paadam':
                        option = cons.paadam;
                        break;

                    case 'familyStatus':
                        option = cons.familyStatus;
                        break;

                    case 'RelationshipType':
                        option = cons.RelationshipType;
                        break;

                    case 'childStayingWith':
                        option = cons.childStayingWith;
                        break;

                    case 'Complexion':
                        option = cons.Complexion;
                        break;

                    case 'PhysicalStatus':
                        option = cons.PhysicalStatus;
                        break;


                    case 'Country':
                        // service.countrySelect().then(function(response) {
                        //     _.each(response.data, function(item) {
                        //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        //     });
                        //     option = option;
                        // });

                        // option = (countryArrayModel.Country);
                        angular.copy(countryArrayModel.Country, option);


                        if (option[0] !== undefined && angular.lowercase(option[0].title) === '--select--') {
                            option.splice(0, 1);
                        }

                        break;

                    case 'ProfCatgory':

                        // service.ProfessionCatgory().then(function(response) {

                        //     //option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        //     _.each(response.data, function(item) {
                        //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        //     });
                        //     option = option;
                        // });

                        angular.copy(eduprofArrayModel.ProfCatgory, option);

                        // option = eduprofArrayModel.ProfCatgory;
                        if (option[0] !== undefined && angular.lowercase(option[0].title) === '--select--') {
                            option.splice(0, 1);
                        }

                        break;

                    case 'ProfGroup':
                        // service.ProfessionGroup().then(function(response) {

                        //     //option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        //     _.each(response.data, function(item) {
                        //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        //     });
                        //     option = option;
                        // });

                        angular.copy(eduprofArrayModel.ProfGroup, option);
                        // option = eduprofArrayModel.ProfGroup;
                        if (option[0] !== undefined && angular.lowercase(option[0].title) === '--select--') {
                            option.splice(0, 1);
                        }

                        break;

                    case 'indiaStates':
                        // service.stateSelect('1').then(function(response) {

                        //     //option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        //     _.each(response.data, function(item) {
                        //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        //     });
                        //     option = option;
                        // });
                        angular.copy(countryArrayModel.IndiaStates, option);

                        // option = countryArrayModel.IndiaStates;
                        if (option[0] !== undefined && angular.lowercase(option[0].title) === '--select--') {
                            option.splice(0, 1);
                        }

                        break;
                    case 'countryCode':
                        // service.countryCodeselect().then(function(response) {

                        //     //option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        //     _.each(response.data, function(item) {
                        //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        //     });
                        //     option = option;
                        // });

                        angular.copy(countryArrayModel.countryCode, option);
                        // option = countryArrayModel.countryCode;
                        if (option[0] !== undefined && angular.lowercase(option[0].title) === '--select--') {
                            option.splice(0, 1);
                        }

                        break;
                    case 'caste':
                        // service.casteselect().then(function(response) {

                        //     //option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        //     _.each(response.data, function(item) {
                        //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        //     });
                        //     option = option;
                        // });
                        angular.copy(otherArrayModel.caste, option);

                        // option = otherArrayModel.caste;
                        if (option[0] !== undefined && angular.lowercase(option[0].title) === '--select--') {
                            option.splice(0, 1);
                        }

                        break;
                    case 'currency':
                        // service.currency().then(function(response) {

                        //     //option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        //     _.each(response.data, function(item) {
                        //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        //     });
                        //     option = option;
                        // });
                        angular.copy(countryArrayModel.currency, option);

                        // option = countryArrayModel.currency;
                        if (option[0] !== undefined && angular.lowercase(option[0].title) === '--select--') {
                            option.splice(0, 1);
                        }



                        break;

                        // case 'CountrYWithCode':
                        //     var Country = [],
                        //         CountryCode = [];
                        //     service.CountryWithCode().then(function(response) {

                        //         _.each(response.data, function(item) {
                        //             Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        //             CountryCode.push({ "label": item.CountryCode, "title": item.CountryCode, "value": item.ID });
                        //         });
                        //         option = [Country, CountryCode];
                        //         console.log('test..');
                        //         console.log(option);
                        //     });


                        //     break;


                }
                return option;
            }
        };

    }
]);
regApp.factory('editmanagePhotoServices', ['$http', function(http) {
    return {
        getPhotoData: function(obj) {
            return http.get(regApp.apipath + 'CustomerPersonal/GetphotosofCustomer', { params: { Custid: obj, EmpID: 2 } });
        },
        submituploadData: function(obj1) {
            return http.post(regApp.apipath + 'CustomerPersonalUpdate/Savephotosofcustomer', JSON.stringify(obj1));
        },
        linqSubmits: function(Custid, iflag) {
            return http.get(regApp.apipath + 'CustomerPersonalUpdate/getPhotoPassword', { params: { CustID: Custid, ipassword: iflag } });
        }
    };
}]);
regApp.factory('myAppFactory', ["$http", function(http) {
    return {
        getData: function() {
            return http({
                method: 'GET',
                url: 'http://angular-data-grid.github.io/demo/data.json'
            });
        },
        getpayment: function(custid) {
            return http.get(regApp.apipath + 'Payment/GetPaymentDetails', { params: { CustID: custid } });
        },
        sendsms: function(CategoryID, Cust_ID, SendPhonenumber) {
            return http.get(regApp.apipath + 'StaticPages/getUnpaidMembersOwnerNotification', { params: { CategoryID: CategoryID, Cust_ID: Cust_ID, SendPhonenumber: SendPhonenumber } });
        }

    };
}]);
regApp.factory('SecondaryRegistrationService', ['$http', function(http) {
    return {
        submitSecodaryRegistration: function(obj) {
            return http.post(regApp.apipath + 'Registration/CustomerRegProfileDetails', JSON.stringify(obj));
        }
    };
}]);
regApp.factory('SelectBindServicereg', ["$http", function(http) {
    return {
        countrySelect: function() {
            return http.get(regApp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "", dependencyValue: "" } });
        },
        stateSelect: function(dependencyVal) {

            return http.get(regApp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "state", dependencyValue: dependencyVal } });
        },
        districtSelect: function(dependencyVal1) {
            return http.get(regApp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "distric", dependencyValue: dependencyVal1 } });
        },
        citySelect: function(dependencyVal2) {

            return http.get(regApp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "city", dependencyValue: dependencyVal2 } });
        },
        EducationCatgory: function() {
            return http.get(regApp.apipath + 'Dependency/getEducationDependency', { params: { dependencyName: "", dependencyValue: "" } });
        },
        EducationGroup: function(dependencyVal2) {

            return http.get(regApp.apipath + 'Dependency/getEducationDependency', { params: { dependencyName: "educationGroup", dependencyValue: dependencyVal2 } });
        },
        EducationSpecialisation: function(dependencyVal2) {

            return http.get(regApp.apipath + 'Dependency/getEducationDependency', { params: { dependencyName: "educationSpeacialisation", dependencyValue: dependencyVal2 } });
        },
        ProfessionCatgory: function() {
            return http.get(regApp.apipath + 'Dependency/getProfessionDependency', { params: { dependencyName: "ProfessionCategory", dependencyValue: "" } });
        },
        ProfessionGroup: function() {
            return http.get(regApp.apipath + 'Dependency/getProfessionDependency', { params: { dependencyName: "", dependencyValue: "" } });
        },
        ProfessionSpecialisation: function(dependencyVal2) {

            return http.get(regApp.apipath + 'Dependency/getProfessionDependency', { params: { dependencyName: "ProfessionSpecialisation", dependencyValue: dependencyVal2 } });
        },
        casteselect: function() {

            return http.get(regApp.apipath + 'Dependency/getDropdown_filling_values', { params: { strDropdownname: "CasteName" } });
        },
        countryCodeselect: function() {

            return http.get(regApp.apipath + 'Dependency/getDropdown_filling_values', { params: { strDropdownname: "CountryCode" } });
        },
        currency: function() {

            return http.get(regApp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'Currency', dependencyValue: '', dependencyflagID: '' } });
        },
        stars: function(obj) {
            return http.get(regApp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'StarType', dependencyValue: obj, dependencyflagID: '' } });
        },
        castedependency: function(obj1, obj2) {

            return http.get(regApp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'Caste', dependencyValue: obj1, dependencyflagID: obj2 } });
        },
        subCasteBind: function(obj1) {

            return http.get(regApp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'SubCaste', dependencyValue: obj1, dependencyflagID: '' } });
        },
        branch: function(obj1) {

            return http.get(regApp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'Region', dependencyValue: obj1, dependencyflagID: '' } });
        },
        CountryWithCode: function() {
            return http.get(regApp.apipath + 'Dependency/getCountryDependencyCountryCode', { params: { dependencyName: "", dependencyValue: "" } });
        }

    };
}]);
angular.module('KaakateeyaRegistration').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('registration/app/views/basicRegistration.html',
    "<div class=\"register_page_main\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h4>registration</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"regmain\">\r" +
    "\n" +
    "        <div class=\"register_page_main_steps\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li><a class=\"active\" href=\"#\" style=\"text-transform: capitalize;\">Basic information</a></li>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0);\" style=\"text-transform: capitalize;\">profile details</a></li>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0);\" style=\"text-transform: capitalize;\">my photos</a></li>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0);\" style=\"text-transform: capitalize;\">my payments</a></li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div layout=\"column\" ng-cloak=\"\" class=\"inputdemoErrors\">\r" +
    "\n" +
    "            <md-content layout-padding=\"\">\r" +
    "\n" +
    "                <form name=\"regForm\" novalidate role=\"form\" ng-submit=\"regForm.$valid && regSubmit(reg);\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"reg_fields_entry clearfix\">\r" +
    "\n" +
    "                        <div class=\"radio-group-my\">\r" +
    "\n" +
    "                            <md-input-container>\r" +
    "\n" +
    "                                <md-radio-group ng-required=\"true\" name=\"rbtngender\" layout=\"row\" ng-model=\"reg.rbtngender\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                                    <md-radio-button value=\"1\" class=\"md-primary\">Male</md-radio-button>\r" +
    "\n" +
    "                                    <md-radio-button value=\"2\"> Female </md-radio-button>\r" +
    "\n" +
    "                                </md-radio-group>\r" +
    "\n" +
    "                                <div ng-messages=\"regForm.rbtngender.$invalid\">\r" +
    "\n" +
    "                                    <div ng-if=\"regForm.rbtngender.$invalid && (regForm.$submitted)\">This is required.</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                                <label> First name</label>\r" +
    "\n" +
    "                                <input maxlength=\"100\" required=\"\" md-asterisk=\"\" name=\"txtfirstname\" ng-model=\"reg.txtfirstname\">\r" +
    "\n" +
    "                                <div ng-messages=\"regForm.txtfirstname.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                                    <div ng-message=\"md-maxlength\">The description must be less than 30 characters long.</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                                <label>Last name</label>\r" +
    "\n" +
    "                                <input maxlength=\"50\" required=\"\" md-asterisk=\"\" name=\"txtlastname\" ng-model=\"reg.txtlastname\">\r" +
    "\n" +
    "                                <div ng-messages=\"regForm.txtlastname.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                                <label>Email</label>\r" +
    "\n" +
    "                                <input required=\"\" maxlength=\"50\" md-asterisk=\"\" name=\"txtEmail\" ng-model=\"reg.txtEmail\" ng-pattern=\"/^.+@.+\\..+$/\" ng-blur=\"valueExists('email',0,reg.txtEmail);\">\r" +
    "\n" +
    "                                <div ng-messages=\"regForm.txtEmail.$error\" role=\"alert\">\r" +
    "\n" +
    "                                    <div ng-message-exp=\"['required', 'pattern']\">\r" +
    "\n" +
    "                                        This is required and enter valid e-mail address.\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                                <label>Password</label>\r" +
    "\n" +
    "                                <input maxlength=\"15\" required=\"\" md-asterisk=\"\" name=\"txtpassword\" ng-model=\"reg.txtpassword\" type=\"password\">\r" +
    "\n" +
    "                                <div ng-messages=\"regForm.txtpassword.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                                <label>Posted by</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlpostedby\" ng-model=\"reg.ddlpostedby\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in postedby\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"regForm.ddlpostedby.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"span4\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"span4\" style=\"width:33%;\">\r" +
    "\n" +
    "                                    <label>date</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlDD\" ng-model=\"reg.ddlDD\" required=\"\" ng-change=\"dayChange(reg,'day');\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in dateArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"regForm.ddlDD.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"span4\" style=\"width:33%;\">\r" +
    "\n" +
    "                                    <label>Month</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlMM\" ng-model=\"reg.ddlMM\" required=\"\" ng-change=\"dayChange(reg,'month');\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in monthArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"regForm.ddlMM.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"span4\" style=\"width:34%;\">\r" +
    "\n" +
    "                                    <label>year</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlYear\" ng-model=\"reg.ddlYear\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in yearArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"regForm.ddlYear.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Religion</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlreligion\" ng-model=\"reg.ddlreligion\" required=\"\" ng-change=\"changeBind(reg.ddlreligion,reg.ddlmothertongue);\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in religion\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"regForm.ddlreligion.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Mother Tongue</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlmothertongue\" ng-model=\"reg.ddlmothertongue\" required=\"\" ng-change=\"changeBind(reg.ddlreligion,reg.ddlmothertongue);\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in Mothertongue\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"regForm.ddlmothertongue.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Caste</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlcaste\" ng-model=\"reg.ddlcaste\" required=\"\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in casteArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"regForm.ddlcaste.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Residing At</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlcountry\" ng-model=\"reg.ddlcountry\" required=\"\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in Country\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"regForm.ddlcountry.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"span4\">\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"span4\" style=\"width: 50%;\">\r" +
    "\n" +
    "                                <label>country code</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlmobilecountry\" ng-model=\"reg.ddlmobilecountry\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in countryCode\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"regForm.ddlmobilecountry.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block span4\" style=\"width: 50%;\">\r" +
    "\n" +
    "                                <label>Mobile number</label>\r" +
    "\n" +
    "                                <input maxlength=\"10\" ng-minlength=\"10\" required=\"\" md-no-asterisk=\"\" ng-pattern=\"/^[0-9]+$/\" name=\"txtMobileNo\" ng-model=\"reg.txtMobileNo\" ng-blur=\"valueExists('number',1,reg.txtMobileNo);\">\r" +
    "\n" +
    "                                <div ng-messages=\"regForm.txtMobileNo.$error\">\r" +
    "\n" +
    "                                    <div ng-message-exp=\"['required', 'pattern','minlength']\">\r" +
    "\n" +
    "                                        This is required and enter only numbers(10 digits).\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"span4\">\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"span4\" style=\"width:33%;\">\r" +
    "\n" +
    "                                <label>Land code</label>\r" +
    "\n" +
    "                                <md-select name=\"ddllandcountry\" ng-model=\"reg.ddllandcountry\" ng-required=\"((regForm.txtMobileNo.$valid && regForm.ddlmobilecountry.$valid) || regForm.ddllandcountry.$valid)?false:true\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in countryCode\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"regForm.ddllandcountry.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block span4\" style=\"width:33%;\">\r" +
    "\n" +
    "                                <label>Area code</label>\r" +
    "\n" +
    "                                <input maxlength=\"8\" ng-required=\"((regForm.txtMobileNo.$valid && regForm.ddlmobilecountry.$valid) || regForm.txtArea.$valid)?false:true\" md-no-asterisk=\"\" name=\"txtArea\" ng-model=\"reg.txtArea\" ng-pattern=\"/^[0-9]+$/\">\r" +
    "\n" +
    "                                <div ng-messages=\"regForm.txtArea.$error\">\r" +
    "\n" +
    "                                    <div ng-message-exp=\"['required', 'pattern']\">\r" +
    "\n" +
    "                                        This is required and enter only numbers.\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "                            <md-input-container class=\"md-block span4\" style=\"width:34%;\">\r" +
    "\n" +
    "                                <label>Landline number</label>\r" +
    "\n" +
    "                                <input maxlength=\"8\" ng-required=\"((regForm.txtMobileNo.$valid && regForm.ddlmobilecountry.$valid) || regForm.txtlandNum.$valid)?false:true\" md-no-asterisk=\"\" name=\"txtlandNum\" ng-model=\"reg.txtlandNum\" ng-pattern=\"/^[0-9]+$/\">\r" +
    "\n" +
    "                                <div ng-messages=\"regForm.txtlandNum.$error\">\r" +
    "\n" +
    "                                    <div ng-message-exp=\"['required', 'pattern']\">\r" +
    "\n" +
    "                                        This is required and enter only numbers.\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"clear\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container>\r" +
    "\n" +
    "                            <md-checkbox ng-model=\"reg.Chkprivacy\" name=\"Chkprivacy\" aria-label=\"Checkbox 1\" ng-required=\"true\" md-asterisk=\"\">\r" +
    "\n" +
    "                                I agree to the\r" +
    "\n" +
    "                                <a ng-model=\"reg.lnkprivacyPolicy\" Font-Size=\"12px\" ng-click=\"redirectprivacy()\">Privacy Policy and T&C.</a>\r" +
    "\n" +
    "                            </md-checkbox>\r" +
    "\n" +
    "                            <div ng-messages=\"regForm.Chkprivacy.$invalid\">\r" +
    "\n" +
    "                                <div ng-if=\"regForm.Chkprivacy.$invalid && (regForm.$submitted)\">This is required.</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"clear\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"reg_submit clearfix\">\r" +
    "\n" +
    "                            <input type=\"submit\" class=\"button_custom\" value=\"SUBMIT\" TabIndex=\"18\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label ID=\"lblResult\" Font-Bold=\"true\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </md-content>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--<button ng-click=\"redirect();\">test</button>-->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "    .btn-group {\r" +
    "\n" +
    "        width: 98%;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*.multiselect {\r" +
    "\n" +
    "        border: solid 1px #ADA2A2 !important;\r" +
    "\n" +
    "        color: #000;\r" +
    "\n" +
    "        background: #fff !important;\r" +
    "\n" +
    "        box-shadow: none !important;\r" +
    "\n" +
    "        height: 34px !important;\r" +
    "\n" +
    "        line-height: 33px;\r" +
    "\n" +
    "        margin: 0 !important;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    */\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .register_page_main input[type=\"email\"],\r" +
    "\n" +
    "    .register_page_main input[type=\"password\"],\r" +
    "\n" +
    "    .register_page_main input[type=\"text\"] {\r" +
    "\n" +
    "        box-shadow: none;\r" +
    "\n" +
    "        border-radius: 3px !important;\r" +
    "\n" +
    "        height: 30px;\r" +
    "\n" +
    "        width: 98%;\r" +
    "\n" +
    "        line-height: 28px;\r" +
    "\n" +
    "        padding: 4px 2%;\r" +
    "\n" +
    "        margin: 0;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .input-group {\r" +
    "\n" +
    "        width: 98%;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    input[type=\"email\"],\r" +
    "\n" +
    "    input[type=\"password\"],\r" +
    "\n" +
    "    input[type=\"text\"] {\r" +
    "\n" +
    "        border: 0 !important;\r" +
    "\n" +
    "        border-bottom: 1px solid red !important;\r" +
    "\n" +
    "        outline: 0 !important;\r" +
    "\n" +
    "        border-style: solid !important;\r" +
    "\n" +
    "        border-color: rgba(0, 0, 0, 0.12) !important;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    md-input-container.md-input-invalid .md-input {\r" +
    "\n" +
    "        border-color: rgb(221, 44, 0) !important;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    md-input-focused {\r" +
    "\n" +
    "        color: rgba(0, 0, 0, 0.87);\r" +
    "\n" +
    "        border-color: rgba(0, 0, 0, 0.12);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-invalid) label input[type=\"password\"],\r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-invalid) .md-input {\r" +
    "\n" +
    "        border-color: rgb(63, 81, 181) !important;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*.selectdemoSelectHeader .demo-header-searchbox {\r" +
    "\n" +
    "        border: none;\r" +
    "\n" +
    "        outline: none;\r" +
    "\n" +
    "        height: 100%;\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        padding: 0;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .selectdemoSelectHeader .demo-select-header {\r" +
    "\n" +
    "        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(0, 0, 0, 0.14), 0 0 0 0 rgba(0, 0, 0, 0.12);\r" +
    "\n" +
    "        padding-left: 10.667px;\r" +
    "\n" +
    "        height: 48px;\r" +
    "\n" +
    "        cursor: pointer;\r" +
    "\n" +
    "        position: relative;\r" +
    "\n" +
    "        display: flex;\r" +
    "\n" +
    "        align-items: center;\r" +
    "\n" +
    "        width: auto;\r" +
    "\n" +
    "    }*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    [class*=\"span\"] {\r" +
    "\n" +
    "        margin-left: 0px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .span4 {\r" +
    "\n" +
    "        padding-right: 3%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .regmain {\r" +
    "\n" +
    "        border: solid 1px #ccc;\r" +
    "\n" +
    "        border-radius: 5px;\r" +
    "\n" +
    "        padding: 7px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .reg_fields_entry .span4 {\r" +
    "\n" +
    "        margin: 0;\r" +
    "\n" +
    "        min-height: 70px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
  );


  $templateCache.put('registration/app/views/confirmEmail.html',
    "<div id=\"invalidVerificationDiv\">\r" +
    "\n" +
    "    <div class=\"header\">\r" +
    "\n" +
    "        Welcome to kaakateeya website\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            verification\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"blink\" align=\"center\">\r" +
    "\n" +
    "        <!--<a ID=\"lnkbtnConfirmStatus\" href=\"/home\">Invalid verification code.</a>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <md-button class=\"md-primary\" ng-href=\"{{googleUrl}}\" target=\"_blank\">Invalid verification code.</md-button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<style type=\"text/css\">\r" +
    "\n" +
    "    .header {\r" +
    "\n" +
    "        color: #ff0000;\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-variant: small-caps;\r" +
    "\n" +
    "        background-color: Yellow;\r" +
    "\n" +
    "        color: Black;\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        letter-spacing: normal;\r" +
    "\n" +
    "        margin-top: 10px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .blink {\r" +
    "\n" +
    "        text-decoration: blink;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
  );


  $templateCache.put('registration/app/views/createNewPassoward.html',
    "<div class=\"wrapper\">\r" +
    "\n" +
    "    <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <b class=\"col-lg-10 col-lg-offset-1\" style=\"color: #000;\">Congratulations ! your Email has been successfully Verified .If you know your  password click on LOGIN button at top right or else Enter your desired password to login to your account.</b>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "            <center>\r" +
    "\n" +
    "                <div id=\"rndcorner\" style=\"width:450px;border-top-left-radius:10px;border-top-right-radius:10px; border:1px solid #d9d9d9; display:block;\">\r" +
    "\n" +
    "                    <div style=\"padding:15px 25px;border-top-left-radius:10px;border-top-right-radius:10px;color:rgb(189, 92, 21);font-size:16px;\" class=\"jumbotron title\">\r" +
    "\n" +
    "                        <label>Create New Password</label></div>\r" +
    "\n" +
    "                    <div style=\"width:400px;\">\r" +
    "\n" +
    "                        <div class=\"row\"><label style=\"color:#2c2828\">you can either use your primary email id or profile id as userid</label></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"form-horizontal\">\r" +
    "\n" +
    "                            <br />\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"form-group\">\r" +
    "\n" +
    "                                    <div class=\"col-lg-4\">\r" +
    "\n" +
    "                                        <label class=\"labelclass\" style=\"color:#323232;\" id=\"\">Primary Email</label></div>\r" +
    "\n" +
    "                                    <div class=\"col-lg-4\"><label ID=\"txtlogin\" style=\"color:#323232;font-weight: normal;\">{{Email}}</label></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"form-group\">\r" +
    "\n" +
    "                                    <div class=\"col-lg-4\">\r" +
    "\n" +
    "                                        <label class=\"labelclass\" style=\"color:#323232;\" id=\"Label1\">Profile Id</label></div>\r" +
    "\n" +
    "                                    <div class=\"col-lg-3\"><label ID=\"lblprofileid\" Enabled=\"false\" style=\"color:#323232;font-weight: normal;\">{{profileID}}</label></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div layout=\"column\" ng-cloak=\"\" class=\"inputdemoErrors\">\r" +
    "\n" +
    "                                <md-content layout-padding=\"\">\r" +
    "\n" +
    "                                    <form name=\"pwdForm\" novalidate role=\"form\">\r" +
    "\n" +
    "                                        <md-input-container class=\"md-block\" style=\"text-align: left;\">\r" +
    "\n" +
    "                                            <label>Password</label>\r" +
    "\n" +
    "                                            <input type=\"password\" maxlength=\"50\" required=\"\" md-asterisk=\"\" name=\"txtPassword\" ng-model=\"pwd.txtPassword\">\r" +
    "\n" +
    "                                            <div ng-messages=\"pwdForm.txtPassword.$error\">\r" +
    "\n" +
    "                                                <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <md-input-container class=\"md-block\" style=\"text-align: left;\">\r" +
    "\n" +
    "                                            <label>Confirm Password</label>\r" +
    "\n" +
    "                                            <input type=\"password\" maxlength=\"50\" required=\"\" md-asterisk=\"\" name=\"txtnewPassword\" ng-model=\"pwd.txtnewPassword\" match-password=\"txtPassword\">\r" +
    "\n" +
    "                                            <div ng-messages=\"pwdForm.txtnewPassword.$error\">\r" +
    "\n" +
    "                                                <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                                                <div ng-message=\"passwordMatch\" class=\"message slide-left\">Your Password did not match</div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </form>\r" +
    "\n" +
    "                                </md-content>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <!--<input type=\"submit\" ID=\"btnlogin\" value=\"login to your account\" class=\"btn btn-success\" OnClick=\"btnlogin_Click\" />-->\r" +
    "\n" +
    "                                <md-button class=\"md-raised md-warn md-hue-2\" ng-click=\"pwdForm.$valid && CerateNewPwdSubmit(pwd);\">login to your account</md-button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <br />\r" +
    "\n" +
    "            </center>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "    .btn-group {\r" +
    "\n" +
    "        width: 98%;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .multiselect {\r" +
    "\n" +
    "        border: solid 1px #ADA2A2 !important;\r" +
    "\n" +
    "        color: #000;\r" +
    "\n" +
    "        background: #fff !important;\r" +
    "\n" +
    "        box-shadow: none !important;\r" +
    "\n" +
    "        height: 34px !important;\r" +
    "\n" +
    "        line-height: 33px;\r" +
    "\n" +
    "        margin: 0 !important;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .register_page_main input[type=\"email\"] {\r" +
    "\n" +
    "        box-shadow: none;\r" +
    "\n" +
    "        border-radius: 3px !important;\r" +
    "\n" +
    "        height: 35px;\r" +
    "\n" +
    "        width: 98%;\r" +
    "\n" +
    "        line-height: 28px;\r" +
    "\n" +
    "        padding: 4px 2%;\r" +
    "\n" +
    "        margin: 0;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .input-group {\r" +
    "\n" +
    "        width: 98%;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    input[type=\"email\"],\r" +
    "\n" +
    "    input[type=\"password\"] {\r" +
    "\n" +
    "        border: 0 !important;\r" +
    "\n" +
    "        border-bottom: 1px solid red !important;\r" +
    "\n" +
    "        outline: 0 !important;\r" +
    "\n" +
    "        border-style: solid !important;\r" +
    "\n" +
    "        border-color: rgba(0, 0, 0, 0.12) !important;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    md-input-container.md-input-invalid .md-input {\r" +
    "\n" +
    "        border-color: rgb(221, 44, 0) !important;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .md-datepicker-input {\r" +
    "\n" +
    "        font-size: 14px;\r" +
    "\n" +
    "        box-sizing: border-box;\r" +
    "\n" +
    "        border: none;\r" +
    "\n" +
    "        box-shadow: none;\r" +
    "\n" +
    "        outline: none;\r" +
    "\n" +
    "        background: transparent;\r" +
    "\n" +
    "        min-width: 299px;\r" +
    "\n" +
    "        max-width: 328px;\r" +
    "\n" +
    "        padding: 0 0 5px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
  );


  $templateCache.put('registration/app/views/managePhoto.html',
    "<div class=\"register_page_main\">\r" +
    "\n" +
    "    <h4>\r" +
    "\n" +
    "        <label Font-Bold=\"true\">registration</label></h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"register_page_main_in\">\r" +
    "\n" +
    "        <div class=\"register_page_main_steps\" id=\"divFlowfalse\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li><a class=\"active\" href=\"#\">Basic information</a></li>\r" +
    "\n" +
    "                <li><a class=\"active\" href=\"#\">profile details</a></li>\r" +
    "\n" +
    "                <li><a class=\"active\" href=\"#\">my photos</a></li>\r" +
    "\n" +
    "                <li><a href=\"#\">my payments</a></li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"my_photos_main\">\r" +
    "\n" +
    "            <h6>Upload your recent Photos for better response</h6>\r" +
    "\n" +
    "            <a class=\"skip_button\" href=\"registration/upgradeMemberShip\">skip this page</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "            <div class=\"dragzone\">\r" +
    "\n" +
    "                <div class=\"pics_selected_list_main clearfix\">\r" +
    "\n" +
    "                    <div class=\"pics_selected_list_main_lt clearfix\">\r" +
    "\n" +
    "                        <p class=\"clearfix\"><span>Upload your three different photos</span></p>\r" +
    "\n" +
    "                        <div id=\"dtimagephoto\" class=\"clearfix\" ng-repeat=\"item in manageArr\" style=\"width:33%;float:left;\">\r" +
    "\n" +
    "                            <div class=\"photos\">\r" +
    "\n" +
    "                                <div class=\"pics_selected_list_item\">\r" +
    "\n" +
    "                                    <div ng-class=\"item.IsActive == 0 && item.PhotoName !== null?'cssMaskdiv clearfix':''\">\r" +
    "\n" +
    "                                        <img ng-model=\"imgPhotoName\" ng-src=\"{{item.ImageUrl}}\" />\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div class=\"pics_selected_list_item_ui clearfix\">\r" +
    "\n" +
    "                                        <div class=\"photos_icon\">\r" +
    "\n" +
    "                                            <!--<input type=\"image\" id=\"imgAdd\" alt=\"add\" ng-click=\"AddImage($index+1,item.Cust_Photos_ID,item.DisplayOrder,item.IsActive);\" ng-show=\"{{item.addButtonvisible}}\" />-->\r" +
    "\n" +
    "                                            <a href=\"javascript:void(0);\" ng-click=\"AddImage($index+1,item.Cust_Photos_ID,item.DisplayOrder,item.IsActive);\" ng-show=\"{{item.addButtonvisible}}\">\r" +
    "\n" +
    "                                                <ng-md-icon icon=\"add_a_photo\" style=\"fill:#665454\" size=\"25\">Add</ng-md-icon>\r" +
    "\n" +
    "                                            </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <a href=\"javascript:void(0);\" ng-show=\"{{item.IsMain==1?false:(item.PhotoName!=null?true:false)}}\" ng-click=\"DeleteImage(item.keyname,item.Cust_Photos_ID);\">\r" +
    "\n" +
    "                                                <ng-md-icon icon=\"delete\" style=\"fill:#665454\" size=\"25\">Delete</ng-md-icon>\r" +
    "\n" +
    "                                            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                                            <a href=\"javascript:void(0);\" class=\"set_pic\" ng-click=\"setAsProfilePic(item.Cust_Photos_ID);\" style=\"color:#665454;font-weight:bold;\" ng-show='{{item.IsMain==\"1\"?false:(item.PhotoName!=null?true:false) }}'>\r" +
    "\n" +
    "                                            Set as Profilepic\r" +
    "\n" +
    "                                            </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"clear\"></div>\r" +
    "\n" +
    "                        <div class=\"edit_page_photo_manage_submit\" ng-hide=\"true\">\r" +
    "\n" +
    "                            <div class=\"edit_page_photo_manage_protect pull-left clearfix\" id=\"divPassword\">\r" +
    "\n" +
    "                                <label class=\"\">\r" +
    "\n" +
    "                                <div class=\"radio_my2 clearfix\">\r" +
    "\n" +
    "                                <label style=\"font-size: 14px !important; font-weight: 400;\"> Protect with Password :</label> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                                <md-radio-group layout=\"row\" ng-model=\"rbtProtectPassword\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\" ng-change=\"setPhotoPassword(rbtProtectPassword);\">\r" +
    "\n" +
    "                                    <md-radio-button value=\"1\" class=\"md-primary\">Yes</md-radio-button>\r" +
    "\n" +
    "                                    <md-radio-button value=\"0\"> No </md-radio-button>\r" +
    "\n" +
    "                                </md-radio-group>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            </label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"photo_upload_instrctns_list clearfix\">\r" +
    "\n" +
    "                    <a ID=\"phtoguide\" href=\"javascript:void(0);\" ng-click=\"redirectPage('PhotoGuideLines');\">Photo guidelines\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    <a ID=\"photofaq\" href=\"javascript:void(0);\" ng-click=\"redirectPage('Faqs');\">Photo faq’s\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    <a ID=\"photoupload\" href=\"javascript:void(0);\" ng-click=\"redirectPage('uploadTips');\">Photo upload tips\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"my_photos_main_block2 clearfix\">\r" +
    "\n" +
    "            <div class=\"clearfix pics_incorrect_list\">\r" +
    "\n" +
    "                <h3>Such Photos cannot be Uploaded</h3>\r" +
    "\n" +
    "                <table id=\"DataList3\" class=\"clearfix\" style=\"border-collapse: collapse;\" cellspacing=\"0\">\r" +
    "\n" +
    "                    <tbody>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList3_ctl00_images\" src=\"src\\images/Side-face.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Side Face\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList3_ctl01_images\" src=\"src\\images/Blir.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Blur\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList3_ctl02_images\" src=\"src\\images/Group-photos.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Group Photo\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList3_ctl03_images\" src=\"src\\images/Water-mark.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Watermark\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                    </tbody>\r" +
    "\n" +
    "                </table>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"pics_selected_list_main_rt clearfix pics_correct_list\">\r" +
    "\n" +
    "                <h3>Photos that can be uploaded</h3>\r" +
    "\n" +
    "                <table id=\"DataList2\" class=\"clearfix\" style=\"border-collapse: collapse;\" cellspacing=\"0\">\r" +
    "\n" +
    "                    <tbody>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList2_ctl00_images\" src=\"src\\images/Close-up.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Close Up\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList2_ctl01_images\" src=\"src\\images/Fulsize.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Full Size\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                    </tbody>\r" +
    "\n" +
    "                </table>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"my_photos_main_block3\">\r" +
    "\n" +
    "            <p>\r" +
    "\n" +
    "                <img src=\"src/images/whatsup.png\" alt=\"Mail\" style=\"width: 50px; height: 40px;\">Whatsup your photos to\r" +
    "\n" +
    "                <span>91-9848535373</span> - Kindly mention your Profile ID and name\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <p>\r" +
    "\n" +
    "                <img src=\"src/images/icon_email.png\" alt=\"Mail\">Can also Email your photos to <span>photos@telugumarriages.com</span> - Kindly mention your Profile ID and name\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"AddimagePopup.html\">\r" +
    "\n" +
    "    <form name=\"uploadForm\" novalidate role=\"form\" ng-submit=\"upload(up);\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Upload Photo </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "            <ul id=\"ulprofession\">\r" +
    "\n" +
    "                <input type=\"file\" file-model=\"up.myFile\" />\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-footer\">\r" +
    "\n" +
    "            <input value=\"Cancel\" class=\"button_custom button_custom_reset\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "            <input value=\"Upload\" class=\"button_custom\" type=\"submit\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"deleteimagePopup.html\">\r" +
    "\n" +
    "    <form name=\"uploadForm\" novalidate role=\"form\" ng-submit=\"Delete(up);\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Delete Photo </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "            <div class=\"text-center\">Are you sure to delete photo?</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-footer\">\r" +
    "\n" +
    "            <input value=\"Close\" class=\"button_custom button_custom_reset\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "            <input value=\"Delete\" class=\"button_custom\" type=\"submit\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "    .cssMaskdiv {\r" +
    "\n" +
    "        position: relative;\r" +
    "\n" +
    "        display: inline-block;\r" +
    "\n" +
    "        overflow: hidden;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .cssMaskdiv:after {\r" +
    "\n" +
    "        background: rgba(0, 0, 0, 0.5) none repeat scroll 0 0;\r" +
    "\n" +
    "        color: #ffffff;\r" +
    "\n" +
    "        content: \"Under Review\";\r" +
    "\n" +
    "        display: block;\r" +
    "\n" +
    "        font-size: 14px;\r" +
    "\n" +
    "        /* height: 100%; */\r" +
    "\n" +
    "        left: 0;\r" +
    "\n" +
    "        padding: 50% 0;\r" +
    "\n" +
    "        position: absolute;\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "        top: 0;\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .linkdisableCls {\r" +
    "\n" +
    "        pointer-events: none;\r" +
    "\n" +
    "        cursor: default;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .profile_own_menu ul li:hover ul {\r" +
    "\n" +
    "        top: 25px;\r" +
    "\n" +
    "        opacity: 1;\r" +
    "\n" +
    "        display: none;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
  );


  $templateCache.put('registration/app/views/materialMultiSelect.html',
    "<md-select ng-model=\"model\" md-on-close=\"clearSearchTerm()\" data-md-container-class=\"selectdemoSelectHeader\" multiple>\r" +
    "\n" +
    "    <md-select-header class=\"demo-select-header\">\r" +
    "\n" +
    "        <input ng-model=\"caste\" type=\"search\" class=\"demo-header-searchbox md-text\">\r" +
    "\n" +
    "    </md-select-header>\r" +
    "\n" +
    "    <md-optgroup label=\"Caste\">\r" +
    "\n" +
    "        <md-option ng-click=\"selectall()\" ng-checked=\"exists(model)\">selectall</md-option>\r" +
    "\n" +
    "        <md-option ng-value=\"caste.value\" ng-repeat=\"caste in Caste |\r" +
    "\n" +
    "        filter:caste\">{{caste.label}}</md-option>\r" +
    "\n" +
    "    </md-optgroup>\r" +
    "\n" +
    "</md-select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--<material-multiselect array=\"dateArr\" model=\"reg.ddlDD\"></material-multiselect>-->"
  );


  $templateCache.put('registration/app/views/payment.html',
    "<div class=\"register_page_main\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h4 class=\"pull-left\">\r" +
    "\n" +
    "        <label>registration</label>\r" +
    "\n" +
    "    </h4>\r" +
    "\n" +
    "    <a class=\"skip_button pull-right\" OnClick=\"skipreg_Click\" href=\"mobileverf\">Complete My Registration </a>\r" +
    "\n" +
    "    <div class=\"clear\"></div>\r" +
    "\n" +
    "    <div class=\"register_page_main_in clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"register_page_main_steps clearfix\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li><a class=\"active\" href=\"#\">Basic information</a></li>\r" +
    "\n" +
    "                <li><a class=\"active\" href=\"#\">profile details</a></li>\r" +
    "\n" +
    "                <li><a class=\"active\" href=\"#\">my photos</a></li>\r" +
    "\n" +
    "                <li><a class=\"active\" href=\"#\">my payments</a></li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div ng-cloak=\"\" class=\"virtualRepeatdemoHorizontalUsage\">\r" +
    "\n" +
    "            <md-content layout=\"column\">\r" +
    "\n" +
    "                <md-virtual-repeat-container id=\"horizontal-container\" md-orient-horizontal=\"\">\r" +
    "\n" +
    "                    <div md-virtual-repeat=\"payment in paymentarray\" class=\"repeated-item\" flex=\"\">\r" +
    "\n" +
    "                        <table class=\"package_table_inner my_packages_main clearfix package_table_main\">\r" +
    "\n" +
    "                            <tbody>\r" +
    "\n" +
    "                                <tr>\r" +
    "\n" +
    "                                    <td class=\"pack_heading1\">\r" +
    "\n" +
    "                                        <label>{{payment.MembershipName}}</label>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                                <tr>\r" +
    "\n" +
    "                                    <td class=\"pack_heading2\" style=\"font-size: 13px !important;\">\r" +
    "\n" +
    "                                        <small class=\"payment-label\">\r" +
    "\n" +
    "                                       <label  class=\"duration_of_pack\" ng-hide=\"payment.MembershipName=='Services & Features'?true:false\">{{payment.MemberShipDuration}} Months</label>\r" +
    "\n" +
    "                                       </small>\r" +
    "\n" +
    "                                        <label><span ng-hide=\"payment.MembershipName=='Services & Features'?true:false\">RS :</span>{{payment.MembershipAmount}}</label>\r" +
    "\n" +
    "                                        <button class=\"button_custom\" ng-hide=\"payment.MembershipName=='Services & Features'?true:false\" ng-click=\"selectpaymantoption(payment.Emp_Membership_ID,payment.MembershipAmount,payment.AllottedServicePoints,'',custid,payment.MembershipName,payment.MemberShipDuration)\">Select</button>\r" +
    "\n" +
    "                                        <div ng-show=\"payment.MembershipName=='Services & Features'?true:false\">\r" +
    "\n" +
    "                                            <br>\r" +
    "\n" +
    "                                            <br>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                                <tr>\r" +
    "\n" +
    "                                    <td class=\"pack_heading1\">\r" +
    "\n" +
    "                                        <b>\r" +
    "\n" +
    "                                  <label>{{payment.AllottedServicePoints}}</label></b>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                                <tr>\r" +
    "\n" +
    "                                    <td class=\"pack_heading3\">\r" +
    "\n" +
    "                                        <b>\r" +
    "\n" +
    "                                         <img src=\"src/images/icon_tick_mark.png\"  ng-hide=\"payment.MembershipName=='Services & Features'?true:false\"/>\r" +
    "\n" +
    "                                          <label   ng-hide=\"payment.MembershipName=='Services & Features'?false:true\">SA Agreed</label>\r" +
    "\n" +
    "                                        </b>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                                <tr>\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "                                        <label>{{payment.onlineaccess}}</label>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                                <tr>\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "                                        <label>{{payment.offlineaccess}}</label>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                                <tr>\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <img ng-src=\"{{payment.Ppath==='../images/icon_tick_mark.png'?'src/images/icon_tick_mark.png':'src/images/icon_x_mark.png'}}\" ng-hide=\"payment.MembershipName=='Services & Features'?true:false\" />\r" +
    "\n" +
    "                                        <label ng-hide=\"payment.MembershipName=='Services & Features'?false:true\">Relationship Manager</label>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                                <tr>\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <img ng-hide=\"payment.MembershipName=='Services & Features'?true:false\" ng-src=\"{{payment.Ppluspath==='../images/icon_tick_mark.png'?'src/images/icon_tick_mark.png':'src/images/icon_x_mark.png'}}\" />\r" +
    "\n" +
    "                                        <label ng-hide=\"payment.MembershipName=='Services & Features'?false:true\">Senior Relationship Manager</label>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <img src=\"src/images/icon_tick_mark.png\" ng-hide=\"payment.MembershipName=='Services & Features'?true:false\" />\r" +
    "\n" +
    "                                    <label ng-hide=\"payment.MembershipName=='Services & Features'?false:true\">Express Interest</label>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                            </tbody>\r" +
    "\n" +
    "                        </table>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </md-virtual-repeat-container>\r" +
    "\n" +
    "            </md-content>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div id=\"ttttt\">\r" +
    "\n" +
    "            <div class=\"my_packages_main_bottom clearfix\">\r" +
    "\n" +
    "                <div layout-gt-sm=\"row\">\r" +
    "\n" +
    "                    <md-input-container class=\"md-block\" flex=55>\r" +
    "\n" +
    "                        <p>Interested in, exclusive match making services for our super special members, Contact us!</p>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "                    <md-input-container class=\"md-block\" flex=20>\r" +
    "\n" +
    "                        <label>Number</label>\r" +
    "\n" +
    "                        <input ng-model=\"payment.mobilenumber\">\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "                    <md-input-container class=\"md-block\" flex=20>\r" +
    "\n" +
    "                        <md-button class=\"md-raised md-warn md-hue-2\" ng-click=\"sendsmspayment(payment)\">Submit</md-button>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "                    <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<style type=\"text/css\">\r" +
    "\n" +
    "    .virtualRepeatdemoHorizontalUsage #horizontal-container {\r" +
    "\n" +
    "        height: 494px;\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        /*max-width: 930px; */\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .virtualRepeatdemoHorizontalUsage .repeated-item {\r" +
    "\n" +
    "        border-right: 1px solid #ddd;\r" +
    "\n" +
    "        box-sizing: border-box;\r" +
    "\n" +
    "        display: inline-block;\r" +
    "\n" +
    "        height: 484px;\r" +
    "\n" +
    "        padding-top: 35px;\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "        width: auto;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .virtualRepeatdemoHorizontalUsage md-content {\r" +
    "\n" +
    "        margin: 16px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .virtualRepeatdemoHorizontalUsage md-virtual-repeat-container {\r" +
    "\n" +
    "        border: solid 1px grey;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    td.pack_heading1 {\r" +
    "\n" +
    "        font-size: 18px !important;\r" +
    "\n" +
    "        line-height: 18px !important;\r" +
    "\n" +
    "        padding: 6px 64px !important;\r" +
    "\n" +
    "        text-transform: uppercase;\r" +
    "\n" +
    "        color: #000 !important;\r" +
    "\n" +
    "        font-weight: 700;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-scroller {\r" +
    "\n" +
    "        overflow-x: hidden;\r" +
    "\n" +
    "        overflow-y: hidden;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
  );


  $templateCache.put('registration/app/views/photoGuideLines.html',
    "<div class=\"register_page_main\">\r" +
    "\n" +
    "    <h4>Guidelines for uploading correct photos</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"photo_guidlines_main\">\r" +
    "\n" +
    "        <div class=\"photo_guidlines_main_item clearfix\">\r" +
    "\n" +
    "            <div class=\"photo_guidlines_main_item_lt pics_incorrect_list clearfix\">\r" +
    "\n" +
    "                <h3>such photos cannot be uploaded</h3>\r" +
    "\n" +
    "                <table id=\"DataList3\" class=\"clearfix\" style=\"border-collapse: collapse;\" cellspacing=\"0\">\r" +
    "\n" +
    "                    <tbody>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList3_ctl00_images\" src=\"src\\images/Side-face.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Side Face\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList3_ctl01_images\" src=\"src\\images/Blir.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Blur\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList3_ctl02_images\" src=\"src\\images/Group-photos.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Group Photo\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList3_ctl03_images\" src=\"src\\images/Water-mark.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Watermark\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                    </tbody>\r" +
    "\n" +
    "                </table>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"photo_guidlines_main_item_rt\">\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    Do not send a photo which shows only a side of your face, blurred or unclear photos, or where your face is partially visible, They will be rejected during screening process.\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    Please ensure that you do not upload celebrity photographs, if such is the case, we may deactivate your membership.\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"photo_guidlines_main_item clearfix\">\r" +
    "\n" +
    "            <div class=\"photo_guidlines_main_item_lt  pics_incorrect_list pics_correct_list clearfix\">\r" +
    "\n" +
    "                <h3>Photos that can be uploaded</h3>\r" +
    "\n" +
    "                <table id=\"DataList2\" class=\"clearfix\" style=\"border-collapse: collapse;\" cellspacing=\"0\">\r" +
    "\n" +
    "                    <tbody>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList2_ctl00_images\" src=\"src\\images/Close-up.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Close Up\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList2_ctl01_images\" src=\"src\\images/Fulsize.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Full Size\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                    </tbody>\r" +
    "\n" +
    "                </table>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"photo_guidlines_main_item_rt\">\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    Please upload half-size or full-size recent photographs.\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"photo_guidlines_main_guideslist\">\r" +
    "\n" +
    "            <h6>Please ensure that none of your photos are obscene or irrelevant. In such a case your account will be deactivated.</h6>\r" +
    "\n" +
    "            <p title=\"1\">Mentioning contact details on photos is prohibited.</p>\r" +
    "\n" +
    "            <p title=\"2\">Do not upload photograph which shows you with a cigarette / cigar.</p>\r" +
    "\n" +
    "            <p title=\"3\">Photograph which does not match with the age specified in the profile will not be uploaded.</p>\r" +
    "\n" +
    "            <p title=\"4\">Do not upload photos wearing govt service uniforms unless they match your profession.(eg.army,navy, police etc.)</p>\r" +
    "\n" +
    "            <p title=\"5\">Optimum photo size is 400 width x 500 height.</p>\r" +
    "\n" +
    "            <p title=\"6\">If you choose to mail photos,please mention profile picture.</p>\r" +
    "\n" +
    "            <p title=\"7\">photos uploaded will undergo screening and updated within 2 hours during the business hours.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('registration/app/views/secondaryRegisrtation.html',
    "<div class=\"register_page_main\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h4>registration</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"regmain\">\r" +
    "\n" +
    "        <div class=\"register_page_main_steps\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li><a class=\"active\" href=\"javascript:void(0);\" style=\"text-transform: capitalize;\">Basic information</a></li>\r" +
    "\n" +
    "                <li><a class=\"active\" href=\"javascript:void(0);\" style=\"text-transform: capitalize;\">Profile details</a></li>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0);\" style=\"text-transform: capitalize;\">my photos</a></li>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0);\" style=\"text-transform: capitalize;\">my payments</a></li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div layout=\"column\" ng-cloak=\"\" class=\"inputdemoErrors\">\r" +
    "\n" +
    "            <md-content layout-padding=\"\">\r" +
    "\n" +
    "                <form name=\"secregForm\" accessible-form novalidate role=\"form\" ng-submit=\"secregForm.$valid && secondRegSubmit(regsec);\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"reg_fields_entry clearfix\">\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                            <label>Name</label>\r" +
    "\n" +
    "                            <input readonly md-no-asterisk=\"\" name=\"LabelName\" ng-model=\"regsec.LabelName\">\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Marital Status</label>\r" +
    "\n" +
    "                            <md-select name=\"rbtnmarital\" ng-model=\"regsec.rbtnmarital\" required=\"\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in MaritalStatus\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.rbtnmarital.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Complexion</label>\r" +
    "\n" +
    "                            <md-select name=\"rbtncomplexion\" ng-model=\"regsec.rbtncomplexion\" required=\"\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in Complexion\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.rbtncomplexion.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Physically Challenged</label>\r" +
    "\n" +
    "                            <md-select name=\"rbtnphysicalstatus\" ng-model=\"regsec.rbtnphysicalstatus\" required=\"\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in PhysicalStatus\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.rbtnphysicalstatus.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Height</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlHeight\" ng-model=\"regsec.ddlHeight\" required=\"\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in height\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.ddlHeight.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Born Citizenship</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlBornCitizenship\" ng-model=\"regsec.ddlBornCitizenship\" required=\"\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in Country\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.ddlBornCitizenship.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"clear\"></div>\r" +
    "\n" +
    "                        <!--<hr>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h4 class=\"well\">Education details</h4>\r" +
    "\n" +
    "                        </br>\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Education category</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlEduCategory\" ng-model=\"regsec.ddlEduCategory\" required=\"\" ng-change=\"changeBind('educat',regsec.ddlEduCategory)\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in educationcategory\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.ddlEduCategory.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Group</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlEduGroup\" ng-model=\"regsec.ddlEduGroup\" required=\"\" ng-change=\"changeBind('edugroup',regsec.ddlEduGroup)\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in edugroup\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.ddlEduGroup.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Specialization</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlEduSpecialisation\" ng-model=\"regsec.ddlEduSpecialisation\" required=\"\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in eduSplArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.ddlEduSpecialisation.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"control-group span12\">\r" +
    "\n" +
    "                            <md-input-container class=\"md-block span12\">\r" +
    "\n" +
    "                                <label>Education merits</label>\r" +
    "\n" +
    "                                <textarea maxlength=\"500\" rows=\"2\" md-no-asterisk=\"\" name=\"txtEducationMerits\" ng-model=\"regsec.txtEducationMerits\"></textarea>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"clear\"></div>\r" +
    "\n" +
    "                        <!--<hr>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h4 class=\"well\">profession details</h4>\r" +
    "\n" +
    "                        </br>\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Employed in</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlEmployedIn\" ng-model=\"regsec.ddlEmployedIn\" required=\"\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in ProfCatgory\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.ddlEmployedIn.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Profession Group</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlProfessionalGroup\" ng-model=\"regsec.ddlProfessionalGroup\" required=\"\" ng-change=\"changeBind('profGroup',regsec.ddlProfessionalGroup)\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in ProfGroup\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.ddlProfessionalGroup.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Profession</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlProfession\" ng-model=\"regsec.ddlProfession\" required=\"\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in professionArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.ddlProfession.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                            <label>Company name</label>\r" +
    "\n" +
    "                            <input maxlength=\"100\" md-no-asterisk=\"\" name=\"txtCompanyName\" ng-model=\"regsec.txtCompanyName\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Currency</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlcurrency\" ng-model=\"regsec.ddlcurrency\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in currency\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                            <label>Monthly Salary</label>\r" +
    "\n" +
    "                            <input maxlength=\"7\" md-no-asterisk=\"\" name=\"txtSalary\" ng-model=\"regsec.txtSalary\" ng-pattern=\"/^[0-9]+$/\">\r" +
    "\n" +
    "                            <div ng-messages=\"secregForm.txtSalary.$error\">\r" +
    "\n" +
    "                                <div ng-message-exp=\"['pattern']\">\r" +
    "\n" +
    "                                    enter only numbers.\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span12\">\r" +
    "\n" +
    "                            <label>Occupation details</label>\r" +
    "\n" +
    "                            <textarea maxlength=\"500\" rows=\"2\" md-no-asterisk=\"\" name=\"txtOcccupationDetails\" ng-model=\"regsec.txtOcccupationDetails\"></textarea>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"clear\"></div>\r" +
    "\n" +
    "                        <!--<hr>-->\r" +
    "\n" +
    "                        <h4 class=\"well\">Candidate location details</h4>\r" +
    "\n" +
    "                        <br>\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Country living in</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlCountryLivingIn\" ng-model=\"regsec.ddlCountryLivingIn\" ng-change=\"changeBind('Country',regsec.ddlCountryLivingIn)\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in Country\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.ddlCountryLivingIn.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>State</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlStatelivingIn\" ng-model=\"regsec.ddlStatelivingIn\" required=\"\" ng-change=\"changeBind('state',regsec.ddlStatelivingIn,regsec.ddlCountryLivingIn)\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in stateArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.ddlStatelivingIn.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\" ng-if=\"regsec.ddlCountryLivingIn==1\">\r" +
    "\n" +
    "                            <label>District</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlDistricLivingIn\" ng-model=\"regsec.ddlDistricLivingIn\" required=\"\" ng-change=\"changeBind('district',regsec.ddlDistricLivingIn)\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in districtArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.ddlDistricLivingIn.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>City</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlcityLivingIn\" ng-model=\"regsec.ddlcityLivingIn\" required=\"\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in cityArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                            <div class=\"errors\" ng-messages=\"secregForm.ddlcityLivingIn.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\" ng-hide=\"regsec.ddlBornCitizenship==regsec.ddlCountryLivingIn\">\r" +
    "\n" +
    "                            <label>Visa status</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlVisaStatus\" ng-model=\"regsec.ddlVisaStatus\">\r" +
    "\n" +
    "                                <md-option ng-value=\"h.value\" ng-repeat=\"h in visastatus\">{{h.label}} </md-option>\r" +
    "\n" +
    "                            </md-select>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"span4\" style=\"padding-right: 0px;\" ng-hide=\"regsec.ddlBornCitizenship==regsec.ddlCountryLivingIn\">\r" +
    "\n" +
    "                            <label>Residing since</label>\r" +
    "\n" +
    "                            <md-datepicker ng-model=\"regsec.from\" md-min-date=\"minDate\" md-max-date=\"maxDate\">\r" +
    "\n" +
    "                            </md-datepicker>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"clear\"></div>\r" +
    "\n" +
    "                        <!--<hr>-->\r" +
    "\n" +
    "                        <h4 class=\"well\">Family details</h4>\r" +
    "\n" +
    "                        <br>\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                            <label>Father Name</label>\r" +
    "\n" +
    "                            <input maxlength=\"100\" required=\"\" md-asterisk=\"\" name=\"txtFatherName\" ng-model=\"regsec.txtFatherName\">\r" +
    "\n" +
    "                            <div ng-messages=\"secregForm.txtFatherName.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                                <div ng-message=\"md-maxlength\">The description must be less than 30 characters long.</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                            <label>Father’s education</label>\r" +
    "\n" +
    "                            <input maxlength=\"150\" md-no-asterisk=\"\" name=\"txtFatherEducation\" ng-model=\"regsec.txtFatherEducation\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                            <label>Father’s profession</label>\r" +
    "\n" +
    "                            <input maxlength=\"200\" md-no-asterisk=\"\" name=\"txtFatherProfession\" ng-model=\"regsec.txtFatherProfession\">\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                            <label>Mother’s name</label>\r" +
    "\n" +
    "                            <input maxlength=\"100\" required=\"\" md-asterisk=\"\" name=\"txtMotherName\" ng-model=\"regsec.txtMotherName\">\r" +
    "\n" +
    "                            <div ng-messages=\"secregForm.txtMotherName.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                            <label>Mother’s education</label>\r" +
    "\n" +
    "                            <input maxlength=\"150\" md-no-asterisk=\"\" name=\"txtMotherEducation\" ng-model=\"regsec.txtMotherEducation\">\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                            <label>Mother’s profession</label>\r" +
    "\n" +
    "                            <input maxlength=\"200\" md-no-asterisk=\"\" name=\"txtMotherprofession\" ng-model=\"regsec.txtMotherprofession\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                            <label>Father’s Native place</label>\r" +
    "\n" +
    "                            <input maxlength=\"100\" md-no-asterisk=\"\" name=\"txtfathernative\" ng-model=\"regsec.txtfathernative\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                            <label>Mother’s Native place</label>\r" +
    "\n" +
    "                            <input maxlength=\"100\" md-no-asterisk=\"\" name=\"txtmothernative\" ng-model=\"regsec.txtmothernative\">\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "                        <div class=\"span4\">\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                                <label>No of Brothers</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlBrothers\" ng-model=\"regsec.ddlBrothers\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in noOfsibblingsArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlBrothers.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                                <label>No of Sisters</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlSisters\" ng-model=\"regsec.ddlSisters\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in noOfsibblingsArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlSisters.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"clear\"></div>\r" +
    "\n" +
    "                        <!--<hr>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <h4 class=\"well\">About yourself</h4>\r" +
    "\n" +
    "                            <p>\r" +
    "\n" +
    "                                Write About your unique characteristics,The Most Important Things In your life like your Aspiration, Interests, things you like to do,,,,,\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </p>\r" +
    "\n" +
    "                            <div class=\"profile_self_dcrb\">\r" +
    "\n" +
    "                                <p>(Minimum 50 characters and maximum 1000 characters).</p>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block\">\r" +
    "\n" +
    "                                <label>About yourself</label>\r" +
    "\n" +
    "                                <textarea maxlength=\"1000\" rows=\"3\" ng-minlength=\"50\" required=\"\" md-asterisk=\"\" name=\"txtabouturself\" ng-model=\"regsec.txtabouturself\"></textarea>\r" +
    "\n" +
    "                                <div ng-messages=\"secregForm.txtabouturself.$error\">\r" +
    "\n" +
    "                                    <div ng-message-exp=\"['required', 'minlength']\">\r" +
    "\n" +
    "                                        This is required and enter Minimum 50 characters\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <p><span>Note: </span>Do not mention any contact information <b>phone numbers, email id’s</b> or your profile may be rejected.</p>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"clear\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"reg_submit clearfix\">\r" +
    "\n" +
    "                            <input type=\"submit\" value=\"SUBMIT\" class=\"button_custom\" tabindex=\"37\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </md-content>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--<button ng-click=\"redirect();\">test</button>-->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "    .btn-group {\r" +
    "\n" +
    "        width: 98%;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .multiselect {\r" +
    "\n" +
    "        border: solid 1px #ADA2A2 !important;\r" +
    "\n" +
    "        color: #000;\r" +
    "\n" +
    "        background: #fff !important;\r" +
    "\n" +
    "        box-shadow: none !important;\r" +
    "\n" +
    "        height: 34px !important;\r" +
    "\n" +
    "        line-height: 33px;\r" +
    "\n" +
    "        margin: 0 !important;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .register_page_main textarea {\r" +
    "\n" +
    "        box-shadow: none;\r" +
    "\n" +
    "        border-radius: 3px !important;\r" +
    "\n" +
    "        height: 35px;\r" +
    "\n" +
    "        width: 98%;\r" +
    "\n" +
    "        line-height: 28px;\r" +
    "\n" +
    "        padding: 4px 2%;\r" +
    "\n" +
    "        margin: 0;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .input-group {\r" +
    "\n" +
    "        width: 98%;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*textarea {\r" +
    "\n" +
    "        border: 0 !important;\r" +
    "\n" +
    "        border-bottom: 1px solid red !important;\r" +
    "\n" +
    "        outline: 0 !important;\r" +
    "\n" +
    "        border-style: solid !important;\r" +
    "\n" +
    "        border-color: rgba(0, 0, 0, 0.12) !important;\r" +
    "\n" +
    "    }*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    md-input-container.md-input-invalid .md-input {\r" +
    "\n" +
    "        border-color: rgb(221, 44, 0) !important;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .md-datepicker-input {\r" +
    "\n" +
    "        font-size: 14px;\r" +
    "\n" +
    "        box-sizing: border-box;\r" +
    "\n" +
    "        border: none;\r" +
    "\n" +
    "        box-shadow: none;\r" +
    "\n" +
    "        outline: none;\r" +
    "\n" +
    "        background: transparent;\r" +
    "\n" +
    "        min-width: 299px;\r" +
    "\n" +
    "        max-width: 328px;\r" +
    "\n" +
    "        padding: 0 0 5px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .span4 {\r" +
    "\n" +
    "        padding-right: 3%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .span4 md-datepicker {\r" +
    "\n" +
    "        padding-right: 0% !important;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .well {\r" +
    "\n" +
    "        padding: 11px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .regmain {\r" +
    "\n" +
    "        border: solid 1px #ccc;\r" +
    "\n" +
    "        border-radius: 5px;\r" +
    "\n" +
    "        padding: 7px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    ._md-datepicker-floating-label>md-datepicker .md-datepicker-button {\r" +
    "\n" +
    "        float: right;\r" +
    "\n" +
    "        margin-top: -2.5px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    ._md-datepicker-floating-label._md-datepicker-has-calendar-icon>label:not(.md-no-float):not(.md-container-ignore) {\r" +
    "\n" +
    "        right: 18px;\r" +
    "\n" +
    "        left: 0;\r" +
    "\n" +
    "        width: calc(100% - 84px);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .md-block>textarea {\r" +
    "\n" +
    "        border: 1px solid rgb(201, 188, 188) !important;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .reg_fields_entry .span4 {\r" +
    "\n" +
    "        margin: 0;\r" +
    "\n" +
    "        min-height: 70px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .linkdisableCls {\r" +
    "\n" +
    "        pointer-events: none;\r" +
    "\n" +
    "        cursor: default;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .profile_own_menu ul li:hover ul {\r" +
    "\n" +
    "        top: 25px;\r" +
    "\n" +
    "        opacity: 1;\r" +
    "\n" +
    "        display: none;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
  );


  $templateCache.put('registration/app/views/uploadTips.html',
    "<style type=\"text/css\">\r" +
    "\n" +
    "    body {\r" +
    "\n" +
    "        font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\r" +
    "\n" +
    "        font-size: 14px;\r" +
    "\n" +
    "        /*background-image:url('src/images/bg/bg3.jpg');*/\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    table {\r" +
    "\n" +
    "        padding: 0px;\r" +
    "\n" +
    "        border-spacing: 0;\r" +
    "\n" +
    "        border-collapse: collapse;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    p {\r" +
    "\n" +
    "        font-size: 12px;\r" +
    "\n" +
    "        /*color: #58a718;*/\r" +
    "\n" +
    "        color: #ffa500;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lstSearch {\r" +
    "\n" +
    "        height: 80px;\r" +
    "\n" +
    "        width: 150px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lnkSkipPage {\r" +
    "\n" +
    "        color: #793532;\r" +
    "\n" +
    "        text-decoration: none;\r" +
    "\n" +
    "        font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\r" +
    "\n" +
    "        font-size: 12px;\r" +
    "\n" +
    "        padding-bottom: 10px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .aspxContentdiv {\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "        height: 100%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /* Top ribbon --Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .pghd {\r" +
    "\n" +
    "        font-size: 14px;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        padding-left: 5px;\r" +
    "\n" +
    "        height: 25px;\r" +
    "\n" +
    "        line-height: 25px;\r" +
    "\n" +
    "        color: #ffffff;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "        vertical-align: middle;\r" +
    "\n" +
    "        /*background-color: #BADD74; */\r" +
    "\n" +
    "        /*background-image: url(src/images/pgbg01.jpg); 	background-repeat: repeat-x; 	background-color: #ffffff; 	border-bottom: solid 1px #029348; 	border-left: solid 5px #029348;*/\r" +
    "\n" +
    "        border-bottom: 1px solid #3f89c3;\r" +
    "\n" +
    "        width: 99%;\r" +
    "\n" +
    "        margin: 0 auto;\r" +
    "\n" +
    "        margin-top: 10px;\r" +
    "\n" +
    "        margin-bottom: 10px;\r" +
    "\n" +
    "        /* IE9 SVG, needs conditional override of 'filter' to 'none' */\r" +
    "\n" +
    "        filter: none;\r" +
    "\n" +
    "        border-radius: 10px 10px 10px 10px;\r" +
    "\n" +
    "        background: rgb(249, 89, 89);\r" +
    "\n" +
    "        /* Old browsers */\r" +
    "\n" +
    "        /* IE9 SVG, needs conditional override of 'filter' to 'none' */\r" +
    "\n" +
    "        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y5NTk1OSIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9Ijg4JSIgc3RvcC1jb2xvcj0iIzc3MDMwMCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3OTM1MzIiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\r" +
    "\n" +
    "        background: -moz-linear-gradient(top, rgba(249, 89, 89, 1) 0%, rgba(119, 3, 0, 1) 88%, rgba(121, 53, 50, 1) 100%);\r" +
    "\n" +
    "        /* FF3.6+ */\r" +
    "\n" +
    "        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(249, 89, 89, 1)), color-stop(88%, rgba(119, 3, 0, 1)), color-stop(100%, rgba(121, 53, 50, 1)));\r" +
    "\n" +
    "        /* Chrome,Safari4+ */\r" +
    "\n" +
    "        background: -webkit-linear-gradient(top, rgba(249, 89, 89, 1) 0%, rgba(119, 3, 0, 1) 88%, rgba(121, 53, 50, 1) 100%);\r" +
    "\n" +
    "        /* Chrome10+,Safari5.1+ */\r" +
    "\n" +
    "        background: -o-linear-gradient(top, rgba(249, 89, 89, 1) 0%, rgba(119, 3, 0, 1) 88%, rgba(121, 53, 50, 1) 100%);\r" +
    "\n" +
    "        /* Opera 11.10+ */\r" +
    "\n" +
    "        background: -ms-linear-gradient(top, rgba(249, 89, 89, 1) 0%, rgba(119, 3, 0, 1) 88%, rgba(121, 53, 50, 1) 100%);\r" +
    "\n" +
    "        /* IE10+ */\r" +
    "\n" +
    "        background: linear-gradient(to bottom, rgba(249, 89, 89, 1) 0%, rgba(119, 3, 0, 1) 88%, rgba(121, 53, 50, 1) 100%);\r" +
    "\n" +
    "        /* W3C */\r" +
    "\n" +
    "        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#f95959', endColorstr='#793532', GradientType=0);\r" +
    "\n" +
    "        /* IE6-8 */\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /* Top ribbon --End*/\r" +
    "\n" +
    "    /*Control Holder in aspx page--Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ControlHolder {\r" +
    "\n" +
    "        float: left;\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Control Holder in aspx page--Ends*/\r" +
    "\n" +
    "    /*Input fields(email, number, password, tel, text, url, file) style for show, hover and focus -- Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    input[type=email],\r" +
    "\n" +
    "    input[type=number],\r" +
    "\n" +
    "    input[type=password],\r" +
    "\n" +
    "    input[type=tel],\r" +
    "\n" +
    "    input[type=text],\r" +
    "\n" +
    "    input[type=url],\r" +
    "\n" +
    "    input[type=file] {\r" +
    "\n" +
    "        display: inline-block;\r" +
    "\n" +
    "        height: 27px;\r" +
    "\n" +
    "        width: 200px;\r" +
    "\n" +
    "        line-height: 25px;\r" +
    "\n" +
    "        margin: 0;\r" +
    "\n" +
    "        padding: 0 8px;\r" +
    "\n" +
    "        background: #fff;\r" +
    "\n" +
    "        border: 1px solid #d9d9d9;\r" +
    "\n" +
    "        border-top: 1px solid #c0c0c0;\r" +
    "\n" +
    "        -webkit-box-sizing: border-box;\r" +
    "\n" +
    "        -moz-box-sizing: border-box;\r" +
    "\n" +
    "        box-sizing: border-box;\r" +
    "\n" +
    "        -webkit-border-radius: 3px;\r" +
    "\n" +
    "        -moz-border-radius: 3px;\r" +
    "\n" +
    "        border-radius: 3px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    input[type=email]:hover,\r" +
    "\n" +
    "    input[type=number]:hover,\r" +
    "\n" +
    "    input[type=password]:hover,\r" +
    "\n" +
    "    input[type=tel]:hover,\r" +
    "\n" +
    "    input[type=text]:hover,\r" +
    "\n" +
    "    input[type=url]:hover,\r" +
    "\n" +
    "    input[type=file]:hover {\r" +
    "\n" +
    "        border: 1px solid #b9b9b9;\r" +
    "\n" +
    "        border-top: 1px solid #a0a0a0;\r" +
    "\n" +
    "        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "        -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    input[type=email]:focus,\r" +
    "\n" +
    "    input[type=number]:focus,\r" +
    "\n" +
    "    input[type=password]:focus,\r" +
    "\n" +
    "    input[type=tel]:focus,\r" +
    "\n" +
    "    input[type=text]:focus,\r" +
    "\n" +
    "    input[type=url]:focus,\r" +
    "\n" +
    "    input[type=file]:focus {\r" +
    "\n" +
    "        outline: none;\r" +
    "\n" +
    "        border: 1px solid #793532;\r" +
    "\n" +
    "        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "        -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Input fields(email, number, password, tel, text, url, file) style for show, hover and focus -- Ends*/\r" +
    "\n" +
    "    /*Textarea style for show, hover and focus -- Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    textarea {\r" +
    "\n" +
    "        resize: none;\r" +
    "\n" +
    "        display: inline-block;\r" +
    "\n" +
    "        height: 100px;\r" +
    "\n" +
    "        width: 300px;\r" +
    "\n" +
    "        line-height: 25px;\r" +
    "\n" +
    "        margin: 0;\r" +
    "\n" +
    "        padding: 0 8px;\r" +
    "\n" +
    "        background: #fff;\r" +
    "\n" +
    "        border: 1px solid #d9d9d9;\r" +
    "\n" +
    "        border-top: 1px solid #c0c0c0;\r" +
    "\n" +
    "        -webkit-box-sizing: border-box;\r" +
    "\n" +
    "        -moz-box-sizing: border-box;\r" +
    "\n" +
    "        box-sizing: border-box;\r" +
    "\n" +
    "        -webkit-border-radius: 3px;\r" +
    "\n" +
    "        -moz-border-radius: 3px;\r" +
    "\n" +
    "        border-radius: 3px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    textarea:hover {\r" +
    "\n" +
    "        border: 1px solid #b9b9b9;\r" +
    "\n" +
    "        border-top: 1px solid #a0a0a0;\r" +
    "\n" +
    "        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "        -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    textarea:focus {\r" +
    "\n" +
    "        outline: none;\r" +
    "\n" +
    "        border: 1px solid #793532;\r" +
    "\n" +
    "        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "        -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Textarea style for show, hover and focus -- Ends*/\r" +
    "\n" +
    "    /*Input fields(Dropdown) style for show, hover and focus -- Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ddlInput {\r" +
    "\n" +
    "        display: inline-block;\r" +
    "\n" +
    "        height: 27px;\r" +
    "\n" +
    "        width: 200px;\r" +
    "\n" +
    "        padding-top: 0px;\r" +
    "\n" +
    "        vertical-align: middle;\r" +
    "\n" +
    "        margin: 0;\r" +
    "\n" +
    "        background: #fff;\r" +
    "\n" +
    "        border: 1px solid #d9d9d9;\r" +
    "\n" +
    "        border-top: 1px solid #c0c0c0;\r" +
    "\n" +
    "        -webkit-box-sizing: border-box;\r" +
    "\n" +
    "        -moz-box-sizing: border-box;\r" +
    "\n" +
    "        box-sizing: border-box;\r" +
    "\n" +
    "        -webkit-border-radius: 3px;\r" +
    "\n" +
    "        -moz-border-radius: 3px;\r" +
    "\n" +
    "        border-radius: 3px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ddlInput:hover {\r" +
    "\n" +
    "        border: 1px solid #b9b9b9;\r" +
    "\n" +
    "        border-top: 1px solid #a0a0a0;\r" +
    "\n" +
    "        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "        -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ddlInput:focus {\r" +
    "\n" +
    "        outline: none;\r" +
    "\n" +
    "        border: 1px solid #793532;\r" +
    "\n" +
    "        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "        -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Input fields(Dropdown) style for show, hover and focus -- Ends*/\r" +
    "\n" +
    "    /*Input fields(Select) style for show, hover and focus -- Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .selInput {\r" +
    "\n" +
    "        display: inline-block;\r" +
    "\n" +
    "        height: 70px;\r" +
    "\n" +
    "        width: 200px;\r" +
    "\n" +
    "        padding-top: 4px;\r" +
    "\n" +
    "        vertical-align: middle;\r" +
    "\n" +
    "        margin: 0;\r" +
    "\n" +
    "        background: #fff;\r" +
    "\n" +
    "        border: 1px solid #d9d9d9;\r" +
    "\n" +
    "        border-top: 1px solid #c0c0c0;\r" +
    "\n" +
    "        -webkit-box-sizing: border-box;\r" +
    "\n" +
    "        -moz-box-sizing: border-box;\r" +
    "\n" +
    "        box-sizing: border-box;\r" +
    "\n" +
    "        -webkit-border-radius: 3px;\r" +
    "\n" +
    "        -moz-border-radius: 3px;\r" +
    "\n" +
    "        border-radius: 3px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .selInput:hover {\r" +
    "\n" +
    "        border: 1px solid #b9b9b9;\r" +
    "\n" +
    "        border-top: 1px solid #a0a0a0;\r" +
    "\n" +
    "        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "        -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .selInput:focus {\r" +
    "\n" +
    "        outline: none;\r" +
    "\n" +
    "        border: 1px solid #793532;\r" +
    "\n" +
    "        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "        -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Input fields(Select) style for show, hover and focus -- Ends*/\r" +
    "\n" +
    "    /*Input fields(Other) style for show, hover and focus -- Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .txtOther {\r" +
    "\n" +
    "        display: inline-block;\r" +
    "\n" +
    "        height: 70px;\r" +
    "\n" +
    "        width: 27px;\r" +
    "\n" +
    "        padding-top: 2px;\r" +
    "\n" +
    "        vertical-align: middle;\r" +
    "\n" +
    "        margin: 0;\r" +
    "\n" +
    "        background: #fff;\r" +
    "\n" +
    "        border: 1px solid #d9d9d9;\r" +
    "\n" +
    "        border-top: 1px solid #c0c0c0;\r" +
    "\n" +
    "        -webkit-box-sizing: border-box;\r" +
    "\n" +
    "        -moz-box-sizing: border-box;\r" +
    "\n" +
    "        box-sizing: border-box;\r" +
    "\n" +
    "        -webkit-border-radius: 3px;\r" +
    "\n" +
    "        -moz-border-radius: 3px;\r" +
    "\n" +
    "        border-radius: 3px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .txtOther:hover {\r" +
    "\n" +
    "        border: 1px solid #b9b9b9;\r" +
    "\n" +
    "        border-top: 1px solid #a0a0a0;\r" +
    "\n" +
    "        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "        -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .txtOther:focus {\r" +
    "\n" +
    "        outline: none;\r" +
    "\n" +
    "        border: 1px solid #793532;\r" +
    "\n" +
    "        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "        -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Input fields(Select) style for show, hover and focus -- Ends*/\r" +
    "\n" +
    "    /* Design -Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .UserControlContentDiv {\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        border: solid 0px #ffffff;\r" +
    "\n" +
    "        padding-left: 3px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .DesignTableContent {\r" +
    "\n" +
    "        width: 894px;\r" +
    "\n" +
    "        top: 150px;\r" +
    "\n" +
    "        vertical-align: top;\r" +
    "\n" +
    "        padding: 0;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .BoxContentTD {\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "        vertical-align: top;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .panelhd {\r" +
    "\n" +
    "        padding-left: 5px;\r" +
    "\n" +
    "        height: 150px;\r" +
    "\n" +
    "        vertical-align: middle;\r" +
    "\n" +
    "        /*background-color: #BADD74; */\r" +
    "\n" +
    "        background-image: url(src/images/Corner_center1.jpg);\r" +
    "\n" +
    "        /*background-image: url(src/images/pnlhdrbg.jpg); */\r" +
    "\n" +
    "        background-repeat: repeat-x;\r" +
    "\n" +
    "        background-color: #ffffff;\r" +
    "\n" +
    "        /*border-top: solid 1px #BADD74;*/\r" +
    "\n" +
    "        border-bottom: 1px solid #cccdcf;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .Boxleft {\r" +
    "\n" +
    "        background-image: url(src/images/Corner_left1.jpg);\r" +
    "\n" +
    "        background-repeat: no-repeat;\r" +
    "\n" +
    "        background-color: #ffffff;\r" +
    "\n" +
    "        width: 10px;\r" +
    "\n" +
    "        height: 150px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .BoxRight {\r" +
    "\n" +
    "        background-image: url(src/images/Corner_right1.jpg);\r" +
    "\n" +
    "        background-repeat: no-repeat;\r" +
    "\n" +
    "        background-color: #ffffff;\r" +
    "\n" +
    "        width: 10px;\r" +
    "\n" +
    "        height: 150px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .BoxHeadingTable {\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .txtWaterMark {\r" +
    "\n" +
    "        border: solid 1px #6D6D6D;\r" +
    "\n" +
    "        width: 200px;\r" +
    "\n" +
    "        height: 18px;\r" +
    "\n" +
    "        margin-right: 10px;\r" +
    "\n" +
    "        background-image: url('src/images/txtbg_normal.png');\r" +
    "\n" +
    "        background-repeat: repeat-x;\r" +
    "\n" +
    "        color: #6a6a6a;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    input.txtAraCode,\r" +
    "\n" +
    "    input.txtCurrencymini {\r" +
    "\n" +
    "        width: 55px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    input.txtDORmini {\r" +
    "\n" +
    "        width: 100px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .contactTable {\r" +
    "\n" +
    "        padding: 0px;\r" +
    "\n" +
    "        border-spacing: 0;\r" +
    "\n" +
    "        border-collapse: collapse;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .txtWaterMark {\r" +
    "\n" +
    "        border: solid 1px #6D6D6D;\r" +
    "\n" +
    "        margin-right: 10px;\r" +
    "\n" +
    "        background-image: url('src/images/txtbg_normal.png');\r" +
    "\n" +
    "        background-repeat: repeat-x;\r" +
    "\n" +
    "        color: #6a6a6a;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .multiSelectTable {\r" +
    "\n" +
    "        float: left;\r" +
    "\n" +
    "        width: 60%;\r" +
    "\n" +
    "        padding: 2px;\r" +
    "\n" +
    "        border-spacing: 0;\r" +
    "\n" +
    "        border-collapse: collapse;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Subtitle --Starts */\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblSubTitle {\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-size: 15px;\r" +
    "\n" +
    "        color: #3f89c3;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .SubTitleContentTD {\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .MandatoryLableContentTD {\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .HomeLinkContentTD {\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .MandatoryLabel {\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        color: Red;\r" +
    "\n" +
    "        font-size: 10px;\r" +
    "\n" +
    "        float: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .MandatoryLabelInline {\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        color: Red;\r" +
    "\n" +
    "        font-size: 10px;\r" +
    "\n" +
    "        margin-right: 10px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .Homelink {\r" +
    "\n" +
    "        text-decoration: none;\r" +
    "\n" +
    "        color: #793532;\r" +
    "\n" +
    "        font-size: 10px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .Homelink:visited {\r" +
    "\n" +
    "        text-decoration: underline;\r" +
    "\n" +
    "        color: #793532;\r" +
    "\n" +
    "        font-size: 10px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .Homelink:hover {\r" +
    "\n" +
    "        text-decoration: underline;\r" +
    "\n" +
    "        color: #793532;\r" +
    "\n" +
    "        font-size: 10px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .Homelink:active {\r" +
    "\n" +
    "        text-decoration: underline;\r" +
    "\n" +
    "        color: #793532;\r" +
    "\n" +
    "        font-size: 10px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lnkSkipPage {\r" +
    "\n" +
    "        text-decoration: none;\r" +
    "\n" +
    "        color: #793532;\r" +
    "\n" +
    "        font-size: 12px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lnkSkipPage:visited {\r" +
    "\n" +
    "        text-decoration: underline;\r" +
    "\n" +
    "        color: #793532;\r" +
    "\n" +
    "        font-size: 12px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lnkSkipPage:hover {\r" +
    "\n" +
    "        text-decoration: underline;\r" +
    "\n" +
    "        color: #793532;\r" +
    "\n" +
    "        font-size: 12px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lnkSkipPage:active {\r" +
    "\n" +
    "        text-decoration: underline;\r" +
    "\n" +
    "        color: #793532;\r" +
    "\n" +
    "        font-size: 12px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Subtitle --Ends*/\r" +
    "\n" +
    "    /*Field Content --Starts */\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .InputFieldContentTable {\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        padding: 0;\r" +
    "\n" +
    "        line-height: 2.5em;\r" +
    "\n" +
    "        vertical-align: top;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .TextContent {\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        padding: 0;\r" +
    "\n" +
    "        line-height: 1.2em;\r" +
    "\n" +
    "        vertical-align: top;\r" +
    "\n" +
    "        font-style: normal;\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        font-size: 14px;\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .LeftLabelContentTD {\r" +
    "\n" +
    "        width: 300px;\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .LeftLabel {\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-size: 15px;\r" +
    "\n" +
    "        color: #6B6B6B;\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "        padding-right: 2px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ColonLabel {\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-size: 15px;\r" +
    "\n" +
    "        color: #6B6B6B;\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "        padding-right: 2px;\r" +
    "\n" +
    "        width: 20px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .InputFieldTD {\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "        font-size: 14px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .tdlan {\r" +
    "\n" +
    "        padding-left: 25.5%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Field Content --Ends */\r" +
    "\n" +
    "    /*Validate message --Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblValidate {\r" +
    "\n" +
    "        position: absolute;\r" +
    "\n" +
    "        margin-top: -10px;\r" +
    "\n" +
    "        color: Red;\r" +
    "\n" +
    "        float: left;\r" +
    "\n" +
    "        font-size: 13px;\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        margin-left: 3px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblValidate4Radio {\r" +
    "\n" +
    "        position: absolute;\r" +
    "\n" +
    "        margin-top: 0px;\r" +
    "\n" +
    "        color: Red;\r" +
    "\n" +
    "        font-size: 13px;\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        margin-left: 3px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblValidate4Group {\r" +
    "\n" +
    "        position: absolute;\r" +
    "\n" +
    "        margin-top: -25px;\r" +
    "\n" +
    "        color: Red;\r" +
    "\n" +
    "        font-size: 13px;\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        margin-left: -62px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblValidate4Password {\r" +
    "\n" +
    "        position: absolute;\r" +
    "\n" +
    "        margin-top: -40px;\r" +
    "\n" +
    "        color: Red;\r" +
    "\n" +
    "        font-size: 13px;\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        margin-left: 202px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblMessage {\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        font-size: 15px;\r" +
    "\n" +
    "        color: #6B6B6B;\r" +
    "\n" +
    "        margin-left: 0px;\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblCalAge {\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        font-size: 15px;\r" +
    "\n" +
    "        color: #6B6B6B;\r" +
    "\n" +
    "        margin-left: 5px;\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblMessagelink {\r" +
    "\n" +
    "        text-decoration: none;\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        font-size: 15px;\r" +
    "\n" +
    "        color: #6B6B6B;\r" +
    "\n" +
    "        margin-left: 0px;\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblMessagelink:visited {\r" +
    "\n" +
    "        text-decoration: underline;\r" +
    "\n" +
    "        color: #6B6B6B;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblMessagelink:hover {\r" +
    "\n" +
    "        text-decoration: underline;\r" +
    "\n" +
    "        color: #6B6B6B;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblMessagelink:active {\r" +
    "\n" +
    "        text-decoration: underline;\r" +
    "\n" +
    "        color: #6B6B6B;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Validate message --Ends*/\r" +
    "\n" +
    "    /*Sub Content --Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .SubContentTR {\r" +
    "\n" +
    "        line-height: 0.3em;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Sub Content --Ends*/\r" +
    "\n" +
    "    /*Date picker --Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ui-datepicker {\r" +
    "\n" +
    "        font-size: 70.5%;\r" +
    "\n" +
    "        border: 1px solid #aaaaaa;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Date picker --Ends*/\r" +
    "\n" +
    "    /*Alert --Starts */\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    #popup_container {\r" +
    "\n" +
    "        position: fixed;\r" +
    "\n" +
    "        z-index: 100;\r" +
    "\n" +
    "        font-size: 12px;\r" +
    "\n" +
    "        min-width: 300px;\r" +
    "\n" +
    "        /* Dialog will be no smaller than this */\r" +
    "\n" +
    "        max-width: 600px;\r" +
    "\n" +
    "        /* Dialog will wrap after this width */\r" +
    "\n" +
    "        background: #FFF;\r" +
    "\n" +
    "        border: solid 5px #999;\r" +
    "\n" +
    "        color: #000;\r" +
    "\n" +
    "        -moz-border-radius: 5px;\r" +
    "\n" +
    "        -webkit-border-radius: 5px;\r" +
    "\n" +
    "        border-radius: 5px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    #popup_title {\r" +
    "\n" +
    "        font-size: 14px;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "        line-height: 1.75em;\r" +
    "\n" +
    "        color: #666;\r" +
    "\n" +
    "        background: #CCC url(src/images/title.gif) top repeat-x;\r" +
    "\n" +
    "        border: solid 1px #FFF;\r" +
    "\n" +
    "        border-bottom: solid 1px #999;\r" +
    "\n" +
    "        cursor: default;\r" +
    "\n" +
    "        padding: 0em;\r" +
    "\n" +
    "        margin: 0em;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    #popup_content {\r" +
    "\n" +
    "        background: 16px 16px no-repeat url(src/images/info.gif);\r" +
    "\n" +
    "        padding: 1em 1.75em;\r" +
    "\n" +
    "        margin: 0em;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    #popup_content.alert {\r" +
    "\n" +
    "        background-image: url(src/images/info.gif);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    #popup_content.confirm {\r" +
    "\n" +
    "        background-image: url(src/images/important.gif);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    #popup_content.prompt {\r" +
    "\n" +
    "        background-image: url(src/images/help.gif);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    #popup_message {\r" +
    "\n" +
    "        padding-left: 48px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    #popup_panel {\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "        margin: 1em 0em 0em 1em;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    #popup_prompt {\r" +
    "\n" +
    "        margin: .5em 0em;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Alert --Ends */\r" +
    "\n" +
    "    /*Processing Label --Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblProcessing {\r" +
    "\n" +
    "        font-size: 10px;\r" +
    "\n" +
    "        font-style: normal;\r" +
    "\n" +
    "        color: #3f89c3;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Processing Label --Ends*/\r" +
    "\n" +
    "    /*Search Field Content --Starts */\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .InputSearchFieldContentTable {\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        padding: 0;\r" +
    "\n" +
    "        line-height: 2.0em;\r" +
    "\n" +
    "        vertical-align: top;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .SearchLeftLabelContentTD {\r" +
    "\n" +
    "        /* width: 200px; */\r" +
    "\n" +
    "        width: 40%;\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "        padding: 5px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .SearchLeftLabel {\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-size: 15px;\r" +
    "\n" +
    "        color: #6B6B6B;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "        padding-right: 2px;\r" +
    "\n" +
    "        width: 200px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .SearchColonLabel {\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-size: 15px;\r" +
    "\n" +
    "        color: #6B6B6B;\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "        padding-right: 2px;\r" +
    "\n" +
    "        width: 20px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .SearchInputFieldTD {\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "        font-size: 14px;\r" +
    "\n" +
    "        padding: 5px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .divBasicDetailsValues {\r" +
    "\n" +
    "        width: 850px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Field Content --Ends */\r" +
    "\n" +
    "    /*Style for left menu--Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .sublnk {\r" +
    "\n" +
    "        font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        font-size: 13px;\r" +
    "\n" +
    "        text-decoration: none;\r" +
    "\n" +
    "        /*text-decoration: underline; 	color: #6B6B6B;*/\r" +
    "\n" +
    "        color: Black;\r" +
    "\n" +
    "        margin-left: 15px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .sublnk:hover {\r" +
    "\n" +
    "        font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        font-size: 13px;\r" +
    "\n" +
    "        text-decoration: none;\r" +
    "\n" +
    "        /*text-decoration: underline; 	color: #6B6B6B;*/\r" +
    "\n" +
    "        color: #058dc6;\r" +
    "\n" +
    "        margin-left: 15px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Style for left menu--Ends*/\r" +
    "\n" +
    "    /*Left menu holde for employee-Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .leftmenuholder {\r" +
    "\n" +
    "        width: 173px;\r" +
    "\n" +
    "        margin-left: 0px;\r" +
    "\n" +
    "        float: left;\r" +
    "\n" +
    "        border-collapse: collapse;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Left menu holde for employee-Ends*/\r" +
    "\n" +
    "    /* Design -Ends*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .legend {\r" +
    "\n" +
    "        color: Orange;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Table design --Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .CSSTableGenerator {\r" +
    "\n" +
    "        margin: 0px;\r" +
    "\n" +
    "        padding: 0px;\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        border: 1px solid #000000;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .CSSTableGenerator table {\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        height: 100%;\r" +
    "\n" +
    "        margin: 0px;\r" +
    "\n" +
    "        padding: 0px;\r" +
    "\n" +
    "        border: 1px solid #000000;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .CSSTableGenerator tr:hover td {\r" +
    "\n" +
    "        background-color: #efefef;\r" +
    "\n" +
    "        border: 1px solid #000000;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .CSSTableGenerator td {\r" +
    "\n" +
    "        vertical-align: middle;\r" +
    "\n" +
    "        background-color: #ffffff;\r" +
    "\n" +
    "        border: 1px solid #000000;\r" +
    "\n" +
    "        border-width: 0px 1px 1px 0px;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "        padding: 7px;\r" +
    "\n" +
    "        font-size: 10px;\r" +
    "\n" +
    "        font-family: Arial;\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        color: #000000;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .CSSTableGenerator tr:last-child td {\r" +
    "\n" +
    "        border-width: 0px 1px 0px 0px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .CSSTableGenerator tr td:last-child {\r" +
    "\n" +
    "        border-width: 0px 0px 1px 0px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .CSSTableGenerator tr:last-child td:last-child {\r" +
    "\n" +
    "        border-width: 0px 0px 0px 0px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .CSSTableheader {\r" +
    "\n" +
    "        background: -o-linear-gradient(bottom, #ff5656 5%, #7f0000 100%);\r" +
    "\n" +
    "        background: -webkit-gradient( linear, left top, left bottom, color-stop(0.05, #ff5656), color-stop(1, #7f0000));\r" +
    "\n" +
    "        background: -moz-linear-gradient( center top, #ff5656 5%, #7f0000 100%);\r" +
    "\n" +
    "        filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=\"#ff5656\", endColorstr=\"#7f0000\");\r" +
    "\n" +
    "        background: -o-linear-gradient(top, #ff5656, 7f0000);\r" +
    "\n" +
    "        background-color: #ff5656;\r" +
    "\n" +
    "        border: 1px solid #000000;\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "        border-width: 1px 1px 1px 1px;\r" +
    "\n" +
    "        font-size: 14px;\r" +
    "\n" +
    "        font-family: Arial;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        color: #ffffff;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .CSSTableGenerator tr:first-child:hover td {\r" +
    "\n" +
    "        background: -o-linear-gradient(bottom, #ff5656 5%, #7f0000 100%);\r" +
    "\n" +
    "        background: -webkit-gradient( linear, left top, left bottom, color-stop(0.05, #ff5656), color-stop(1, #7f0000));\r" +
    "\n" +
    "        background: -moz-linear-gradient( center top, #ff5656 5%, #7f0000 100%);\r" +
    "\n" +
    "        filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=\"#ff5656\", endColorstr=\"#7f0000\");\r" +
    "\n" +
    "        background: -o-linear-gradient(top, #ff5656, 7f0000);\r" +
    "\n" +
    "        background-color: #efefef;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .CSSTableGenerator tr:first-child td:first-child {\r" +
    "\n" +
    "        border-width: 0px 0px 1px 0px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .CSSTableGenerator tr:first-child td:last-child {\r" +
    "\n" +
    "        border-width: 0px 0px 1px 1px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Tabel design--Ends\r" +
    "\n" +
    "\r" +
    "\n" +
    "/*View page styles--Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblRegisterValue {\r" +
    "\n" +
    "        font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        font-size: 13px;\r" +
    "\n" +
    "        color: #000000;\r" +
    "\n" +
    "        margin-left: 0px;\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .rightlabel {\r" +
    "\n" +
    "        width: 250px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .centerlabel {\r" +
    "\n" +
    "        width: 3px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .leftlabel {\r" +
    "\n" +
    "        width: 300px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .viewContentTable {\r" +
    "\n" +
    "        width: 90%;\r" +
    "\n" +
    "        margin: 0 auto;\r" +
    "\n" +
    "        line-height: 1.5em;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .colonBlack {\r" +
    "\n" +
    "        width: 3px;\r" +
    "\n" +
    "        color: #6b6b6b;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*View page styles-- Ends*/\r" +
    "\n" +
    "    /*Auto complete Styles -- Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .autocomplete_completionListElement {\r" +
    "\n" +
    "        visibility: hidden;\r" +
    "\n" +
    "        margin: 0px 0px 0px 0px;\r" +
    "\n" +
    "        background-color: #FFFFFF;\r" +
    "\n" +
    "        color: windowtext;\r" +
    "\n" +
    "        border: buttonshadow;\r" +
    "\n" +
    "        border-width: 1px;\r" +
    "\n" +
    "        border-style: solid;\r" +
    "\n" +
    "        cursor: 'default';\r" +
    "\n" +
    "        overflow: auto;\r" +
    "\n" +
    "        height: auto;\r" +
    "\n" +
    "        width: 160px;\r" +
    "\n" +
    "        text-align: Left;\r" +
    "\n" +
    "        list-style-type: none;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /* AutoComplete highlighted item */\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .autocomplete_highlightedListItem {\r" +
    "\n" +
    "        color: #3f89c3;\r" +
    "\n" +
    "        padding: 1px;\r" +
    "\n" +
    "        line-height: 20px;\r" +
    "\n" +
    "        margin-left: -40px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /* AutoComplete item */\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .autocomplete_listItem {\r" +
    "\n" +
    "        background-color: window;\r" +
    "\n" +
    "        color: windowtext;\r" +
    "\n" +
    "        padding: 1px;\r" +
    "\n" +
    "        background-color: #efefef;\r" +
    "\n" +
    "        line-height: 20px;\r" +
    "\n" +
    "        margin-left: -40px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*Auto complete Styles -- Ends*/\r" +
    "\n" +
    "    /*View Profile Page Menu --Starts*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lnkbtnMenu {\r" +
    "\n" +
    "        font-size: 13px;\r" +
    "\n" +
    "        color: #006600;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblLandingData {\r" +
    "\n" +
    "        font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        font-size: 11px;\r" +
    "\n" +
    "        color: #000000;\r" +
    "\n" +
    "        margin-left: 0px;\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblLandingDataBold {\r" +
    "\n" +
    "        font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-size: 11px;\r" +
    "\n" +
    "        color: #3399FF;\r" +
    "\n" +
    "        margin-left: 0px;\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .modalBackground {\r" +
    "\n" +
    "        background-color: #DDCEFF;\r" +
    "\n" +
    "        filter: alpha(opacity=70);\r" +
    "\n" +
    "        opacity: 0.7;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .modalPopup {\r" +
    "\n" +
    "        background-color: #ffffdd;\r" +
    "\n" +
    "        border-width: 3px;\r" +
    "\n" +
    "        border-style: solid;\r" +
    "\n" +
    "        border-color: Gray;\r" +
    "\n" +
    "        padding: 3px;\r" +
    "\n" +
    "        width: 250px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*View Profile Page Menu --Ends*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .pophd {\r" +
    "\n" +
    "        background-image: url(src/images/pophd.jpg);\r" +
    "\n" +
    "        background-repeat: no-repeat;\r" +
    "\n" +
    "        background-color: White;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .leftcolrbold {\r" +
    "\n" +
    "        color: #6b6b6b;\r" +
    "\n" +
    "        font-size: 12px;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /* Styles which are added from KaakateeyaStyles.css to Kaakateeya.css - Ramireddi  */\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ProfileTitlel {\r" +
    "\n" +
    "        background-image: url(src/images/Corner_left1.jpg);\r" +
    "\n" +
    "        background-repeat: no-repeat;\r" +
    "\n" +
    "        background-color: #ffffff;\r" +
    "\n" +
    "        width: 10px;\r" +
    "\n" +
    "        height: 150px;\r" +
    "\n" +
    "        color: #029248;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-size: 18px;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ProfileTitleC {\r" +
    "\n" +
    "        background-image: url(src/images/Corner_center1.jpg);\r" +
    "\n" +
    "        background-repeat: repeat-x;\r" +
    "\n" +
    "        background-color: #ffffff;\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        height: 150px;\r" +
    "\n" +
    "        color: #029248;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-size: 18px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ProfileTitler {\r" +
    "\n" +
    "        background-image: url(src/images/Corner_right1.jpg);\r" +
    "\n" +
    "        background-repeat: no-repeat;\r" +
    "\n" +
    "        background-color: #ffffff;\r" +
    "\n" +
    "        width: 10px;\r" +
    "\n" +
    "        height: 150px;\r" +
    "\n" +
    "        color: #029248;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-size: 18px;\r" +
    "\n" +
    "        margin-left: 10px;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "        /* float: right; */\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .footerText {\r" +
    "\n" +
    "        font-size: 11px;\r" +
    "\n" +
    "        color: #793532;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblSubSecTitle {\r" +
    "\n" +
    "        font-size: 15px;\r" +
    "\n" +
    "        color: #3399FF;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /* Upload Photo */\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ModalPopupBG {\r" +
    "\n" +
    "        background-color: #666699;\r" +
    "\n" +
    "        filter: alpha(opacity=50);\r" +
    "\n" +
    "        opacity: 0.7;\r" +
    "\n" +
    "        z-index: 100;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .HellowWorldPopup {\r" +
    "\n" +
    "        min-width: 200px;\r" +
    "\n" +
    "        min-height: 150px;\r" +
    "\n" +
    "        background: white;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .PopupHeader {\r" +
    "\n" +
    "        background-color: #58a718;\r" +
    "\n" +
    "        color: Blue;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-size: 15px;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /* Upload Photo */\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .pop_left {\r" +
    "\n" +
    "        background-image: url(src/images/pop_left.png);\r" +
    "\n" +
    "        background-repeat: no-repeat;\r" +
    "\n" +
    "        width: 12px;\r" +
    "\n" +
    "        height: 32px;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .pop_right {\r" +
    "\n" +
    "        background-image: url(src/images/pop_right.png);\r" +
    "\n" +
    "        background-repeat: no-repeat;\r" +
    "\n" +
    "        width: 10px;\r" +
    "\n" +
    "        height: 32px;\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .pop_center {\r" +
    "\n" +
    "        background-image: url(src/images/pop_center.jpg);\r" +
    "\n" +
    "        background-repeat: repeat-x;\r" +
    "\n" +
    "        height: 32px;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "        vertical-align: middle;\r" +
    "\n" +
    "        color: #376481;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .popcontent {\r" +
    "\n" +
    "        border: 1px solid #26ABE0;\r" +
    "\n" +
    "        background-color: #ffffff;\r" +
    "\n" +
    "        color: #376481;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "        vertical-align: top;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .popcont {\r" +
    "\n" +
    "        border: 1px solid #26ABE0;\r" +
    "\n" +
    "        background-color: #ffffff;\r" +
    "\n" +
    "        color: #376481;\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "        vertical-align: middle;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .btnshift {\r" +
    "\n" +
    "        width: 35px;\r" +
    "\n" +
    "        padding-bottom: 2px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /* css for timepicker */\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ui-timepicker-div .ui-widget-header {\r" +
    "\n" +
    "        margin-bottom: 8px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ui-timepicker-div dl {\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ui-timepicker-div dl dt {\r" +
    "\n" +
    "        height: 25px;\r" +
    "\n" +
    "        margin-bottom: -25px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ui-timepicker-div dl dd {\r" +
    "\n" +
    "        margin: 0 10px 10px 65px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ui-timepicker-div td {\r" +
    "\n" +
    "        font-size: 90%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .ui-tpicker-grid-label {\r" +
    "\n" +
    "        background: none;\r" +
    "\n" +
    "        border: none;\r" +
    "\n" +
    "        margin: 0;\r" +
    "\n" +
    "        padding: 0;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .searching {\r" +
    "\n" +
    "        margin-left: 5px;\r" +
    "\n" +
    "        padding-top: 10px;\r" +
    "\n" +
    "        width: 366px;\r" +
    "\n" +
    "        position: relative;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .autocomplete_completionListElement {\r" +
    "\n" +
    "        visibility: hidden;\r" +
    "\n" +
    "        margin: 0px 0px 0px 0px;\r" +
    "\n" +
    "        background-color: #FFFFFF;\r" +
    "\n" +
    "        color: windowtext;\r" +
    "\n" +
    "        border: buttonshadow;\r" +
    "\n" +
    "        border-width: 1px;\r" +
    "\n" +
    "        border-style: solid;\r" +
    "\n" +
    "        cursor: 'default';\r" +
    "\n" +
    "        overflow: auto;\r" +
    "\n" +
    "        width: auto;\r" +
    "\n" +
    "        height: auto;\r" +
    "\n" +
    "        width: 160px;\r" +
    "\n" +
    "        text-align: Left;\r" +
    "\n" +
    "        list-style-type: none;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .charcount {\r" +
    "\n" +
    "        color: #6d6d6d;\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lnkbtnEdit {\r" +
    "\n" +
    "        float: right;\r" +
    "\n" +
    "        font-size: 13px;\r" +
    "\n" +
    "        color: #006600;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblEdit {\r" +
    "\n" +
    "        font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-size: 15px;\r" +
    "\n" +
    "        color: #6B6B6B;\r" +
    "\n" +
    "        margin-right: 5px;\r" +
    "\n" +
    "        float: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblEditValue {\r" +
    "\n" +
    "        font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\r" +
    "\n" +
    "        font-size: 15px;\r" +
    "\n" +
    "        color: #6B6B6B;\r" +
    "\n" +
    "        float: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblEditStatus {\r" +
    "\n" +
    "        font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-size: 13px;\r" +
    "\n" +
    "        color: Green;\r" +
    "\n" +
    "        margin-right: 5px;\r" +
    "\n" +
    "        text-decoration: none;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .chkEdit {}\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lnkbtnMenu {\r" +
    "\n" +
    "        font-size: 13px;\r" +
    "\n" +
    "        color: #006600;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblLandingData {\r" +
    "\n" +
    "        font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        font-size: 11px;\r" +
    "\n" +
    "        color: #000000;\r" +
    "\n" +
    "        margin-left: 0px;\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .lblLandingDataBold {\r" +
    "\n" +
    "        font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        font-size: 11px;\r" +
    "\n" +
    "        color: #3399FF;\r" +
    "\n" +
    "        margin-left: 0px;\r" +
    "\n" +
    "        text-align: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .modalBackground {\r" +
    "\n" +
    "        background-color: #DDCEFF;\r" +
    "\n" +
    "        filter: alpha(opacity=70);\r" +
    "\n" +
    "        opacity: 0.7;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .modalPopup {\r" +
    "\n" +
    "        background-color: #ffffdd;\r" +
    "\n" +
    "        border-width: 3px;\r" +
    "\n" +
    "        border-style: solid;\r" +
    "\n" +
    "        border-color: Gray;\r" +
    "\n" +
    "        padding: 3px;\r" +
    "\n" +
    "        width: 250px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .chkSearch {\r" +
    "\n" +
    "        font-weight: normal;\r" +
    "\n" +
    "        text-align: left;\r" +
    "\n" +
    "        font-family: Arial, Verdana, Geneva, Helvetica, sans-serif;\r" +
    "\n" +
    "        font-size: 11px;\r" +
    "\n" +
    "        vertical-align: middle;\r" +
    "\n" +
    "        margin-left: 2px;\r" +
    "\n" +
    "        float: left;\r" +
    "\n" +
    "        color: #6B6B6B;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .bdr_cont {\r" +
    "\n" +
    "        border-left: 1px solid #480EF7;\r" +
    "\n" +
    "        border-right: 1px solid #480EF7;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .btnstyleh {\r" +
    "\n" +
    "        color: #ffffff;\r" +
    "\n" +
    "        border: 3px solid #ffffff;\r" +
    "\n" +
    "        background-color: #ee5a1e;\r" +
    "\n" +
    "        padding: 3px 6px 3px 6px;\r" +
    "\n" +
    "        border-radius: 5px;\r" +
    "\n" +
    "        /*margin: 3px; padding: 3px; vertical-align: top;*/\r" +
    "\n" +
    "        float: right;\r" +
    "\n" +
    "        box-shadow: 0px 0px 3px 3px #c4c4c4;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .btnstylehl {\r" +
    "\n" +
    "        color: #ffffff;\r" +
    "\n" +
    "        border: 3px solid #ffffff;\r" +
    "\n" +
    "        background-color: #ee5a1e;\r" +
    "\n" +
    "        padding: 3px 6px 3px 6px;\r" +
    "\n" +
    "        border-radius: 5px;\r" +
    "\n" +
    "        /*margin: 3px; padding: 3px; vertical-align: top;*/\r" +
    "\n" +
    "        float: left;\r" +
    "\n" +
    "        box-shadow: 0px 0px 3px 3px #c4c4c4;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "        margin-top: 3px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .headercls {\r" +
    "\n" +
    "        padding: 17px 0px 37px 2px;\r" +
    "\n" +
    "        font-size: 17px;\r" +
    "\n" +
    "        color: #000;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>\r" +
    "\n" +
    "<div style=\"width: 100%; border-color: Gray; border: 1px;\">\r" +
    "\n" +
    "    <table style=\"width: 80%; top: 150px; vertical-align: top;\" align=\"center\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r" +
    "\n" +
    "        <tbody>\r" +
    "\n" +
    "            <tr class=\"panelhd\">\r" +
    "\n" +
    "                <td class=\"ProfileTitlel\">\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td>\r" +
    "\n" +
    "                    <table style=\"width: 100%; top: 150px; vertical-align: top;\">\r" +
    "\n" +
    "                        <tbody>\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                <td valign=\"top\" width=\"350px\">\r" +
    "\n" +
    "                                    <h3 class=\"headercls\">\r" +
    "\n" +
    "                                        Help / FAQs</h3>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <div style=\"padding-bottom: 3px; padding-left: 5px; padding-right: 5px; padding-top: 3px\">\r" +
    "\n" +
    "                                        <span style=\"color: Black;\">\r" +
    "\n" +
    "                                        <h3>\r" +
    "\n" +
    "                                            <b>Photographs - Adding Photographs To Matrimonial Profiles</b></h3>\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                <td align=\"justify\">\r" +
    "\n" +
    "                                    <ol style=\"width: 80%; text-align: justify;\">\r" +
    "\n" +
    "                                        <li><a href=\"#1\" class=\"sublnk\">1.  Why should I add my photograph to my matrimonial profile?</a></li>\r" +
    "\n" +
    "                                        <li><a href=\"#2\" class=\"sublnk\">2.  Is it safe to add my photos along with the profile?</a></li>\r" +
    "\n" +
    "                                        <li><a href=\"#3\" class=\"sublnk\">3.  How do I add my photo to my matrimonial profile on Kaakateeya.com?</a></li>\r" +
    "\n" +
    "                                        <li><a href=\"#4\" class=\"sublnk\">4.  Can I make any of my album photos my profile photo?</a></li>\r" +
    "\n" +
    "                                        <li><a href=\"#5\" class=\"sublnk\">5.  While uploading my photograph, I saw an error message\r" +
    "\n" +
    "                                        that the image must be in jpg, gif, bmp, tiff or png format, what does this mean?</a></li>\r" +
    "\n" +
    "                                        <li><a href=\"#6\" class=\"sublnk\">6.  How do I remove my photo from my matrimonial profile\r" +
    "\n" +
    "                                        on Kaakateeya.com?</a></li>\r" +
    "\n" +
    "                                        <li><a href=\"#7\" class=\"sublnk\" style=\"text-align:justify;\">7.  I can't find the information I need</a> :<span style=\"width: 100px; color:Black;\">\r" +
    "\n" +
    "                                        This link will allow you to contact Customer Relations who will get back to you\r" +
    "\n" +
    "                                        usually within 24 hours.If you want an answer immediately, please browse the</span>\r" +
    "\n" +
    "                                            <a href=\"/customer-relations/faq\" class=\"sublnk\">FAQs</a>.</li>\r" +
    "\n" +
    "                                        <li><a href=\"#8\" class=\"sublnk\">8.  Where are the photos I uploaded while registering?</a></li>\r" +
    "\n" +
    "                                        <li><a href=\"#9\" class=\"sublnk\">9.  What privacy options are available for photos?</a></li>\r" +
    "\n" +
    "                                    </ol>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <div style=\"padding-bottom: 3px; padding-left: 5px; padding-right: 5px; padding-top: 3px\" class=\"pghd\">\r" +
    "\n" +
    "                                        <span class=\"PageTitle\">Adding Photographs To Matrimonial Profiles</span>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <ol style=\"width: 80%;\">\r" +
    "\n" +
    "                                        <li style=\"font-size: 12px;\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <p style=\"color:Black;\" id=\"1\"><b style=\"font-size: 14px;\">1.Why should\r" +
    "\n" +
    "                                        I add my photograph to my matrimonial profile?</b></p>\r" +
    "\n" +
    "                                            Our statistics show that adding a photo to your matrimonial profile increases the number of times your profile is viewed by up to 7 times. You are likely to receive 12 times as many responses if you attach a photo. So we advise you to upload a photo to\r" +
    "\n" +
    "                                            increase your chances of finding your partner quickly.\r" +
    "\n" +
    "                                            <br>\r" +
    "\n" +
    "                                            <br> Also read: <a class=\"sublnk\" href=\"/customer-relations/faq/phototips\">A Picture Is Worth\r" +
    "\n" +
    "                                            A Thousand Words</a><br>\r" +
    "\n" +
    "                                            <br>\r" +
    "\n" +
    "                                            <div class=\"sublnk\" style=\"text-align: right;\">\r" +
    "\n" +
    "                                                <a href=\"#top\" class=\"sublnk\" style=\"text-decoration: underline;\">Back to top</a></div>\r" +
    "\n" +
    "                                        </li>\r" +
    "\n" +
    "                                        <li style=\"font-size: 12px;\">\r" +
    "\n" +
    "                                            <a name=\"2\"></a>\r" +
    "\n" +
    "                                            <p style=\"color:Black;\"><b style=\"font-size: 14px;\">2.Is it safe\r" +
    "\n" +
    "                                        to add my photos along with the profile?</b></p>\r" +
    "\n" +
    "                                            Yes, it is absolutely safe to add photos to your profile. Kaakateeya.com ensures that all photographs are watermarked so as to prevent your photos from being tampered with.\r" +
    "\n" +
    "                                            <br>\r" +
    "\n" +
    "                                            <br>\r" +
    "\n" +
    "                                            <div class=\"sublnk\" style=\"text-align: right;\">\r" +
    "\n" +
    "                                                <a href=\"#top\" class=\"sublnk\" style=\" text-decoration: underline;\">Back\r" +
    "\n" +
    "                                                to top</a></div>\r" +
    "\n" +
    "                                        </li>\r" +
    "\n" +
    "                                        <li style=\"font-size: 12px;\">\r" +
    "\n" +
    "                                            <a name=\"3\"></a>\r" +
    "\n" +
    "                                            <p style=\"color:Black;\"><b style=\"font-size: 14px;\">3.How do I add\r" +
    "\n" +
    "                                        my photo to my matrimonial profile on Kaakateeya.com?</b></p>\r" +
    "\n" +
    "                                            To add your photo to your matrimonial profile please follow these steps.<br>\r" +
    "\n" +
    "                                            <ul class=\"list_disc\">\r" +
    "\n" +
    "                                                <li style=\"font-size: 12px;\">Login to your\r" +
    "\n" +
    "                                                    <a href=\"Login.aspx\" class=\"sublnk\" style=\"text-decoration: underline;\">\r" +
    "\n" +
    "                                                        <b>My Kaakateeya</b></a> Account.</li>\r" +
    "\n" +
    "                                                <li style=\"font-size: 12px;\">Click on \"Edit Photo\" link available on the My Kaakateeya page and follow the instructions there.</li>\r" +
    "\n" +
    "                                            </ul>\r" +
    "\n" +
    "                                            <br>\r" +
    "\n" +
    "                                            <div class=\"sublnk\" style=\"text-align: right;\">\r" +
    "\n" +
    "                                                <a href=\"#top\" class=\"sublnk\" style=\" text-decoration: underline;\">Back\r" +
    "\n" +
    "                                                to top</a></div>\r" +
    "\n" +
    "                                        </li>\r" +
    "\n" +
    "                                        <li style=\"font-size: 12px;\">\r" +
    "\n" +
    "                                            <a name=\"4\"></a>\r" +
    "\n" +
    "                                            <p style=\"color:Black;\"><b style=\"font-size: 14px;\">4.Can I make\r" +
    "\n" +
    "                                        any of my album photos my profile photo?</b></p>\r" +
    "\n" +
    "                                            Yes, you can swap any album photo with your profile photo.To do this, click on “Make Profile Photo” option in the dropdown menu for the album photo.<br>\r" +
    "\n" +
    "                                            <br>\r" +
    "\n" +
    "                                            <div class=\"sublnk\" style=\"text-align: right;\">\r" +
    "\n" +
    "                                                <a href=\"#top\" class=\"sublnk\" style=\" text-decoration: underline;\">Back\r" +
    "\n" +
    "                                                to top</a></div>\r" +
    "\n" +
    "                                        </li>\r" +
    "\n" +
    "                                        <li style=\"font-size: 12px;\">\r" +
    "\n" +
    "                                            <a name=\"5\"></a>\r" +
    "\n" +
    "                                            <p style=\"color:Black;\"><b style=\"font-size: 14px;\">5.While uploading\r" +
    "\n" +
    "                                        my photograph, I saw an error message that the image must be in jpg, gif, bmp, tiff\r" +
    "\n" +
    "                                        or png format, what does this mean?</b></p>\r" +
    "\n" +
    "                                            jpg, gif, bmp, tiff and png are the most popular digital image formats on the internet. Kaakateeya.com accepts only these image formats for photos on your matrimonial profile.<br>\r" +
    "\n" +
    "                                            <br>\r" +
    "\n" +
    "                                            <div class=\"sublnk\" style=\"text-align: right;\">\r" +
    "\n" +
    "                                                <a href=\"#top\" class=\"sublnk\" style=\" text-decoration: underline;\">Back\r" +
    "\n" +
    "                                                to top</a></div>\r" +
    "\n" +
    "                                        </li>\r" +
    "\n" +
    "                                        <li style=\"font-size: 12px;\">\r" +
    "\n" +
    "                                            <a name=\"6\"></a>\r" +
    "\n" +
    "                                            <p style=\"color:Black;\"><b style=\"font-size: 14px;\">6.How do I remove\r" +
    "\n" +
    "                                        my photo from my matrimonial profile on Kaakateeya.com?</b></p>\r" +
    "\n" +
    "                                            To remove your photo on Kaakateeya.com all you need to do is:<br>\r" +
    "\n" +
    "                                            <ul>\r" +
    "\n" +
    "                                                <li style=\"font-size: 12px;\">Login to your\r" +
    "\n" +
    "                                                    <a href=\"Login.aspx\" class=\"sublnk\" style=\"text-decoration: underline;\">\r" +
    "\n" +
    "                                                        <b>My Kaakateeya</b></a> Account.</li>\r" +
    "\n" +
    "                                                <li style=\"font-size: 12px;\">Click on\r" +
    "\n" +
    "                                                    <a href=\"Login.aspx\" class=\"sublnk\" style=\"text-decoration: underline;\">\r" +
    "\n" +
    "                                                        <b>My Photos</b></a> in My Profile available under My Kaakateeya on the left of your screen and follow the instructions there.</li>\r" +
    "\n" +
    "                                                <li>Click on the down arrow at the bottom right side of the photo graph you want to Delete\r" +
    "\n" +
    "                                                </li>\r" +
    "\n" +
    "                                                <li>Choose Delete Photo</li>\r" +
    "\n" +
    "                                            </ul>\r" +
    "\n" +
    "                                            <br> Note: If you delete your profile photo then your first album photo will automatically become your profile photo.\r" +
    "\n" +
    "                                            <br>\r" +
    "\n" +
    "                                            <br>\r" +
    "\n" +
    "                                            <div class=\"sublnk\" style=\"text-align: right;\">\r" +
    "\n" +
    "                                                <a href=\"#top\" class=\"sublnk\" style=\" text-decoration: underline;\">Back\r" +
    "\n" +
    "                                                to top</a></div>\r" +
    "\n" +
    "                                        </li>\r" +
    "\n" +
    "                                        <li style=\"font-size: 12px;\">\r" +
    "\n" +
    "                                            <a name=\"7\"></a>\r" +
    "\n" +
    "                                            <p style=\"color:Black;\"><b style=\"font-size: 14px;\">7.Where are the\r" +
    "\n" +
    "                                        photos I uploaded while registering?</b></p>\r" +
    "\n" +
    "                                            Kaakateeya.com reviews all photographs uploaded by members. While we allow members the ability to upload their photographs, we reserve the right to remove/delete any photograph that violates socially accepted norms of decency. It takes us up to 24 hours\r" +
    "\n" +
    "                                            to screen your photos, during which period your photos will not be visible.<br>\r" +
    "\n" +
    "                                            <br>\r" +
    "\n" +
    "                                            <div class=\"sublnk\" style=\"text-align: right;\">\r" +
    "\n" +
    "                                                <a href=\"#top\" class=\"sublnk\" style=\" text-decoration: underline;\">Back\r" +
    "\n" +
    "                                                to top</a></div>\r" +
    "\n" +
    "                                        </li>\r" +
    "\n" +
    "                                        <li style=\"font-size: 12px;\">\r" +
    "\n" +
    "                                            <a name=\"8\"></a>\r" +
    "\n" +
    "                                            <p style=\"color:Black;\"><b style=\"font-size: 14px;\">8.What privacy\r" +
    "\n" +
    "                                        options are available for photos?</b></p>\r" +
    "\n" +
    "                                            Only Premium Members are entitled to the privacy options of 'Password Protection' and 'Photo Visible to Contacted and Accepted Members'. As a Premium Member, you can protect your photo with a password. In order to view your photograph other members will\r" +
    "\n" +
    "                                            require the password. The other privacy option available is 'Visible on accept' which means, only those people who you have accepted or expressed interest in will be able to view your photo. You can change your\r" +
    "\n" +
    "                                            privacy setting on the My Photos sectionunder My Kaakateeya.<br>\r" +
    "\n" +
    "                                            <br>\r" +
    "\n" +
    "                                            <div class=\"sublnk\" style=\"text-align: right;\">\r" +
    "\n" +
    "                                                <a href=\"#top\" class=\"sublnk\" style=\" text-decoration: underline;\">Back\r" +
    "\n" +
    "                                                to top</a></div>\r" +
    "\n" +
    "                                        </li>\r" +
    "\n" +
    "                                    </ol>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                        </tbody>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td class=\"ProfileTitler\">\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "        </tbody>\r" +
    "\n" +
    "    </table>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('registration/masterTemplate/footerTemplate.html',
    "<footer ng-controller=\"footercontrol\">\r" +
    "\n" +
    "    <div class=\"footer_in\" id=\"divFooterinner\">\r" +
    "\n" +
    "        <a class=\"logo2 pull-left\" style=\"margin: 10px 40px 0 0;\">&nbsp;</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div id=\"livechat\">\r" +
    "\n" +
    "            &nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "            <a onclick=\"OpenLHNChat();return false;\" href=\"javascript:void(0)\" target=\"_blank\" id=\"lhnWin\" class=\"icon-chat-footer pull-left\"></a>\r" +
    "\n" +
    "            <script type=\"text/javascript\" src=\"https://www.livehelpnow.net/lhn/scripts/livehelpnow.aspx?lhnid=3422&;iv=1&amp;ivid=0&amp;d=2666&amp;ver=5.3&amp;rnd=0.2933060332253514\"></script>\r" +
    "\n" +
    "            <div id=\"livechatdiv\">\r" +
    "\n" +
    "                <!-- This code must be installed within the body tags 3422-->\r" +
    "\n" +
    "                <script type=\"text/javascript\">\r" +
    "\n" +
    "                    var lhnAccountN = \"3422-1\";\r" +
    "\n" +
    "                    var lhnButtonN = -1;\r" +
    "\n" +
    "                    var lhnChatPosition = 'default';\r" +
    "\n" +
    "                    var lhnInviteEnabled = 1;\r" +
    "\n" +
    "                    var lhnWindowN = 0;\r" +
    "\n" +
    "                    var lhnDepartmentN = 2666;\r" +
    "\n" +
    "                </script>\r" +
    "\n" +
    "                <!--<script src=\"src/js/livechat_currentstorage.js\" type=\"text/javascript\" id=\"lhnscript\"></script>-->\r" +
    "\n" +
    "                <script src=\"//www.livehelpnow.net/lhn/widgets/chatbutton/lhnchatbutton-current.min.js\" type=\"text/javascript\" id=\"lhnscript\"></script>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!--<script type=\"text/javascript\" defer='defer'>\r" +
    "\n" +
    "            function OpenLHNChat() {\r" +
    "\n" +
    "                if (typeof CustomOpenLHNChat == 'function') {\r" +
    "\n" +
    "                    CustomOpenLHNChat();\r" +
    "\n" +
    "                    return false;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                var wleft = (screen.width - 580 - 32) / 2;\r" +
    "\n" +
    "                var wtop = (screen.height - 420 - 96) / 2;\r" +
    "\n" +
    "                var bLHNOnline = 0;\r" +
    "\n" +
    "                var lhnwindow = 0;\r" +
    "\n" +
    "                var sScrollbars = (bLHNOnline == 0) ? \"yes\" : \"no\";\r" +
    "\n" +
    "                if (document.location.protocol == 'https:' || (typeof lhnJsHost != 'undefined' && lhnJsHost == \"https://\")) {\r" +
    "\n" +
    "                    lhnWin = window.open('https://www.livehelpnow.net/lhn/livechatvisitor.aspx?zzwindow=' + lhnwindow + '&lhnid=' + 3422 + '&d=' + 0, 'lhnchat', 'left=' + wleft + ',top=' + wtop + ',width=580,height=435,toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=' + sScrollbars + ',copyhistory=no,resizable=yes');\r" +
    "\n" +
    "                } else {\r" +
    "\n" +
    "                    lhnWin = window.open('http://www.livehelpnow.net/lhn/livechatvisitor.aspx?zzwindow=' + lhnwindow + '&lhnid=' + 3422 + '&d=' + 0, 'lhnchat', 'left=' + wleft + ',top=' + wtop + ',width=580,height=435,toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=' + sScrollbars + ',copyhistory=no,resizable=yes');\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                if (typeof Zstepx != 'undefined') {\r" +
    "\n" +
    "                    if (Zstepx == 10) {\r" +
    "\n" +
    "                        Zslide();\r" +
    "\n" +
    "                    }\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "        </script>-->\r" +
    "\n" +
    "        <div class=\"social pull-right\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0)\">&nbsp;\r" +
    "\n" +
    "                    <div class=\"icon-fb\" style=\"margin: 10px;\"></div></a></li>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0)\">&nbsp;\r" +
    "\n" +
    "                    <div class=\"icon-linkedin\" style=\"margin: 11px 4px 4px 6px;\"></div></a></li>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0)\">&nbsp;\r" +
    "\n" +
    "                    <div class=\"icon-twitter\" style=\"margin: 11px 4px 4px 6px;\"></div></a></li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            <span class=\"clear\">&nbsp;</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "        <hr />\r" +
    "\n" +
    "        <div class=\"footer_block_1 span4\">\r" +
    "\n" +
    "            <h6>about kaakateeya</h6>\r" +
    "\n" +
    "            <p><span>Kaakateeya.com</span>, a top-notch online matrimonial site committed to deliver high quality match making service since 1982.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"span2\">\r" +
    "\n" +
    "            <h6>our services</h6>\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkFooterSucess\" href=\"successstories\" class=\"linkdisableCls\">success stories</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkSearchFooter\" href=\"javascript:void(0)\" ng-click=\"searchpage('profile')\" class=\"linkdisableCls\">Search</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"linkcareers\" href=\"help\" class=\"linkdisableCls\">careers</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"linkfaq\" href=\"faqs\" class=\"linkdisableCls\">faq’s</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnktermsFooter\" href=\"termsAndConditions\" class=\"linkdisableCls\">Terms Of Use</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"span2\">\r" +
    "\n" +
    "            <h6>information</h6>\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li><a ng-click=\"showforgetpasswordpopup()\" href=\"javascript:void(0)\" class=\"linkdisableCls\">Forgot Password</a></li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkFeedBackFooter\" href=\"feedback\" class=\"linkdisableCls\">Feed Back</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkBranchesFooter\" href=\"ourbranches\" class=\"linkdisableCls\">Our Branches</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"linkHelp\" href=\"help\" class=\"linkdisableCls\">Help</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkPrivacyFooter\" href=\"privacyPolicy\" class=\"linkdisableCls\">Privacy Policy</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"span3\">\r" +
    "\n" +
    "            <h6>contact inforamtion</h6>\r" +
    "\n" +
    "            <h3>103,109,Vijayasree Apartments,\r" +
    "\n" +
    "                <br /> Behind Chermas,Ameerpet,Hyderabad\r" +
    "\n" +
    "                <br />\r" +
    "\n" +
    "                <span>Contact: 91- 7675818080,040-23747777</span>\r" +
    "\n" +
    "                <br /> Email :info@telugumarriages.com\r" +
    "\n" +
    "                <br /> Timings :8:00:00 AM To 8:00:00 PM</h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "        <p class=\"copy_rights\">\r" +
    "\n" +
    "            &copy; 2004-2013 www.Kaakateeya.com Matrimony - Online Marriage Site. All Rights Reserved.\r" +
    "\n" +
    "        </p>\r" +
    "\n" +
    "        <div class=\"color_strip strip-color\">&nbsp;</div>\r" +
    "\n" +
    "        <div class=\"strip-color color_strip2\">&nbsp;</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <forgot-password></forgot-password>\r" +
    "\n" +
    "</footer>"
  );


  $templateCache.put('registration/masterTemplate/headerTemplate.html',
    "<div class=\"header_inner\" id=\"divInnerMaster\" ng-controller='headctrl' ng-init=\"headerinit()\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"container_my clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <a id=\"IbtnLogodisplay\" href=\"javascript:void(0)\" ng-click=\"redirecthomeordashboard()\" class=\"logo3 pull-left\" />\r" +
    "\n" +
    "        <input type=\"button\" value=\"Login\" ng-show=\"loginstatus\" id=\"btnLoginsubmit\" class=\"pull-right button_custom login_show\" ng-click=\"divloginblock();\" />\r" +
    "\n" +
    "        <input type=\"button\" value=\"Logout\" ng-show=\"loginoutstatus\" id=\"btnLogOut\" class=\"pull-right button_custom\" ng-click=\"ClearlocalStorage();\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"login_block_header\" ng-style=\"loginpopup===true?{'display':'block'}:{'display':'none'}\" id=\"divLogin\">\r" +
    "\n" +
    "            <form name=\"myForms\">\r" +
    "\n" +
    "                <input type=\"text\" id=\"txtUserName\" ng-keyup=\"myForms.$valid && $event.keyCode == 13 && loginsubmit()\" placeholder=\"ProfileID/EmailID\" style=\"height: 38px;border: 1px solid #cbc0c0 !important;\" ng-model=\"username\" required/>\r" +
    "\n" +
    "                <input type=\"password\" id=\"txtPassword\" ng-keyup=\"myForms.$valid && $event.keyCode == 13 && loginsubmit()\" placeholder=\"Password\" style=\"height: 38px;border: 1px solid #cbc0c0 !important;\" ng-model=\"password\" required/>\r" +
    "\n" +
    "                <span class=\"clear\">&nbsp;</span>\r" +
    "\n" +
    "                <div class=\"login_help\">\r" +
    "\n" +
    "                    <a id=\"lnkForgotPassword\" href=\"javascript:void(0)\" ng-click=\"showforgetpasswordpopup()\">Forgot Password</a>\r" +
    "\n" +
    "                    <a href=\"registration\">New User Sign Up</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <md-button id=\"btnUserLogin\" ng-click=\"loginsubmit()\" ng-disabled=\"myForms.$invalid\" class=\"md-raised md-warn\">Login</md-button>\r" +
    "\n" +
    "            </form>\r" +
    "\n" +
    "            <span class=\"clear\">&nbsp;</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"header_inner_rt clearfix\">\r" +
    "\n" +
    "            <h3>\r" +
    "\n" +
    "                <a id=\"lnkFeedbackMenu\" href=\"feedback\">Feedback</a>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "            <h4>make a missed call<span><em>+91-9390999999</em></span></h4>\r" +
    "\n" +
    "            <h4>Support No<span>+1-734-926-1011</span></h4>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"navbar_inner\" id=\"divMemberName\" ng-show=\"withlogin\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"container_my clearfix\">\r" +
    "\n" +
    "            <div class=\"profile_own_name pull-left clearfix\">\r" +
    "\n" +
    "                <img id=\"IMasterpic\" ng-src=\"{{profilepic}}\" style=\"width: 31px !important; height: 31px !important; border: solid 2px #fc6a1b;border-radius: 3px;display: inline-block; float: left;\" />\r" +
    "\n" +
    "                <h2>\r" +
    "\n" +
    "                    <label id=\"lblCustFName\">{{usernamepersonal}}</label> &nbsp;&nbsp;(\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <label id=\"lblprofile\">{{profileid}}</label>)\r" +
    "\n" +
    "                    <br />\r" +
    "\n" +
    "                    <span>Accout type :</span>\r" +
    "\n" +
    "                    <a id=\"lblpaid\" ng-href=\"{{hrefpaid}}\" style=\"color:White;\">{{paidstatus}}</a>\r" +
    "\n" +
    "                </h2>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"profile_own_menu profile_own_menu2 pull-right\" id=\"MenuDiv\">\r" +
    "\n" +
    "                <a class=\"menu_toggle pull-right\">Menu</a>\r" +
    "\n" +
    "                <ul class=\"pull-right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a id=\"lnkMyHome\" href=\"javascript:void(0)\" class=\"linkdisableCls\" ng-click=\"homepagelinks('myhome')\">My Home</a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"javascript:void(0)\" class=\"linkdisableCls\">my account</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkviewmyprofile\" href=\"javascript:void(0);\" ng-click=\"viewfullmyprofile()\">View My Profile</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkeditprofile\" href=\"editview\">Edit Profile</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmanagephoto\" href=\"editview/editManagePhoto\">Manage Photo</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmanagehoroscope\" href=\"editview/editAstro\">Manage Horoscope</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkprofilesettings\" href=\"profilesettings\">Profile Settings</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a id=\"lnksearch\" href=\"javascript:void(0)\" class=\"linkdisableCls\" ng-click=\"searchpage('profile')\">Search</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkgenaralsearch\" href=\"javascript:void(0)\" ng-click=\"searchpage('general')\">General Search</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkAdvancedSearch\" href=\"javascript:void(0)\" ng-click=\"searchpage('advanced')\">Advanced Search</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkprofileidsearch\" href=\"javascript:void(0)\" ng-click=\"searchpage('profile')\">Profileid Search</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"javascript:void(0)\" class=\"linkdisableCls\">my package</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkupgrademembership\" href=\"UpgradeMembership\">Upgrade Membership</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmyorders\" href=\"myorders\">My Orders and Statistics</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmembershipfaqs\" href=\"faqs\">Membership Faqs</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkAddOnPacks\" href=\"AddOnPacks\" ng-hide=\"true\">Add On Packs</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"javascript:void(0)\" class=\"linkdisableCls\">matches</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmybookmarks\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('BookMarked')\">My BookMarked Profiles</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkwhobookmarkedme\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('BookMarkedme')\">Who BookMarked Me</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkigonredprofile\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('Ignored')\">Ignored Profiles</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkviewedbutnotexpress\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('myprofile')\">My profile viewed by others</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"javascript:void(0)\" class=\"linkdisableCls\">messages</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkPersonalizedmsg\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('Chats')\">Chats</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkrequests\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('Requests')\">Requests</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkMyContact\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('Express')\">Express interest</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"help\" class=\"linkdisableCls\">Help</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"lnkcontactus\" href=\"help\">Contact Us</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmysupportickets\" href=\"MySupportTickets\">My Support Tickets</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"lnkfeedback\" href=\"feedback\">Feed Back</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"lnktakeatour\" href=\"takeatour\">Take A Tour</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"navbar_inner\" id=\"divwithoutlogin\" ng-show=\"withoutlogin\">\r" +
    "\n" +
    "        <div class=\"container_my clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"profile_own_menu pull-right\">\r" +
    "\n" +
    "                <a class=\"menu_toggle pull-right\">Menu</a>\r" +
    "\n" +
    "                <ul class=\"pull-right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li><a href=\"registration\">Register free</a></li>\r" +
    "\n" +
    "                    <li><a href=\"javascript:void(0)\" ng-click=\"searchpage('profile')\">Search <span></span></a></li>\r" +
    "\n" +
    "                    <li><a href=\"javascript:void(0);\" ng-click=\"divloginblock()\">Upgrade</a></li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a id=\"lnkSucessstoreiesFooter\" href=\"successstories\">success stories <span></span></a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a id=\"linkfooterhelp\" href=\"help\">Help</a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li><a href=\"javascript:void(0);\" ng-click=\"redirecthomeordashboard()\">Home</a></li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <forgot-password></forgot-password>\r" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"sessionalert.html\">\r" +
    "\n" +
    "        <div class=\"modal-content\">\r" +
    "\n" +
    "            <div class=\"modal-header\">\r" +
    "\n" +
    "                <h3> Confirmation</h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"modal-body\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <h4 class=\"col-lg-offset-1\">Do you want to continue Session</h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                <br>\r" +
    "\n" +
    "                <div class='row'>\r" +
    "\n" +
    "                    <div class='col-lg-4 col-lg-offset-2'>\r" +
    "\n" +
    "                        <button type='button' class='btn btn-danger' ng-click='closesession()'>close</button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class='col-lg-5'>\r" +
    "\n" +
    "                        <button type='button' class='btn btn-success' ng-click='acceptcontinue()'>Continue</button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"modal-footer\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<style type=\"text/css\">\r" +
    "\n" +
    "    .fix-to-top {\r" +
    "\n" +
    "        position: fixed;\r" +
    "\n" +
    "        margin: 0 auto;\r" +
    "\n" +
    "        z-index: 999999999;\r" +
    "\n" +
    "        top: 0;\r" +
    "\n" +
    "        left: 0%;\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        padding: 20px 1%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
  );

}]);
