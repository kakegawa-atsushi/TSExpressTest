/// <reference path="./typings/node.d.ts"/>
/// <reference path="./typings/express.d.ts"/>

import http = module("http")
import express = module("express")
import routes = module("./routes/index")
import dataRoute = module("./routes/data")
import path = module("path")

var app = express();

app.configure(() => {
    app.set("port", 3000);
    app.set("views", __dirname + "/views");
    app.set("view engine", "jade");
    app.use(express.favicon());
    app.use(express.logger("dev"));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, "public")));
})

app.get("/", routes.index);
app.get("/data", dataRoute.data);

http.createServer(app).listen(app.get("port"), () => 
    console.log("Express server listening on port %d", app.get("port"));
);