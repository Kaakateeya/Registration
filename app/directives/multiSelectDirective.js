// AngularJS: 1.3.15
// bootstrap-multiselect: 0.9.6
//var statticdata=require('./staticArrayBindings.json');
regApp.directive('multiselectdropdownreg', ['arrayConstantsreg', 'SelectBindService', function(cons, service) {
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