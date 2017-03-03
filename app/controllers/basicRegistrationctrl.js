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
                intEmpID: 2,
                intCustPostedBY: obj.ddlpostedby,
                //strMobileVerificationCode: obj.
            };
            console.log(inputObj);
            basicRegistrationService.submitBasicRegistration(inputObj).then(function(res) {
                console.log(res);
                scope.genderID = 0;
                authSvc.login(scope.reg.txtEmail, "Admin@123").then(function(response) {
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