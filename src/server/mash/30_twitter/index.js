'use strict';
var Promise = require('promise');
var Twitter = require('twitter');
require('autolink-js');
var name = 'twitter';
var client = new Twitter({
    consumer_key: 'UnKxpPjM5BQisKJFNCHCN3KO0',
    consumer_secret: 'KVyCa6VRU4v1bMZyP5mU6NPpfasgDtW6Kr2oW7h9tbFpvEDugK',
    access_token_key: '40360233-xsbt4SVjvh759nciZeeALnA7U7OlkLpJLTVL2nSlL',
    access_token_secret: 'vyOVar5xWbQw1OFztS2k88J9dETJ5Qq9bfr5I3jKDhhrd'
});

var query = function(term) {
    var promise = new Promise(function (resolve, reject) {
        client.get('search/tweets', {q: term}, function(error, tweets){
            if (error) return reject(error);
           resolve({
               content: tweets.statuses.map(function(status) {return '<p>'+status.text.autoLink({ target: '_blank' })+'</p>'}),
               name: name
           });
        });
    });

    return promise;
};

module.exports = {
    query: query,
    name: name
};