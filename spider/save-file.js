"use strict";

const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");

module.exports = function (filename, contents, callback) {
    mkdirp(path.dirname(filename), err => {
        if (err) {
            return callback(err);
        }
        fs.writeFile(filename, contents, callback);
    });
}