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
    "    <div class=\"regmain\">\r" +
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
    "            <a class=\"skip_button\" href=\"#/registration/upgradeMemberShip\">skip this page</a>\r" +
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
    "    <a class=\"skip_button pull-right\" OnClick=\"skipreg_Click\" href=\"#/mobileverf\">Complete My Registration </a>\r" +
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
    "                                    <td class=\"pack_heading2\">\r" +
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
    "                                        <img src=\"{{payment.Ppath}}\" ng-hide=\"payment.MembershipName=='Services & Features'?true:false\" />\r" +
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
    "                                        <img ng-hide=\"payment.MembershipName=='Services & Features'?true:false\" src='{{payment.Ppluspath}}' />\r" +
    "\n" +
    "                                        <label ng-hide=\"payment.MembershipName=='Services & Features'?false:true\">Senior Relationship Manager</label>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                                <tr>\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "                                        <img src=\"src/images/icon_tick_mark.png\" ng-hide=\"payment.MembershipName=='Services & Features'?true:false\" />\r" +
    "\n" +
    "                                        <label ng-hide=\"payment.MembershipName=='Services & Features'?false:true\">Express Interest</label>\r" +
    "\n" +
    "                                    </td>\r" +
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
    "        height: 580px;\r" +
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
    "    td.pack_heading2 {\r" +
    "\n" +
    "        text-transform: uppercase;\r" +
    "\n" +
    "        color: #000 !important;\r" +
    "\n" +
    "        font-size: 18px !important;\r" +
    "\n" +
    "        line-height: 32px !important;\r" +
    "\n" +
    "        font-weight: 700;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
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
    "                                <textarea maxlength=\"500\" md-no-asterisk=\"\" name=\"txtEducationMerits\" ng-model=\"regsec.txtEducationMerits\"></textarea>\r" +
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
    "                            <input maxlength=\"7\" md-no-asterisk=\"\" name=\"txtSalary\" ng-model=\"regsec.txtSalary\">\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container class=\"md-block span12\">\r" +
    "\n" +
    "                            <label>Occupation details</label>\r" +
    "\n" +
    "                            <textarea maxlength=\"500\" md-no-asterisk=\"\" name=\"txtOcccupationDetails\" ng-model=\"regsec.txtOcccupationDetails\"></textarea>\r" +
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
    "                                <textarea maxlength=\"1000\" ng-minlength=\"50\" required=\"\" md-asterisk=\"\" name=\"txtabouturself\" ng-model=\"regsec.txtabouturself\"></textarea>\r" +
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
    "    \r" +
    "\n" +
    "    textarea {\r" +
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
    "<div class=\"header_inner\" id=\"divInnerMaster\" ng-controller='headctrl'>\r" +
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
