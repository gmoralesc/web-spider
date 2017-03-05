"use strict";

const fs = require("fs");
const download = require("./download");
const utilities = require("./../utilities");

module.exports = function spider(url, callback){
    const filename = utilities.urlToFilename(url);
    fs.exists(filename, exists => {
        if(exists){
            return callback(null, filename, false);
        }
        download(url, filename, err => {
            if(err){
                return callback(err);
            }
            callback(null, filename, true);
        });
    });
};