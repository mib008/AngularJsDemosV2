//define(["angular", "angularAmd", "angular-ui-router"], function (angular, angularAmd, uiRouter) {
//    var app = angular.module("e08", []);
//    //app.config(function ($routeProvider) {
//    //    //$routeProvider.when("/home", angularAMD.route({
//    //    //    templateUrl: 'views/home.html', controller: 'HomeCtrl',
//    //    //    controllerUrl: 'ctrl/home'
//    //    //}))
//    //});
//    return angularAmd.bootstrap(app);
//});


define(["jquery", "angular", 'angularAmd', 'angular-ui-router'], function (jquery, angular, angularAmd, uiRouter) {
    'use strict';
    var app = angular.module('e08', ['ui.router']);
    
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
           
        }]).run(['$rootScope', '$location', '$injector', function ($rootScope, $location, $injector) {
            
         
        }]);
    
    require(['controller/E08Controller'], function () {
        angularAmd.bootstrap(app);
    });
});