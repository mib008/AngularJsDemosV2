require.config({
    // baseUrl: "../../",
    paths: {
        jquery: "../../bower_components/jquery/dist/jquery",
        // angular
        angular: "../../bower_components/angular/angular",
        
        // angular-ui
        "angular-ui-router": "../../bower_components/angular-ui-router/release/angular-ui-router",
        
        // angularAMD
        angularAmd: "../../bower_components/angularAMD/angularAMD",
        ngload: "../../bower_components/angularAMD//ngload"
    },
    shim: {
        // angular
        angular: { exports: "angular" },
        
        // angular-ui
        "angular-ui-router": ["angular"],
        
        // angularAMD
        angularAmd: ["angular"],
        ngload: ["angularAmd"]
    },
    deps: ['e08']
});

//// bootstrap
//define(["angular", "angularAmd", "angular-ui-router", "e08", "E08Controller"], function (angular, angularAmd, uiRouter, e08) {
    
    
    
//    // bootstrap the app manually
//    //angular.element(document.getElementsByTagName('html')[0]).ready(function () {
//    //    angular.bootstrap(document, e08);
//    //});
//});