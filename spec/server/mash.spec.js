'use strict';
var services = [
    require('../../src/server/mash/10_wikipedia'),
    require('../../src/server/mash/20_flickr'),
    require('../../src/server/mash/30_twitter')
];

var mash = require('../../src/server/mash');

describe('Mash', function() {
    beforeEach(function() {
        services.forEach(function(service) {
            spyOn(service, 'query');
        })
    });

    describe('list', function () {
        it('should return all services', function () {
            expect(mash.list).toEqual([ 'wikipedia', 'flickr', 'twitter' ]);
        });
    });

    describe('queryAll', function() {
        it('should query all services with the term', function () {
            mash.queryAll('search term');
            services.forEach(function(service) {
                expect(service.query).toHaveBeenCalledWith('search term');
            })
        });
        it('should query return all promises of the services', function () {
            mash.queryAll('search term');
            services.forEach(function(service) {
                expect(service.query).toHaveBeenCalledWith('search term');
            })
        });
    });
});