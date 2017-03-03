'use strict';
/**
 * Main App Creation
 */

var regApp = angular.module('KaakateeyaRegistration', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngMaterial', 'ngMessages', 'ngAria', 'ngMdIcons', 'ngPassword', 'jcs-autoValidate']);
// regApp.apipath = 'http://54.169.133.223:8070/Api/';
regApp.apipath = 'http://183.82.0.58:8025/Api/';
// regApp.apipath = '/webroot/Api/';

//regApp.apipath = 'http://52.66.131.254:8010/Api/';

regApp.templateroot = 'registration/';
//regApp.templateroot = '';
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
        { name: 'registration.photoGuideLines', url: '/photoGuideLines', templateUrl: regApp.templateroot + 'app/views/photoGuideLines.html', controller: 'photoGuideLinesctrl' },
        { name: 'registration.uploadTips', url: '/uploadTips', templateUrl: regApp.templateroot + 'app/views/uploadTips.html', controller: 'uploadTipsctrl' },
        { name: 'registration.faqs', url: '/faqs', templateUrl: 'app/views/faqs.html', controller: 'faqs' },
        { name: 'registration.privacyPolicy', url: '/privacyPolicy', templateUrl: 'app/views/privacyPolicy.html', controller: 'privacypolicy' }

    ];


    $urlRouterProvider.otherwise('registration');

    _.each(states, function(item) {
        var innerView = {
            "topbar@": {
                templateUrl: regApp.templateroot + (item.url === '/confirmEmail' || item.url === '/uploadTips' ? '' : "masterTemplate/headerTemplate.html")
            },
            "lazyLoadView@": {
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
        });
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
        scope.reg.Chkprivacy = true;
        scope.emailrequired = true;
        scope.mobilenumberrequired = true;
        scope.mobilecountrycoderequired = true;
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
            // scope.countryCode = getArray.GArray('countryCode');
        }, 1000);
        timeout(function() {

            // scope.Country = getArray.GArray('Country');
            var Country = [],
                CountryCode = [];
            SelectBindServicereg.CountryWithCode().then(function(response) {

                _.each(response.data, function(item) {
                    Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    CountryCode.push({ "label": item.CountryCode, "title": item.CountryCode, "value": item.ID });
                });

                console.log('test..');
                console.log(Country);

                scope.Country = Country;
                scope.countryCode = CountryCode;
            });

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
                IsCustomer: 0,
                strMobileNo: (obj.txtMobileNo !== '') && (obj.txtMobileNo !== null) && (obj.txtMobileNo !== undefined) ? (obj.txtMobileNo) : "0000000000",
                ID: 1,
                strAreaCode: (obj.txtArea !== '') && (obj.txtArea !== null) && (obj.txtArea !== undefined) ? obj.txtArea : '',
                strLandNo: (obj.txtlandNum !== '') && (obj.txtlandNum !== null) && (obj.txtlandNum !== undefined) ? obj.txtlandNum : '',
                strEmail: (obj.txtEmail !== '') && ((obj.txtEmail) !== null) && ((obj.txtEmail) !== undefined) ? obj.txtEmail : "kmpl@gmail.com",
                strPassword: (obj.txtpassword !== '') && (obj.txtpassword !== null) && (obj.txtpassword !== undefined) ? obj.txtpassword : "Admin@123",
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
                    } else {
                        if (scope.reg.Chkfree_reg === true) {
                            if (type === 'email') {
                                scope.emailrequired = true;
                                scope.mobilenumberrequired = false;
                                scope.mobilecountrycoderequired = false;
                            } else {
                                scope.emailrequired = false;
                                scope.mobilenumberrequired = true;
                                scope.mobilecountrycoderequired = true;
                            }
                        }
                    }
                });
            }
        };
        scope.mobilemailvalidation = function() {
            if (scope.reg.Chkfree_reg === true) {

                if ((scope.reg.txtEmail === null || scope.reg.txtEmail === "" || scope.reg.txtEmail === undefined) && (scope.reg.txtMobileNo === null || scope.reg.txtMobileNo === "" || scope.reg.txtMobileNo === undefined)) {
                    scope.emailrequired = false;
                    scope.mobilenumberrequired = true;
                    scope.mobilecountrycoderequired = true;
                } else if ((scope.reg.txtEmail !== null && scope.reg.txtEmail !== "" && scope.reg.txtEmail !== undefined) || (scope.reg.txtMobileNo !== null && scope.reg.txtMobileNo !== "" && scope.reg.txtMobileNo !== undefined)) {
                    scope.emailrequired = false;
                    scope.mobilenumberrequired = false;
                    scope.mobilecountrycoderequired = false;
                }
            } else {
                scope.emailrequired = true;
                scope.mobilenumberrequired = true;
                scope.mobilecountrycoderequired = true;

            }
        };

        scope.$watch(function() {
            return scope.reg.ddlcountry;
        }, function(current, original) {
            scope.reg.ddllandcountry = scope.reg.ddlmobilecountry = current;
        });



        scope.redirectprivacy = function(type) {
            window.open('registration/privacyPolicy', '_blank');
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
regApp.controller("faqs", ['$scope', function(scope) {
    scope.filters = {
        search: ''
    };
    scope.arrayfaqs = [
        { questons: 'How do I Bookmark profile?', answers: 'In every view profile you will find the book mark option for future reference before you express interest to filter suitable profiles' },
        { questons: 'How do I delete my profile? (Manage Profile)', answers: 'You can delete your profile including your picture by clicking on Delete Profile in the services page after you login. You have to login to your account to delete your profilfre.4r554r' },
        { questons: 'How do I edit profile?', answers: 'You can edit details by going to Menu bar?MY ACCOUNT?EDIT PROFILE.(Note: You can edit all the fields except Name, Lastname, Date of Birth, Height & Caste. If you want to edit them contact us @ 91-40-30666666.' },
        { questons: 'How do I ignore profile and how do I remove ignore profile from the list?', answers: 'In every view profile your will find an ignore profile(with (X) Into symbol)to avoid profile from your list. All ignored profiles list can be checked in the Option MATCHES?IGNORED PROFILES(Note: You cannot remove ignored profile completely but you can either bookmark or express interest)' },
        { questons: 'How do I overwrite an existing photo? (Photograph)', answers: 'Go to Manage photo ,delete the existing photo first to upload new recent photo which will be processed during the business hours and made visible .' },
        { questons: 'How do I register?', answers: 'Click www.kaakateeya.com and get registered for whom your searching(Bride/Groom) with the details' },
        { questons: 'How do I restrict other members from viewing my Profile? (Manage Profile)', answers: 'Click on Hide profile in the profile settlings in my account menu option' },
        { questons: 'How do I Upload my Photograph and which format is acceptable?', answers: 'You can upload upto 3 photographs of JPEG or jpgFormat by going to Menu bar?MY ACCOUNT?MANAGE PHOTO and upload photo. We will activate your photo within 24 hours after we review it. If you experience any issues in uploading your photo please send us at photos@telugumarriages.com or send them through WHATSAPP 9848535373 with your PROFILE ID and we will upload it for you.' },
        { questons: 'How to show interest', answers: 'to show interest to a profile which suits your re-quirements click on Express interest after you completely view that profile ,then proceed if its ok' },
        { questons: 'I am a FREE Member. Can I send any email messages to other members? (Contact Members)', answers: 'If you are registered as a FREE member you cannot send Email Messages to other Members.' },
        { questons: 'I am a FREE service member. How do I upgrade my profile? (Paid Member)', answers: 'Log on to www.kaakateeya.comgo to Menu bar?MY PACKAGE?UPGRADE MEMBERSHIP and choose the package and upgrade by using any visa debit/credit card, also input your correct billing address whatever provided in the banker of the card' },
        { questons: 'I am a paid member of Kaakateeya Marriages India office. I cannot view pictures or request profiles online? (Kaakateeya Marriages Indian Offices)', answers: 'Kaakateeya Marriages India office registered members are only allowed to view, modify their profile and search new profiles on Kaakateeya.com. There is an additional fee to view pictures,addition details also can express interest . online membership details are in the UPGRADE MEMBERSHIP option in UPGRADE menu option' },
        { questons: 'I Forgot Password who can I retrieve password?', answers: 'You can only reset your password by clicking on forgot password link with your registered primary email id' },
        { questons: 'I uploaded my photo but I cannot see it? (Photograph)', answers: 'New photograph uploaded by you will be processed during the business hours from 10 am to 6 pm .' },
        { questons: 'Terms & Conditions to get Register with kaakateeya.com?', answers: 'Everyone who is for marriage can register profile by giving details with genuine information. You can register a new profile with UNIQUE EMAIL AND UNIQUE MOBILE NUMBER. If you get a message like “email id exists” or “mobile number exists”then click on forget password to reset your password otherwise contact us @ 91-40-30666666' },
        { questons: 'What individually identifiable information is logged on your server? (Privacy Policy)', answers: 'All email messages sent using our website Kaakateeya.com are logged on the server. These messages are deleted every week.' },
        { questons: 'What is Bookmarked By section? (Bookmarks)', answers: 'If somebody Bookmarks your profile, you can check the list in the "Who Bookmarked me " in the menu' },
        { questons: 'What is Online Service and Offline(OFFICE) Service?', answers: 'Online Services: You can Register Freely into www.kaakateeya.com and search for Brides/Grooms based on your requirement. You can also become a paid member to express interest, Send and receive messages directly by yourself Offline(OFFICE) Services: Offline Service is provided by our service provider/relationship manager wherein you will be sent profiles to your email regularly as per your requirement manually on behalf of you and will involve in arranging match meetings(PelliChupulu) to Settle' },
        { questons: 'What picture formats are accepted? (Photograph)', answers: 'Pictures of .jpg ,Png etc formats can be uploaded ' },
        { questons: 'Who receives the Messages I send using messages button', answers: 'your messages are sent to the other member ,which will be displayed in my contact list ,messages option' }
    ];
    scope.styleanswer = false;
    scope.activeClass = 'faqs_list_main_item';
}]);
regApp.directive('faqdirective', function() {
    return {
        link: function(scope, element, attrs) {
            scope.expanall = function() {
                _.each(scope.arrayfaqs, function(item) {
                    item.styleanswer = true;
                    item.activeClass = 'faqs_list_main_item active';
                });
            };
            scope.collapseall = function() {
                _.each(scope.arrayfaqs, function(item) {
                    item.styleanswer = false;
                    item.activeClass = 'faqs_list_main_item';
                });
            };
            scope.toggleans = function(faqs) {
                faqs.styleanswer = !faqs.styleanswer;
                faqs.activeClass = (faqs.styleanswer === true ? 'faqs_list_main_item active' : 'faqs_list_main_item');
            };
        }
    };
});
regApp.controller('headctrl', ['$scope', function(scope) {


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
                window.open('registration/faqs', '_blank');
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
regApp.controller('privacypolicy', ['$scope', function(scope) {
    //hide #back-top first
    $(".back-to-top").hide();
    scope.initprivacy = function() {
        // fade in #back-top    
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('.back-to-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    };

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
regApp.directive('fileModel', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function() {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
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
// AngularJS: 1.3.15
// bootstrap-multiselect: 0.9.6
//var statticdata=require('./staticArrayBindings.json');
regApp.directive('multiselectdropdownreg', ['arrayConstantsreg', 'SelectBindServicereg', function(cons, service) {
    return {
        require: 'ng-model',
        scope: {
            ngModel: '=',
            typeofdata: "=",
            parentVal: "="
        },
        link: function(scope, element, attrs) {
            scope.options = [];

            scope.databind = function(data) {
                element.multiselect('dataprovider', data);
                element.multiselect('select', scope.ngModel);
            };

            switch (scope.typeofdata) {

                case 'MaritalStatus':
                    scope.databind(cons.MaritalStatus);
                    break;

                case 'height':
                    scope.databind(cons.height);
                    break;

                case 'Religion':
                    scope.databind(cons.Religion);
                    break;

                case 'Mothertongue':
                    scope.databind(cons.Mothertongue);
                    break;

                case 'educationcategory':
                    scope.databind(cons.educationcategory);
                    break;

                case 'visastatus':
                    scope.databind(cons.visastatus);
                    break;

                case 'stars':
                    scope.databind(cons.stars);
                    break;

                case 'region':
                    scope.databind(cons.region);
                    break;

                case 'bodyType':
                    scope.databind(cons.bodyType);
                    break;

                case 'bloodGroup':
                    scope.databind(cons.bloodGroup);
                    break;

                case 'healthCondition':
                    scope.databind(cons.healthCondition);
                    break;

                case 'starLanguage':
                    scope.databind(cons.starLanguage);
                    break;

                case 'lagnam':
                    scope.databind(cons.lagnam);
                    break;

                case 'ZodaicSign':
                    scope.databind(cons.ZodaicSign);
                    break;

                case 'paadam':
                    scope.databind(cons.paadam);
                    break;

                case 'familyStatus':
                    scope.databind(cons.familyStatus);
                    break;

                case 'RelationshipType':
                    scope.databind(cons.RelationshipType);
                    break;

                case 'childStayingWith':
                    scope.databind(cons.childStayingWith);
                    break;



                case 'Country':
                    service.countrySelect().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;

                case 'ProfCatgory':

                    service.ProfessionCatgory().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;

                case 'ProfGroup':
                    service.ProfessionGroup().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;

                case 'indiaStates':
                    service.stateSelect('1').then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;
                case 'countryCode':
                    service.countryCodeselect().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;
                case 'caste':
                    service.casteselect().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;
                case 'currency':
                    service.currency().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;
            }

            element.multiselect({
                buttonClass: 'btn',
                buttonWidth: 'auto',
                inheritClass: true,
                includeSelectAllOption: true,
                disableIfEmpty: true,
                nonSelectedText: 'Any',
                allSelectedText: 'All Selected',
                selectAllText: 'Check all!',
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true,
                filterPlaceholder: 'Type To Search',
                buttonContainer: '<div class="btn-group" />',
                // maxHeight: false,
            });
            // element.multiselect('setOptions', secondConfigurationSet);
            // element.multiselect('rebuild');
            //Watch for any changes to the length of our select element 
            scope.$watch(function() {
                return element[0].length;
            }, function() {
                scope.$applyAsync(element.multiselect('rebuild'));
            });

            // Watch for any changes from outside the directive and refresh
            scope.$watch(attrs.ngModel, function() {
                element.multiselect('refresh');
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
//  app.factory('authInterceptor', ['$rootScope', '$q', '$window', 'authSvc', function ($rootScope, $q, $window, authSvc) {
//     return {
//       request: function (config) {
//         config.headers = config.headers || {};
//         var user = authSvc.user();
//         if (user.token) {
//           config.headers.Authorization = 'Bearer ' + user.token;
//         }
//         return config;
//       },
//       responseError: function (rejection) {
//         if (rejection.status === 401) {
//           // handle the case where the user is not authenticated
//         }
//         return $q.reject(rejection);
//       }
//     };
//   }]);

regApp.factory('authSvc', ['$injector', function($injector) {

    function setUser(value) {
        //console.log(value);
        setSession('cust.id', value.CustID);
        setSession('cust.username', (value.FirstName + ' ' + value.LastName));
        setSession('cust.profileid', (value.ProfileID));
        setSession('cust.paidstatus', (value.PaidStatus));
        setSession('cust.profilepic', (value.ProfilePic));
    }

    function getSession(key) {
        return sessionStorage.getItem(key);
    }

    function setSession(key, value) {
        if (value === undefined || value === null) {
            clearSession(key);
        } else {
            sessionStorage.setItem(key, value);
        }
    }

    function clearSession(key) {
        sessionStorage.removeItem(key);
    }

    function clearUserSession() {

        clearSession('cust.id');
        clearSession('cust.username');
        clearSession('cust.profileid');
        clearSession('cust.paidstatus');
        clearSession('cust.profilepic');
    }

    function getUser() {
        return {
            custid: getSession('cust.id'),
            username: getSession('cust.username'),
            profileid: getSession('cust.profileid'),
            paidstatus: getSession('cust.paidstatus'),
            profilepic: getSession('cust.profilepic')
        };
    }

    return {
        user: function(value) {
            if (value) {
                setUser(value);
            }
            return getUser();
        },
        isAuthenticated: function() {
            return getSession('cust.id');
        },
        getCustId: function() {
            return getSession('cust.id');
        },
        getProfileid: function() {
            return getSession('cust.profileid');
        },
        getpaidstatus: function() {
            return getSession('cust.paidstatus');
        },
        clearUserSessionDetails: function() {
            return clearUserSession();
        },
        logout: function() {
            clearUserSession();
            window.location = "#/";
        },
        login: function(username, password) {

            var body = {
                Username: username,
                Password: password
            };
            return $injector.invoke(function($http) {
                return $http.post(regApp.apipath + 'DB/userLogin/person', body)
                    .then(function(response) {
                        if (response.status === 200) {

                            return { success: true, response: response.data };
                        }
                        return { success: false, response: response.data };
                    });
            });
        }
    };
}]);

//   app.ng.config(['$httpProvider', function ($httpProvider) {
//     $httpProvider.interceptors.push('authInterceptor');
//   }]);
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
regApp.factory('getArray', ['arrayConstantsreg', 'SelectBindServicereg', function(cons, service) {
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
                    service.countrySelect().then(function(response) {

                        // option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
                    break;

                case 'ProfCatgory':

                    service.ProfessionCatgory().then(function(response) {

                        //option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
                    break;

                case 'ProfGroup':
                    service.ProfessionGroup().then(function(response) {

                        //option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
                    break;

                case 'indiaStates':
                    service.stateSelect('1').then(function(response) {

                        //option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
                    break;
                case 'countryCode':
                    service.countryCodeselect().then(function(response) {

                        //option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
                    break;
                case 'caste':
                    service.casteselect().then(function(response) {

                        //option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
                    break;
                case 'currency':
                    service.currency().then(function(response) {

                        //option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
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

}]);
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
regApp.service('route', ['$state', function($state) {
    this.go = function(stateName, param) {
        $state.go(stateName, param);
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
    "<div class=\"right_col\" role=\"main\">\r" +
    "\n" +
    "    <div class=\"register_page_main\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <h4>Registration</h4>\r" +
    "\n" +
    "        <div class=\"regmain\">\r" +
    "\n" +
    "            <div layout=\"column\" ng-cloak=\"\" class=\"inputdemoErrors\">\r" +
    "\n" +
    "                <md-content layout-padding=\"\" md-dynamic-height>\r" +
    "\n" +
    "                    <form name=\"regForm\" novalidate role=\"form\" ng-submit=\"regForm.$valid && regSubmit(reg);\">\r" +
    "\n" +
    "                        <div class=\"reg_fields_entry clearfix\">\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <div class=\"radio-group-my\">\r" +
    "\n" +
    "                                        <md-input-container>\r" +
    "\n" +
    "                                            <md-radio-group ng-required=\"true\" name=\"rbtngender\" layout=\"row\" ng-model=\"reg.rbtngender\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                                                <md-radio-button value=\"1\" class=\"md-primary\">Male</md-radio-button>\r" +
    "\n" +
    "                                                <md-radio-button value=\"2\"> Female </md-radio-button>\r" +
    "\n" +
    "                                            </md-radio-group>\r" +
    "\n" +
    "                                            <div ng-messages=\"regForm.rbtngender.$invalid\">\r" +
    "\n" +
    "                                                <div ng-if=\"regForm.rbtngender.$invalid && (regForm.$submitted)\">This is required.</div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </md-input-container>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"col-lg-6\">\r" +
    "\n" +
    "                                    <md-input-container>\r" +
    "\n" +
    "                                        <md-checkbox ng-model=\"reg.Chkfree_reg\" name=\"Chkfree_reg\" aria-label=\"Chkfree_reg\" ng-change=\"mobilemailvalidation()\">\r" +
    "\n" +
    "                                            Free member\r" +
    "\n" +
    "                                        </md-checkbox>\r" +
    "\n" +
    "                                    </md-input-container>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <br />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
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
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
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
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Email</label>\r" +
    "\n" +
    "                                <input ng-required=\"emailrequired\" maxlength=\"50\" md-asterisk=\"\" name=\"txtEmail\" ng-model=\"reg.txtEmail\" ng-pattern=\"/^.+@.+\\..+$/\" ng-blur=\"valueExists('email',0,reg.txtEmail);\">\r" +
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
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
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
    "                            <div class=\"col-lg-4\">\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\" style=\"width:33%;\">\r" +
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
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\" style=\"width:33%;\">\r" +
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
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\" style=\"width:34%;\">\r" +
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
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Religion</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlreligion\" ng-model=\"reg.ddlreligion\" required=\"\" ng-change=\"changeBind(reg.ddlreligion,reg.ddlmothertongue);\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in religion\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"regForm.ddlreligion.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Mother Tongue</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlmothertongue\" ng-model=\"reg.ddlmothertongue\" required=\"\" ng-change=\"changeBind(reg.ddlreligion,reg.ddlmothertongue);\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in Mothertongue\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"regForm.ddlmothertongue.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Caste</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlcaste\" ng-model=\"reg.ddlcaste\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in casteArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"regForm.ddlcaste.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Residing At</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlcountry\" ng-model=\"reg.ddlcountry\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in Country\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"regForm.ddlcountry.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"col-lg-4\">\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\" style=\"width: 50%;\">\r" +
    "\n" +
    "                                    <label>country code</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlmobilecountry\" ng-model=\"reg.ddlmobilecountry\" ng-required=\"mobilecountrycoderequired\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in countryCode\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"regForm.ddlmobilecountry.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\" style=\"width: 50%;\">\r" +
    "\n" +
    "                                    <label>Mobile number</label>\r" +
    "\n" +
    "                                    <input maxlength=\"10\" ng-minlength=\"10\" ng-required=\"mobilenumberrequired\" md-no-asterisk=\"\" ng-pattern=\"/^[0-9]+$/\" name=\"txtMobileNo\" ng-model=\"reg.txtMobileNo\" ng-blur=\"valueExists('number',1,reg.txtMobileNo);\">\r" +
    "\n" +
    "                                    <div ng-messages=\"regForm.txtMobileNo.$error\">\r" +
    "\n" +
    "                                        <div ng-message-exp=\"['required', 'pattern','minlength']\">\r" +
    "\n" +
    "                                            This is required and enter only numbers(10 digits).\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"col-lg-4\">\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\" style=\"width:33%;\">\r" +
    "\n" +
    "                                    <label>Land code</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddllandcountry\" ng-model=\"reg.ddllandcountry\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in countryCode\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\" style=\"width:33%;\">\r" +
    "\n" +
    "                                    <label>Area code</label>\r" +
    "\n" +
    "                                    <input maxlength=\"8\" name=\"txtArea\" ng-model=\"reg.txtArea\" ng-pattern=\"/^[0-9]+$/\">\r" +
    "\n" +
    "                                    <div ng-messages=\"regForm.txtArea.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"pattern\">\r" +
    "\n" +
    "                                            Enter only numbers.\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\" style=\"width:34%;\">\r" +
    "\n" +
    "                                    <label>Landline number</label>\r" +
    "\n" +
    "                                    <input maxlength=\"8\" name=\"txtlandNum\" ng-model=\"reg.txtlandNum\" ng-pattern=\"/^[0-9]+$/\">\r" +
    "\n" +
    "                                    <div ng-messages=\"regForm.txtlandNum.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"pattern\">\r" +
    "\n" +
    "                                            Enter only numbers.\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"clear\"></div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-lg-10\">\r" +
    "\n" +
    "                                    <md-input-container>\r" +
    "\n" +
    "                                        <md-checkbox ng-model=\"reg.Chkprivacy\" name=\"Chkprivacy\" aria-label=\"Checkbox 1\" ng-required=\"true\" md-asterisk=\"\">\r" +
    "\n" +
    "                                            I agree to the\r" +
    "\n" +
    "                                            <a ng-model=\"reg.lnkprivacyPolicy\" Font-Size=\"12px\" ng-click=\"redirectprivacy()\">Privacy Policy and T&C.</a>\r" +
    "\n" +
    "                                        </md-checkbox>\r" +
    "\n" +
    "                                        <div ng-messages=\"regForm.Chkprivacy.$invalid\">\r" +
    "\n" +
    "                                            <div ng-if=\"regForm.Chkprivacy.$invalid && (regForm.$submitted)\">This is required.</div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </md-input-container>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"col-lg-2\">\r" +
    "\n" +
    "                                    <md-button type=\"submit\" class=\"md-raised md-warn md-hue-2\" TabIndex=\"18\">SUBMIT</md-button>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <label ID=\"lblResult\" Font-Bold=\"true\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </form>\r" +
    "\n" +
    "                </md-content>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!--<button ng-click=\"redirect();\">test</button>-->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
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
    "    \r" +
    "\n" +
    "    .register_page_main_steps ul li a:after {\r" +
    "\n" +
    "        display: block;\r" +
    "\n" +
    "        content: \"\";\r" +
    "\n" +
    "        background: #ccc;\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        height: 5px;\r" +
    "\n" +
    "        border-radius: 5px;\r" +
    "\n" +
    "        position: absolute;\r" +
    "\n" +
    "        left: 0;\r" +
    "\n" +
    "        bottom: 0;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    md-content {\r" +
    "\n" +
    "        display: block;\r" +
    "\n" +
    "        position: relative;\r" +
    "\n" +
    "        overflow: hidden;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>\r" +
    "\n" +
    "<script src=\"build/js/custom.js\" type=\"text/javascript\"></script>"
  );


  $templateCache.put('registration/app/views/faqs.html',
    "<div class=\"right_col\" role=\"main\">\r" +
    "\n" +
    "    <div class=\"register_page_main\">\r" +
    "\n" +
    "        <h4>FAQ's</h4>\r" +
    "\n" +
    "        <div class=\"faq_main\">\r" +
    "\n" +
    "            <div class=\"faq_main_head clearfix\">\r" +
    "\n" +
    "                <div class=\"faq_main_search clearfix\">\r" +
    "\n" +
    "                    <fieldset>\r" +
    "\n" +
    "                        <input id=\"filter\" autocomplete=\"off\" type=\"text\" ng-model=\"filters.search\">\r" +
    "\n" +
    "                        <span id=\"filter-count\"></span>\r" +
    "\n" +
    "                    </fieldset>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faq_grid clearfix\">\r" +
    "\n" +
    "                    <a class=\"faq_expand\" faqdirective ng-click=\"expanall()\">Expand All</a>\r" +
    "\n" +
    "                    <a class=\"faq_collapse\" faqdirective ng-click=\"collapseall()\">Collapse All</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"faqs_list_main\">\r" +
    "\n" +
    "                <div class=\"\">\r" +
    "\n" +
    "                    <div class=\"faqs_list_main_item\" ng-class=\"faqs.activeClass\" ng-repeat=\"faqs in arrayfaqs | filter:filters.search\">\r" +
    "\n" +
    "                        <h5 faqdirective class=\"faq_toggle_heading\" ng-click=\"toggleans(faqs)\">\r" +
    "\n" +
    "                            <span class=\"HeaderCSS\">{{faqs.questons}}</span></h5>\r" +
    "\n" +
    "                        <div class=\"faq_ans_block\" ng-show=\"faqs.styleanswer\">\r" +
    "\n" +
    "                            <p>\r" +
    "\n" +
    "                                <span>{{faqs.answers}}</span>\r" +
    "\n" +
    "                            </p>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div id=\"ctl00_modalPopup_backgroundElement\" style=\"display:none; position: fixed; left: 0px; top: 0px; z-index: 10000;\" class=\"modalBackground\"></div>"
  );


  $templateCache.put('registration/app/views/managePhoto.html',
    "<div class=\"right_col\" role=\"main\">\r" +
    "\n" +
    "    <div>\r" +
    "\n" +
    "        <h4>\r" +
    "\n" +
    "            <label Font-Bold=\"true\">Registration</label></h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"regmain\">\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-lg-10\">\r" +
    "\n" +
    "                        <h6 style=\"font-size: 21px;\">Upload your recent Photos for better response</h6>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-lg-2\">\r" +
    "\n" +
    "                        <md-button class=\"md-raised md-warn md-hue-2\" href=\"registration/upgradeMemberShip\">skip this page</md-button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <br />\r" +
    "\n" +
    "                <div class=\"dragzone\">\r" +
    "\n" +
    "                    <div class=\"pics_selected_list_main clearfix\">\r" +
    "\n" +
    "                        <div class=\"pics_selected_list_main_lt clearfix\">\r" +
    "\n" +
    "                            <p class=\"clearfix\"><span>Upload your three different photos</span></p>\r" +
    "\n" +
    "                            <div id=\"dtimagephoto\" class=\"clearfix\" ng-repeat=\"item in manageArr\" style=\"width:33%;float:left;\">\r" +
    "\n" +
    "                                <div class=\"photos\">\r" +
    "\n" +
    "                                    <div class=\"pics_selected_list_item\">\r" +
    "\n" +
    "                                        <div ng-class=\"item.IsActive == 0 && item.PhotoName !== null?'cssMaskdiv clearfix':''\">\r" +
    "\n" +
    "                                            <img ng-model=\"imgPhotoName\" ng-src=\"{{item.ImageUrl}}\" />\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div class=\"pics_selected_list_item_ui clearfix\">\r" +
    "\n" +
    "                                            <div class=\"photos_icon\">\r" +
    "\n" +
    "                                                <!--<input type=\"image\" id=\"imgAdd\" alt=\"add\" ng-click=\"AddImage($index+1,item.Cust_Photos_ID,item.DisplayOrder,item.IsActive);\" ng-show=\"{{item.addButtonvisible}}\" />-->\r" +
    "\n" +
    "                                                <a href=\"javascript:void(0);\" ng-click=\"AddImage($index+1,item.Cust_Photos_ID,item.DisplayOrder,item.IsActive);\" ng-show=\"{{item.addButtonvisible}}\">\r" +
    "\n" +
    "                                                    <ng-md-icon icon=\"add_a_photo\" style=\"fill:#665454\" size=\"25\">Add</ng-md-icon>\r" +
    "\n" +
    "                                                </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                <a href=\"javascript:void(0);\" ng-show=\"{{item.IsMain==1?false:(item.PhotoName!=null?true:false)}}\" ng-click=\"DeleteImage(item.keyname,item.Cust_Photos_ID);\">\r" +
    "\n" +
    "                                                    <ng-md-icon icon=\"delete\" style=\"fill:#665454\" size=\"25\">Delete</ng-md-icon>\r" +
    "\n" +
    "                                                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                                                <a href=\"javascript:void(0);\" class=\"set_pic\" ng-click=\"setAsProfilePic(item.Cust_Photos_ID);\" style=\"color:#665454;font-weight:bold;\" ng-show='{{item.IsMain==\"1\"?false:(item.PhotoName!=null?true:false) }}'>\r" +
    "\n" +
    "                                            Set as Profilepic\r" +
    "\n" +
    "                                            </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"clear\"></div>\r" +
    "\n" +
    "                            <div class=\"edit_page_photo_manage_submit\" ng-hide=\"true\">\r" +
    "\n" +
    "                                <div class=\"edit_page_photo_manage_protect pull-left clearfix\" id=\"divPassword\">\r" +
    "\n" +
    "                                    <label class=\"\">\r" +
    "\n" +
    "                                <div class=\"radio_my2 clearfix\">\r" +
    "\n" +
    "                                <label style=\"font-size: 14px !important; font-weight: 400;\"> Protect with Password :</label> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                                    <md-radio-group layout=\"row\" ng-model=\"rbtProtectPassword\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\" ng-change=\"setPhotoPassword(rbtProtectPassword);\">\r" +
    "\n" +
    "                                        <md-radio-button value=\"1\" class=\"md-primary\">Yes</md-radio-button>\r" +
    "\n" +
    "                                        <md-radio-button value=\"0\"> No </md-radio-button>\r" +
    "\n" +
    "                                    </md-radio-group>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                </label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"photo_upload_instrctns_list clearfix\">\r" +
    "\n" +
    "                        <a ID=\"phtoguide\" href=\"javascript:void(0);\" ng-click=\"redirectPage('PhotoGuideLines');\">Photo guidelines\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <a ID=\"photofaq\" href=\"javascript:void(0);\" ng-click=\"redirectPage('Faqs');\">Photo faq’s\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <a ID=\"photoupload\" href=\"javascript:void(0);\" ng-click=\"redirectPage('uploadTips');\">Photo upload tips\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"my_photos_main_block2 clearfix\">\r" +
    "\n" +
    "                <div class=\"clearfix pics_incorrect_list\">\r" +
    "\n" +
    "                    <h3>Such Photos cannot be Uploaded</h3>\r" +
    "\n" +
    "                    <table id=\"DataList3\" class=\"clearfix\" style=\"border-collapse: collapse;\" cellspacing=\"0\">\r" +
    "\n" +
    "                        <tbody>\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <img id=\"DataList3_ctl00_images\" src=\"src\\images/Side-face.png\">\r" +
    "\n" +
    "                                    <p>\r" +
    "\n" +
    "                                        Side Face\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <img id=\"DataList3_ctl01_images\" src=\"src\\images/Blir.png\">\r" +
    "\n" +
    "                                    <p>\r" +
    "\n" +
    "                                        Blur\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <img id=\"DataList3_ctl02_images\" src=\"src\\images/Group-photos.png\">\r" +
    "\n" +
    "                                    <p>\r" +
    "\n" +
    "                                        Group Photo\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <img id=\"DataList3_ctl03_images\" src=\"src\\images/Water-mark.png\">\r" +
    "\n" +
    "                                    <p>\r" +
    "\n" +
    "                                        Watermark\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                        </tbody>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"pics_selected_list_main_rt clearfix pics_correct_list\">\r" +
    "\n" +
    "                    <h3>Photos that can be uploaded</h3>\r" +
    "\n" +
    "                    <table id=\"DataList2\" class=\"clearfix\" style=\"border-collapse: collapse;\" cellspacing=\"0\">\r" +
    "\n" +
    "                        <tbody>\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <img id=\"DataList2_ctl00_images\" src=\"src\\images/Close-up.png\">\r" +
    "\n" +
    "                                    <p>\r" +
    "\n" +
    "                                        Close Up\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <img id=\"DataList2_ctl01_images\" src=\"src\\images/Fulsize.png\">\r" +
    "\n" +
    "                                    <p>\r" +
    "\n" +
    "                                        Full Size\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                        </tbody>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"my_photos_main_block3\">\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    <img src=\"src/images/whatsup.png\" alt=\"Mail\" style=\"width: 50px; height: 40px;\">Whatsup your photos to\r" +
    "\n" +
    "                    <span>91-9848535373</span> - Kindly mention your Profile ID and name\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    <img src=\"src/images/icon_email.png\" alt=\"Mail\">Can also Email your photos to <span>photos@telugumarriages.com</span> - Kindly mention your Profile ID and name\r" +
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
    "    </div>\r" +
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
    "</style>\r" +
    "\n" +
    "<script src=\"build/js/custom.js\" type=\"text/javascript\"></script>"
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


  $templateCache.put('registration/app/views/photoGuideLines.html',
    "<div class=\"right_col\" role=\"main\">\r" +
    "\n" +
    "    <div class=\"register_page_main\">\r" +
    "\n" +
    "        <h4>Guidelines for uploading correct photos</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"photo_guidlines_main\">\r" +
    "\n" +
    "            <div class=\"photo_guidlines_main_item clearfix\">\r" +
    "\n" +
    "                <div class=\"photo_guidlines_main_item_lt pics_incorrect_list clearfix\">\r" +
    "\n" +
    "                    <h3>such photos cannot be uploaded</h3>\r" +
    "\n" +
    "                    <table id=\"DataList3\" class=\"clearfix\" style=\"border-collapse: collapse;\" cellspacing=\"0\">\r" +
    "\n" +
    "                        <tbody>\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <img id=\"DataList3_ctl00_images\" src=\"src\\images/Side-face.png\">\r" +
    "\n" +
    "                                    <p>\r" +
    "\n" +
    "                                        Side Face\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <img id=\"DataList3_ctl01_images\" src=\"src\\images/Blir.png\">\r" +
    "\n" +
    "                                    <p>\r" +
    "\n" +
    "                                        Blur\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <img id=\"DataList3_ctl02_images\" src=\"src\\images/Group-photos.png\">\r" +
    "\n" +
    "                                    <p>\r" +
    "\n" +
    "                                        Group Photo\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <img id=\"DataList3_ctl03_images\" src=\"src\\images/Water-mark.png\">\r" +
    "\n" +
    "                                    <p>\r" +
    "\n" +
    "                                        Watermark\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                        </tbody>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"photo_guidlines_main_item_rt\">\r" +
    "\n" +
    "                    <p>\r" +
    "\n" +
    "                        Do not send a photo which shows only a side of your face, blurred or unclear photos, or where your face is partially visible, They will be rejected during screening process.\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "                    <p>\r" +
    "\n" +
    "                        Please ensure that you do not upload celebrity photographs, if such is the case, we may deactivate your membership.\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"photo_guidlines_main_item clearfix\">\r" +
    "\n" +
    "                <div class=\"photo_guidlines_main_item_lt  pics_incorrect_list pics_correct_list clearfix\">\r" +
    "\n" +
    "                    <h3>Photos that can be uploaded</h3>\r" +
    "\n" +
    "                    <table id=\"DataList2\" class=\"clearfix\" style=\"border-collapse: collapse;\" cellspacing=\"0\">\r" +
    "\n" +
    "                        <tbody>\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <img id=\"DataList2_ctl00_images\" src=\"src\\images/Close-up.png\">\r" +
    "\n" +
    "                                    <p>\r" +
    "\n" +
    "                                        Close Up\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <img id=\"DataList2_ctl01_images\" src=\"src\\images/Fulsize.png\">\r" +
    "\n" +
    "                                    <p>\r" +
    "\n" +
    "                                        Full Size\r" +
    "\n" +
    "                                    </p>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                        </tbody>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"photo_guidlines_main_item_rt\">\r" +
    "\n" +
    "                    <p>\r" +
    "\n" +
    "                        Please upload half-size or full-size recent photographs.\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"photo_guidlines_main_guideslist\">\r" +
    "\n" +
    "                <h6>Please ensure that none of your photos are obscene or irrelevant. In such a case your account will be deactivated.</h6>\r" +
    "\n" +
    "                <p title=\"1\">Mentioning contact details on photos is prohibited.</p>\r" +
    "\n" +
    "                <p title=\"2\">Do not upload photograph which shows you with a cigarette / cigar.</p>\r" +
    "\n" +
    "                <p title=\"3\">Photograph which does not match with the age specified in the profile will not be uploaded.</p>\r" +
    "\n" +
    "                <p title=\"4\">Do not upload photos wearing govt service uniforms unless they match your profession.(eg.army,navy, police etc.)</p>\r" +
    "\n" +
    "                <p title=\"5\">Optimum photo size is 400 width x 500 height.</p>\r" +
    "\n" +
    "                <p title=\"6\">If you choose to mail photos,please mention profile picture.</p>\r" +
    "\n" +
    "                <p title=\"7\">photos uploaded will undergo screening and updated within 2 hours during the business hours.</p>\r" +
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
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('registration/app/views/privacyPolicy.html',
    "<div class=\"right_col\" role=\"main\">\r" +
    "\n" +
    "    <div class=\"register_page_main\" ng-init=\"initprivacy()\">\r" +
    "\n" +
    "        <h4>Privacy Policy</h4>\r" +
    "\n" +
    "        <div class=\"faq_main\">\r" +
    "\n" +
    "            <div class=\"faqs_list_main privacy_page_main\">\r" +
    "\n" +
    "                <h5><small>Updated December 23, 2003 - Version 1.7</small></h5>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\">\r" +
    "\n" +
    "                    <h5>Privacy Topics</h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc privacy_topic_links clearfix\">\r" +
    "\n" +
    "                        <a href=\"#reg\">Registration</a>\r" +
    "\n" +
    "                        <a href=\"#advreg\">Advanced Registration</a>\r" +
    "\n" +
    "                        <a href=\"#cookies\">Cookies</a>\r" +
    "\n" +
    "                        <a href=\"#logfiles\">Log Files</a>\r" +
    "\n" +
    "                        <a href=\"#sharing\">Sharing</a>\r" +
    "\n" +
    "                        <a href=\"#links\">Links</a>\r" +
    "\n" +
    "                        <a href=\"#newsletters\">Newsletter</a>\r" +
    "\n" +
    "                        <a href=\"#surveys\">Surveys &amp; Contests</a>\r" +
    "\n" +
    "                        <a href=\"#tellafriend\">Tell-A-Friend</a>\r" +
    "\n" +
    "                        <a href=\"#supplement\">Supplementation of Information</a>\r" +
    "\n" +
    "                        <a href=\"#sploffers\">Special Offers</a>\r" +
    "\n" +
    "                        <a href=\"#siteupdates\">Site and Service Updates</a>\r" +
    "\n" +
    "                        <a href=\"#prsnlinformupdate\">Correction/Updating Personal Information</a>\r" +
    "\n" +
    "                        <a href=\"#chcoutput\">Choice/Opt-out</a>\r" +
    "\n" +
    "                        <a href=\"#emaillinks\">Email Links</a>\r" +
    "\n" +
    "                        <a href=\"#thidpartyadvrts\">Third Party Advertisers and Cookies</a>\r" +
    "\n" +
    "                        <a href=\"#notifychanges\">Notification of Changes</a>\r" +
    "\n" +
    "                        <a href=\"#feerefund\">Fees Refund</a>\r" +
    "\n" +
    "                        <a href=\"#cancelmembership\">Cancellation of Membership</a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"reg\">\r" +
    "\n" +
    "                    <h5>Registration</h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>In order to use this website, a user must first complete the registration form. During registration a user is required to give their contact information (such as name and email address). This information is used to contact the\r" +
    "\n" +
    "                            user about the services on our site for which they have expressed interest. It is optional for the user to provide demographic information (such as income level and gender), and unique identifiers (such as social security number),\r" +
    "\n" +
    "                            but encouraged so we can provide a more personalized experience on our site. Kaakateeya.com and its partners/ offices in India collect personal information necessary to respond to your requests for customized matrimonial services\r" +
    "\n" +
    "                            and to allow you to use the resources available on our website. Personal information includes, but is not limited to, name, physical address, email address, date of birth, religion, time of birth, caste, fathers name, mothers\r" +
    "\n" +
    "                            name, brothers and sisters details phone number, age and any other information that itself identifies or, when tied to the above information, may identify you as a specific individual. Kaakateeya.com and its partners. Kaakateeya.com\r" +
    "\n" +
    "                            also uses order forms, feedback for you to request certain information, products and services. On such order forms, we collect your contact information, financial information (We work with Verisign to process credit card transactions\r" +
    "\n" +
    "                            and we do not store your credit card details on our site like the credit card no, address and other related information) and demographic information.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"advreg\">\r" +
    "\n" +
    "                    <h5>Advanced Registration</h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>Kaakateeya.com offers paid membership to user wishing to use our advance features such as Contact Information of other Registered Members, Membership to our Indian Offices. Here a user must provide contact information (like name\r" +
    "\n" +
    "                            and shipping address) and financial information (like credit card number, expiration date). This information is used for billing purposes and to fill customer's orders. If we have trouble processing an order, this contact information\r" +
    "\n" +
    "                            is used to get in touch with the user.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"cookies\">\r" +
    "\n" +
    "                    <h5>Cookies</h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>kaakateeya.com does not use any cookies.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"logfiles\">\r" +
    "\n" +
    "                    <h5>Log Files </h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>We use IP addresses to analyze trends, administer the site, track user’s movement, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"sharing\">\r" +
    "\n" +
    "                    <h5>Sharing </h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>We do not share your personal information with anybody. We will share aggregated demographic information with our partners and advertisers. This is not linked to any personal information that can identify any individual person.\r" +
    "\n" +
    "                            We use an outside shipping company to ship orders, and a credit card processing company to bill users for goods and services. These companies do not retain, share, store or use personally identifiable information for any secondary\r" +
    "\n" +
    "                            purposes. We partner with another party to provide specific services. When the user signs up for these services, we will share names, or other contact information that is necessary for the third party to provide these services.These\r" +
    "\n" +
    "                            parties are not allowed to use personally identifiable information except for the purpose of providing these services.\r" +
    "\n" +
    "                        </p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"links\">\r" +
    "\n" +
    "                    <h5>Links </h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>This web site contains links to other sites. Please be aware that we kaakateeya.com are not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the\r" +
    "\n" +
    "                            privacy statements of each and every web site that collects personally identifiable information. This privacy statement applies solely to information collected by this Web site.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"newsletters\">\r" +
    "\n" +
    "                    <h5>Newsletter </h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>If a user wishes to subscribe to our newsletter, we ask for contact information such as name and email address.\r" +
    "\n" +
    "                        </p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"surveys\">\r" +
    "\n" +
    "                    <h5>Surveys &amp; Contests </h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>From time-to-time our site requests information from users via surveys or contests. Participation in these surveys or contests is completely voluntary and the user therefore has a choice whether or not to disclose this information.\r" +
    "\n" +
    "                            Information requested may include contact information (such as name and shipping address), and demographic information (such as zip code, age level). Contact information will be used to notify the winners and award prizes.\r" +
    "\n" +
    "                            Survey information will be used for purposes of monitoring or improving the use and satisfaction of this site.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"tellafriend\">\r" +
    "\n" +
    "                    <h5>Tell-A-Friend </h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>If a user elects to use our referral service for informing a friend about our site, we ask them for the friend’s name and email address. kaakateeya.com will automatically send the friend a one-time email inviting them to visit\r" +
    "\n" +
    "                            the site. kaakateeya.com stores this information for the sole purpose of sending this one-time email. The friend may contact kaakateeya.com at Mailing List to request the removal of this information from their database.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\">\r" +
    "\n" +
    "                    <h5>Security </h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>This website takes every precaution to protect our users’ information. When users submit sensitive information via the website, your information is protected both online and off-line. When our registration/order form asks users\r" +
    "\n" +
    "                            to enter sensitive information (such as credit card number and/or social security number), that information is encrypted and is protected with the best encryption software in the industry - SSL. While on a secure page, such\r" +
    "\n" +
    "                            as our order form, the lock icon on the bottom of Web browsers such as Netscape Navigator and Microsoft Internet Explorer becomes locked, as opposed to un-locked, or open, when you are just ‘surfing’. To learn more about SSL,\r" +
    "\n" +
    "                            follow this link Verisign While we use SSL encryption to protect sensitive information online, we also do everything in our power to protect user-information off-line. All of our users’ information, not just the sensitive information\r" +
    "\n" +
    "                            mentioned above, is restricted in our offices. Only employees who need the information to perform a specific job (for example, our billing clerk or a customer service representative) are granted access to personally identifiable\r" +
    "\n" +
    "                            information. Our employees must use password-protected screen-savers when they leave their desk. When they return, they must re-enter their password to re-gain access to your information. Furthermore, ALL employees are kept\r" +
    "\n" +
    "                            up-to-date on our security and privacy practices. Every quarter, as well as any time new policies are added, our employees are notified and/or reminded about the importance we place on privacy, and what they can do to ensure\r" +
    "\n" +
    "                            our customers’ information is protected. Finally, the servers that we store personally identifiable information on are kept in a secure environment, behind a locked cage. If you have any questions about the security at our\r" +
    "\n" +
    "                            website, you can send an email to info@kaakateeya.com.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"supplement\">\r" +
    "\n" +
    "                    <h5>Supplementation of Information </h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>Email Messages, Registration Forms, and other related forms. We make the contents of the registration form visible to you and other register members of kaakateeya.com or its offices in India. Please remember that any information\r" +
    "\n" +
    "                            that is disclosed in these areas becomes public information. You should exercise caution when deciding to disclose your personal information. In order for this website to properly fulfill its obligation to our customers, it\r" +
    "\n" +
    "                            is necessary for us to supplement the information we receive with information from 3rd party sources. For example, to determine if our customers qualify for one of our credit cards, we use their name and social security number\r" +
    "\n" +
    "                            to request a credit report. Once we determine a user’s credit-worthiness, this document is destroyed. (or) In order for this website to enhance its ability to tailor the site to an individual’s preference, we combine information\r" +
    "\n" +
    "                            about the purchasing habits of users with similar information from our partners, Company Y &amp; Company Z, to create a personalized user profile. When a user makes a purchase from either of these two companies, the companies\r" +
    "\n" +
    "                            collect and share that purchase information with us so we can tailor the site to our users’ preferences.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"sploffers\">\r" +
    "\n" +
    "                    <h5>Special Offers</h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>We send all new members a welcoming email to verify password and username. Established members will occasionally receive information on products, services, special deals, and a newsletter. Out of respect for the privacy of our\r" +
    "\n" +
    "                            users we present the option to not receive these types of communications. Please see our choice and opt-out below.\r" +
    "\n" +
    "                        </p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"siteupdates\">\r" +
    "\n" +
    "                    <h5>Site and Service Updates </h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>We also send the user site and service announcement updates. Members are not able to un-subscribe from service announcements, which contain important information about the service. We communicate with the user to provide requested\r" +
    "\n" +
    "                            services and in regards to issues relating to their account via email or phone.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"prsnlinformupdate\">\r" +
    "\n" +
    "                    <h5>Correction/Updating Personal Information </h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>If a user’s personally identifiable information changes (such as your zip code), or if a user no longer desires our service, we will endeavor to provide a way to correct, update or remove that user’s personal data provided to us.\r" +
    "\n" +
    "                            This can usually be done at the member information page or by emailing our Customer Support at info@kaakateeya.com. You can also use the Modify and Delete pages to modify or delete your information by logging in with your userid\r" +
    "\n" +
    "                            and password. However, even if you delete your personal information in our database, it maybe stored by our offices in India / USA for archival purposes.\r" +
    "\n" +
    "                        </p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"chcoutput\">\r" +
    "\n" +
    "                    <h5>Choice/Opt-out </h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>Our users are given the opportunity to ‘opt-out’ of having their information used for purposes not directly related to our site at the point where we ask for the information. For example, our order form has an ‘opt-out’ mechanism\r" +
    "\n" +
    "                            so users who buy a product from us, but don’t want any marketing material, can keep their email address off of our lists. Users who no longer wish to receive our newsletter or promotional materials from our partners may opt-out\r" +
    "\n" +
    "                            of receiving these communications by replying to unsubscribe in the subject line in the email or email us at info@kaakateeya.com. Users of our site are always notified when their information is being collected by any outside\r" +
    "\n" +
    "                            parties. We do this so our users can make an informed choice as to whether they should proceed with services that require an outside party, or not.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"emaillinks\">\r" +
    "\n" +
    "                    <h5>Email Links </h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>We use email links located on the \"Contact us\" page to allow you to contact us directly with any questions or comments you may have. We read every message sent in and try to reply promptly to every one. This information is used\r" +
    "\n" +
    "                            to respond directly to your questions or comments. We may also file your comments to improve the site and program, or review and discard the information. Your personal information is only shared with third parties with your\r" +
    "\n" +
    "                            explicit permission.\r" +
    "\n" +
    "                        </p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"thidpartyadvrts\">\r" +
    "\n" +
    "                    <h5>Third Party Advertisers and Cookies</h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>kaakateeya.com may work with a third party to serve ads on our site. These ads may contain cookies. This policy only covers the use of cookies by kaakateeya.com and does not cover the use of cookies by any advertisers. kaakateeya.com.com\r" +
    "\n" +
    "                            does not have control, nor access to the information contained in its advertisers' cookies.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"notifychanges\">\r" +
    "\n" +
    "                    <h5>Notification of Changes </h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>We will notify you directly via email if there is a material change in our privacy practices. We will also post the changes in our privacy statement 30 days prior to a change.\r" +
    "\n" +
    "                            <br> Our address: Kaakateeya.Com 3233 Monument Ann Arbor, MI - 48108 USA http://www.kaakateeya.com</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"feerefund\">\r" +
    "\n" +
    "                    <h5>Fees Refund</h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>If you choose to terminate your membership, the MEMBERSHIP FEES ARE NOT REFUNDABLE under any circumstances. Your membership in the kaakateeya.com is for yourself for personal use. You may not authorize others to use your membership\r" +
    "\n" +
    "                            and you may not assign or transfer your account to any other person or entity.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"faqs_list_main_item\" id=\"cancelmembership\">\r" +
    "\n" +
    "                    <h5>Cancellation of Membership</h5>\r" +
    "\n" +
    "                    <div class=\"faq_ans_block policy_list_desc\">\r" +
    "\n" +
    "                        <p>The membership may be cancelled by either party by serving a written notice on the other.kaakateeya.com reserves the right to cancel the membership, to suspend a profile or to disable access in respect of any member in breach of\r" +
    "\n" +
    "                            any of the terms. In no case will the Membership fees be refundable.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <a class=\"back-to-top\">&nbsp;</a>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('registration/app/views/secondaryRegisrtation.html',
    "<div class=\"right_col\" role=\"main\">\r" +
    "\n" +
    "    <div class=\"register_page_main\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <h4>Registration</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"regmain\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div layout=\"column\" ng-cloak=\"\" class=\"inputdemoErrors\">\r" +
    "\n" +
    "                <md-content layout-padding=\"\">\r" +
    "\n" +
    "                    <form name=\"secregForm\" accessible-form novalidate role=\"form\" ng-submit=\"secregForm.$valid && secondRegSubmit(regsec);\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"reg_fields_entry clearfix\">\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Name</label>\r" +
    "\n" +
    "                                <input readonly md-no-asterisk=\"\" name=\"LabelName\" ng-model=\"regsec.LabelName\">\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Marital Status</label>\r" +
    "\n" +
    "                                <md-select name=\"rbtnmarital\" ng-model=\"regsec.rbtnmarital\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in MaritalStatus\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.rbtnmarital.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Complexion</label>\r" +
    "\n" +
    "                                <md-select name=\"rbtncomplexion\" ng-model=\"regsec.rbtncomplexion\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in Complexion\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.rbtncomplexion.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Physically Challenged</label>\r" +
    "\n" +
    "                                <md-select name=\"rbtnphysicalstatus\" ng-model=\"regsec.rbtnphysicalstatus\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in PhysicalStatus\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.rbtnphysicalstatus.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Height</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlHeight\" ng-model=\"regsec.ddlHeight\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in height\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlHeight.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Born Citizenship</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlBornCitizenship\" ng-model=\"regsec.ddlBornCitizenship\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in Country\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlBornCitizenship.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"clear\"></div>\r" +
    "\n" +
    "                            <!--<hr>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h4 class=\"well\">Education details</h4>\r" +
    "\n" +
    "                            </br>\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Education category</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlEduCategory\" ng-model=\"regsec.ddlEduCategory\" required=\"\" ng-change=\"changeBind('educat',regsec.ddlEduCategory)\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in educationcategory\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlEduCategory.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Group</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlEduGroup\" ng-model=\"regsec.ddlEduGroup\" required=\"\" ng-change=\"changeBind('edugroup',regsec.ddlEduGroup)\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in edugroup\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlEduGroup.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Specialization</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlEduSpecialisation\" ng-model=\"regsec.ddlEduSpecialisation\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in eduSplArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlEduSpecialisation.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"control-group col-lg-12\">\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-12\">\r" +
    "\n" +
    "                                    <label>Education merits</label>\r" +
    "\n" +
    "                                    <textarea maxlength=\"500\" rows=\"2\" md-no-asterisk=\"\" name=\"txtEducationMerits\" ng-model=\"regsec.txtEducationMerits\"></textarea>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"clear\"></div>\r" +
    "\n" +
    "                            <!--<hr>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h4 class=\"well\">profession details</h4>\r" +
    "\n" +
    "                            </br>\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Employed in</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlEmployedIn\" ng-model=\"regsec.ddlEmployedIn\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in ProfCatgory\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlEmployedIn.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Profession Group</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlProfessionalGroup\" ng-model=\"regsec.ddlProfessionalGroup\" required=\"\" ng-change=\"changeBind('profGroup',regsec.ddlProfessionalGroup)\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in ProfGroup\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlProfessionalGroup.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Profession</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlProfession\" ng-model=\"regsec.ddlProfession\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in professionArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlProfession.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Company name</label>\r" +
    "\n" +
    "                                <input maxlength=\"100\" md-no-asterisk=\"\" name=\"txtCompanyName\" ng-model=\"regsec.txtCompanyName\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Currency</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlcurrency\" ng-model=\"regsec.ddlcurrency\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in currency\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Monthly Salary</label>\r" +
    "\n" +
    "                                <input maxlength=\"7\" md-no-asterisk=\"\" name=\"txtSalary\" ng-model=\"regsec.txtSalary\" ng-pattern=\"/^[0-9]+$/\">\r" +
    "\n" +
    "                                <div ng-messages=\"secregForm.txtSalary.$error\">\r" +
    "\n" +
    "                                    <div ng-message-exp=\"['pattern']\">\r" +
    "\n" +
    "                                        enter only numbers.\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-12\">\r" +
    "\n" +
    "                                <label>Occupation details</label>\r" +
    "\n" +
    "                                <textarea maxlength=\"500\" rows=\"2\" md-no-asterisk=\"\" name=\"txtOcccupationDetails\" ng-model=\"regsec.txtOcccupationDetails\"></textarea>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"clear\"></div>\r" +
    "\n" +
    "                            <!--<hr>-->\r" +
    "\n" +
    "                            <h4 class=\"well\">Candidate location details</h4>\r" +
    "\n" +
    "                            <br>\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Country living in</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlCountryLivingIn\" ng-model=\"regsec.ddlCountryLivingIn\" ng-change=\"changeBind('Country',regsec.ddlCountryLivingIn)\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in Country\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlCountryLivingIn.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>State</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlStatelivingIn\" ng-model=\"regsec.ddlStatelivingIn\" required=\"\" ng-change=\"changeBind('state',regsec.ddlStatelivingIn,regsec.ddlCountryLivingIn)\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in stateArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlStatelivingIn.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\" ng-if=\"regsec.ddlCountryLivingIn==1\">\r" +
    "\n" +
    "                                <label>District</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlDistricLivingIn\" ng-model=\"regsec.ddlDistricLivingIn\" required=\"\" ng-change=\"changeBind('district',regsec.ddlDistricLivingIn)\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in districtArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlDistricLivingIn.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>City</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlcityLivingIn\" ng-model=\"regsec.ddlcityLivingIn\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in cityArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                                <div class=\"errors\" ng-messages=\"secregForm.ddlcityLivingIn.$error\">\r" +
    "\n" +
    "                                    <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\" ng-hide=\"regsec.ddlBornCitizenship==regsec.ddlCountryLivingIn\">\r" +
    "\n" +
    "                                <label>Visa status</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlVisaStatus\" ng-model=\"regsec.ddlVisaStatus\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in visastatus\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"col-lg-4\" style=\"padding-right: 0px;\" ng-hide=\"regsec.ddlBornCitizenship==regsec.ddlCountryLivingIn\">\r" +
    "\n" +
    "                                <label>Residing since</label>\r" +
    "\n" +
    "                                <md-datepicker ng-model=\"regsec.from\" md-min-date=\"minDate\" md-max-date=\"maxDate\">\r" +
    "\n" +
    "                                </md-datepicker>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"clear\"></div>\r" +
    "\n" +
    "                            <!--<hr>-->\r" +
    "\n" +
    "                            <h4 class=\"well\">Family details</h4>\r" +
    "\n" +
    "                            <br>\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Father Name</label>\r" +
    "\n" +
    "                                <input maxlength=\"100\" required=\"\" md-asterisk=\"\" name=\"txtFatherName\" ng-model=\"regsec.txtFatherName\">\r" +
    "\n" +
    "                                <div ng-messages=\"secregForm.txtFatherName.$error\">\r" +
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
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Father’s education</label>\r" +
    "\n" +
    "                                <input maxlength=\"150\" md-no-asterisk=\"\" name=\"txtFatherEducation\" ng-model=\"regsec.txtFatherEducation\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Father’s profession</label>\r" +
    "\n" +
    "                                <input maxlength=\"200\" md-no-asterisk=\"\" name=\"txtFatherProfession\" ng-model=\"regsec.txtFatherProfession\">\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Mother’s name</label>\r" +
    "\n" +
    "                                <input maxlength=\"100\" required=\"\" md-asterisk=\"\" name=\"txtMotherName\" ng-model=\"regsec.txtMotherName\">\r" +
    "\n" +
    "                                <div ng-messages=\"secregForm.txtMotherName.$error\">\r" +
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
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Mother’s education</label>\r" +
    "\n" +
    "                                <input maxlength=\"150\" md-no-asterisk=\"\" name=\"txtMotherEducation\" ng-model=\"regsec.txtMotherEducation\">\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Mother’s profession</label>\r" +
    "\n" +
    "                                <input maxlength=\"200\" md-no-asterisk=\"\" name=\"txtMotherprofession\" ng-model=\"regsec.txtMotherprofession\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Father’s Native place</label>\r" +
    "\n" +
    "                                <input maxlength=\"100\" md-no-asterisk=\"\" name=\"txtfathernative\" ng-model=\"regsec.txtfathernative\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Mother’s Native place</label>\r" +
    "\n" +
    "                                <input maxlength=\"100\" md-no-asterisk=\"\" name=\"txtmothernative\" ng-model=\"regsec.txtmothernative\">\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "                            <div class=\"col-lg-4\">\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>No of Brothers</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlBrothers\" ng-model=\"regsec.ddlBrothers\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in noOfsibblingsArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlBrothers.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>No of Sisters</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlSisters\" ng-model=\"regsec.ddlSisters\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in noOfsibblingsArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlSisters.$error\">\r" +
    "\n" +
    "                                        <div ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"clear\"></div>\r" +
    "\n" +
    "                            <!--<hr>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <h4 class=\"well\">About yourself</h4>\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Write About your unique characteristics,The Most Important Things In your life like your Aspiration, Interests, things you like to do,,,,,\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "                                <div class=\"profile_self_dcrb\">\r" +
    "\n" +
    "                                    <p>(Minimum 50 characters and maximum 1000 characters).</p>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container class=\"md-block\">\r" +
    "\n" +
    "                                    <label>About yourself</label>\r" +
    "\n" +
    "                                    <textarea maxlength=\"1000\" rows=\"3\" ng-minlength=\"50\" required=\"\" md-asterisk=\"\" name=\"txtabouturself\" ng-model=\"regsec.txtabouturself\"></textarea>\r" +
    "\n" +
    "                                    <div ng-messages=\"secregForm.txtabouturself.$error\">\r" +
    "\n" +
    "                                        <div ng-message-exp=\"['required', 'minlength']\">\r" +
    "\n" +
    "                                            This is required and enter Minimum 50 characters\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <p><span>Note: </span>Do not mention any contact information <b>phone numbers, email id’s</b> or your profile may be rejected.</p>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"clear\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"pull-right\">\r" +
    "\n" +
    "                                <md-button type=\"submit\" class=\"md-raised md-warn md-hue-2\" class=\"button_custom\" tabindex=\"37\">SUBMIT</md-button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </form>\r" +
    "\n" +
    "                </md-content>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!--<button ng-click=\"redirect();\">test</button>-->\r" +
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
    "    .col-lg-4 {\r" +
    "\n" +
    "        padding-right: 3%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .col-lg-4 md-datepicker {\r" +
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
    "    .md-datepicker-floating-label>md-datepicker .md-datepicker-button {\r" +
    "\n" +
    "        float: right;\r" +
    "\n" +
    "        margin-top: -2.5px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .md-datepicker-floating-label.md-datepicker-has-calendar-icon>label:not(.md-no-float):not(.md-container-ignore) {\r" +
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
    "    .reg_fields_entry .col-lg-4 {\r" +
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
    "    \r" +
    "\n" +
    "    md-content {\r" +
    "\n" +
    "        display: block;\r" +
    "\n" +
    "        position: relative;\r" +
    "\n" +
    "        overflow: hidden;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>\r" +
    "\n" +
    "<script src=\"build/js/custom.js\" type=\"text/javascript\"></script>"
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
    "<!-- footer content -->\r" +
    "\n" +
    "<footer>\r" +
    "\n" +
    "    <div class=\"pull-right\">\r" +
    "\n" +
    "        © 2004-2013 Www.Kaakateeya.Com Matrimony - Online Marriage Site. All Rights Reserved.\r" +
    "\n" +
    "        <a href=\"https://colorlib.com\"></a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"clearfix\"></div>\r" +
    "\n" +
    "</footer>\r" +
    "\n" +
    "<!-- /footer content -->"
  );


  $templateCache.put('registration/masterTemplate/headerTemplate.html',
    "<div class=\"col-md-3 left_col\">\r" +
    "\n" +
    "    <div class=\"left_col scroll-view\">\r" +
    "\n" +
    "        <div class=\"navbar nav_title\" style=\"border: 0;\">\r" +
    "\n" +
    "            <a href=\"/\" class=\"site_title smalllogo\"><img src=\"src/images/kaakateeyalogo_001.jpg\" style=\"width:50px;height:50px;\"></img>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <a href=\"/\" class=\"site_title kaakateeyalogo\"><img src=\"src/images/logo3.png\" style=\"width: 158px;\r" +
    "\n" +
    "    height: 61px;\"></img>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"clearfix\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!-- menu profile quick info -->\r" +
    "\n" +
    "        <div class=\"profile clearfix\">\r" +
    "\n" +
    "            <div class=\"profile_pic\">\r" +
    "\n" +
    "                <img src=\"src/images/img_notavail.jpg\" alt=\"...\" class=\"img-circle profile_img\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"profile_info\">\r" +
    "\n" +
    "                <span>Welcome,</span>\r" +
    "\n" +
    "                <h2 style=\"color:#0d1aca;\">Admin</h2>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- /menu profile quick info -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!-- sidebar menu -->\r" +
    "\n" +
    "        <div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\r" +
    "\n" +
    "            <div class=\"menu_section\">\r" +
    "\n" +
    "                <h3>General</h3>\r" +
    "\n" +
    "                <ul class=\"nav side-menu\">\r" +
    "\n" +
    "                    <li><a><i class=\"fa fa-video-camera\"></i> Demo <span class=\"fa fa-chevron-down\"></span></a>\r" +
    "\n" +
    "                        <ul class=\"nav child_menu\">\r" +
    "\n" +
    "                            <li><a href=\"bootstrapslidepopup\">BootstrapslidePopup</a></li>\r" +
    "\n" +
    "                            <li><a href=\"bootstrapslide\">Bootstrapslide</a></li>\r" +
    "\n" +
    "                            <li><a href=\"bootstrapTable\">BootstrapTable</a></li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li><a><i class=\"fa fa-home\"></i> Home <span class=\"fa fa-chevron-down\"></span></a>\r" +
    "\n" +
    "                        <ul class=\"nav child_menu\">\r" +
    "\n" +
    "                            <li><a href=\"/home\">Dashboard</a></li>\r" +
    "\n" +
    "                            <li><a href=\"dashboard2\">Dashboard2</a></li>\r" +
    "\n" +
    "                            <li><a href=\"dashboard3\">Dashboard3</a></li>\r" +
    "\n" +
    "                            <li><a href=\"dashBoardNew\">dashBoardNew</a></li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li><a><i class=\"fa fa-edit\"></i> Edit <span class=\"fa fa-chevron-down\"></span></a>\r" +
    "\n" +
    "                        <ul class=\"nav child_menu\">\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Education</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Parents</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">siblings</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Relatives</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Astro</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Managephoto</a></li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li><a><i class=\"fa fa-search\"></i> Search <span class=\"fa fa-chevron-down\"></span></a>\r" +
    "\n" +
    "                        <ul class=\"nav child_menu\">\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">General Search</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Advanced search</a></li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li><a><i class=\"fa fa-table\"></i> Reports <span class=\"fa fa-chevron-down\"></span></a>\r" +
    "\n" +
    "                        <ul class=\"nav child_menu\">\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Myprofile</a></li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li><a><i class=\"fa fa-clone\"></i>Slide shows <span class=\"fa fa-chevron-down\"></span></a>\r" +
    "\n" +
    "                        <ul class=\"nav child_menu\">\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">marketing</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Matchfollowup</a></li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"menu_section\">\r" +
    "\n" +
    "                <h3>Live On</h3>\r" +
    "\n" +
    "                <ul class=\"nav side-menu\">\r" +
    "\n" +
    "                    <li><a><i class=\"fa fa-bug\"></i> Additional Pages <span class=\"fa fa-chevron-down\"></span></a>\r" +
    "\n" +
    "                        <ul class=\"nav child_menu\">\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">E-commerce</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Projects</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Project Detail</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Contacts</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Profile</a></li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li><a><i class=\"fa fa-windows\"></i> Extras <span class=\"fa fa-chevron-down\"></span></a>\r" +
    "\n" +
    "                        <ul class=\"nav child_menu\">\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">403 Error</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">404 Error</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">500 Error</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Plain Page</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Login Page</a></li>\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Pricing Tables</a></li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li><a><i class=\"fa fa-sitemap\"></i> Multilevel Menu <span class=\"fa fa-chevron-down\"></span></a>\r" +
    "\n" +
    "                        <ul class=\"nav child_menu\">\r" +
    "\n" +
    "                            <li><a href=\"javascript:void(0)\">Level One</a>\r" +
    "\n" +
    "                                <li><a>Level One<span class=\"fa fa-chevron-down\"></span></a>\r" +
    "\n" +
    "                                    <ul class=\"nav child_menu\">\r" +
    "\n" +
    "                                        <li class=\"sub_menu\"><a href=\"javascript:void(0)\">Level Two</a>\r" +
    "\n" +
    "                                        </li>\r" +
    "\n" +
    "                                        <li><a href=\"javascript:void(0);\">Level Two</a>\r" +
    "\n" +
    "                                        </li>\r" +
    "\n" +
    "                                        <li><a href=\"javascript:void(0);\">Level Two</a>\r" +
    "\n" +
    "                                        </li>\r" +
    "\n" +
    "                                    </ul>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                                <li><a href=\"javascript:void(0);\">Level One</a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-laptop\"></i> Landing Page\r" +
    "\n" +
    "                         <span class=\"fa fa-chevron-down\"></span></a>\r" +
    "\n" +
    "                            <ul class=\"nav child_menu\">\r" +
    "\n" +
    "                                <li><a href=\"/\">Dashboard</a></li>\r" +
    "\n" +
    "                            </ul>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- /sidebar menu -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!-- /menu footer buttons -->\r" +
    "\n" +
    "        <div class=\"sidebar-footer hidden-small\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Lock\">\r" +
    "\n" +
    "                <span class=\"glyphicon glyphicon-eye-close\" aria-hidden=\"true\"></span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "            <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Logout\" href=\"login\">\r" +
    "\n" +
    "                <span class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- /menu footer buttons -->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- top navigation -->\r" +
    "\n" +
    "<div class=\"top_nav\">\r" +
    "\n" +
    "    <div class=\"nav_menu\">\r" +
    "\n" +
    "        <nav>\r" +
    "\n" +
    "            <div class=\"nav toggle\">\r" +
    "\n" +
    "                <a id=\"menu_toggle\" style=\"color:white;\" ng-click=\"menuclick()\"><i class=\"fa fa-bars\"></i></a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\r" +
    "\n" +
    "                <li class=\"\">\r" +
    "\n" +
    "                    <a href=\"javascript:void(0)\" class=\"user-profile dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r" +
    "\n" +
    "                        <img src=\"src/images/img_notavail.jpg\" alt=\"\">Admin\r" +
    "\n" +
    "                        <span class=\"fa fa-angle-down\"></span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <ul class=\"dropdown-menu dropdown-usermenu pull-right\">\r" +
    "\n" +
    "                        <li><a href=\"javascript:void(0)\"> Profile</a></li>\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <a href=\"javascript:void(0)\">\r" +
    "\n" +
    "                                <span class=\"badge bg-red pull-right\">50%</span>\r" +
    "\n" +
    "                                <span>Settings</span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li><a href=\"javascript:void(0)\">Help</a></li>\r" +
    "\n" +
    "                        <li><a href=\"login\"><i class=\"fa fa-sign-out pull-right\"></i> Log Out</a></li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li role=\"presentation\" class=\"dropdown\">\r" +
    "\n" +
    "                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle info-number\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r" +
    "\n" +
    "                        <span>Notifications</span>\r" +
    "\n" +
    "                        <i class=\"fa fa-envelope-o\"></i>\r" +
    "\n" +
    "                        <span class=\"badge bg-green\">6</span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <ul id=\"menu1\" class=\"dropdown-menu list-unstyled msg_list\" role=\"menu\">\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <a>\r" +
    "\n" +
    "                                <span class=\"image\"><img src=\"src/images/profilepic.png\" alt=\"Profile Image\" /></span>\r" +
    "\n" +
    "                                <span>\r" +
    "\n" +
    "                          <span>210910352</span>\r" +
    "\n" +
    "                                <span class=\"time\">3 mins ago</span>\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                                <span class=\"message\">\r" +
    "\n" +
    "                          bookmarked By 310910220\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <a>\r" +
    "\n" +
    "                                <span class=\"image\"><img src=\"src/images/profilepic.png\" alt=\"Profile Image\" /></span>\r" +
    "\n" +
    "                                <span>\r" +
    "\n" +
    "                          <span>210910352</span>\r" +
    "\n" +
    "                                <span class=\"time\">3 mins ago</span>\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                                <span class=\"message\">\r" +
    "\n" +
    "                          bookmarked By 310910220\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <a>\r" +
    "\n" +
    "                                <span class=\"image\"><img src=\"src/images/profilepic.png\" alt=\"Profile Image\" /></span>\r" +
    "\n" +
    "                                <span>\r" +
    "\n" +
    "                          <span>210910352</span>\r" +
    "\n" +
    "                                <span class=\"time\">3 mins ago</span>\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                                <span class=\"message\">\r" +
    "\n" +
    "                          bookmarked By 310910220\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <a>\r" +
    "\n" +
    "                                <span class=\"image\"><img src=\"src/images/profilepic.png\" alt=\"Profile Image\" /></span>\r" +
    "\n" +
    "                                <span>\r" +
    "\n" +
    "                          <span>210910352</span>\r" +
    "\n" +
    "                                <span class=\"time\">3 mins ago</span>\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                                <span class=\"message\">\r" +
    "\n" +
    "                          bookmarked By 310910220\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <div class=\"text-center\">\r" +
    "\n" +
    "                                <a>\r" +
    "\n" +
    "                                    <strong>See All Alerts</strong>\r" +
    "\n" +
    "                                    <i class=\"fa fa-angle-right\"></i>\r" +
    "\n" +
    "                                </a>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </nav>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- /top navigation -->"
  );

}]);
