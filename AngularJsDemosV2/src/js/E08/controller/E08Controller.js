
// http://es6.ruanyifeng.com/#docs/let

define(["angular"], function (angular) {
    'use strict';
    
    angular.module('e08').controller('E08Controller', ["$scope", "$state", function ($scope, $state) {
            
            var intiView = function () {
                $scope.item = "AAAA";
                
                $scope.vm = {};
                
                //$scope.vm.__defineSetter__('item', function (value) {
                    
                //    console.log("$scope.vm.item value changed from %s to %s", this.val, value);
                    
                //    this.val = value;
                //});
                //$scope.vm.__defineGetter__('item', function () { return this.val });
                
                //$scope.vm.item = "init value";
                
                $scope.vm.__defineSetter__('chapterList', function (value) {
                    if (value && value instanceof Array) {
                        value.forEach(function(item, index) {
                            item.viewState = item.source;

                            $state.state(item.source, {
                                url: "/" + item.source,
                                templateUrl: "views/E08/" + item.source + ".html"
                            });
                        });
                    }
                    
                    

                    this.val = value;
                });
                $scope.vm.__defineGetter__('chapterList', function () { return this.val });


                $scope.chapterList = [
                    { title : "let和const命令", source: "chapter02" }
                ];

            }();
            
            
            
            
            
            
        }]);
});



