define(['angular', 'E03/Sync1Amd', 'E03/Sync2Amd'], function (angular, task1, task2) {
    "use strict";
    
    //TODO 为两个模块分辨创建路由config， 测试
    
    angular.module('subModule', ['ngRoute']).controller('E03Controller', ['$scope', function ($scope) {
            $scope.item = "foobar";
            
            $scope.Sync1 = function () {
                var task = new task1();
                
                task.createTask('task1', function () {
                    console.log("task1 start.");
                    var timer = setInterval(function () {
                        clearInterval(timer);
                        console.log("task1 end.");
                        task.doNextTask("aa");
                    }, 5000);
                });
                
                task.createTask('task2', function () {
                    console.log("task2 start.");
                    var timer = setInterval(function () {
                        clearInterval(timer);
                        console.log("task2 end.");
                        task.doNextTask("bb");
                    }, 5000);
                });
                
                task.createTask('task3', function () {
                    console.log("task3 start.");
                    var timer = setInterval(function () {
                        clearInterval(timer);
                        console.log("task3 end.");
                        task.doNextTask("bb");
                    }, 5000);
                });
                
                task.runSync(['task2', 'task3', 'task1']);
            };
            
            $scope.Sync2 = function () {
                var task = new task2();
                
                task.createTask('task1', function () {
                    console.log("task1 start.");
                    var timer = setInterval(function () {
                        clearInterval(timer);
                        console.log("task1 end.");
                        task.doNextTask("aa");
                    }, 5000);
                });
                
                task.createTask('task2', function () {
                    console.log("task2 start.");
                    var timer = setInterval(function () {
                        clearInterval(timer);
                        console.log("task2 end.");
                        task.doNextTask("bb");
                    }, 5000);
                });
                
                task.createTask('task3', function () {
                    console.log("task3 start.");
                    var timer = setInterval(function () {
                        clearInterval(timer);
                        console.log("task3 end.");
                        task.doNextTask("bb");
                    }, 5000);
                });
                
                task.runSync(['task2', 'task3', 'task1']);
            };
        }]);
});