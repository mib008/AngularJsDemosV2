require.config({
    baseUrl: "js",
    paths: {
        angular: "../libs/angular/angular",
        jquery: "../bower_components/jquery/dist/jquery"
        // domReady: "../libs/domReady"
    },
    shim: {
        angular: {
            deps: ["jquery"],
            exports: "angular"
        }
    }
});

require(['angular', 'controllers/indexController'], function (angular, indexController) {
    'use strict';
    
    // define route
    // app.config(['$routeProvider', function ($routeProvider) {}]);
    
    // TODO one-page-app modules dependcies
    // TODO muti-page-app modules dependcies

    console.log($);
    
    
    //domReady(function () {
    //    angular.module('index', ['indexController']);
    
    //    angular.bootstrap(document, ['index']);
    //});
    
    // deps: ["jquery"]
    angular.element('html').ready(function () {
        angular.module('index', ['indexController']);
        
        angular.bootstrap(document, ['index']);
    });

    //angular.module('MyApp', ['controllers']);
});
