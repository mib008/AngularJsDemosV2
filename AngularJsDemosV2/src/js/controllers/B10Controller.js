define(['angular', 'angularroute'], function (angular, angularroute) {
    "use strict";
    
    const messages = [
        { id: 0, subject: "subjectAAA", sender: "senderAAA@A.com", tag: "A01" },
        { id: 1, subject: "subjectBBB", sender: "senderBBB@B.com", tag: "B01" },
        { id: 2, subject: "subjectCCC", sender: "senderCCC@C.com", tag: "C01" },
        { id: 3, subject: "subjectDDD", sender: "senderDDD@D.com", tag: "D01" }
    ];
    
    var module = angular.module('B10', ['ngRoute']);

    console.log("angularroute value:" + angularroute);
    
    module.config(function ($routeProvider) {
        $routeProvider.when('/', {
            controller: function ($scope) {
                $scope.messages = messages;
            },
            templateUrl: 'views/B10/list.html'
        }).when('/view/:id', {
            controller: function ($scope, $routeParams) {
                $scope.message = messages[$routeParams.id];
            },
            templateUrl: 'views/B10/detail.html'
        }).otherwise({
            redirectTo: '/'
        });
    });
    
    module.controller('B10Controller', ['$scope', '$http', function ($scope, $http) {
            
            //$http.get('../datas/dataChs.json').success(
            //    function (data) {
            //        data["web"] = window.location.href;
                    
            //        $scope.data = data;
            //    }
            //);
            
            //$scope.SelectLanguage = function (language) {
            //    var url;
                
            //    if (language === "en-US") {
            // 
            //    url = '../datas/dataEnUS.json';
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
    
    // return module;
});