"use strict";
require('./globals');
var $ = require('jquery');
var MashService = require('./mash-service');
var Mash = new MashService();
var hash = require('hash-js');

var enableSearch = function(enable) {
    if(enable) {
        $('#submit-btn').attr('disabled', false);
        $('#btn-icon').addClass('glyphicon-search').removeClass('glyphicon-refresh gly-spin');
    }
    else {
        $('#btn-icon').removeClass('glyphicon-search').addClass('glyphicon-refresh gly-spin');
        $('#submit-btn').attr('disabled', true);
    }
};
var addWidget = function(mash) {
    var name = mash.name;
    var content = mash.content;
    if(content == '') content = 'Nothing found!';
    $('#results')
        .append(
            $('<div></div>')
                .addClass('col-md-6')
                .html(content)
                .prepend(
                    $('<h2></h2>')
                        .html(name)
                )
        );
};

var doSearch = function() {
    var term = hash('term');
    if (!term) return;
    $('#query').val(term);

    $('#results').html('');
    enableSearch(false);
    Mash.queryAll(term, function(results) {
        results.forEach(addWidget);
        enableSearch(true);
    });
};

$('#search-form').submit(function(event) {
    var term = $('#query').val();
    event.preventDefault();
    hash('term', term);
});

$(window).on('hashchange', doSearch);
$(doSearch);
