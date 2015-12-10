require.config({
    baseUrl: ".",
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

require(['angular', 'domReady', 'js/controllers/A01controller'], function (angular, domReady, A01controller) {
    'use strict';
    
    
    domReady(function () {
        // angular.module('A01', ['controllers']);    
        angular.module('A01', []);

        angular.bootstrap(document, ['A01']);
    });
});