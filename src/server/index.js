"use strict";
var express = require('express');
var app = express();
var mash = require('./mash');
var env = process.env.NODE_ENV || 'development';

app
    .get('/api/services', function(request, response) {
        response.send(
            mash.list.map(function(name) {
                return {
                    name: name,
                    url: '/api/services/' + name
                }
            })
        );
    })
    .get('/api/services/all', function (request, response) {
        var term = request.query.term;
        if(!term) {
            return response.sendStatus(400);
        }
        mash.queryAll(term).then(function(results) {
            response.send(results);
        });
    })
    .get('/api/services/:service', function (request, response) {
        var term = request.query.term;
        if(!term) {
            return response.sendStatus(400);
        }
        var service = request.params.service;
        mash.queryOneService(term, service).then(function(results) {
            response.send(results);
        }, function() {
            response.sendStatus(404);
        });
    })

if(env === 'development') {
    app
        .use(require('connect-livereload')());
}

app
    .use(express.static(__dirname + '/../public'));



if (!module.parent) {
    var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Mash app listening at http://%s:%s', host, port);
    });
}
module.exports = app;