define(['angular'], function (angular) {
    "use strict";
    
    var ecmaFuncs = function () {
        // http://kangax.github.io/compat-table/es6/
        
        // http://javascript.ruanyifeng.com/advanced/ecmascript6.html
        
        // IIFE http://www.cnblogs.com/zichi/p/4401755.html
        
        function testButton(arg) {
            alert("TEST arguments:" + arg);
        };
        
        var funcs = {
            es6Functions: [],
            es5Functions: []
        };
        
        // 0 - Chapter 3.1
        funcs.es5Functions.push(function () {
            var a = [];
            for (var i = 0; i < 10; i++) {
                var c = i;
                a[i] = function () {
                    // console.log(c);
                    return c;
                };
            }
            // a[6](); // 9
            return a[6]();
        });
        
        funcs.es6Functions.push(function () {
            var a = [];
            for (var i = 0; i < 10; i++) {
                let c = i;
                a[i] = function () {
                    // console.log(c);
                    return c;
                };
            }
            // a[6](); // 6
            return a[6]();
        });
        
        // 1 - Chapter 3.2
        funcs.es5Functions.push(function () { });
        
        funcs.es6Functions.push(function () {
            const pi = 3.1415;
            const result = {};
            result.before = pi;
            // pi = 3;
            result.after = pi;
            return JSON.stringify(result);
        });
        
        // 2 - Chapter 3.3
        funcs.es5Functions.push(function () { });
        
        funcs.es6Functions.push(function () {
            var s = new Set();
            
            var result = [];
            
            s.add("1");
            s.add("2");
            s.add("2");
            // 注意“2”被加入了两次
            
            result.push(s.size);
            
            result.push(s.has("1")); // true
            result.push(s.has("2")); // true
            result.push(s.has("3")); // false
            
            s.delete("2");
            result.push(s.has("2")); // false
            
            
            return result;
        });
        
        return {
            test: testButton,
            command: funcs
        };
    };
    
    var controllerModule = angular.module('E01Controller', []);
    
    controllerModule.controller('E01Controller', ['$scope', '$http', function ($scope, $http) {
            $scope.title = "E01ECMAScriptBase";
            
            var temp = ecmaFuncs();
            
            $scope.testFunc = temp.test;
            
            $scope.funcs = [
                { es5Title: "3.1 let命令", es6Title: "3.1 let命令" },
                { es5Title: "3.2 const命令", es6Title: "3.2 const命令" },
                { es5Title: "3.3 Set数据结构", es6Title: "3.3 Set数据结构" },
            ];
            
            var funcs = temp.command;
            
            for (var i = 0; i < $scope.funcs.length; i++) {
                var item = {};
                
                item.index = i;
                
                //item.es5Command = funcs.es5Functions[i];
                //item.es6Command = funcs.es6Functions[i];
                
                let index = i;
                
                item.es5Command = function () {
                    alert(funcs.es5Functions[index]());
                };
                
                
                item.es6Command = function () {
                    alert(funcs.es6Functions[index]());
                };
                
                $scope.funcs.push(item);
            }


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