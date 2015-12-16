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

require(['angular', 'domReady', 'controllers/E01Controller'], function (angular, domReady, E01Controller) {
    'use strict';
    
    
    domReady(function () {
        angular.module('E01', ['E01Controller']);
        
        angular.bootstrap(document, ['E01']);
    });
});