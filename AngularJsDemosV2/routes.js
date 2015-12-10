var path = require("path");

function routes(router, basePath) {
    "use strict";

    function send404WhenError(err, res) {
        try {
            if (err) res.sendStatus(404);
        } catch (e) {

        }
    };
    
    function outputLog(req, res, err) {
        if (err) {
            console.log("Get ".red + err.statusCode + " " + err.message + " " + req.url);
        } else {
            console.log("Get ".green + res.statusCode + " " + res.statusMessage + " " + req.url);
        }
    };

    // invoked for any requests passed to this router
    router.use(function (req, res, next) {
        // .. some logic here .. like any other middleware
        next();
    });
    

    // Regist services
    router.get("/service/index_menu_service", require('./service_middleware/index_menu_service')(basePath).middleware);
    
    // will handle any request that ends in /events
    // depends on where the router is "use()'d"
    router.get('/', function (req, res, next) {
        res.sendFile(path.join(basePath, 'index.html'), function (err) {
            outputLog(req, res, err);
            send404WhenError(err, res);
        });
    });
    
    router.get('*', function (req, res, next) {
        res.sendFile(path.join(basePath, req.params[0]), function (err) {
            outputLog(req, res, err);
            send404WhenError(err, res);
        });
    });

    return router;
};

module.exports = routes;