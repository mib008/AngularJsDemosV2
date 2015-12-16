define(['angular'], function (angular) {
    "use strict";
    
    var controllerModule = angular.module('indexController', []);
    
    controllerModule.controller('indexController', ['$scope', '$http', function ($scope, $http) {
            
            $http.get('/service/index_menu_service').success(function (data, status, headers, config) {
                $scope.pages = data;
            });
            
            $scope.pageFilter = function (tag) {
                return function (item) {
                    if (tag) {
                        return item.name.match("^" + tag);
                    } else {
                        return true;
                    }
                };
            };
        }]);
    
    return controllerModule;
});