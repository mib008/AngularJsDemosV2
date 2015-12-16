require.config({
    baseUrl: "js",
    paths: {
        angular: "../libs/angular/angular",
        domReady: "../libs/domReady"
    },
    shim: {
        angular: {
            exports: "angular"
        }
    }
});

require(['angular', 'domReady', 'controllers/indexController'], function (angular, domReady, indexController) {
    'use strict';

    // define route
    // app.config(['$routeProvider', function ($routeProvider) {}]);
    
    // TODO one-page-app modules dependcies
    // TODO muti-page-app modules dependcies
    


    domReady(function () {
        angular.module('index', ['indexController']);

        angular.bootstrap(document, ['index']);
    });

    //angular.module('MyApp', ['controllers']);
});
