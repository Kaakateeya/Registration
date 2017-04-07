angular.module('KaakateeyaEmpReg').run(['$templateCache', function($templateCache) {
  'use strict';

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
    "                    <form accessible-formreg name=\"regForm\" novalidate role=\"form\" ng-submit=\"regForm.$valid && page.model.regSubmit(page.model.reg);\">\r" +
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
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <md-input-container class=\"col-lg-3\">\r" +
    "\n" +
    "                                    <label> First Name</label>\r" +
    "\n" +
    "                                    <input ng-focus=\"true\" autofocus maxlength=\"100\" required=\"\" md-asterisk=\"\" name=\"txtfirstname\" ng-model=\"page.model.reg.txtfirstname\">\r" +
    "\n" +
    "                                    <div ng-messages=\"regForm.txtfirstname.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"regForm.txtfirstname.$invalid && (regForm.$submitted)\" ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                                <md-input-container class=\"col-lg-3\">\r" +
    "\n" +
    "                                    <label>Last Name</label>\r" +
    "\n" +
    "                                    <input maxlength=\"50\" required=\"\" md-asterisk=\"\" name=\"txtlastname\" ng-model=\"page.model.reg.txtlastname\">\r" +
    "\n" +
    "                                    <div ng-messages=\"regForm.txtlastname.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"regForm.txtlastname.$invalid && (regForm.$submitted)\" ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                                <md-input-container class=\"col-lg-3\">\r" +
    "\n" +
    "                                    <label>Email</label>\r" +
    "\n" +
    "                                    <input ng-required=\"page.model.emailrequired\" maxlength=\"50\" md-asterisk=\"\" name=\"txtEmail\" ng-model=\"page.model.reg.txtEmail\" ng-pattern=\"/^.+@.+\\..+$/\" ng-blur=\"page.model.valueExists('email',0,page.model.reg.txtEmail);\">\r" +
    "\n" +
    "                                    <div ng-messages=\"regForm.txtEmail.$error\" role=\"alert\">\r" +
    "\n" +
    "                                        <div ng-if=\"regForm.txtEmail.$invalid && (regForm.$submitted)\" ng-message-exp=\"['required', 'pattern']\">\r" +
    "\n" +
    "                                            This is required and enter valid e-mail address.\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                                <md-input-container class=\"col-lg-3\">\r" +
    "\n" +
    "                                    <label class=\"droplabel\">Posted by</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlpostedby\" md-asterisk=\"\" ng-model=\"page.model.reg.ddlpostedby\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.postedby\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"regForm.ddlpostedby.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"regForm.ddlpostedby.$invalid && (regForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-lg-3\">\r" +
    "\n" +
    "                                    <md-input-container class=\"col-lg-4\" style=\"width:33%;\">\r" +
    "\n" +
    "                                        <label>Date</label>\r" +
    "\n" +
    "                                        <md-select name=\"ddlDD\" md-asterisk=\"\" ng-model=\"page.model.reg.ddlDD\" required=\"\" ng-change=\"page.model.dayChange(page.model.reg,'day');\">\r" +
    "\n" +
    "                                            <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.dateArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                        </md-select>\r" +
    "\n" +
    "                                        <div class=\"errors\" ng-messages=\"regForm.ddlDD.$error\">\r" +
    "\n" +
    "                                            <div ng-if=\"regForm.ddlDD.$invalid && (regForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </md-input-container>\r" +
    "\n" +
    "                                    <md-input-container class=\"col-lg-4\" style=\"width:33%;\">\r" +
    "\n" +
    "                                        <label>Month</label>\r" +
    "\n" +
    "                                        <md-select name=\"ddlMM\" md-asterisk=\"\" ng-model=\"page.model.reg.ddlMM\" required=\"\" ng-change=\"page.model.dayChange(page.model.reg,'month');\">\r" +
    "\n" +
    "                                            <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.monthArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                        </md-select>\r" +
    "\n" +
    "                                        <div class=\"errors\" ng-messages=\"regForm.ddlMM.$error\">\r" +
    "\n" +
    "                                            <div ng-if=\"regForm.ddlMM.$invalid && (regForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <md-input-container class=\"col-lg-4\" style=\"width:34%;\">\r" +
    "\n" +
    "                                        <label>Year</label>\r" +
    "\n" +
    "                                        <md-select md-asterisk=\"\" name=\"ddlYear\" ng-model=\"page.model.reg.ddlYear\" required=\"\">\r" +
    "\n" +
    "                                            <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.yearArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                        </md-select>\r" +
    "\n" +
    "                                        <div class=\"errors\" ng-messages=\"regForm.ddlYear.$error\">\r" +
    "\n" +
    "                                            <div ng-if=\"regForm.ddlYear.$invalid && (regForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <md-input-container class=\"col-lg-3\">\r" +
    "\n" +
    "                                    <label>Religion</label>\r" +
    "\n" +
    "                                    <md-select md-asterisk=\"\" name=\"ddlreligion\" ng-model=\"page.model.reg.ddlreligion\" required=\"\" ng-change=\"page.model.changeBind(page.model.reg.ddlreligion,page.model.reg.ddlmothertongue);\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.religion\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"regForm.ddlreligion.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"regForm.ddlreligion.$invalid && (regForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                                <md-input-container class=\"col-lg-3\">\r" +
    "\n" +
    "                                    <label>Mother Tongue</label>\r" +
    "\n" +
    "                                    <md-select md-asterisk=\"\" name=\"ddlmothertongue\" ng-model=\"page.model.reg.ddlmothertongue\" required=\"\" ng-change=\"page.model.changeBind(page.model.reg.ddlreligion,page.model.reg.ddlmothertongue);\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.Mothertongue\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"regForm.ddlmothertongue.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"regForm.ddlmothertongue.$invalid && (regForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                                <md-input-container class=\"col-lg-3\">\r" +
    "\n" +
    "                                    <label>Caste</label>\r" +
    "\n" +
    "                                    <md-select md-asterisk=\"\" name=\"ddlcaste\" ng-model=\"page.model.reg.ddlcaste\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.casteArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"regForm.ddlcaste.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"regForm.ddlcaste.$invalid && (regForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <br>\r" +
    "\n" +
    "                            <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <md-input-container class=\"col-lg-3\">\r" +
    "\n" +
    "                                    <label>Residing At</label>\r" +
    "\n" +
    "                                    <md-select md-asterisk=\"\" name=\"ddlcountry\" ng-model=\"page.model.reg.ddlcountry\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.Country\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"regForm.ddlcountry.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"regForm.ddlcountry.$invalid && (regForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"col-lg-3\">\r" +
    "\n" +
    "                                    <md-input-container class=\"col-lg-4\" style=\"width: 50%;\">\r" +
    "\n" +
    "                                        <label>Country code</label>\r" +
    "\n" +
    "                                        <md-select md-asterisk=\"\" name=\"ddlmobilecountry\" ng-model=\"page.model.reg.ddlmobilecountry\" ng-required=\"mobilecountrycoderequired\">\r" +
    "\n" +
    "                                            <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.countryCode\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                        </md-select>\r" +
    "\n" +
    "                                        <div class=\"errors\" ng-messages=\"regForm.ddlmobilecountry.$error\">\r" +
    "\n" +
    "                                            <div ng-if=\"regForm.ddlmobilecountry.$invalid && (regForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <md-input-container class=\"md-block col-lg-4\" style=\"width:50%;\">\r" +
    "\n" +
    "                                        <label>Mobile number</label>\r" +
    "\n" +
    "                                        <input md-asterisk=\"\" maxlength=\"10\" ng-minlength=\"10\" ng-required=\"page.model.mobilenumberrequired\" md-no-asterisk=\"\" ng-pattern=\"/^[0-9]+$/\" name=\"txtMobileNo\" ng-model=\"page.model.reg.txtMobileNo\" ng-blur=\"page.model.valueExists('number',1,page.model.reg.txtMobileNo);\">\r" +
    "\n" +
    "                                        <div ng-messages=\"regForm.txtMobileNo.$error\">\r" +
    "\n" +
    "                                            <div ng-if=\"regForm.txtMobileNo.$invalid && (regForm.$submitted)\" ng-message-exp=\"['required', 'pattern','minlength']\">\r" +
    "\n" +
    "                                                This is required and enter only numbers(10 digits).\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <md-input-container class=\"col-lg-4\" style=\"width:33%;\">\r" +
    "\n" +
    "                                        <label>Land code</label>\r" +
    "\n" +
    "                                        <md-select name=\"ddllandcountry\" ng-model=\"page.model.reg.ddllandcountry\">\r" +
    "\n" +
    "                                            <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.countryCode\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                        </md-select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <md-input-container class=\"md-block col-lg-4\" style=\"width:33%;\">\r" +
    "\n" +
    "                                        <label>Area code</label>\r" +
    "\n" +
    "                                        <input maxlength=\"8\" name=\"txtArea\" ng-model=\"page.model.reg.txtArea\" ng-pattern=\"/^[0-9]+$/\">\r" +
    "\n" +
    "                                        <div ng-messages=\"regForm.txtArea.$error\">\r" +
    "\n" +
    "                                            <div ng-message=\"pattern\">\r" +
    "\n" +
    "                                                Enter only numbers.\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </md-input-container>\r" +
    "\n" +
    "                                    <md-input-container class=\"md-block col-lg-4\" style=\"width:34%;\">\r" +
    "\n" +
    "                                        <label>Landline number</label>\r" +
    "\n" +
    "                                        <input maxlength=\"8\" name=\"txtlandNum\" ng-model=\"page.model.reg.txtlandNum\" ng-pattern=\"/^[0-9]+$/\">\r" +
    "\n" +
    "                                        <div ng-messages=\"regForm.txtlandNum.$error\">\r" +
    "\n" +
    "                                            <div ng-message=\"pattern\">\r" +
    "\n" +
    "                                                Enter only numbers.\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </md-input-container>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
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
    "\r" +
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
    "    md-input-container.md-default-theme .md-input,\r" +
    "\n" +
    "    md-input-container .md-input {\r" +
    "\n" +
    "        color: rgba(0, 0, 0, 0.87);\r" +
    "\n" +
    "        border-color: rgba(31, 25, 25, 0.38);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .md-input-has-value label {\r" +
    "\n" +
    "        font-size: 17px !important;\r" +
    "\n" +
    "        color: rgba(48, 45, 45, 0.98) !important;\r" +
    "\n" +
    "        font-weight: 700 !important;\r" +
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
    "    md-select {\r" +
    "\n" +
    "        border-bottom: 1px solid #110404;\r" +
    "\n" +
    "        border-color: rgba(31, 25, 25, 0.45);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    md-select.md-default-theme .md-select-value.md-select-placeholder,\r" +
    "\n" +
    "    md-select .md-select-value.md-select-placeholder {\r" +
    "\n" +
    "        color: rgba(0, 0, 0, 0.65);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .register_page_main h4 {\r" +
    "\n" +
    "        color: #b10c0c;\r" +
    "\n" +
    "        font-size: 21px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .md-input-focused>md-select.ng-invalid.ng-touched .md-select-value {\r" +
    "\n" +
    "        color: rgb(221, 44, 0)!important;\r" +
    "\n" +
    "        border-bottom-color: rgb(221, 44, 0)!important;\r" +
    "\n" +
    "        font-size: 18px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*md-select.md-default-theme.ng-invalid.ng-touched .md-select-value,\r" +
    "\n" +
    "    md-select.ng-invalid.ng-touched .md-select-value {\r" +
    "\n" +
    "        color: rgb(221, 44, 0)!important;\r" +
    "\n" +
    "        border-bottom-color: rgb(221, 44, 0)!important;\r" +
    "\n" +
    "        font-size: 16px;\r" +
    "\n" +
    "    }*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme .md-select-value,\r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-has-value) md-select .md-select-value,\r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme .md-select-value.md-select-placeholder,\r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-has-value) md-select .md-select-value.md-select-placeholder {\r" +
    "\n" +
    "        color: rgb(63, 81, 181);\r" +
    "\n" +
    "        font-size: 18px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    md-select-menu.md-default-theme md-content md-option,\r" +
    "\n" +
    "    md-select-menu md-content md-option {\r" +
    "\n" +
    "        color: rgba(33, 33, 33, 0.87);\r" +
    "\n" +
    "        font-size: 13px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
  );


  $templateCache.put('app/regManagePhoto/index.html',
    "<!--md-select.md-default-theme.ng-invalid.ng-touched .md-select-value,\r" +
    "\n" +
    "    md-select.ng-invalid.ng-touched .md-select-value {\r" +
    "\n" +
    "        color: rgb(221, 44, 0)!important;\r" +
    "\n" +
    "        border-bottom-color: rgb(221, 44, 0)!important;\r" +
    "\n" +
    "        font-size: 16px;\r" +
    "\n" +
    "    }-->\r" +
    "\n" +
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
    "\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-lg-6\">\r" +
    "\n" +
    "                    <h6 style=\"font-size: 21px;\">Upload Your Recent Photos For Better Response</h6>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-lg-2\">\r" +
    "\n" +
    "                    <md-button class=\"md-raised md-warn md-hue-2\" href=\"dashboardpage\">skip this page</md-button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"dragzone\">\r" +
    "\n" +
    "                <div class=\"pics_selected_list_main clearfix\">\r" +
    "\n" +
    "                    <div class=\"pics_selected_list_main_lt clearfix\">\r" +
    "\n" +
    "                        <p class=\"clearfix\"><span>Upload Your Three Different Photos</span></p>\r" +
    "\n" +
    "                        <div id=\"dtimagephoto\" class=\"clearfix\" ng-repeat=\"item in page.model.manageArr\" style=\"width:33%;float:left;\">\r" +
    "\n" +
    "                            <div class=\"photos\">\r" +
    "\n" +
    "                                <div class=\"pics_selected_list_itemreg\">\r" +
    "\n" +
    "                                    <div ng-class=\"item.IsActive == 0 && item.PhotoName !== null?'cssMaskdiv clearfix':''\">\r" +
    "\n" +
    "                                        <img ng-model=\"page.model.imgPhotoName\" ng-src=\"{{item.ImageUrl}}\" />\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div class=\"pics_selected_list_item_ui clearfix\">\r" +
    "\n" +
    "                                        <div class=\"photos_icon\">\r" +
    "\n" +
    "                                            <!--<input type=\"image\" id=\"imgAdd\" alt=\"add\" ng-click=\"page.model.AddImage($index+1,item.Cust_Photos_ID,item.DisplayOrder,item.IsActive);\" ng-show=\"{{item.addButtonvisible}}\" />-->\r" +
    "\n" +
    "                                            <a href=\"javascript:void(0);\" ng-click=\"page.model.AddImage($index+1,item.Cust_Photos_ID,item.DisplayOrder,item.IsActive);\" ng-show=\"{{item.addButtonvisible}}\">\r" +
    "\n" +
    "                                                <ng-md-icon icon=\"add_a_photo\" style=\"fill:#665454\" size=\"25\">Add</ng-md-icon>\r" +
    "\n" +
    "                                            </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <a href=\"javascript:void(0);\" ng-show=\"{{item.IsMain==1?false:(item.PhotoName!=null?true:false)}}\" ng-click=\"page.model.DeleteImage(item.keyname,item.Cust_Photos_ID);\">\r" +
    "\n" +
    "                                                <ng-md-icon icon=\"delete\" style=\"fill:#665454\" size=\"25\">Delete</ng-md-icon>\r" +
    "\n" +
    "                                            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                                            <a href=\"javascript:void(0);\" class=\"set_pic\" ng-click=\"page.model.setAsProfilePic(item.Cust_Photos_ID);\" style=\"color:#665454;font-weight:bold;\" ng-show='{{item.IsMain==\"1\"?false:(item.PhotoName!=null?true:false) }}'>\r" +
    "\n" +
    "                                            Set as Profilepic\r" +
    "\n" +
    "                                            </a>\r" +
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
    "                                <md-radio-group layout=\"row\" ng-model=\"page.model.rbtProtectPassword\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\" ng-change=\"setPhotoPassword(rbtProtectPassword);\">\r" +
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
    "                    <a ID=\"phtoguide\" href=\"javascript:void(0);\" ng-click=\"page.model.redirectPage('PhotoGuideLines');\">Photo guidelines\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    <a ID=\"photofaq\" href=\"javascript:void(0);\" ng-click=\"page.model.redirectPage('Faqs');\">Photo faq’s\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    <a ID=\"photoupload\" href=\"javascript:void(0);\" ng-click=\"page.model.redirectPage('uploadTips');\">Photo upload tips\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                </div>\r" +
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
    "    \r" +
    "\n" +
    "    .md-input-focused>md-select.ng-invalid.ng-touched .md-select-value {\r" +
    "\n" +
    "        color: rgb(221, 44, 0)!important;\r" +
    "\n" +
    "        border-bottom-color: rgb(221, 44, 0)!important;\r" +
    "\n" +
    "        font-size: 18px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme .md-select-value,\r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-has-value) md-select .md-select-value,\r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme .md-select-value.md-select-placeholder,\r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-has-value) md-select .md-select-value.md-select-placeholder {\r" +
    "\n" +
    "        color: rgb(63, 81, 181);\r" +
    "\n" +
    "        font-size: 18px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
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
    "                    <form name=\"secregForm\" accessible-formreg novalidate role=\"form\" ng-submit=\"secregForm.$valid && page.model.secondRegSubmit(page.model.regsec);\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"reg_fields_entry clearfix\"><br>\r" +
    "\n" +
    "                            <div class=\"col-lg-12\">\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                    <label>Name</label>\r" +
    "\n" +
    "                                    <input readonly md-no-asterisk=\"\" name=\"LabelName\" ng-model=\"page.model.regsec.LabelName\">\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>Marital Status</label>\r" +
    "\n" +
    "                                    <md-select ng-focus=\"true\" autofocus name=\"rbtnmarital\" ng-model=\"page.model.regsec.rbtnmarital\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.MaritalStatus\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.rbtnmarital.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.rbtnmarital.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>Complexion</label>\r" +
    "\n" +
    "                                    <md-select name=\"rbtncomplexion\" ng-model=\"page.model.regsec.rbtncomplexion\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.Complexion\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.rbtncomplexion.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.rbtncomplexion.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-lg-12\">\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>Physically Challenged</label>\r" +
    "\n" +
    "                                    <md-select name=\"rbtnphysicalstatus\" ng-model=\"page.model.regsec.rbtnphysicalstatus\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.PhysicalStatus\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.rbtnphysicalstatus.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.rbtnphysicalstatus.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>Height</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlHeight\" ng-model=\"page.model.regsec.ddlHeight\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.height\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlHeight.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.ddlHeight.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>Born Citizenship</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlBornCitizenship\" ng-model=\"page.model.regsec.ddlBornCitizenship\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.Country\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlBornCitizenship.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.ddlBornCitizenship.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                            <!--<hr>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"wellOverride\">Education details</div>\r" +
    "\n" +
    "                            <br>\r" +
    "\n" +
    "                            <div class=\"col-lg-12\">\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>Education category</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlEduCategory\" ng-model=\"page.model.regsec.ddlEduCategory\" required=\"\" ng-change=\"page.model.changeBind('educat',page.model.regsec.ddlEduCategory)\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.educationcategory\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlEduCategory.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.ddlEduCategory.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>Group</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlEduGroup\" ng-model=\"page.model.regsec.ddlEduGroup\" required=\"\" ng-change=\"page.model.changeBind('edugroup',page.model.regsec.ddlEduGroup)\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.edugroup\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlEduGroup.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.ddlEduGroup.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>Specialization</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlEduSpecialisation\" ng-model=\"page.model.regsec.ddlEduSpecialisation\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.eduSplArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlEduSpecialisation.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.ddlEduSpecialisation.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"control-group col-lg-12\">\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-12\">\r" +
    "\n" +
    "                                    <label>Education merits</label>\r" +
    "\n" +
    "                                    <textarea maxlength=\"500\" style=\"height: 87px;\r" +
    "\n" +
    "                                  border: 0.5px solid rgba(31, 25, 25, 0.38);\" rows=\"2\" md-no-asterisk=\"\" name=\"txtEducationMerits\" ng-model=\"page.model.regsec.txtEducationMerits\"></textarea>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                            <div class=\"wellOverride\">profession details</div>\r" +
    "\n" +
    "                            <br>\r" +
    "\n" +
    "                            <div class=\"col-lg-12\">\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>Employed in</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlEmployedIn\" ng-model=\"page.model.regsec.ddlEmployedIn\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.ProfCatgory\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlEmployedIn.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.ddlEmployedIn.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>Profession Group</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlProfessionalGroup\" ng-model=\"page.model.regsec.ddlProfessionalGroup\" required=\"\" ng-change=\"page.model.changeBind('profGroup',page.model.regsec.ddlProfessionalGroup)\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.ProfGroup\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlProfessionalGroup.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.ddlProfessionalGroup.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>Profession</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlProfession\" ng-model=\"page.model.regsec.ddlProfession\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.professionArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlProfession.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.ddlProfession.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-lg-12\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                    <label>Company name</label>\r" +
    "\n" +
    "                                    <input maxlength=\"100\" md-no-asterisk=\"\" name=\"txtCompanyName\" ng-model=\"page.model.regsec.txtCompanyName\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>Currency</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlcurrency\" ng-model=\"page.model.regsec.ddlcurrency\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.currency\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                    <label>Monthly Salary</label>\r" +
    "\n" +
    "                                    <input maxlength=\"7\" md-no-asterisk=\"\" onkeyup=\"this.value=this.value.replace(/[^\\d\\.\\-]/g,'');\" name=\"txtSalary\" ng-model=\"page.model.regsec.txtSalary\" ng-pattern=\"/^[0-9]+$/\">\r" +
    "\n" +
    "                                    <div ng-messages=\"secregForm.txtSalary.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.txtSalary.$invalid\" ng-message-exp=\"['pattern']\">\r" +
    "\n" +
    "                                            enter only numbers.\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <md-input-container class=\"md-block col-lg-12\">\r" +
    "\n" +
    "                                <label>Occupation details</label>\r" +
    "\n" +
    "                                <textarea maxlength=\"500\" rows=\"2\" style=\"height: 87px;\r" +
    "\n" +
    "                                  border: 0.5px solid rgba(31, 25, 25, 0.38);\" md-no-asterisk=\"\" name=\"txtOcccupationDetails\" ng-model=\"page.model.regsec.txtOcccupationDetails\"></textarea>\r" +
    "\n" +
    "                            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                            <div class=\"wellOverride\">Candidate location details</div>\r" +
    "\n" +
    "                            <br>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"col-lg-12\">\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>Country living in</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlCountryLivingIn\" ng-model=\"page.model.regsec.ddlCountryLivingIn\" ng-change=\"page.model.changeBind('Country',page.model.regsec.ddlCountryLivingIn)\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.Country\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlCountryLivingIn.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.ddlCountryLivingIn.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>State</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlStatelivingIn\" ng-model=\"page.model.regsec.ddlStatelivingIn\" required=\"\" ng-change=\"page.model.changeBind('state',page.model.regsec.ddlStatelivingIn,page.model.regsec.ddlCountryLivingIn)\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.stateArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlStatelivingIn.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.ddlStatelivingIn.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\" ng-if=\"page.model.regsec.ddlCountryLivingIn==1\">\r" +
    "\n" +
    "                                    <label>District</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlDistricLivingIn\" ng-model=\"page.model.regsec.ddlDistricLivingIn\" required=\"\" ng-change=\"page.model.changeBind('district',page.model.regsec.ddlDistricLivingIn)\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.districtArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlDistricLivingIn.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.ddlDistricLivingIn.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <label>City</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlcityLivingIn\" ng-model=\"page.model.regsec.ddlcityLivingIn\" required=\"\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.cityArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                    <div class=\"errors\" ng-messages=\"secregForm.ddlcityLivingIn.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.ddlcityLivingIn.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container flex=\"50\" class=\"col-lg-4\" ng-hide=\"page.model.regsec.ddlBornCitizenship==page.model.regsec.ddlCountryLivingIn\">\r" +
    "\n" +
    "                                    <label>Visa status</label>\r" +
    "\n" +
    "                                    <md-select name=\"ddlVisaStatus\" ng-model=\"page.model.regsec.ddlVisaStatus\">\r" +
    "\n" +
    "                                        <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.visastatus\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                    </md-select>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container class=\"col-lg-4\" style=\"padding-right: 0px;margin-left: 0px;\" ng-hide=\"page.model.regsec.ddlBornCitizenship==page.model.regsec.ddlCountryLivingIn\">\r" +
    "\n" +
    "                                    <label>Residing since</label>\r" +
    "\n" +
    "                                    <md-datepicker ng-model=\"page.model.regsec.from\" md-min-date=\"minDate\" md-max-date=\"maxDate\">\r" +
    "\n" +
    "                                    </md-datepicker>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                            <div class=\"wellOverride\">Family details</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <br>\r" +
    "\n" +
    "                            <div class=\"col-lg-12\">\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                    <label>Father Name</label>\r" +
    "\n" +
    "                                    <input maxlength=\"100\" required=\"\" md-asterisk=\"\" name=\"txtFatherName\" ng-model=\"page.model.regsec.txtFatherName\">\r" +
    "\n" +
    "                                    <div ng-messages=\"secregForm.txtFatherName.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.txtFatherName.$invalid && (secregForm.$submitted)\" ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                    <label>Father’s education</label>\r" +
    "\n" +
    "                                    <input maxlength=\"150\" md-no-asterisk=\"\" name=\"txtFatherEducation\" ng-model=\"page.model.regsec.txtFatherEducation\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                    <label>Father’s profession</label>\r" +
    "\n" +
    "                                    <input maxlength=\"200\" md-no-asterisk=\"\" name=\"txtFatherProfession\" ng-model=\"page.model.regsec.txtFatherProfession\">\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-lg-12\">\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                    <label>Mother’s name</label>\r" +
    "\n" +
    "                                    <input maxlength=\"100\" required=\"\" md-asterisk=\"\" name=\"txtMotherName\" ng-model=\"page.model.regsec.txtMotherName\">\r" +
    "\n" +
    "                                    <div ng-messages=\"secregForm.txtMotherName.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.txtMotherName.$invalid && (secregForm.$submitted)\" ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                    <label>Mother’s education</label>\r" +
    "\n" +
    "                                    <input maxlength=\"150\" md-no-asterisk=\"\" name=\"txtMotherEducation\" ng-model=\"page.model.regsec.txtMotherEducation\">\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                    <label>Mother’s profession</label>\r" +
    "\n" +
    "                                    <input maxlength=\"200\" md-no-asterisk=\"\" name=\"txtMotherprofession\" ng-model=\"page.model.regsec.txtMotherprofession\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-lg-12\">\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                    <label>Father’s Native place</label>\r" +
    "\n" +
    "                                    <input maxlength=\"100\" md-no-asterisk=\"\" name=\"txtfathernative\" ng-model=\"page.model.regsec.txtfathernative\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-input-container class=\"md-block col-lg-4\">\r" +
    "\n" +
    "                                    <label>Mother’s Native place</label>\r" +
    "\n" +
    "                                    <input maxlength=\"100\" md-no-asterisk=\"\" name=\"txtmothernative\" ng-model=\"page.model.regsec.txtmothernative\">\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                                <div class=\"col-lg-4\">\r" +
    "\n" +
    "                                    <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                        <label>No of Brothers</label>\r" +
    "\n" +
    "                                        <md-select name=\"ddlBrothers\" ng-model=\"page.model.regsec.ddlBrothers\" required=\"\">\r" +
    "\n" +
    "                                            <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.noOfsibblingsArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                        </md-select>\r" +
    "\n" +
    "                                        <div class=\"errors\" ng-messages=\"secregForm.ddlBrothers.$error\">\r" +
    "\n" +
    "                                            <div ng-if=\"secregForm.ddlBrothers.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <md-input-container flex=\"50\" class=\"col-lg-4\">\r" +
    "\n" +
    "                                        <label>No of Sisters</label>\r" +
    "\n" +
    "                                        <md-select name=\"ddlSisters\" ng-model=\"page.model.regsec.ddlSisters\" required=\"\">\r" +
    "\n" +
    "                                            <md-option ng-value=\"h.value\" ng-repeat=\"h in page.model.noOfsibblingsArr\">{{h.label}} </md-option>\r" +
    "\n" +
    "                                        </md-select>\r" +
    "\n" +
    "                                        <div class=\"errors\" ng-messages=\"secregForm.ddlSisters.$error\">\r" +
    "\n" +
    "                                            <div ng-if=\"secregForm.ddlSisters.$invalid && (secregForm.$submitted)\" ng-message=\"required\">Required</div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </md-input-container>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"clearfix\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <div class=\"wellOverride\">About yourself</div>\r" +
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
    "                                <md-input-container class=\"md-block\" style=\"margin: 28px 0px 1px 0px\">\r" +
    "\n" +
    "                                    <label>About yourself</label>\r" +
    "\n" +
    "                                    <textarea style=\"height: 87px;\r" +
    "\n" +
    "                                  border: 0.5px solid rgba(31, 25, 25, 0.38);\" maxlength=\"1000\" rows=\"3\" ng-minlength=\"50\" required=\"\" md-asterisk=\"\" name=\"txtabouturself\" ng-model=\"page.model.regsec.txtabouturself\"></textarea>\r" +
    "\n" +
    "                                    <div ng-messages=\"secregForm.txtabouturself.$error\">\r" +
    "\n" +
    "                                        <div ng-if=\"secregForm.txtabouturself.$invalid && (secregForm.$submitted)\" ng-message-exp=\"['required', 'minlength']\">\r" +
    "\n" +
    "                                            This is required and enter Minimum 50 characters\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <p><span>Note: </span>Do not mention any contact information <b>phone numbers, email id’s</b> or your profile may be rejected.</p>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"clear\"></div>\r" +
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
    "    md-input-container.md-default-theme .md-input,\r" +
    "\n" +
    "    md-input-container .md-input {\r" +
    "\n" +
    "        color: rgba(0, 0, 0, 0.87);\r" +
    "\n" +
    "        border-color: rgba(31, 25, 25, 0.38);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .md-input-has-value label {\r" +
    "\n" +
    "        font-size: 17px !important;\r" +
    "\n" +
    "        color: rgba(48, 45, 45, 0.98) !important;\r" +
    "\n" +
    "        font-weight: 700 !important;\r" +
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
    "    \r" +
    "\n" +
    "    md-select {\r" +
    "\n" +
    "        border-bottom: 1px solid #110404;\r" +
    "\n" +
    "        border-color: rgba(31, 25, 25, 0.45);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    md-select.md-default-theme .md-select-value.md-select-placeholder,\r" +
    "\n" +
    "    md-select .md-select-value.md-select-placeholder {\r" +
    "\n" +
    "        color: rgba(0, 0, 0, 0.65);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .register_page_main h4 {\r" +
    "\n" +
    "        color: #b10c0c;\r" +
    "\n" +
    "        font-size: 21px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .md-input-focused>md-select.ng-invalid.ng-touched .md-select-value {\r" +
    "\n" +
    "        color: rgb(221, 44, 0)!important;\r" +
    "\n" +
    "        border-bottom-color: rgb(221, 44, 0)!important;\r" +
    "\n" +
    "        font-size: 18px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    /*md-select.md-default-theme.ng-invalid.ng-touched .md-select-value,\r" +
    "\n" +
    "    md-select.ng-invalid.ng-touched .md-select-value {\r" +
    "\n" +
    "        color: rgb(221, 44, 0)!important;\r" +
    "\n" +
    "        border-bottom-color: rgb(221, 44, 0)!important;\r" +
    "\n" +
    "        font-size: 16px;\r" +
    "\n" +
    "    }*/\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme .md-select-value,\r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-has-value) md-select .md-select-value,\r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-default-theme .md-select-value.md-select-placeholder,\r" +
    "\n" +
    "    md-input-container.md-input-focused:not(.md-input-has-value) md-select .md-select-value.md-select-placeholder {\r" +
    "\n" +
    "        color: rgb(63, 81, 181);\r" +
    "\n" +
    "        font-size: 18px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    md-select-menu.md-default-theme md-content md-option,\r" +
    "\n" +
    "    md-select-menu md-content md-option {\r" +
    "\n" +
    "        color: rgba(33, 33, 33, 0.87);\r" +
    "\n" +
    "        font-size: 13px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
  );


  $templateCache.put('templates/SlideHeader.html',
    "<div class=\"row\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"col-lg-6 col-md-6 col-xs-8 col-sm-8\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <label id=\"lbltotalrecords\">Total Records :</label>\r" +
    "\n" +
    "        <label id=\"lblcurrentprofile\"></label> &nbsp;of&nbsp;\r" +
    "\n" +
    "        <label id=\"lblcurSlide\"></label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-lg-4 col-md-4 col-xs-4 col-sm-4\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"col-lg-6 col-md-6 col-xs-6 col-sm-6\">\r" +
    "\n" +
    "            <label>Viewed</label>&nbsp;<label id=\"lnkLastSlide\" style=\"color: blue;\">1</label>&nbsp;<label>Profiles</label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-lg-1 col-md-1 col-xs-1 col-sm-1\">\r" +
    "\n" +
    "            <input type=\"text\" id=\"txtGotoVal\" class=\"form-control\" style=\"width: 50px; height: 24px; margin-left: -20px;\" onchange=\"gotoSlide(this);\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-lg-2\" ng-if=\"slidetype==='popup'\">\r" +
    "\n" +
    "        <a href=\"javascript:void(0);\">\r" +
    "\n" +
    "            <a class=\"pull-right\" size=\"25\">close</a>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );

}]);
