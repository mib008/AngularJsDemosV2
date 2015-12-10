define(['angular'], function (angular) {
    "use strict";

    var controllerModule = angular.module('controllers', []);
    
    controllerModule.controller('A01controller', ['$scope', '$http', function ($scope, $http) {
            
            //$http.get('../datas/dataChs.json').success(
            //    function (data) {
            //        data["web"] = window.location.href;
                    
            //        $scope.data = data;
            //    }
            //);
            
            //$scope.SelectLanguage = function (language) {
            //    var url;
                
            //    if (language === "en-US") {
            //        url = '../datas/dataEnUS.json';
            //    } else if (language === "ja-JP") {
            //        url = '../datas/dataJaJP.json';
            //    } else {
            //        url = '../datas/dataChs.json';
            //    }
                
            //    $http.get(url).success(
            //        function (data) {
            //            data["web"] = window.location.href;
                        
            //            $scope.data = data;
            //        }
            //    );
            //};
        }]);
    
    return controllerModule;
});