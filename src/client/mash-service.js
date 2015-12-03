"use strict";
var $ = require('jquery');

var defaultOptions = {
    endpoint: '/api',
    url: '',
    autoLoadServices: true
};
var MashService = function(opts) {
    this.opts = $.extend({}, opts, defaultOptions);
    if(this.opts.autoLoadServices) {
        this._loadServices();
    }
};

MashService.prototype.route = function(route) {
    return this.opts.url + this.opts.endpoint + route;
};

MashService.prototype._loadServices = function() {
    var self = this;
    if (self.loadServices) return;
    self.loadServices = $.get(this.route('/services'));
};

MashService.prototype.queryService = function(service, term) {
    return $.get(service.url + '?term=' + term);
};

MashService.prototype.queryAll = function(term, cb) {
    var self = this;
    self.loadServices.then(function(services) {
        services.forEach(function(service) {
            self.queryService(service, term)
                .done(cb)
        });
    });
};

module.exports = MashService;