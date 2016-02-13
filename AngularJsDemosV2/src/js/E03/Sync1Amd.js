define(['E03/GuidAmd'], function(grid) {
    'use strict';
    
    function createTaskId() {
        var uid = grid.NewGuid();

        return {
            uid : uid
        };
    };
    
    var taskModule = function () {
        var taskId = createTaskId();
        
        this.uid = taskId.uid;
        this.execList = [];
        
        this.taskMap = {};
        
        return this;
    };
    
    taskModule.prototype = function () {
        var createTask = function (taskName, taskFun) {
            var subTask = {
                taskName: taskName,
                taskFun: function () {
                    if (taskFun) {
                        this.taskStatus = 'running';
                        taskFun();
                    }
                },
                taskStatus: 'pending'
            };
            
            this.taskMap[taskName] = subTask;
        };
        
        var runSync = function (tasks) {
            this.execList = [];
            
            if (tasks && tasks instanceof Array) {
                for (var i = 0; i < tasks.length; i++) {
                    if (this.taskMap.hasOwnProperty(tasks[i])) {
                        if (this.taskMap[tasks[i]]) this.execList.push(this.taskMap[tasks[i]]);
                    }
                }
            } else {
                for (var prop in this.taskMap) {
                    if (this.taskMap.hasOwnProperty(prop)) {
                        if (this.taskMap[prop]) this.execList.push(this.taskMap[prop]);
                    }
                }
            }
            
            if (this.execList[0] && this.execList[0].taskFun) {
                this.execList[0].taskStatus = 'running';
                this.execList[0].taskFun();
                
                var execList1 = this.execList;
                var timer = setInterval(function () {
                    var lastDoneIndex = -1;
                    
                    for (var j = 0; j < execList1.length; j++) {
                        if (execList1[j]) {
                            switch (execList1[j].taskStatus) {
                                case 'done':
                                    lastDoneIndex = j;
                                    continue;
                                case 'running':
                                    return;
                                case 'pending':
                                    if (lastDoneIndex > -1 && j < execList1.length) {
                                        execList1[j].taskFun();
                                        return;
                                    }
                                default:
                                    break;
                            }
                        }
                    }
                    
                    console.log("clearInterval " + timer);
                    clearInterval(timer);
                }, 500);
                
            }
        };
        
        var doNextTask = function () {
            for (var j = 0; j < this.execList.length; j++) {
                if (this.execList[j]) {
                    switch (this.execList[j].taskStatus) {
                        case 'running':
                            this.execList[j].taskStatus = "done";
                            return;
                        default:
                            break;
                    }
                }
            }
        };
        
        return {
            createTask: createTask,
            runSync: runSync,
            doNextTask: doNextTask
        };

    }();

    return taskModule;
});