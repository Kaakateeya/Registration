(function(angular) {
    'use strict';


    function factory(regManagePhotoService, uibModal, Commondependency, http, fileUpload, stateParams, authSvc) {
        var model = {};
        model.scope = {};
        // start declaration

        var EmpIDQueryString = '2';

        model.up = {};
        var CustID = stateParams.CustID;

        model.photorowID = 0;
        model.imgArr = [];
        var loginEmpid = authSvc.LoginEmpid();
        var AdminID = authSvc.isAdmin();
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
                    alert('Sorry,Upload Photo Size Must Be Less than 4 mb');
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
                                    EmpID: loginEmpid,
                                    Admin: AdminID
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

    factory.$inject = ['regManagePhotoService', '$uibModal', 'Commondependency', '$http', 'fileUpload', '$stateParams', 'authSvc'];

})(angular);