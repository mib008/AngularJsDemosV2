function index_menu_service(basePath) {
    'use strict';

    var rd = require('rd'),
        path = require('path');
    
    function middleware(req, res, next) {
        
        try {
            
            var files = [];
            
            //                                             DemoPages/A01HelloWorld.html
            // D:\GitHub\AngularJsDemos\AngularJsDemos\app\DemoPages\A01HelloWorld.html
            
            console.log("path.dirname('"+ basePath +"'): " + path.dirname(basePath));
            
            rd.eachFileSync(basePath, function (f, s) {
                if (f.match(/.+?\.html/)) {
                    files.push({
                        "name": path.basename(f, ".html"),
                        "path": f,
                        "url": f.replace(path.resolve(basePath) + "\\", '').replace(/\\/g, '/')
                    });
                }
            });
            
            for (var i = 0; i < files.length; i++) {
                console.log("File " + JSON.stringify(files[i]));
            }
            
            res.writeHead(200);
            res.write(JSON.stringify(files));
            res.end();
        } catch (e) {
            res.writeHead(500);
            res.write(JSON.stringify(e));
            res.end();
        }
        
        next();
    }

    return middleware;
};

module.exports = index_menu_service;

