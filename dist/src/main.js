'use strict';
/**
 * Main App Creation
 */

var regApp = angular.module('KaakateeyaRegistration', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'jcs-autoValidate', 'ngMaterial', 'ngMessages', 'ngAria', 'ngMdIcons']);
regApp.apipath = 'http://183.82.0.58:8010/Api/';
regApp.templateroot = 'registration/';
//regApp.templateroot = '';


regApp.GlobalImgPath = 'http://d16o2fcjgzj2wp.cloudfront.net/';
regApp.GlobalImgPathforimage = 'https://s3.ap-south-1.amazonaws.com/angularkaknew/';

regApp.prefixPath = 'Imagesnew/ProfilePics/';
regApp.S3PhotoPath = '';
regApp.Mnoimage = regApp.GlobalImgPath + "Images/customernoimages/Mnoimage.jpg";
regApp.Fnoimage = regApp.GlobalImgPath + "Images/customernoimages/Fnoimage.jpg";
regApp.accesspathdots = regApp.GlobalImgPathforimage + regApp.prefixPath;
regApp.BucketName = 'angularkaknew';

// regApp.templateroot = '';

regApp.config(function($stateProvider, $urlRouterProvider) {

    var states = [
        { name: 'registration', url: '/registration', templateUrl: regApp.templateroot + 'app/views/basicRegistration.html', controller: 'basicRegistrationctrl' },
        { name: 'registration.basicRegistration', url: '/basicRegistration', templateUrl: regApp.templateroot + 'app/views/basicRegistration.html', controller: 'basicRegistrationctrl' },
        { name: 'registration.seconadryRegistration', url: '/seconadryRegistration/:fn/:ln/:countryID/:genderID', templateUrl: regApp.templateroot + 'app/views/secondaryRegisrtation.html', controller: 'secondaryRegistrationctrl' },
        { name: 'registration.managePhoto', url: '/managePhoto/:genderID', templateUrl: regApp.templateroot + 'app/views/managePhoto.html', controller: 'managePhotoCtrl' },
        { name: 'registration.upgradeMemberShip', url: '/upgradeMemberShip', templateUrl: regApp.templateroot + 'app/views/payment.html', controller: 'payment' }

    ];

    $urlRouterProvider.otherwise('registration');

    _.each(states, function(item) {
        var innerView = {
            "topbar@": {
                templateUrl: regApp.templateroot + "masterTemplate/headerTemplate.html"
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
    });
});
regApp.constant('arrayConstantsreg', {
    'MaritalStatus': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Unmarried", "title": "Unmarried", "value": 43 },
        { "label": "Divorce", "title": "Divorce", "value": 44 },
        { "label": "Widow/Widower", "title": "Widow/Widower", "value": 45 },
        { "label": "Separated", "title": "Separated", "value": 46 }
    ],
    "height": [
        { "label": "--Select--", "title": "--select--", "value": "" },
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
        { "label": "--Select--", "title": "--select--", "value": "" },
        { "label": "Hindu", "title": "Hindu", "value": 1 },
        { "label": "Christian", "title": "Christian", "value": 2 },
        { "label": "Muslim", "title": "Muslim", "value": 3 },
        { "label": "Other", "title": "Other", "value": 6 },
        { "label": "Catholic", "title": "Catholic", "value": 9 },
        { "label": "Roma Catholic", "title": "Roma Catholic", "value": 15 },
        { "label": "ROMAN CATHOLIC", "title": "ROMAN CATHOLIC", "value": 16 }
    ],
    "Mothertongue": [
        { "label": "--Select--", "title": "--Select--", "value": "" },
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
        { "label": "--Select--", "title": "--Select--", "value": "" },
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
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Student Visa", "title": "Student Visa", "value": 284 },
        { "label": "Work Permit", "title": "Work Permit", "value": 285 },
        { "label": "Temporary Visa", "title": "Temporary Visa", "value": 286 },
        { "label": "Citizen", "title": "Citizen", "value": 521 },
        { "label": "Permanent Resident", "title": "Permanent Resident", "value": 522 },
        { "label": "Green Card", "title": "Green Card", "value": 553 }
    ],
    "stars": [
        { "label": "--Select--", "title": "--Select--", "value": "" },
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
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Telugu", "title": "Telugu", "value": 1 },
        { "label": "Tamil", "title": "Tamil", "value": 2 },
        { "label": "Kannada", "title": "Kannada", "value": 3 },
    ],
    'region': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "AP", "title": "AP", "value": 408 },
        { "label": "TN", "title": "TN", "value": 409 },
        { "label": "KT", "title": "KT", "value": 410 }
    ],
    'bodyType': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Athletic", "title": "Athletic", "value": 21 },
        { "label": "Average", "title": "Average", "value": 22 },
        { "label": "Slim", "title": "Slim", "value": 23 },
        { "label": "Heavy", "title": "Heavy", "value": 24 },
        { "label": "Doesn't Matter", "title": "Doesn't Matter", "value": 37 }
    ],
    'bloodGroup': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "O+", "title": "O+", "value": 61 },
        { "label": "A+", "title": "A+", "value": 63 },
        { "label": "B+", "title": "B+", "value": 64 },
        { "label": "AB+", "title": "AB+", "value": 65 },
        { "label": "O-", "title": "O-", "value": 66 },
        { "label": "A-", "title": "A-", "value": 67 },
        { "label": "B-", "title": "B-", "value": 68 }
    ],
    'healthCondition': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "No Health Problems", "title": "No Health Problems", "value": 220 },
        { "label": "HIV", "title": "HIV", "value": 222 },
        { "label": "Diabetes", "title": "Diabetes", "value": 223 },
        { "label": "LowBP", "title": "LowBP", "value": 224 },
        { "label": "HighBP", "title": "HighBP", "value": 225 },
        { "label": "Heart Ailments", "title": "Heart Ailments", "value": 226 }
    ],
    'lagnam': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
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
        { "label": "--Select--", "title": "--Select--", "value": "" },
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
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "1", "title": "1", "value": 304 },
        { "label": "2", "title": "2", "value": 305 },
        { "label": "3", "title": "3", "value": 306 },
        { "label": "4", "title": "4", "value": 539 },

    ],
    'familyStatus': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Lower Middle Class", "title": "Lower Middle Class", "value": 290 },
        { "label": "Middle Class", "title": "Middle Class", "value": 291 },
        { "label": "Upper Middle Class", "title": "Upper Middle Class", "value": 292 },
        { "label": "Rich", "title": "Rich", "value": 293 },
        { "label": "Affluent", "title": "Affluent", "value": 294 },
        { "label": "Others", "title": "Others", "value": 516 },
        { "label": "High Class", "title": "High Class", "value": 517 }
    ],
    'RelationshipType': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Friend", "title": "Friend", "value": 318 },
        { "label": "Relative", "title": "Relative", "value": 319 },
        { "label": "Not Given", "title": "Not Given", "value": 549 },

    ],
    "childStayingWith": [
        { "label": "--select-- ", "title": "--select--", "value": 0 },
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
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Very Fair", "title": "Very Fair", "value": 17 },
        { "label": "Fair", "title": "Fair", "value": 18 },
        { "label": "Medium", "title": "Medium", "value": 19 },
        { "label": "Dark", "title": "Dark", "value": 20 },
        { "label": "Doesn't Matter", "title": "Doesn't Matter", "value": 38 }
    ],
    'PhysicalStatus': [
        { "label": "--Select--", "title": "--Select--", "value": "" },
        { "label": "Normal", "title": "Normal", "value": 25 },
        { "label": "Physically Challenged", "title": "Physically Challenged", "value": 26 }
    ]

});
regApp.controller('basicRegistrationctrl', ['$scope', 'getArray', 'Commondependency', 'basicRegistrationService', '$filter', 'authSvc', function(scope, getArray, commondependency, basicRegistrationService, filter, authSvc) {
    scope.childStayingWith = 'childStayingWith';
    scope.Religion = 'Religion';
    scope.Mothertongue = 'Mothertongue';
    scope.Caste = 'Caste';
    scope.Country = 'Country';
    scope.countryCode = 'countryCode';
    scope.month = 'month';
    scope.reg = {};
    scope.monthArr = [];

    var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    scope.monthBind = function() {

        var option = [];
        option.push({ "label": 'MM', "title": 'MM', "value": '' });
        _.each(monthArr, function(item) {
            option.push({ "label": item, "title": item, "value": item });
        });
        return option;
    };
    scope.date = function(str, from, to) {
        var Arr = [];
        Arr.push({ "label": str, "title": str, "value": '' });
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
        Arr.push({ "label": str, "title": str, "value": '' });
        for (var i = to; i >= from; i--) {
            Arr.push({ "label": i, "title": i, "value": i });
        }
        return Arr;
    };
    scope.monthArr = scope.monthBind();
    scope.dateArr = scope.date('DD', 1, 31);
    scope.yearArr = scope.year('Year', 1936, 1998);
    scope.postedby = getArray.GArray('childStayingWith');
    scope.religion = getArray.GArray('Religion');
    scope.Mothertongue = getArray.GArray('Mothertongue');
    scope.Caste = getArray.GArray('Caste');
    scope.Country = getArray.GArray('Country');
    scope.countryCode = getArray.GArray('countryCode');


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
        scope.casteArr = commondependency.casteDepedency(commondependency.listSelectedVal(parentval), commondependency.listSelectedVal(parentval2));
    };

    scope.regSubmit = function(obj) {

        var valmm = _.indexOf(monthArr, obj.ddlMM);
        var date = obj.ddlDD + '-' + (valmm != -1 ? parseInt(valmm) + 1 : 0) + '-' + obj.ddlYear;
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
            strAreaCode: obj.txtArea,
            strLandNo: obj.txtlandNum,
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
                window.location = "#/registration/seconadryRegistration/" + obj.txtfirstname + "/" + obj.txtlastname + "/" + obj.ddlcountry + "/" + response.response[0].GenderID;
                return false;
            });
        });
    };

    scope.valueExists = function(type, flag, val) {
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
    };


    scope.$watch(function() {
        return scope.reg.ddlcountry;
    }, function(current, original) {
        scope.reg.ddllandcountry = scope.reg.ddlmobilecountry = current;
    });


}]);
regApp.controller("managePhotoCtrl", ['$uibModal', '$scope', 'Commondependency', 'editmanagePhotoServices', '$http', 'fileUpload', 'authSvc', '$stateParams', function(uibModal, scope, Commondependency, editmanagePhotoServices, http, fileUpload, authSvc, stateParams) {

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
                item.ImageUrl = path1;
                item.addButtonvisible = false;
                item.deleteVisibility = true;
                item.keyname = strCustDirName1 + "/" + item.PhotoName;

            } else if (item.IsActive === 1 && item.IsThumbNailCreated === 1) {

                var strCustDirName = "KMPL_" + CustID + "_Images";
                item.addButtonvisible = false;
                item.deleteVisibility = true;
                switch (item.DisplayOrder) {
                    case 1:
                        var photoshoppath = "img1_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                        var path = imagepath + strCustDirName + "/" + photoshoppath;
                        item.ImageUrl = path;
                        item.keyname = strCustDirName + "/" + photoshoppath;
                        break;
                    case 2:
                        var photoshoppathnew = "img2_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                        var pathnew = imagepath + strCustDirName + "/" + photoshoppathnew;
                        item.ImageUrl = pathnew;
                        item.keyname = strCustDirName + "/" + photoshoppathnew;
                        break;
                    case 3:
                        var photoshoppathneew3 = "img3_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
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
        var extension = ((obj.myFile.name).split('.'))[1];
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


}]);
regApp.controller('payment', ['$scope', '$element', 'arrayConstants', 'SelectBindServiceApp', 'customerDashboardServices', function(scope, $element, arrayConstants, service, customerDashboardServices) {
    scope.Mothertongue = arrayConstants.Mothertongue;
    scope.mothertongue = [1, 2, 3];
    scope.mothertongueccc = [1, 2, 3];

    scope.generalsearchsubmit = function() {
        alert(scope.mothertongue);
        alert(scope.mothertongueccc);
    };
}]);
regApp.controller("secondaryRegistrationctrl", ['$scope', 'getArray', 'Commondependency', 'SecondaryRegistrationService', '$filter', '$timeout', '$stateParams', 'authSvc', function(scope, getArray, commondependency, SecondaryRegistrationService, filter, timeout, stateParams, authSvc) {

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
            window.location = "#/registration/managePhoto/" + stateParams.genderID;
        });

    };


    // scope.redirect = function() {
    //     window.location = "#/registration/managePhoto/0";
    // };



}]);
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
regApp.factory('basicRegistrationService', ['$http', function(http) {
    return {
        submitBasicRegistration: function(obj) {
            return http.post(regApp.apipath + 'Registration/RegisterCustomerHomepages', JSON.stringify(obj));
        },
        emailExists: function(obj) {
            return http.get(regApp.apipath + 'StaticPages/getEmailMobilenumberexists', { params: obj });
        }
    };
}]);
regApp.factory('Commondependency', ['SelectBindService', function(SelectBindService) {
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
            var str = null;
            if (val !== null && val !== undefined) {
                if (angular.isString(val)) {
                    str = val === '' ? null : val;
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
            stateArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.stateSelect(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    stateArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return stateArr;
        },
        districtBind: function(parentval) {
            var disttrictArr = [];
            disttrictArr.push({ "label": "--select--", "title": "--select--", "value": "" });

            SelectBindService.districtSelect(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    disttrictArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return disttrictArr;
        },
        cityBind: function(parentval) {
            var cityeArr = [];
            cityeArr.push({ "label": "--select--", "title": "--select--", "value": "" });

            SelectBindService.citySelect(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    cityeArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return cityeArr;
        },

        professionBind: function(parentval) {
            var professionArr = [];
            professionArr.push({ "label": "--select--", "title": "--select--", "value": "" });

            SelectBindService.ProfessionSpecialisation(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    professionArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return professionArr;
        },
        educationGroupBind: function(parentval) {
            var educationGroupArr = [];
            educationGroupArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.EducationGroup(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    educationGroupArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return educationGroupArr;
        },
        educationSpeciakisationBind: function(parentval) {
            var educationSpecialArr = [];
            educationSpecialArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.EducationSpecialisation(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    educationSpecialArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return educationSpecialArr;
        },

        numbersBind: function(str, from, to) {
            var numArr = [];

            numArr.push({ "label": "--select--", "title": "--select--", "value": "" });
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
            starArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.stars(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    starArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return starArr;
        },
        casteDepedency: function(parentval1, parentval2) {
            var casteArr = [];
            casteArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.castedependency(parentval1, parentval2).then(function(response) {
                _.each(response.data, function(item) {
                    casteArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return casteArr;
        },
        subCaste: function(parentval1) {
            var subcasteArr = [];
            subcasteArr.push({ "label": "--select--", "title": "--select--", "value": "" });
            SelectBindService.subCasteBind(parentval1).then(function(response) {
                _.each(response.data, function(item) {
                    subcasteArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return subcasteArr;
        },
        branch: function(parentval1) {
            var branchArr = [];
            branchArr.push({ "label": "--select--", "title": "--select--", "value": "" });
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
regApp.factory('getArray', ['arrayConstantsreg', 'SelectBindService', function(cons, service) {
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

                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
                    break;

                case 'ProfCatgory':

                    service.ProfessionCatgory().then(function(response) {

                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
                    break;

                case 'ProfGroup':
                    service.ProfessionGroup().then(function(response) {

                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
                    break;

                case 'indiaStates':
                    service.stateSelect('1').then(function(response) {

                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
                    break;
                case 'countryCode':
                    service.countryCodeselect().then(function(response) {

                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
                    break;
                case 'caste':
                    service.casteselect().then(function(response) {

                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
                    break;
                case 'currency':
                    service.currency().then(function(response) {

                        option.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        option = option;
                    });
                    break;
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
regApp.factory('SelectBindService', ["$http", function(http) {
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
    };
}]);
angular.module('KaakateeyaRegistration').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('registration/app/views/basicRegistration.html',
    "<div class=\"register_page_main\" ng-controller=\"basicRegistrationctrl\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h4>registration</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"\">\r" +
    "\n" +
    "        <div class=\"register_page_main_steps\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li><a class=\"active\" href=\"#\" style=\"text-transform: capitalize;\">Basic information</a></li>\r" +
    "\n" +
    "                <li><a href=\"#\" style=\"text-transform: capitalize;\">profile details</a></li>\r" +
    "\n" +
    "                <li><a href=\"#\" style=\"text-transform: capitalize;\">my photos</a></li>\r" +
    "\n" +
    "                <li><a href=\"#\" style=\"text-transform: capitalize;\">my payments</a></li>\r" +
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
    "                                <label>First name</label>\r" +
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
    "                                <md-input-container flex=\"50\" class=\"span4\" style=\"width:30%;\">\r" +
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
    "                                <md-input-container flex=\"50\" class=\"span4\" style=\"width:30%;\">\r" +
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
    "                                <md-input-container flex=\"50\" class=\"span4\" style=\"width:30%;\">\r" +
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
    "                                <input maxlength=\"10\" required=\"\" md-no-asterisk=\"\" ng-pattern=\"/^[0-9]+$/\" name=\"txtMobileNo\" ng-model=\"reg.txtMobileNo\" ng-blur=\"valueExists('number',1,reg.txtMobileNo);\">\r" +
    "\n" +
    "                                <div ng-messages=\"regForm.txtMobileNo.$error\">\r" +
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
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"span4\">\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"span4\" style=\"width:30%;\">\r" +
    "\n" +
    "                                <label>Land code</label>\r" +
    "\n" +
    "                                <md-select name=\"ddllandcountry\" ng-model=\"reg.ddllandcountry\" required=\"\">\r" +
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
    "                            <md-input-container class=\"md-block span4\" style=\"width:30%;\">\r" +
    "\n" +
    "                                <label>Area code</label>\r" +
    "\n" +
    "                                <input maxlength=\"8\" required=\"\" md-no-asterisk=\"\" name=\"txtArea\" ng-model=\"reg.txtArea\" ng-pattern=\"/^[0-9]+$/\">\r" +
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
    "                            <md-input-container class=\"md-block span4\" style=\"width:30%;\">\r" +
    "\n" +
    "                                <label>Landline number</label>\r" +
    "\n" +
    "                                <input maxlength=\"8\" required=\"\" md-no-asterisk=\"\" name=\"txtlandNum\" ng-model=\"reg.txtlandNum\" ng-pattern=\"/^[0-9]+$/\">\r" +
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
    "                                <a ng-model=\"reg.lnkprivacyPolicy\" Font-Size=\"12px\" onclick=\"PrivacyPolicy()\">Privacy Policy and T&C.</a>\r" +
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
    "    .register_page_main input[type=\"email\"],\r" +
    "\n" +
    "    .register_page_main input[type=\"text\"] {\r" +
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
    "            <a class=\"skip_button\" href=\"javascript:void(0);\" ng-click=\"skip();\">skip this page</a>\r" +
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
    "                                            <a href=\"javascript:void(0);\" ng-show=\"{{item.deleteVisibility}}\" ng-click=\"DeleteImage(item.keyname,item.Cust_Photos_ID);\">\r" +
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
    "                    <a ID=\"phtoguide\" OnClientClick=\"PhotoGuideLine();\" href=\"javascript:void(0);\">Photo guidelines\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    <a ID=\"photofaq\" OnClientClick=\"PhotoFaq();\" href=\"javascript:void(0);\">Photo faq’s\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    <a ID=\"photoupload\" href=\"../../Employee/PhotoFAQ.aspx\" target=\"_blank\">Photo upload tips\r" +
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
    "                <img src=\"../images/whatsup.png\" alt=\"Mail\" style=\"width: 50px; height: 40px;\">Whatsup your photos to\r" +
    "\n" +
    "                <span>91-9848535373</span> - Kindly mention your Profile ID and name\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <p>\r" +
    "\n" +
    "                <img src=\"../images/icon_email.png\" alt=\"Mail\">Can also Email your photos to <span>photos@telugumarriages.com</span> - Kindly mention your Profile ID and name\r" +
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
    "<div class=\"control-group span7 select-box-my\">\r" +
    "\n" +
    "    <label class=\"control-label\">Mother tongue</label>\r" +
    "\n" +
    "    <div class=\"controls clearfix\">\r" +
    "\n" +
    "        <angular-multiselect array=\"Mothertongue\" change=\"true\" model=\"mothertongueccc\">\r" +
    "\n" +
    "        </angular-multiselect>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <md-content class=\"md-padding\">\r" +
    "\n" +
    "        <md-tabs md-selected=\"selectedIndex\" flex md-border-bottom md-autoselect>\r" +
    "\n" +
    "            <md-tab label=\"General Search\">\r" +
    "\n" +
    "                <div class=\"tab\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div layout-gt-sm=\"row\">\r" +
    "\n" +
    "                            <md-radio-group layout=\"row\" ng-model=\"mailyes\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                                <md-radio-button value=\"2\" class=\"md-primary\"> Bride</md-radio-button>\r" +
    "\n" +
    "                                <md-radio-button value=\"1\"> Groom </md-radio-button>\r" +
    "\n" +
    "                            </md-radio-group>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <br>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"control-group span3 select-box-my\">\r" +
    "\n" +
    "                            <label class=\"control-label\">Mother tongue</label>\r" +
    "\n" +
    "                            <div class=\"controls clearfix\">\r" +
    "\n" +
    "                                <angular-multiselect array=\"Mothertongue\" change=\"true\" model=\"mothertongue\">\r" +
    "\n" +
    "                                </angular-multiselect>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "            </md-tab>\r" +
    "\n" +
    "        </md-tabs>\r" +
    "\n" +
    "    </md-content>\r" +
    "\n" +
    "    <md-button class=\"md-raised md-warn md-hue-2\" ng-click=\"generalsearchsubmit()\">Search</md-button>\r" +
    "\n" +
    "    </div>"
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
    "    <div class=\"\">\r" +
    "\n" +
    "        <div class=\"register_page_main_steps\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li><a class=\"active\" href=\"#\" style=\"text-transform: capitalize;\">Basic information</a></li>\r" +
    "\n" +
    "                <li><a class=\"active\" href=\"#\" style=\"text-transform: capitalize;\">Profile details</a></li>\r" +
    "\n" +
    "                <li><a href=\"#\" style=\"text-transform: capitalize;\">my photos</a></li>\r" +
    "\n" +
    "                <li><a href=\"#\" style=\"text-transform: capitalize;\">my payments</a></li>\r" +
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
    "                <form name=\"secregForm\" novalidate role=\"form\" ng-submit=\"secondRegSubmit(regsec);\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"reg_fields_entry clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                            <label>Name</label>\r" +
    "\n" +
    "                            <input maxlength=\"100\" required=\"\" readonly md-no-asterisk=\"\" name=\"LabelName\" ng-model=\"regsec.LabelName\">\r" +
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
    "                        <hr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h4>Education details</h4>\r" +
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
    "                            <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                                <label>Education merits</label>\r" +
    "\n" +
    "                                <input maxlength=\"500\" md-no-asterisk=\"\" name=\"txtEducationMerits\" ng-model=\"regsec.txtEducationMerits\">\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"clear\"></div>\r" +
    "\n" +
    "                        <hr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h4>profession details</h4>\r" +
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
    "                            <input maxlength=\"7\" md-no-asterisk=\"\" name=\"txtSalary\" ng-model=\"regsec.txtSalary\">\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span4\">\r" +
    "\n" +
    "                            <label>Occupation details</label>\r" +
    "\n" +
    "                            <input maxlength=\"500\" md-no-asterisk=\"\" name=\"txtOcccupationDetails\" ng-model=\"regsec.txtOcccupationDetails\">\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"clear\"></div>\r" +
    "\n" +
    "                        <hr>\r" +
    "\n" +
    "                        <h4>Candidate location details</h4>\r" +
    "\n" +
    "                        <br>\r" +
    "\n" +
    "                        <md-input-container flex=\"50\" class=\"span4\">\r" +
    "\n" +
    "                            <label>Country living in</label>\r" +
    "\n" +
    "                            <md-select name=\"ddlCountryLivingIn\" ng-model=\"regsec.ddlCountryLivingIn\" required=\"\" ng-change=\"changeBind('Country',regsec.ddlCountryLivingIn)\">\r" +
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
    "                        <md-input-container flex=\"50\" class=\"span4\" ng-hide=\"regsec.ddlCountryLivingIn!=1\">\r" +
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
    "                        <md-input-container class=\"span4\">\r" +
    "\n" +
    "                            <label style=\"padding-left:61px\">Residing since</label>\r" +
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
    "                        <hr>\r" +
    "\n" +
    "                        <h4>Family details</h4>\r" +
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
    "\r" +
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
    "                        <hr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <h4>About yourself</h4>\r" +
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
    "                                <input maxlength=\"1000\" ng-minlength=\"50\" required=\"\" md-asterisk=\"\" name=\"txtabouturself\" ng-model=\"regsec.txtabouturself\">\r" +
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
    "\r" +
    "\n" +
    "\r" +
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


  $templateCache.put('registration/masterTemplate/footerTemplate.html',
    "<footer>\r" +
    "\n" +
    "    <div class=\"footer_in\" id=\"divFooterinner\">\r" +
    "\n" +
    "        <a class=\"logo pull-left\">&nbsp;</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div id=\"livechat\">\r" +
    "\n" +
    "            &nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "            <a onclick=\"OpenLHNChat();return false;\" href=\"#\" target=\"_blank\" id=\"lhnWin\" class=\"live_chat_footer_new pull-left\"></a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div id=\"livechatdiv\">\r" +
    "\n" +
    "                <!-- This code must be installed within the body tags 3422-->\r" +
    "\n" +
    "                <script type=\"text/javascript\" defer='defer'>\r" +
    "\n" +
    "                    var lhnAccountN = \"3422\";\r" +
    "\n" +
    "                    var lhnButtonN = 4720;\r" +
    "\n" +
    "                    var lhnChatPosition = '100';\r" +
    "\n" +
    "                    var lhnInviteEnabled = 1;\r" +
    "\n" +
    "                    var lhnWindowN = 0;\r" +
    "\n" +
    "                    var lhnDepartmentN = 0;\r" +
    "\n" +
    "                </script>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <script type=\"text/javascript\" defer='defer'>\r" +
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
    "                alert(bLHNOnline);\r" +
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
    "        </script>\r" +
    "\n" +
    "        <div class=\"social pull-right\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0)\">&nbsp;</a></li>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0)\">&nbsp;</a></li>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0)\">&nbsp;</a></li>\r" +
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
    "                    <a id=\"lnkFooterSucess\" href=\"#/successstories\">success stories</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkSearchFooter\">Search</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"linkcareers\">careers</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"linkfaq\">faq’s</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnktermsFooter\">Terms Of Use</a>\r" +
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
    "                <li><a onclick=\"return ShowForgotPassword();\" href=\"javascript:void(0)\">Forgot Password</a></li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkFeedBackFooter\" href=\"#/feedback\">Feed Back</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkBranchesFooter\">Our Branches</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"linkHelp\" href=\"#/help\">Help</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkPrivacyFooter\">Privacy Policy</a>\r" +
    "\n" +
    "                </li>\r" +
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
    "        <div class=\"color_strip\">&nbsp;</div>\r" +
    "\n" +
    "        <div class=\"color_strip color_strip2\">&nbsp;</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</footer>"
  );


  $templateCache.put('registration/masterTemplate/headerTemplate.html',
    "<div class=\"header_inner\" id=\"divInnerMaster\" ng-controller=\"headctrl\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"container_my clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <a id=\"IbtnLogodisplay\" class=\"logo3 pull-left\" />\r" +
    "\n" +
    "        <input type=\"button\" value=\"Login\" ng-show=\"loginstatus\" id=\"btnLoginsubmit\" class=\"pull-right button_custom login_show\" ng-click=\"divloginblock();\" />\r" +
    "\n" +
    "        <input type=\"button\" value=\"Logout\" ng-show=\"loginoutstatus\" id=\"btnLogOut\" class=\"pull-right button_custom\" ng-click=\"ClearlocalStorage();\" />\r" +
    "\n" +
    "        <div class=\"login_block_header\" ng-show=\"loginpopup\" id=\"divLogin\">\r" +
    "\n" +
    "            <form name=\"myForm\">\r" +
    "\n" +
    "                <input type=\"text\" id=\"txtUserName\" style=\"height: 38px;\" ng-model=\"username\" required/>\r" +
    "\n" +
    "                <input type=\"password\" id=\"txtPassword\" style=\"height: 38px;\" ng-model=\"password\" required/>\r" +
    "\n" +
    "                <span class=\"clear\">&nbsp;</span>\r" +
    "\n" +
    "                <div class=\"login_help\">\r" +
    "\n" +
    "                    <a id=\"lnkForgotPassword\">Forgot Password</a>\r" +
    "\n" +
    "                    <a href=\"#/Registration\">New User Sign Up</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <input type=\"button\" id=\"btnUserLogin\" ng-click=\"loginsubmit()\" ng-disabled=\"myForm.$invalid\" class=\"button_custom\" value=\"Login\" />\r" +
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
    "\r" +
    "\n" +
    "                <a id=\"lnkFeedbackMenu\" href=\"#/feedback\">Feedback</a>\r" +
    "\n" +
    "\r" +
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
    "    <div class=\"navbar_inner\" id=\"divMemberName\" ng-show=\"withlogin\" set-class-when-at-top=\"fix-to-top\">\r" +
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
    "                    <a id=\"lblpaid\" href=\"#\" style=\"color:White;\">{{paidstatus}}</a>\r" +
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
    "                        <a id=\"lnkMyHome\" href=\"javascript:void(0)\" ng-click=\"redirectTohome()\">My Home</a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"javascript:void(0)\">my account</a>\r" +
    "\n" +
    "\r" +
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
    "                                <a id=\"linkeditprofile\" href=\"#/editview\">Edit Profile</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmanagephoto\" href=\"#/editview/editManagePhoto\">Manage Photo</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmanagehoroscope\" href=\"#/editview/editAstro\">Manage Horoscope</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkprofilesettings\" href=\"#/profilesettings\">Profile Settings</a>\r" +
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
    "                        <a id=\"lnksearch\" href=\"#/General\">Search</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkgenaralsearch\" href=\"#/General\">General Search</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkAdvancedSearch\" href=\"#/General\">Advanced Search</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkprofileidsearch\" href=\"#/General\">Profileid Search</a>\r" +
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
    "                        <a href=\"javascript:void(0)\">my package</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkupgrademembership\" href=\"#/UpgradeMembership\">Upgrade Membership</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmyorders\" href=\"#/myorders\">My Orders and Statistics</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmembershipfaqs\" href=\"#/faqs\">Membership Faqs</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkAddOnPacks\" href=\"#/AddOnPacks\" ng-hide=\"true\">Add On Packs</a>\r" +
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
    "                        <a href=\"javascript:void(0)\">matches</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmybookmarks\" href=\"#/home\">My BookMarked Profiles</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkwhobookmarkedme\" href=\"#/home\">Who BookMarked Me</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkigonredprofile\" href=\"#/home\">Ignored Profiles</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkviewedbutnotexpress\" href=\"#/home\">My profile viewed by others</a>\r" +
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
    "                        <a href=\"javascript:void(0)\">messages</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkPersonalizedmsg\" href=\"#/home\">Chats</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkrequests\" href=\"#/home\">Requests</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkMyContact\" href=\"#/home\">Express interest</a>\r" +
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
    "                        <a href=\"#/help\">Help</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"lnkcontactus\" href=\"#/help\">Contact Us</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmysupportickets\" href=\"#/MySupportTickets\">My Support Tickets</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"lnkfeedback\" href=\"#/feedback\">Feed Back</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"lnktakeatour\" href=\"#/takeatour\">Take A Tour</a>\r" +
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
    "                    <li><a href=\"#/Registration\">Register free</a></li>\r" +
    "\n" +
    "                    <li><a href=\"#/General\">Search <span></span></a></li>\r" +
    "\n" +
    "                    <li><a href=\"#/General\">Upgrade</a></li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a id=\"lnkSucessstoreiesFooter\" href=\"#/successstories\">success stories <span></span></a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a id=\"linkfooterhelp\" href=\"#/help\">Help</a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li><a href=\"#/\">Home</a></li>\r" +
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
