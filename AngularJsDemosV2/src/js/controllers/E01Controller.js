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
        
        // 2 - Chapter 3.3.1
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
        
        // 3 - Chapter 3.3.2
        funcs.es5Functions.push(function () { });
        
        funcs.es6Functions.push(function () {
            var result = [];

            var s = new Set();

            [2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));
            for (var i of s) {
                result.push(i);
            }

            return result;
        });
        
        // 4 - Chapter 3.4
        funcs.es5Functions.push(function () { });
        
        funcs.es6Functions.push(function () {
            var m = new Map();
            
            var result = [];
            
            m.set("edition", 6);        // 键是字符串
            m.set(262, "standard");     // 键是数值
            m.set(undefined, "nah");    // 键是undefined
            
            var hello = function () { console.log("hello"); }
            m.set(hello, "Hello ES6!"); // 键是函数
            
            result.push(m.has("edition"));     // true
            result.push(m.has("years"));       // false
            result.push(m.has(262));           // true
            result.push(m.has(undefined));     // true
            result.push(m.has(hello));         // true
            
            m.delete(undefined);
            result.push(m.has(undefined));       // false
            
            result.push(m.get(hello));  // Hello ES6!
            result.push(m.get("edition")); // 6
            
            return result;
        });
        
        // 5 - Chapter 3.5
        funcs.es5Functions.push(function () { });
        
        funcs.es6Functions.push(function () {
            // Not support
                function add(...values) {
                    let sum = 0;
            
                    for (var val of values) {
                      sum += val;
                   }
            
                    return sum;
                }
            
                return add(2, 5, 3); // 10
        });

        // 6 - Chapter 3.6
        funcs.es5Functions.push(function() {
            function makeIterator(array){
                var nextIndex = 0;

                return {
                    next: function(){
                        return nextIndex < array.length ?
                            {value: array[nextIndex++], done: false} :
                            {value: undefined, done: true};
                        }
                }
            }

            var it = makeIterator(['a', 'b']);

            var result = [];

            result.push(JSON.stringify(it.next()));  
            result.push(JSON.stringify(it.next()));  
            result.push(JSON.stringify(it.next()));  
            result.push(JSON.stringify(it.next()));  
            result.push(JSON.stringify(it.next()));

            return result;
        });

        funcs.es6Functions.push(function() {
            function makeIterator(array){
                let nextIndex = 0;

                return {
                    [Symbol.iterator]() {
                        return this;
                    },
                    next: function() {
                        return nextIndex < array.length ?
                            {value: array[nextIndex++], done: false} :
                            {value: undefined, done: true};
                        }
                }
            }

            var iterator = makeIterator(['a', 'b', 'c', 'C', 'B', 'A']);

            var result = [];

            for (let item of iterator) {
                result.push(JSON.stringify(item));
            }

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
                { es5Title: "3.3.1 Set数据结构", es6Title: "3.3.1 Set数据结构" },
                { es5Title: "3.3.2 Set数据结构", es6Title: "3.3.2 Set数据结构" },
                { es5Title: "3.4 Map数据结构", es6Title: "3.4 Map数据结构" },
                { es5Title: "3.5 rest（...）运算符", es6Title: "3.5 rest（...）运算符" },
                { es5Title: "3.6 遍历器（Iterator）", es6Title: "3.6 遍历器（Iterator）" },
            ];
            
            var funcs = temp.command;
            
            for (var i = 0; i < $scope.funcs.length; i++) {
                var item = $scope.funcs[i];
                
                item.index = i;
                
                //item.es5Command = funcs.es5Functions[i];
                //item.es6Command = funcs.es6Functions[i];
                const index = i;
                item.es5Content = funcs.es5Functions[i].toString();
                item.es5Command = function () {
                    // alert(funcs.es5Functions[index]());

                    $scope.result = funcs.es5Functions[index]();
                    if (!$scope.result) {
                        $scope.result = "undefined";
                    }
                };
                
                item.es6Content = funcs.es6Functions[i].toString();
                item.es6Command = function () {
                    // alert(funcs.es6Functions[index]());

                    $scope.result = funcs.es6Functions[index]();
                    if (!$scope.result) {
                        $scope.result = "undefined";
                    }
                };
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