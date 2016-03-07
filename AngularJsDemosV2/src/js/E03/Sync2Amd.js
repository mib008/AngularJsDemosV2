define(['E03/GuidAmd'], function (grid) {
    'use strict';
    
    var event = document.createEvent("HTMLEvents");

    var taskPool = [];
    
    function createTaskId() {
        var uid = grid.NewGuid();
        
        taskPool.push(uid);
        
        return {
            index: taskPool.length - 1,
            uid : uid,
            doNextEventName: "task" + uid.ToString('D') + "DoNextEvent"
        };
    };
    
    var taskModule = function () {
        var task = this;
        var taskId = createTaskId();
        
        this.uid = taskId.uid;
        this.execList = [];
        this.currentExecTask = 0;
        this.taskMap = {};
        
        this.doNextTask = function () {
            //This for IE
            if (document.dispatchEvent) {
                document.dispatchEvent(event);
            } else if (document.attachEvent) {
                document.documentElement[taskId.doNextEventName]++;
            }
        };
        
        var runNextTaskHandler = function (ev) {
            console.log(taskId.uid.ToString('D') + " " + taskId.doNextEventName);
            
            task.currentExecTask++;
            if (task.execList.length > task.currentExecTask) {
                task.execList[task.currentExecTask]();
            }
        };
        
        //语法
        //event.initEvent(eventType, canBubble, cancelable)
        //参数 描述
        //eventType 字符串值。 事件的类型。
        //canBubble 事件是否起泡。
        //cancelable 是否可以用 preventDefault() 方法取消事件。
        event.initEvent(taskId.doNextEventName, false, true);
        document.addEventListener(taskId.doNextEventName, runNextTaskHandler, false);
        
        return this;
    };
    
    taskModule.prototype = function () {
        var createTask = function (taskName, taskFun) {
            this.taskMap[taskName] = taskFun;
        };
        
        var runSync = function (tasks) {
            this.execList = [];
            
            if (tasks 　&& tasks instanceof Array) {
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
            
            if (this.execList.length > this.currentExecTask) {
                this.execList[this.currentExecTask]();
            }
        };
        
        return {
            createTask: createTask,
            runSync: runSync
        };

    }();

    return taskModule;

});