'use strict';
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
                //             return $ocLazyLoad.load(['app/' + regitem + '/controller/' + regitem + 'ctrl.js', 'app/' + regitem + '/model/' + regitem + 'Mdl.js', 'app/' + regitem + '/service/' + regitem + 'service.js', item.subname]);
                //         } else {
                //             return $ocLazyLoad.load(['app/' + regitem + '/src/script.min.js', item.subname]);
                //         }
                //     }]
                // }
        });
        $locationProvider.html5Mode(true);
    });

}]);
 (function(angular) {
     'use strict';

     function controller(basicRegistrationModel, scope) {
         /* jshint validthis:true */
         var vm = this,
             model;
         vm.init = function() {
             vm.model = model = basicRegistrationModel;
             vm.model.scope = scope;
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
(function(angular) {
    'use strict';


    function factory(basicRegistrationService, getArray, commondependency, filter, authSvc, timeout, $state, SelectBindServicereg) {

        var model = {};
        model.scope = {};
        model.init = function() {
            model.pageload();
            return model;
        };
        // start declaretion

        model.reg = {};
        model.monthArr = [];
        model.reg.Chkprivacy = true;
        model.emailrequired = true;
        model.mobilenumberrequired = true;
        model.mobilecountrycoderequired = true;
        var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        //end declaration

        model.monthBind = function() {
            var option = [];
            _.each(monthArr, function(item) {
                option.push({ "label": item, "title": item, "value": item });
            });
            return option;
        };
        model.date = function(str, from, to) {
            var Arr = [];

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

        model.year = function(str, from, to) {
            var Arr = [];
            // Arr.push({ "label": str, "title": str, "value": '' });
            for (var i = to; i >= from; i--) {
                Arr.push({ "label": i, "title": i, "value": i });
            }
            return Arr;
        };

        model.pageload = function() {
            model.monthArr = model.monthBind();
            model.dateArr = model.date('', 1, 31);
            model.yearArr = model.year('', 1936, 1998);

            timeout(function() {
                model.postedby = getArray.GArray('childStayingWith');

                console.log('arrayyyyy');
                console.log(model.postedby);

                model.religion = getArray.GArray('Religion');
                model.Mothertongue = getArray.GArray('Mothertongue');
                model.Caste = getArray.GArray('Caste');
                // model.countryCode = getArray.GArray('countryCode');
            }, 1000);
            timeout(function() {

                // model.Country = getArray.GArray('Country');
                var Country = [],
                    CountryCode = [];
                SelectBindServicereg.CountryWithCode().then(function(response) {

                    _.each(response.data, function(item) {
                        Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        CountryCode.push({ "label": item.CountryCode, "title": item.CountryCode, "value": item.ID });
                    });

                    console.log('test..');
                    console.log(Country);

                    model.Country = Country;
                    model.countryCode = CountryCode;
                });

            }, 100);

        };


        model.statuses = ['Planned', 'Confirmed', 'Cancelled'];

        model.dayChange = function(obj, type) {

            var months31 = 'Jan,Mar,May,Jul,Aug,Oct,Dec';
            var minth30 = 'Apr,Jun,Sep,Nov';
            var month28 = 'Feb';
            if ((obj.ddlDD <= 30 && minth30.indexOf(obj.ddlMM) !== -1) || (obj.ddlDD <= 31 && months31.indexOf(obj.ddlMM) !== -1) || ((obj.ddlDD <= 28 && month28.indexOf(obj.ddlMM) !== -1))) {

            } else {
                if (type === 'day') {
                    obj.ddlMM = '';
                } else {
                    model.dateArr = [];
                    model.dateArr = model.date('DD', 1, 31);
                    obj.ddlDD = '';
                }
            }
        };

        model.changeBind = function(parentval, parentval2) {
            if (parentval !== undefined && parentval !== null && parentval !== '' && parentval2 !== undefined && parentval2 !== null && parentval2 !== '')
                model.casteArr = commondependency.casteDepedency(commondependency.listSelectedVal(parentval), commondependency.listSelectedVal(parentval2));

        };

        model.regSubmit = function(obj) {
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
                intEmpID: 2,
                intCustPostedBY: obj.ddlpostedby,
                //strMobileVerificationCode: obj.
            };
            console.log(inputObj);
            basicRegistrationService.submitBasicRegistration(inputObj).then(function(res) {
                console.log(res);
                model.genderID = 0;
                authSvc.login(model.reg.txtEmail, "Admin@123").then(function(response) {
                    console.log(response);
                    model.genderID = response.response[0].GenderID;
                    $state.go('reg.secondaryRegistration', { CustID: response.response[0].CustID, fn: obj.txtfirstname, ln: obj.txtlastname, countryID: obj.ddlcountry, genderID: response.response[0].GenderID });
                    return false;
                });
            });
        };

        model.valueExists = function(type, flag, val) {
            if (val !== undefined) {
                basicRegistrationService.emailExists({ iflagEmailmobile: flag, EmailMobile: val }).then(function(response) {

                    console.log(response);
                    if (response.data === 1) {
                        if (type === 'email') {
                            model.reg.txtEmail = '';
                            alert('Email Already Exists');
                        } else {
                            model.reg.txtMobileNo = '';
                            alert('Mobile number Already Exists');
                        }
                    } else {
                        if (model.reg.Chkfree_reg === true) {
                            if (type === 'email') {
                                model.emailrequired = true;
                                model.mobilenumberrequired = false;
                                model.mobilecountrycoderequired = false;
                            } else {
                                model.emailrequired = false;
                                model.mobilenumberrequired = true;
                                model.mobilecountrycoderequired = true;
                            }
                        }
                    }
                });
            }
        };
        model.mobilemailvalidation = function() {
            if (model.reg.Chkfree_reg === true) {

                if ((model.reg.txtEmail === null || model.reg.txtEmail === "" || model.reg.txtEmail === undefined) && (model.reg.txtMobileNo === null || model.reg.txtMobileNo === "" || model.reg.txtMobileNo === undefined)) {
                    model.emailrequired = false;
                    model.mobilenumberrequired = true;
                    model.mobilecountrycoderequired = true;
                } else if ((model.reg.txtEmail !== null && model.reg.txtEmail !== "" && model.reg.txtEmail !== undefined) || (model.reg.txtMobileNo !== null && model.reg.txtMobileNo !== "" && model.reg.txtMobileNo !== undefined)) {
                    model.emailrequired = false;
                    model.mobilenumberrequired = false;
                    model.mobilecountrycoderequired = false;
                }
            } else {
                model.emailrequired = true;
                model.mobilenumberrequired = true;
                model.mobilecountrycoderequired = true;
            }
        };

        model.redirectprivacy = function(type) {
            window.open('registration/privacyPolicy', '_blank');
        };

        return model.init();
    }

    angular
        .module('KaakateeyaEmpReg')
        .factory('basicRegistrationModel', factory);

    factory.$inject = ['basicRegistrationService', 'getArray', 'Commondependency',
        '$filter', 'authSvc', '$timeout', '$state', 'SelectBindServicereg'
    ];



    // factory.$inject = ['basicRegistrationService', '$scope', 'getArray', 'Commondependency',
    //     '$filter', 'authSvc', '$timeout', 'route', 'SelectBindServicereg',
    // ];

})(angular);
(function(angular) {
    'use strict';

    function factory(http) {
        return {
            submitBasicRegistration: function(obj) {
                console.log(obj);
                return http.post(regApp.apipath + 'Registration/RegisterCustomerHomepages', JSON.stringify(obj));
            },
            emailExists: function(obj) {
                return http.get(regApp.apipath + 'StaticPages/getEmailMobilenumberexists', { params: obj });
            }
        };
    }

    angular
        .module('KaakateeyaEmpReg')
        .factory('basicRegistrationService', factory);

    factory.$inject = ['$http'];
})(angular);
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
(function(angular) {
    'use strict';


    function factory(regManagePhotoService, uibModal, Commondependency, http, fileUpload, stateParams) {
        var model = {};
        model.scope = {};
        // start declaration

        var EmpIDQueryString = '2';

        model.up = {};
        var CustID = stateParams.CustID;

        model.photorowID = 0;
        model.imgArr = [];

        //end declaration
        model.init = function() {
            model.getData();
            return model;
        };

        model.cancel = function() {
            Commondependency.closepopup();
        };

        model.refreshPageLoad = function(Arr) {
            _.each(Arr, function(item) {

                model.rbtProtectPassword = item.PhotoPassword === 'Admin@123' ? '1' : '0';
                var imagepath = regapp.accesspathdots;

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
                    item.ImageUrl = stateParams.genderID === '1' || stateParams.genderID === 1 ? regapp.Mnoimage : regapp.Fnoimage;
                }
            });
            return Arr;
        };

        model.getData = function() {

            regManagePhotoService.getPhotoData(CustID).then(function(response) {
                var StrCustID = CustID;
                console.log(response.data);
                model.manageArr = response.data;
                model.refreshPageLoad(model.manageArr);
            });
        };




        model.AddImage = function(index, Cust_Photos_ID, DisplayOrder, IsActive) {
            model.photorowID = index;
            model.Cust_Photos_ID = Cust_Photos_ID;
            model.DisplayOrder = DisplayOrder;
            model.IsActive = IsActive;
            Commondependency.open('AddimagePopup.html', model.scope, uibModal, 'sm');
        };
        model.upload = function(obj) {
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
                    var keyname = regapp.prefixPath + 'KMPL_' + CustID + '_Images/Img' + model.photorowID + '.' + extension;

                    fileUpload.uploadFileToUrl(obj.myFile, '/photoUplad', keyname).then(function(res) {
                        console.log(res.status);
                        if (res.status == 200) {
                            Commondependency.closepopup();
                            model.uploadData = {
                                GetDetails: {
                                    ID: model.Cust_Photos_ID,
                                    url: 'Img' + model.photorowID + '.' + extension,
                                    order: model.DisplayOrder,
                                    IsProfilePic: 0,
                                    DisplayStatus: model.DisplayOrder,
                                    Password: 0,
                                    IsReviewed: 0,
                                    TempImageUrl: regapp.GlobalImgPath + keyname,
                                    IsTempActive: Commondependency.checkvals(model.IsActive) ? model.IsActive : '0',
                                    DeletedImageurl: null,
                                    IsImageDeleted: 0,
                                    PhotoStatus: null,
                                    PhotoID: model.DisplayOrder,
                                    PhotoPassword: null
                                },
                                customerpersonaldetails: {
                                    intCusID: CustID,
                                    EmpID: null,
                                    Admin: null
                                }
                            };

                            regManagePhotoService.submituploadData(model.uploadData).then(function(response) {
                                console.log(response);
                                if (response.status === 200) {
                                    alert('submitted Succesfully');
                                    model.manageArr = response.data;
                                    model.refreshPageLoad(model.manageArr);

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

        model.DeleteImage = function(key, Cust_Photoid) {
            model.deleteKey = key;
            model.DCust_Photos_ID = Cust_Photoid;
            Commondependency.open('deleteimagePopup.html', model.scope, uibModal, 'sm');
        };

        model.Delete = function() {
            var keynameq = regapp.prefixPath + model.deleteKey;
            http.post('/photoDelete', JSON.stringify({ keyname: keynameq })).then(function(data) {

            });

            regManagePhotoService.linqSubmits(model.DCust_Photos_ID, 3).then(function(response) {

                if (response.data === 1) {
                    Commondependency.closepopup();
                    model.getData();
                }
            });
        };

        model.setAsProfilePic = function(cust_photoID) {
            regManagePhotoService.linqSubmits(cust_photoID, 2).then(function(response) {
                console.log(response.data);

                if (response.data === 1) {
                    Commondependency.closepopup();
                    model.getData();
                }
            });
        };

        model.setPhotoPassword = function(obj) {

            regManagePhotoService.linqSubmits(CustID, obj).then(function(response) {
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

        model.skip = function() {
            //window.location = "#/registration/managePhoto" + stateParams.genderID;
        };
        model.redirectPage = function(type) {

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


        return model.init();
    }

    angular
        .module('KaakateeyaEmpReg')
        .factory('regManagePhotoModel', factory);

    factory.$inject = ['regManagePhotoService', '$uibModal', 'Commondependency', '$http', 'fileUpload', '$stateParams'];

})(angular);
(function(angular) {
    'use strict';

    function factory(http) {
        return {
            getPhotoData: function(obj) {
                return http.get(regapp.apipath + 'CustomerPersonal/GetphotosofCustomer', { params: { Custid: obj, EmpID: 2 } });
            },
            submituploadData: function(obj1) {
                return http.post(regapp.apipath + 'CustomerPersonalUpdate/Savephotosofcustomer', JSON.stringify(obj1));
            },
            linqSubmits: function(Custid, iflag) {
                return http.get(regapp.apipath + 'CustomerPersonalUpdate/getPhotoPassword', { params: { CustID: Custid, ipassword: iflag } });
            }
        };
    }

    angular
        .module('KaakateeyaEmpReg')
        .factory('regManagePhotoService', factory);

    factory.$inject = ['$http'];
})(angular);
 (function(angular) {
     'use strict';

     function controller(secondaryRegistrationModel, scope) {
         /* jshint validthis:true */
         var vm = this;
         vm.init = function() {
             vm.model = secondaryRegistrationModel;
             vm.model.scope = scope;
         };

         vm.init();
     }
     angular
         .module('KaakateeyaEmpReg')
         .controller('secondaryRegistrationCtrl', controller);

     controller.$inject = ['secondaryRegistrationModel', '$scope'];
 })(angular);
(function(angular) {
    'use strict';


    function factory(secondaryRegistrationService, getArray, commondependency, filter, timeout, stateParams, authSvc, $state) {
        var model = {};
        model.scope = {};

        //start declaration

        model.MaritalStatus = getArray.GArray('MaritalStatus');
        model.Complexion = getArray.GArray('Complexion');
        model.PhysicalStatus = getArray.GArray('PhysicalStatus');
        model.height = getArray.GArray('height');
        model.educationcategory = getArray.GArray('educationcategory');
        model.visastatus = getArray.GArray('visastatus');
        model.regsec = {};
        model.noOfsibblingsArr = commondependency.numbersBind('', 0, 5);
        var countryID = stateParams.countryID;
        model.regsec.LabelName = stateParams.fn + ' ' + stateParams.ln;
        // model.regsec.ddlCountryLivingIn = stateParams.countryID;
        model.stateArr = commondependency.StateBind(stateParams.countryID);
        var custID = stateParams.CustID;

        //end declaration

        model.init = function() {
            model.pageload();
            return model;
        };

        model.pageload = function() {
            timeout(function() {
                model.Country = getArray.GArray('Country');
                model.ProfCatgory = getArray.GArray('ProfCatgory');
                model.ProfGroup = getArray.GArray('ProfGroup');
                model.currency = getArray.GArray('currency');
            }, 2000);
            timeout(function() {
                model.regsec.ddlCountryLivingIn = stateParams.countryID;
            }, 4000);
        };

        model.changeBind = function(type, paerntval, countryVal) {

            switch (type) {
                case 'educat':
                    model.edugroup = commondependency.educationGroupBind(paerntval);
                    break;
                case 'edugroup':
                    model.eduSplArr = commondependency.educationSpeciakisationBind(paerntval);
                    break;
                case 'profGroup':
                    model.professionArr = commondependency.professionBind(paerntval);
                    break;
                case 'Country':
                    model.stateArr = commondependency.StateBind(paerntval);
                    break;
                case 'state':
                    if (countryVal === '1' || countryVal === 1) {
                        model.districtArr = commondependency.districtBind(paerntval);
                    } else {
                        model.districtArr = [];
                        model.cityArr = [];
                        model.cityArr = commondependency.districtBind(paerntval);
                    }
                    break;
                case 'district':
                    model.cityArr = commondependency.cityBind(paerntval);
                    break;

            }
        };

        model.secondRegSubmit = function(obj) {
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
            console.log(model.secondRegSubmit);
            secondaryRegistrationService.submitSecodaryRegistration(regInput).then(function(res) {
                console.log(res);
                $state.go('reg.regManagePhoto', { CustID: stateParams.CustID, genderID: stateParams.genderID });

            });

        };

        return model.init();


    }

    angular
        .module('KaakateeyaEmpReg')
        .factory('secondaryRegistrationModel', factory);

    factory.$inject = ['secondaryRegistrationService', 'getArray', 'Commondependency', '$filter', '$timeout', '$stateParams', 'authSvc', '$state'];

})(angular);
(function(angular) {
    'use strict';

    function factory(http) {
        return {
            submitSecodaryRegistration: function(obj) {
                return http.post(regapp.apipath + 'Registration/CustomerRegProfileDetails', JSON.stringify(obj));
            }
        };
    }

    angular
        .module('KaakateeyaEmpReg')
        .factory('secondaryRegistrationService', factory);

    factory.$inject = ['$http'];
})(angular);
(function() {
    'use strict';
    angular
        .module('KaakateeyaEmpReg')
        .constant('arrayConstantsreg', {
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
            'newProfessionCatgory': [
                { "label": "--Select--", "title": "--Select--", "value": "" },
                { "label": "state govt job", "title": "state govt job", "value": 567 },
                { "label": "central govt job", "title": "central govt job", "value": 568 },
                { "label": "private job", "title": "private job", "value": 569 },
                { "label": "doctor", "title": "doctor", "value": 570 },
                { "label": "business", "title": "business", "value": 571 }
            ],
            'gradeSelection': [
                { "label": "--Select--", "title": "--Select--", "value": "" },
                { "label": "A", "title": "A", "value": 216 },
                { "label": "B", "title": "B", "value": 217 },
                { "label": "C", "title": "C", "value": 218 },
                { "label": "D", "title": "D", "value": 219 }
            ],
            'Complexion': [
                { "label": "--select-- ", "title": "--select--", "value": "" },
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

}());

// (function(){
//     'use strict';

//     angular
//         .module('module')
//         .constant('constant', constant);

// }());
(function() {
    'use strict';

    angular
        .module('KaakateeyaEmpReg')
        .factory('Commondependency', factory)

    factory.$inject = ['SelectBindServicereg'];

    function factory(SelectBindService) {
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


    }
})();
(function() {
    'use strict';

    angular
        .module('KaakateeyaEmpReg')
        .factory('alert', factory)

    factory.$inject = ['$mdDialog', '$uibModal', '$timeout'];

    function factory($mdDialog, uibModal, timeout) {
        var modalinstance, forgetpassword;

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
                    "timeOut": 3000,
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
            dynamicpopup: function(url, $scope, uibModal, size) {
                modalinstance = uibModal.open({
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: url,
                    scope: $scope,
                    size: size || 'lg',
                    backdrop: 'static',
                    keyboard: false
                });
            },
            dynamicpopupclose: function() {
                modalinstance.close();
            },

            mddiologcancel: function() {
                $mdDialog.hide();
            },
            timeoutoldalerts: function($scope, cls, msg, time) {
                debugger;
                $scope.typecls = cls;
                $scope.msgs = msg;
                modalinstance = uibModal.open({
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    template: '<div class=' + cls + '><div class="modal-header"><a href="javascript:void(0);" ng-click="close();"><ng-md-icon icon="close" style="fill:#c73e5f" class="pull-right" size="20"></ng-md-icon></a><h4 class="modal-title"><center>Alert</center></h4></div></div><div class="modal-body" id="modalbodyID"><p class="text-center" style="color:black;">' + msg + '</p></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="close();">Close</button></div>',
                    $scope: $scope
                });

                timeout(function() {
                    modalinstance.close();
                }, time || 9500);

                $scope.close = function() {
                    modalinstance.close();
                };
            }


        };
    }
})();
(function() {
    'use strict';

    angular
        .module('KaakateeyaEmpReg')
        .directive('editFooter', directive);

    function directive() {

        var directive = {
            link: link,
            restrict: 'EA',
            template: '<div class="col-lg-9">' +
                '<button class="button_custom  pull-right"  ng-disabled="loading"  type="submit" promise-btn="page.model.submitPromise">Submit</button>' +
                '</div>' +
                ' <div class="col-lg-3">' +
                '<input value="Cancel"  class="button_custom button_custom_reset pull-right" ng-click="page.model.cancel();" type="button">' +
                ' </div>'
        };
        return directive;

        function link(scope, element, attrs) {}
    }

})();
(function() {
    'use strict';

    angular
        .module('KaakateeyaEmpReg')
        .directive('fileModel', directive);
    directive.$inject = ['$parse'];

    function directive($parse) {

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function() {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                });
            });


        }
    }

})();
(function(angular) {
    'use strict';


    function factory($http, service) {
        var model = {};

        model.init = function() {
            model.Countryf();
            model.stateSelectf();
            model.countryCodeselectf();
            model.currencyf();
            return model;
        };

        model.Countryf = function() {
            service.countrySelect().then(function(response) {
                var option = [];
                option.push({ "label": "--select--", "title": "--select--", "value": "" });
                _.each(response.data, function(item) {
                    option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                model.Country = option;
            });
        };

        model.stateSelectf = function() {
            service.stateSelect('1').then(function(response) {
                var option = [];
                option.push({ "label": "--select--", "title": "--select--", "value": "" });
                _.each(response.data, function(item) {
                    option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                model.IndiaStates = option;
            });
        };

        model.countryCodeselectf = function() {
            service.countryCodeselect().then(function(response) {
                var option = [];
                option.push({ "label": "--select--", "title": "--select--", "value": "" });
                _.each(response.data, function(item) {
                    option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                model.countryCode = option;
            });
        };

        model.currencyf = function() {
            service.currency().then(function(response) {
                var option = [];
                option.push({ "label": "--select--", "title": "--select--", "value": "" });
                _.each(response.data, function(item) {
                    option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                model.currency = option;
            });
        };


        return model.init();
    }

    angular
        .module('KaakateeyaEmpReg')
        .factory('countryArrayModel', factory)

    factory.$inject = ['$http', 'SelectBindServicereg'];

})(angular);
(function(angular) {
    'use strict';


    function factory($http, service) {
        var model = {};

        model.init = function() {
            model.ProfCatgoryf();
            model.ProfessionGroupf();
            return model;
        };

        model.ProfCatgoryf = function() {
            service.ProfessionCatgory().then(function(response) {
                var option = [];
                option.push({ "label": "--select--", "title": "--select--", "value": "" });
                _.each(response.data, function(item) {
                    option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                model.ProfCatgory = option;
            });
        };

        model.ProfessionGroupf = function() {
            service.ProfessionGroup().then(function(response) {
                var option = [];
                option.push({ "label": "--select--", "title": "--select--", "value": "" });
                _.each(response.data, function(item) {
                    option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                model.ProfGroup = option;
            });
        };

        return model.init();
    }

    angular
        .module('KaakateeyaEmpReg')
        .factory('eduprofArrayModel', factory)

    factory.$inject = ['$http', 'SelectBindServicereg'];

})(angular);
(function(angular) {
    'use strict';


    function factory($http, service) {
        var model = {};

        model.init = function() {
            model.casteselectf();
            return model;
        };


        model.casteselectf = function() {
            service.casteselect().then(function(response) {
                var option = [];
                option.push({ "label": "--select--", "title": "--select--", "value": "" });
                _.each(response.data, function(item) {
                    option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                model.caste = option;
            });
        };

        return model.init();
    }

    angular
        .module('KaakateeyaEmpReg')
        .factory('otherArrayModel', factory)

    factory.$inject = ['$http', 'SelectBindServicereg'];

})(angular);
(function() {
    'use strict';

    angular
        .module('KaakateeyaEmpReg')
        .factory('authSvc', factory)

    factory.$inject = ['$injector'];

    function factory($injector) {
        function setUser(value) {

            setSession("LoginEmpid", value.EmpID);
            setSession("LoginEmpName", value.FirstName + " " + value.LastName);
            setSession("empBranchID", value.BranchID);
            setSession("isAdmin", value.isAdmin);
            setSession("isManagement", value.isManagement);
            setSession("empRegionID", value.RegionID);
            setSession("empphoto", value.EmpPhotoPath);
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
            clearSession('LoginEmpid');
            clearSession('LoginEmpName');
            clearSession('empBranchID');
            clearSession('isAdmin');
            clearSession('isManagement');
            clearSession('empRegionID');
            clearSession('macAddress');
            clearSession('empphoto');
        }

        function getUser() {
            return {
                LoginEmpid: getSession('LoginEmpid'),
                LoginEmpName: getSession('LoginEmpName'),
                empBranchID: getSession('empBranchID'),
                isAdmin: getSession('isAdmin'),
                isManagement: getSession('isManagement'),
                empRegionID: getSession('empRegionID')

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
                return !!getSession('cust.id');
            },
            clearUserSessionDetails: function() {
                return clearUserSession();
            },
            logout: function() {
                clearUserSession();
                //route.go('home', {});
            },
            LoginEmpid: function() {
                return getSession('LoginEmpid');
            },
            LoginEmpName: function() {
                return getSession('LoginEmpName');
            },
            empBranchID: function() {
                return getSession('empBranchID');
            },
            isAdmin: function() {
                return getSession('isAdmin');
            },
            isManagement: function() {
                return getSession('isManagement');
            },
            empRegionID: function() {
                return getSession('empRegionID');
            },
            empphoto: function() {
                return getSession('empphoto');
            },
            macAddress: function() {
                return getSession('macAddress');
            },
            clientIp: function() {
                return getSession('getClientIp');
            },
            getmacaddress: function() {
                return $http.get('/getmac').then(function(res) {
                    console.log(res);
                    setSession("macAddress", res.data);
                    return res.data;
                });
            },
            getClientIp: function() {
                return $http.get('/getClientIp').then(function(res) {
                    console.log(res);
                    console.log(((res.data).indexOf("::1") !== -1));
                    console.log(((res.data).indexOf("127.0.0.1") !== -1));
                    var response;
                    if ((res.data).indexOf("::1") !== -1 || (res.data).indexOf("127.0.0.1") !== -1) {
                        response = "183.82.98.109";
                        setSession("getClientIp", response);
                    } else {
                        response = res.data;
                        setSession("getClientIp", response);
                    }
                    return response;
                    //(((res.data).indexOf("::1") !== -1) ? "183.82.98.109" : res.data);
                });
            },
            getpaidstatus: function() {
                return getSession('cust.paidstatus');
            },

            login: function(username, password) {

                var body = {
                    Username: username,
                    Password: password
                };
                return $injector.invoke(function($http) {
                    return $http.post(regapp.apipath + 'DB/userLogin/person', body)
                        .then(function(response) {
                            if (response.status === 200) {
                                return { success: true, response: response.data };
                            }
                            return { success: false, response: response.data };
                        });
                });
            }

        };
    }
})();
(function(editviewapp) {
    'use strict';
    editviewapp.factory('errorInterceptor', ['$rootScope', '$q', function($rootScope, $q) {
        return {
            request: function(config) {
                $rootScope.$broadcast('request-start');
                config.headers = config.headers || {};
                return config;
            },
            responseError: function(rejection) {
                $rootScope.$broadcast('request-fail');
                $rootScope.$broadcast('notify-error', rejection);
                return $q.reject(rejection);
            },
            response: function(config) {
                $rootScope.$broadcast('request-end');
                var deferred = $q.defer();
                deferred.resolve(config);
                return deferred.promise;
            }
        };
    }]);
    angular.module('KaakateeyaEmpReg').config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('errorInterceptor');
    }]);
}(window.editviewapp));
(function() {
    'use strict';

    angular
        .module('KaakateeyaEmpReg')
        .service('fileUpload', service)

    service.$inject = ['$http'];

    function service($http) {
        this.uploadFileToUrl = function(file, uploadUrl, keyname) {
            var fd = new FormData();
            fd.append('file', file);
            fd.append('keyname', keyname);
            return $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            });
        };
    }
})();
(function() {
    'use strict';

    angular
        .module('KaakateeyaEmpReg')
        .factory('getArray', factory)

    factory.$inject = ['arrayConstantsreg', 'SelectBindServicereg'];

    function factory(cons, service) {
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

    }
})();
(function() {
    'use strict';

    angular
        .module('KaakateeyaEmpReg')
        .factory('SelectBindServicereg', factory)

    factory.$inject = ['$http'];

    function factory(http) {
        return {
            countrySelect: function() {
                return http.get(regapp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "", dependencyValue: "" } });
            },
            stateSelect: function(dependencyVal) {
                return http.get(regapp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "state", dependencyValue: dependencyVal } });
            },
            districtSelect: function(dependencyVal1) {
                return http.get(regapp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "distric", dependencyValue: dependencyVal1 } });
            },
            citySelect: function(dependencyVal2) {

                return http.get(regapp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "city", dependencyValue: dependencyVal2 } });
            },
            EducationCatgory: function() {
                return http.get(regapp.apipath + 'Dependency/getEducationDependency', { params: { dependencyName: "", dependencyValue: "" } });
            },
            EducationGroup: function(dependencyVal2) {
                return http.get(regapp.apipath + 'Dependency/getEducationDependency', { params: { dependencyName: "educationGroup", dependencyValue: dependencyVal2 } });
            },
            EducationSpecialisation: function(dependencyVal2) {

                return http.get(regapp.apipath + 'Dependency/getEducationDependency', { params: { dependencyName: "educationSpeacialisation", dependencyValue: dependencyVal2 } });
            },
            ProfessionCatgory: function() {
                return http.get(regapp.apipath + 'Dependency/getProfessionDependency', { params: { dependencyName: "ProfessionCategory", dependencyValue: "" } });
            },
            ProfessionGroup: function() {
                return http.get(regapp.apipath + 'Dependency/getProfessionDependency', { params: { dependencyName: "", dependencyValue: "" } });
            },
            ProfessionSpecialisation: function(dependencyVal2) {

                return http.get(regapp.apipath + 'Dependency/getProfessionDependency', { params: { dependencyName: "ProfessionSpecialisation", dependencyValue: dependencyVal2 } });
            },
            casteselect: function() {

                return http.get(regapp.apipath + 'Dependency/getDropdown_filling_values', { params: { strDropdownname: "CasteName" } });
            },
            countryCodeselect: function() {

                return http.get(regapp.apipath + 'Dependency/getDropdown_filling_values', { params: { strDropdownname: "CountryCode" } });
            },
            currency: function() {

                return http.get(regapp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'Currency', dependencyValue: '', dependencyflagID: '' } });
            },
            stars: function(obj) {
                return http.get(regapp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'StarType', dependencyValue: obj, dependencyflagID: '' } });
            },
            castedependency: function(obj1, obj2) {

                return http.get(regapp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'Caste', dependencyValue: obj1, dependencyflagID: obj2 } });
            },
            subCasteBind: function(obj1) {

                return http.get(regapp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'SubCaste', dependencyValue: obj1, dependencyflagID: '' } });
            },
            branch: function(obj1) {

                return http.get(regapp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'Region', dependencyValue: obj1, dependencyflagID: '' } });
            },
            CountryWithCode: function() {
                return http.get(regapp.apipath + 'Dependency/getCountryDependencyCountryCode', { params: { dependencyName: "", dependencyValue: "" } });
            }

        };
    }
})();
angular.module('KaakateeyaEmpEdit').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('index.html',
    "<!DOCTYPE html>\r" +
    "\n" +
    "<html lang=\"en\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "<head>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- Meta, title, CSS, favicons, etc. -->\r" +
    "\n" +
    "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\r" +
    "\n" +
    "    <title>Kaakateeya Marriages</title>\r" +
    "\n" +
    "    <meta charset=\"utf-8\">\r" +
    "\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r" +
    "\n" +
    "    <base href=\"/\">\r" +
    "\n" +
    "    <meta name=\"description\" content=\"ACME Inc.\">\r" +
    "\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- Bootstrap -->\r" +
    "\n" +
    "    <link href=\"node_modules/bootstrap/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\r" +
    "\n" +
    "    <!-- Font Awesome -->\r" +
    "\n" +
    "    <link href=\"node_modules/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <link href=\"build/css/custom.min.css\" rel=\"stylesheet\" />\r" +
    "\n" +
    "    <link href=\"node_modules/angular-material/angular-material.css\" rel=\"stylesheet\" />\r" +
    "\n" +
    "    <link href=\"node_modules/bootstrap-multiselect/dist/css/bootstrap-multiselect.css\" rel=\"stylesheet\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <link href=\"bower_components/angular-loading-bar/build/loading-bar.min.css\" rel=\"stylesheet\" />\r" +
    "\n" +
    "    <link href=\"stylesreg.css\" rel=\"stylesheet\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</head>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<body class=\"nav-sm\" ng-app=\"KaakateeyaEmpReg\" ui-router-styles>\r" +
    "\n" +
    "    <div class=\"container body\">\r" +
    "\n" +
    "        <div class=\"main_container\">\r" +
    "\n" +
    "            <div ui-view=\"topbar\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ui-view=\"lazyLoadView\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ui-view=\"bottompanel\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!-- jQuery -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- SCRIPTS DATA --#>\r" +
    "\n" +
    "    <script src=\"node_modules/jquery/dist/jquery.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"bower_components/bootstrap/dist/js/bootstrap.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/angular/angular.min.js\"></script>\r" +
    "\n" +
    "    <script type=\"text/javascript\" src=\"node_modules/oclazyload/dist/ocLazyLoad.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/angular-ui-router/release/angular-ui-router.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/underscore/underscore-min.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect.js\"></script>\r" +
    "\n" +
    "    <script src=\"bower_components/ng-idle/angular-idle.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"bower_components/angular-loading-bar/build/loading-bar.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"bower_components/angular-animate/angular-animate.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/angular-module-sanitize/angular-sanitize.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/angular-animate/angular-animate.js\"></script>\r" +
    "\n" +
    "    <script src=\"bower_components/toastr/toastr.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/angular-aria/angular-aria.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/angular-messages/angular-messages.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/angular-material/angular-material.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/editandview/dist/js/main.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/angular-password/angular-password.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/angular-material-icons/angular-material-icons.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"node_modules/moment/min/moment.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"bower_components/angular-auto-validate/dist/jcs-auto-validate.min.js\"></script>\r" +
    "\n" +
    "    <script src=\"bower_components/angular-promise-buttons/dist/angular-promise-buttons.min.js\"></script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <script src=\"index.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "    <script src=\"commonpage.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <script src=\"https://rawgithub.com/eligrey/FileSaver.js/master/FileSaver.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "    <script src=\"build/js/custom.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <script src=\"common/constants/arrayBindConstatns.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "    <script src=\"common/services/selectBindServices.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "    <script src=\"common/services/authSvc.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "    <script src=\"common/directives/commondependency.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "    <script src=\"common/directives/editFooter.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "    <script src=\"common/model/countryArrayModel.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "    <script src=\"common/model/eduprofArrayModel.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "    <script src=\"common/model/otherArrayModel.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "    <script src=\"common/directives/dynamicAlets.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "    <script src=\"common/services/getArrayService.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "    <!--SCRIPTS END-->\r" +
    "\n" +
    "    <!-- SCRIPTSP DATA --><script src=\"dist/js/main.min.js\"></script><!--SCRIPTSP END-->\r" +
    "\n" +
    "</body>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</html>"
  );


  $templateCache.put('app/basicRegistration/index.html',
    "<div role=\"main\" class=\"right_col\">\r" +
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
    "                    <form name=\"regForm\" novalidate role=\"form\" ng-submit=\"regForm.$valid && page.model.regSubmit(page.model.reg);\">\r" +
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
    "                                            <md-radio-group ng-required=\"true\" name=\"rbtngender\" layout=\"row\" ng-model=\"page.model.reg.rbtngender\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
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
    "                                        <md-checkbox ng-model=\"page.model.reg.Chkfree_reg\" name=\"Chkfree_reg\" aria-label=\"Chkfree_reg\" ng-change=\"page.model.mobilemailvalidation()\">\r" +
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
    "                                <input maxlength=\"100\" md-asterisk=\"\" name=\"txtfirstname\" ng-model=\"page.model.reg.txtfirstname\">\r" +
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
    "                                <input maxlength=\"50\" required=\"\" md-asterisk=\"\" name=\"txtlastname\" ng-model=\"page.model.reg.txtlastname\">\r" +
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
    "                                <input ng-required=\"emailrequired\" maxlength=\"50\" md-asterisk=\"\" name=\"txtEmail\" ng-model=\"page.model.reg.txtEmail\" ng-pattern=\"/^.+@.+\\..+$/\" ng-blur=\"page.model.valueExists('email',0,page.model.reg.txtEmail);\">\r" +
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
    "                                <md-select name=\"ddlpostedby\" ng-model=\"page.model.reg.ddlpostedby\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.postedby\">{{h.label}} </md-option>\r" +
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
    "                                    <md-select name=\"ddlDD\" ng-model=\"page.model.reg.ddlDD\" required=\"\" ng-change=\"page.model.dayChange(page.model.reg,'day');\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.dateArr\">{{h.label}} </md-option>\r" +
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
    "                                    <md-select name=\"ddlMM\" ng-model=\"page.model.reg.ddlMM\" required=\"\" ng-change=\"page.model.dayChange(page.model.reg,'month');\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.monthArr\">{{h.label}} </md-option>\r" +
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
    "                                    <md-select name=\"ddlYear\" ng-model=\"page.model.reg.ddlYear\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.yearArr\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"ddlreligion\" ng-model=\"page.model.reg.ddlreligion\" required=\"\" ng-change=\"page.model.changeBind(page.model.reg.ddlreligion,page.model.reg.ddlmothertongue);\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.religion\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"ddlmothertongue\" ng-model=\"page.model.reg.ddlmothertongue\" required=\"\" ng-change=\"page.model.changeBind(page.model.reg.ddlreligion,page.model.reg.ddlmothertongue);\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.Mothertongue\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"ddlcaste\" ng-model=\"page.model.reg.ddlcaste\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.casteArr\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"ddlcountry\" ng-model=\"page.model.reg.ddlcountry\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.Country\">{{h.label}} </md-option>\r" +
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
    "                                    <md-select name=\"ddlmobilecountry\" ng-model=\"page.model.reg.ddlmobilecountry\" ng-required=\"mobilecountrycoderequired\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.countryCode\">{{h.label}} </md-option>\r" +
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
    "                                    <input maxlength=\"10\" ng-minlength=\"10\" ng-required=\"mobilenumberrequired\" md-no-asterisk=\"\" ng-pattern=\"/^[0-9]+$/\" name=\"txtMobileNo\" ng-model=\"page.model.reg.txtMobileNo\" ng-blur=\"page.model.valueExists('number',1,page.model.reg.txtMobileNo);\">\r" +
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
    "                                    <md-select name=\"ddllandcountry\" ng-model=\"page.model.reg.ddllandcountry\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.countryCode\">{{h.label}} </md-option>\r" +
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
    "                                    <input maxlength=\"8\" name=\"txtArea\" ng-model=\"page.model.reg.txtArea\" ng-pattern=\"/^[0-9]+$/\">\r" +
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
    "                                    <input maxlength=\"8\" name=\"txtlandNum\" ng-model=\"page.model.reg.txtlandNum\" ng-pattern=\"/^[0-9]+$/\">\r" +
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
    "                                        <md-checkbox ng-model=\"page.model.reg.Chkprivacy\" name=\"Chkprivacy\" aria-label=\"Checkbox 1\" ng-required=\"true\" md-asterisk=\"\">\r" +
    "\n" +
    "                                            I agree to the\r" +
    "\n" +
    "                                            <a ng-model=\"page.model.reg.lnkprivacyPolicy\" Font-Size=\"12px\" ng-click=\"redirectprivacy()\">Privacy Policy and T&C.</a>\r" +
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
    "    \r" +
    "\n" +
    "    body {\r" +
    "\n" +
    "        color: black;\r" +
    "\n" +
    "        font-weight: bold;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>\r" +
    "\n" +
    "<script src=\"build/js/custom.js\" type=\"text/javascript\"></script>"
  );


  $templateCache.put('app/regManagePhoto/index.html',
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
    "                        <!--<md-button class=\"md-raised md-warn md-hue-2\" href=\"registration/upgradeMemberShip\">skip this page</md-button>-->\r" +
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
    "                            <div id=\"dtimagephoto\" class=\"clearfix\" ng-repeat=\"item in page.model.manageArr\" style=\"width:33%;float:left;\">\r" +
    "\n" +
    "                                <div class=\"photos\">\r" +
    "\n" +
    "                                    <div class=\"pics_selected_list_item\">\r" +
    "\n" +
    "                                        <div ng-class=\"item.IsActive == 0 && item.PhotoName !== null?'cssMaskdiv clearfix':''\">\r" +
    "\n" +
    "                                            <img ng-model=\"page.model.imgPhotoName\" ng-src=\"{{item.ImageUrl}}\" />\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div class=\"pics_selected_list_item_ui clearfix\">\r" +
    "\n" +
    "                                            <div class=\"photos_icon\">\r" +
    "\n" +
    "                                                <!--<input type=\"image\" id=\"imgAdd\" alt=\"add\" ng-click=\"page.model.AddImage($index+1,item.Cust_Photos_ID,item.DisplayOrder,item.IsActive);\" ng-show=\"{{item.addButtonvisible}}\" />-->\r" +
    "\n" +
    "                                                <a href=\"javascript:void(0);\" ng-click=\"page.model.AddImage($index+1,item.Cust_Photos_ID,item.DisplayOrder,item.IsActive);\" ng-show=\"{{item.addButtonvisible}}\">\r" +
    "\n" +
    "                                                    <ng-md-icon icon=\"add_a_photo\" style=\"fill:#665454\" size=\"25\">Add</ng-md-icon>\r" +
    "\n" +
    "                                                </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                <a href=\"javascript:void(0);\" ng-show=\"{{item.IsMain==1?false:(item.PhotoName!=null?true:false)}}\" ng-click=\"page.model.DeleteImage(item.keyname,item.Cust_Photos_ID);\">\r" +
    "\n" +
    "                                                    <ng-md-icon icon=\"delete\" style=\"fill:#665454\" size=\"25\">Delete</ng-md-icon>\r" +
    "\n" +
    "                                                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                                                <a href=\"javascript:void(0);\" class=\"set_pic\" ng-click=\"page.model.setAsProfilePic(item.Cust_Photos_ID);\" style=\"color:#665454;font-weight:bold;\" ng-show='{{item.IsMain==\"1\"?false:(item.PhotoName!=null?true:false) }}'>\r" +
    "\n" +
    "                                            Set as Profilepic\r" +
    "\n" +
    "                                            </a>\r" +
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
    "                                    <md-radio-group layout=\"row\" ng-model=\"page.model.rbtProtectPassword\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\" ng-change=\"setPhotoPassword(rbtProtectPassword);\">\r" +
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
    "                        <a ID=\"phtoguide\" href=\"javascript:void(0);\" ng-click=\"page.model.redirectPage('PhotoGuideLines');\">Photo guidelines\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <a ID=\"photofaq\" href=\"javascript:void(0);\" ng-click=\"page.model.redirectPage('Faqs');\">Photo faq’s\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <a ID=\"photoupload\" href=\"javascript:void(0);\" ng-click=\"page.model.redirectPage('uploadTips');\">Photo upload tips\r" +
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
    "<script type=\"text/ng-template\" id=\"AddimagePopup.html\">\r" +
    "\n" +
    "    <form name=\"uploadForm\" novalidate role=\"form\" ng-submit=\"page.model.upload(page.model.up);\">\r" +
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
    "                <input type=\"file\" file-model=\"page.model.up.myFile\" />\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"modal-footer\">\r" +
    "\n" +
    "            <input value=\"Upload\" class=\"btn btn-success\" type=\"submit\">\r" +
    "\n" +
    "            <input value=\"Cancel\" class=\"btn btn-danger\" ng-click=\"page.model.cancel();\" type=\"button\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"deleteimagePopup.html\">\r" +
    "\n" +
    "    <form name=\"uploadForm\" novalidate role=\"form\" ng-submit=\"page.model.Delete(up);\">\r" +
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
    "            <input value=\"Close\" class=\"btn btn-success\" ng-click=\"page.model.cancel();\" type=\"button\">\r" +
    "\n" +
    "            <input value=\"Delete\" class=\"btn btn-danger\" type=\"submit\">\r" +
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


  $templateCache.put('app/secondaryRegistration/index.html',
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
    "                    <form name=\"secregForm\" accessible-form novalidate role=\"form\" ng-submit=\"secregForm.$valid && page.model.secondRegSubmit(page.model.regsec);\">\r" +
    "\n" +
    "                        <div class=\"reg_fields_entry clearfix\">\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Name</label>\r" +
    "\n" +
    "                                <input readonly md-no-asterisk=\"\" name=\"LabelName\" ng-model=\"page.model.regsec.LabelName\">\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                <label>Marital Status</label>\r" +
    "\n" +
    "                                <md-select name=\"rbtnmarital\" ng-model=\"page.model.regsec.rbtnmarital\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.MaritalStatus\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"rbtncomplexion\" ng-model=\"page.model.regsec.rbtncomplexion\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.Complexion\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"rbtnphysicalstatus\" ng-model=\"page.model.regsec.rbtnphysicalstatus\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.PhysicalStatus\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"ddlHeight\" ng-model=\"page.model.regsec.ddlHeight\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.height\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"ddlBornCitizenship\" ng-model=\"page.model.regsec.ddlBornCitizenship\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.Country\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"ddlEduCategory\" ng-model=\"page.model.regsec.ddlEduCategory\" required=\"\" ng-change=\"page.model.changeBind('educat',page.model.regsec.ddlEduCategory)\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.educationcategory\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"ddlEduGroup\" ng-model=\"page.model.regsec.ddlEduGroup\" required=\"\" ng-change=\"page.model.changeBind('edugroup',page.model.regsec.ddlEduGroup)\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.edugroup\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"ddlEduSpecialisation\" ng-model=\"page.model.regsec.ddlEduSpecialisation\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.eduSplArr\">{{h.label}} </md-option>\r" +
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
    "                                    <textarea maxlength=\"500\" rows=\"2\" md-no-asterisk=\"\" name=\"txtEducationMerits\" ng-model=\"page.model.regsec.txtEducationMerits\"></textarea>\r" +
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
    "                                <md-select name=\"ddlEmployedIn\" ng-model=\"page.model.regsec.ddlEmployedIn\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.ProfCatgory\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"ddlProfessionalGroup\" ng-model=\"page.model.regsec.ddlProfessionalGroup\" required=\"\" ng-change=\"page.model.changeBind('profGroup',page.model.regsec.ddlProfessionalGroup)\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.ProfGroup\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"ddlProfession\" ng-model=\"page.model.regsec.ddlProfession\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.professionArr\">{{h.label}} </md-option>\r" +
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
    "                                <input maxlength=\"100\" md-no-asterisk=\"\" name=\"txtCompanyName\" ng-model=\"page.model.regsec.txtCompanyName\">\r" +
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
    "                                <md-select name=\"ddlcurrency\" ng-model=\"page.model.regsec.ddlcurrency\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.currency\">{{h.label}} </md-option>\r" +
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
    "                                <input maxlength=\"7\" md-no-asterisk=\"\" name=\"txtSalary\" ng-model=\"page.model.regsec.txtSalary\" ng-pattern=\"/^[0-9]+$/\">\r" +
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
    "                                <textarea maxlength=\"500\" rows=\"2\" md-no-asterisk=\"\" name=\"txtOcccupationDetails\" ng-model=\"page.model.regsec.txtOcccupationDetails\"></textarea>\r" +
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
    "                                <md-select name=\"ddlCountryLivingIn\" ng-model=\"page.model.regsec.ddlCountryLivingIn\" ng-change=\"page.model.changeBind('Country',page.model.regsec.ddlCountryLivingIn)\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.Country\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"ddlStatelivingIn\" ng-model=\"page.model.regsec.ddlStatelivingIn\" required=\"\" ng-change=\"page.model.changeBind('state',page.model.regsec.ddlStatelivingIn,page.model.regsec.ddlCountryLivingIn)\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.stateArr\">{{h.label}} </md-option>\r" +
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
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\" ng-if=\"page.model.regsec.ddlCountryLivingIn==1\">\r" +
    "\n" +
    "                                <label>District</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlDistricLivingIn\" ng-model=\"page.model.regsec.ddlDistricLivingIn\" required=\"\" ng-change=\"page.model.changeBind('district',page.model.regsec.ddlDistricLivingIn)\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.districtArr\">{{h.label}} </md-option>\r" +
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
    "                                <md-select name=\"ddlcityLivingIn\" ng-model=\"page.model.regsec.ddlcityLivingIn\" required=\"\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.cityArr\">{{h.label}} </md-option>\r" +
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
    "                            <md-input-container flex=\"50\" class=\"col-lg-4\" ng-hide=\"page.model.regsec.ddlBornCitizenship==page.model.regsec.ddlCountryLivingIn\">\r" +
    "\n" +
    "                                <label>Visa status</label>\r" +
    "\n" +
    "                                <md-select name=\"ddlVisaStatus\" ng-model=\"page.model.regsec.ddlVisaStatus\">\r" +
    "\n" +
    "                                    <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.visastatus\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                </md-select>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"col-lg-4\" style=\"padding-right: 0px;margin-left: 0px;\" ng-hide=\"page.model.regsec.ddlBornCitizenship==page.model.regsec.ddlCountryLivingIn\">\r" +
    "\n" +
    "                                <label>Residing since</label>\r" +
    "\n" +
    "                                <md-datepicker ng-model=\"page.model.regsec.from\" md-min-date=\"minDate\" md-max-date=\"maxDate\">\r" +
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
    "                                <input maxlength=\"100\" required=\"\" md-asterisk=\"\" name=\"txtFatherName\" ng-model=\"page.model.regsec.txtFatherName\">\r" +
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
    "                                <input maxlength=\"150\" md-no-asterisk=\"\" name=\"txtFatherEducation\" ng-model=\"page.model.regsec.txtFatherEducation\">\r" +
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
    "                                <input maxlength=\"200\" md-no-asterisk=\"\" name=\"txtFatherProfession\" ng-model=\"page.model.regsec.txtFatherProfession\">\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Mother’s name</label>\r" +
    "\n" +
    "                                <input maxlength=\"100\" required=\"\" md-asterisk=\"\" name=\"txtMotherName\" ng-model=\"page.model.regsec.txtMotherName\">\r" +
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
    "                                <input maxlength=\"150\" md-no-asterisk=\"\" name=\"txtMotherEducation\" ng-model=\"page.model.regsec.txtMotherEducation\">\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                <label>Mother’s profession</label>\r" +
    "\n" +
    "                                <input maxlength=\"200\" md-no-asterisk=\"\" name=\"txtMotherprofession\" ng-model=\"page.model.regsec.txtMotherprofession\">\r" +
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
    "                                <input maxlength=\"100\" md-no-asterisk=\"\" name=\"txtfathernative\" ng-model=\"page.model.regsec.txtfathernative\">\r" +
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
    "                                <input maxlength=\"100\" md-no-asterisk=\"\" name=\"txtmothernative\" ng-model=\"page.model.regsec.txtmothernative\">\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "                            <div class=\"col-lg-4\">\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>No of Brothers</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlBrothers\" ng-model=\"page.model.regsec.ddlBrothers\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.noOfsibblingsArr\">{{h.label}} </md-option>\r" +
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
    "                                    <md-select name=\"ddlSisters\" ng-model=\"page.model.regsec.ddlSisters\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.noOfsibblingsArr\">{{h.label}} </md-option>\r" +
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
    "                                    <textarea maxlength=\"1000\" rows=\"3\" ng-minlength=\"50\" required=\"\" md-asterisk=\"\" name=\"txtabouturself\" ng-model=\"page.model.regsec.txtabouturself\"></textarea>\r" +
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


  $templateCache.put('PageCode/viewFormat.html',
    "<html>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<head>\r" +
    "\n" +
    "    <title></title>\r" +
    "\n" +
    "</head>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<body>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</body>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</html>"
  );

}]);
