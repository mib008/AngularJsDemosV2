var colors = require("colors"),
    express = require("express"),
    path = require("path"),
    routes = require("./routes.js"),
    fs = require("fs");

var app = express();

var port = process.env.port || 1338;

var packageSetting = eval("(" + fs.readFileSync('package.json', 'utf8') + ")");
var appSetting = eval("(" + fs.readFileSync(packageSetting.appSetting, 'utf8') + ")");

var basePath = path.join(__dirname, appSetting.basePath);

var router = routes(express.Router(), basePath);

// only requests to /calendar/* will be sent to our "router"
app.use('/', router);

// 一般来说非强制性的错误处理一般被定义在最后
// 错误处理的中间件和普通的中间件定义是一样的， 只是它必须有4个形参， 这是它的形式： (err, req, res, next):
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.send(500, 'Something broke!');
});

app.listen(port, function () {
    console.log("Listening on " + port);
});

console.log(app.routes);

