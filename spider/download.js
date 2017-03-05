"use strict";

const request = require("request");
const saveFile = require("./save-file");

module.exports = function (url, filename, callback) {
    console.log(`Downloading ${url}`);
    request(url, (err, response, body) => {
        if (err) {
            return callback(err);
        }
        saveFile(filename, body, err => {
            if (err) {
                return callback(err);
            }
            console.log(`Downloaded and saved: ${url}`);
            callback(null, body);
        });
    });
}