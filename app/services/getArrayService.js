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