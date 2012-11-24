var http = require("http")
var express = require("express")
var routes = require("./routes/index")
var dataRoute = require("./routes/data")
var path = require("path")
var app = express();
app.configure(function () {
    app.set("port", 3000);
    app.set("views", __dirname + "/views");
    app.set("view engine", "jade");
    app.use(express.favicon());
    app.use(express.logger("dev"));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, "public")));
});
app.get("/", routes.index);
app.get("/data", dataRoute.data);
http.createServer(app).listen(app.get("port"), function () {
    return console.log("Express server listening on port %d", app.get("port"));
});

