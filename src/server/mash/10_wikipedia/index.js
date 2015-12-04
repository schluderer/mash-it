'use strict';
var Promise = require('promise');
var Wiki = require('wikijs');
var wiki = new Wiki({apiUrl: 'http://de.wikipedia.org/w/api.php'});
var name = 'wikipedia';
wiki.options.apiUrl = 'http://de.wikipedia.org/w/api.php'; //ugly hack, check why parameters do not work

var query = function(term) {
    var promise = new Promise(function (resolve) {

        wiki.search(term, 1).then(function(data) {
            if(data.results.length) {
                wiki.page(data.results[0]).then(function(page) {
                    page.summary().then(function(html) {
                        resolve({
                            content: html,
                            name: name
                        });

                    });
                });
            }
            else {
                resolve({
                    content: '',
                    name: name
                });
            }
        });

    });

    return promise;
};

module.exports = {
    query: query,
    name: name
};