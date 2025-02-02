/*!
* NodejsWebApp, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
*
* Generated by DuoCode Compiler 1.3.1475.0 [Trial]
*/
require("./mscorlib");
module.exports = (function NodejsWebApp() {
"use strict";
var $asm = {
    fullName: "NodejsWebApp",
    anonymousTypes: [],
    types: [],
    $getAttrs: function() { return [new System.Reflection.AssemblyTitleAttribute.ctor("NodejsWebApp"), new System.Reflection.AssemblyDescriptionAttribute.ctor(""), new System.Reflection.AssemblyConfigurationAttribute.ctor(""), new System.Reflection.AssemblyCompanyAttribute.ctor(""), new System.Reflection.AssemblyProductAttribute.ctor("NodejsWebApp"), new System.Reflection.AssemblyCopyrightAttribute.ctor("Copyright \xA9  2015"), new System.Reflection.AssemblyTrademarkAttribute.ctor(""), new System.Reflection.AssemblyCultureAttribute.ctor(""), new System.Reflection.AssemblyVersionAttribute.ctor("1.0.0.0"), new System.Reflection.AssemblyFileVersionAttribute.ctor("1.0.0.0"), new DuoCode.Runtime.CompilerAttribute.ctor("1.3.1475.0")]; }
};
var $g = (typeof(global) !== "undefined" ? global : (typeof(window) !== "undefined" ? window : self));
var NodejsWebApp = $g.NodejsWebApp = $g.NodejsWebApp || {};
var $d = DuoCode.Runtime;
$d.$assemblies["NodejsWebApp"] = $asm;
NodejsWebApp.Routes = $d.declare("NodejsWebApp.Routes", 0, $asm);
NodejsWebApp.Server = $d.declare("NodejsWebApp.Server", 0, $asm);
$d.type("0", 69, $asm, function($t, $p) {
    $t.ctor = function(extended) {
        this.extended = extended;
    };
    $t.ctor.prototype = $p;
    $p.get_extended = function() {
        return this.extended;
    };
});
$d.type("1", 69, $asm, function($t, $p) {
    $t.ctor = function(type) {
        this.type = type;
    };
    $t.ctor.prototype = $p;
    $p.get_type = function() {
        return this.type;
    };
});
$d.define(NodejsWebApp.Routes, null, function($t, $p) {
    $t.cctor = function() {
        $t.RoutesDefinitions = new (System.Collections.Generic.Dictionary$2(String, System.Action$2(System.Object, 
            System.Object), 16719).ctor)();
        $t.RoutesDefinitions.Add$1("/", $d.delegate(function(req, res) {
            res.send("Hello World");
            System.Console.WriteLine$10("/");
        }, this));

        $t.RoutesDefinitions.Add$1("/test", $d.delegate(function(req, res) {
            res.send("Hello TESTTTT");
            System.Console.WriteLine$10("/test");
        }, this));
    };
});
$d.define(NodejsWebApp.Server, null, function($t, $p) {
    $t.Main = function Server_Main() {
        var express = require("express");
        var body_parser = require("body-parser");
        var partials = require("express-partials");
        var pjax = require("express-pjax");

        var __dirname = __dirname;

        var app = express();
        app.use("/static", express.static(System.IO.Path.Combine$1(".", "./static")));
        app.set("views", __dirname + "/views");
        app.set("view engine", "jade");
        app.use(body_parser());
        app.use(body_parser.urlencoded(new $asm.anonymousTypes[0].ctor("true"))); // parse application/x-www-form-urlencoded
        app.use(body_parser.json()); // parse application/json
        app.use(body_parser.json(new $asm.anonymousTypes[1].ctor("application/vnd.api+json"))); // parse application/vnd.api+json as json
        app.use(partials());
        app.use(pjax());

        var http = require("http");
        var hostName = "127.0.0.1";
        var port = 1337;
        var $iter = NodejsWebApp.Routes().RoutesDefinitions;
        var $enumerator = $iter.System$Collections$IEnumerable$GetEnumerator();
        while ($enumerator.System$Collections$IEnumerator$MoveNext()) {
            var pair = $enumerator.System$Collections$IEnumerator$get_Current();
            app.get(pair.get_Key(), pair.get_Value());
        }

        app.listen(1337, hostName, $d.delegate(function() {
            System.Console.WriteLine$16("Express server listening on port {0} in {1} mode", 1337, app.settings.env);
        }, this));

        //var server = http.createServer(new Action<IncomingMessage, ServerResponse>(d));
        //server.listen(port, hostName);
        System.Console.WriteLine$10(String.Format("Server running at http://{0}:{1}/", $d.array(System.Object, 
            [hostName, 1337])));
    };
    $t.d = function Server_d(req, res) {
        var headers = { "Content-Type": "text/plain" };
        res.writeHead(200, headers);
        res.end("Hello World\n");
    };
});
NodejsWebApp.Server.Main();
return $asm;
})();
//# sourceMappingURL=NodejsWebApp.js.map
