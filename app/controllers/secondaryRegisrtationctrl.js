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