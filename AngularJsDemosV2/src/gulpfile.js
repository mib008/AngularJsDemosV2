    //引入gulp  
var gulp = require('gulp');


//引入组件  
var concat = require('gulp-concat');            //合并  
var jshint = require('gulp-jshint');            //js规范验证  
var uglify = require('gulp-uglify');            //压缩  
var rename = require('gulp-rename');            //文件名命名  
var amdOptimize = require("amd-optimize");      //require优化  
var watch = require('gulp-watch');

var All_Js_Files = 'source/app/**/*.js';


// 脚本检查  
gulp.task('jsCheck', function () {
    gulp.src(All_Js_Files)
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
});


var amdOptimizeOption = amdOptimize("config", {
    paths: {
        jquery: "source/bower_components/jquery/dist/jquery",
        bootstrap: "source/bower_components/bootstrap/dist/js/bootstrap",
        
        angular: "source/bower_components/angular/angular",
        ngAnimate: "source/bower_components/angular-animate/angular-animate",
        ngAria: "source/bower_components/angular-aria/angular-aria",
        ngCookies: "source/bower_components/angular-cookies/angular-cookies",
        ngMessages: "source/bower_components/angular-messages/angular-messages",
        
        ngResource: "source/bower_components/angular-resource/angular-resource",
        ngRoute: "source/bower_components/angular-route/angular-route",
        ngSanitize: "source/bower_components/angular-sanitize/angular-sanitize",
        ngLocalStorage: "source/bower_components/angular-local-storage/dist/angular-local-storage",
        ngTouch: "source/bower_components/angular-touch/angular-touch",
        
        ngUiBootstrap: "source/bower_components/angular-bootstrap/ui-bootstrap-tpls",
        ngDialog: "source/bower_components/ng-dialog/js/ngDialog",
        ngUiGrid: "source/bower_components/angular-ui-grid/ui-grid",
        ngUiSortable: "source/bower_components/angular-ui-sortable/sortable",
        ngTranslate: "source/bower_components/angular-translate/angular-translate",
        ngTranslateStaticFile: "source/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files"
    },
    shim: {
        jquery: { exports: 'jquery' },
        bootstrap: { deps: ['jquery'] },
        
        angular: { exports: 'angular' },
        ngAnimate: { deps: ['angular'] },
        ngAria: { deps: ['angular'] },
        ngCookies: { deps: ['angular'] },
        ngMessages: { deps: ['angular'] },
        
        ngResource: { deps: ['angular'] },
        ngRoute: { deps: ['angular'], exports: "ngRoute" }, 
        ngSanitize: { deps: ['angular'] },
        ngLocalStorage: { deps: ['angular'] },
        ngTouch: { deps: ['angular'] },
        
        ngUiBootstrap: { deps: ['angular'] },
        ngDialog: { deps: ['angular'] },
        ngUiGrid: { deps: ['angular'] },
        ngUiSortable: { deps: ['angular'] },
        ngTranslate: { deps: ['angular'] },
        ngTranslateStaticFile: ['angular', 'ngTranslate']
    }
});

//require合并  
gulp.task('buildRequireJs', function () {
    gulp.src(All_Js_Files)
            .pipe(amdOptimizeOption)
            .pipe(concat("index.js"))//合并  
            .pipe(gulp.dest("dist/js"))//输出保存  
            .pipe(rename("index.min.js"))//重命名  
            .pipe(uglify())//压缩  
            .pipe(gulp.dest("dist/js"));                //输出保存  
});

gulp.task('default', function () {
    ////监听js变化  
    //gulp.watch(All_Js_Files, function () {       //当js文件变化后，自动检验 压缩  
    //    //gulp.run('lint', 'scripts');  
    //    gulp.run('lint', 'rjs');
    //});
    
    gulp.run('buildRequireJs');
});  