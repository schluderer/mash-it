'use strict';
var fs = require('fs');
var Promise = require('promise');

var services = fs
    .readdirSync(__dirname)
    .map(function(entry) {
        return __dirname + '/' + entry;
    })
    .filter(function(file) {
        return fs.statSync(file).isDirectory();
    })
    .map(function(serviceDir) {
        return require(serviceDir)
    });

var queryList = function(term, serviceArray) {
    var promises = [];
    serviceArray.forEach(function(service) {
        promises.push(
            service.query(term)
        );
    });
    return Promise.all(promises);
};

var queryAll = function(term) {
    return queryList(term, services);
};

var queryOneService = function(term, serviceName) {
    return queryList(term, services.filter(function(service) { return service.name === serviceName }));
};

module.exports = {
    queryAll : queryAll,
    queryOneService : queryOneService,
    list  : services.map(function(service) { return service.name })
};