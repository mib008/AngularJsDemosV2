require.config({
    baseUrl: "js",
    paths: {
        angular: "../bower_components/angular/angular.min",
        ngRoute: "../bower_components/angular-route/angular-route.min",
        domReady: "../libs/domReady"
    },
    shim: {
        angular: {
            exports: "angular"
        },
        ngRoute: {
            depts: "angular"
        }
    }
});

require(['angular', 'domReady', 'ngRoute', 'E03/E03Controller'], function (angular, domReady) {
    'use strict';

    angular.module('E03', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view', {
            templateUrl: 'views/E03/E03View1.html'
        });
    }]);
    
    domReady(function () {
        // angular.module('A01', ['controllers']);    
        
        angular.bootstrap(document, ['E03', 'subModule']);
    });
});