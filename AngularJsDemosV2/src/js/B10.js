require.config({
    baseUrl: "js",
    paths: {
        angular: "../libs/angular/angular",
        angularroute: "../libs/angular-route/angular-route",
        domReady: "../libs/domReady"
    }, 
    priority: [
        "angular",
        "angularroute"
    ],
    shim: {
        angular: {
            exports: "angular"
        },
        angularroute: {
            deps: ['angular'],
            exports: "angularroute"
        }
    }
});

require(['angular', 'domReady', 'controllers/B10Controller'], function (angular, domReady, B10Controller) {
    'use strict';
    
    domReady(function () {
        angular.module('B10', ['B10Controller']);
        angular.bootstrap(document, ['B10']);
    });
});