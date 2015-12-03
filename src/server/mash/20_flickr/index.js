'use strict';

var Promise = require('promise');
var Flickr = require("flickrapi");
var flickrOptions = {
    api_key: "640c30c4dda65300b9783c5eb869edc7",
    secret: "7d888737bb694f23"
};
var name = 'flickr';
var createPhotoUrl = function(rawPhoto) {
    return 'https://farm'+rawPhoto.farm+'.staticflickr.com/'+rawPhoto.server+'/'+rawPhoto.id+'_'+rawPhoto.secret+'.jpg'
};

var createImageTag = function (imageUrl) {
    return '<div class="flickr-img" style="background-image:url('+imageUrl+')"></div>';
}

var query = function(term) {
    var promise = new Promise(function (resolve, reject) {
        Flickr.tokenOnly(flickrOptions, function(error, flickr) {
            if(error) return reject(error);
            flickr.photos.search({
                text: term,
                content_type: 1,
                media: 'photos',
                per_page: 6
            }, function(error, result) {
                if (error) return reject(error);
                var photoUrls = result.photos.photo.map(createPhotoUrl).map(createImageTag).join('');
                resolve({
                    content: photoUrls,
                    name: name
                });
            });
        });
    });

    return promise;
};

module.exports = {
    query: query,
    name: name
};