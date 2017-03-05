"use strict";

const spider = require("./spider");

spider(process.argv[2], (err, filename, downloaded) => {
     if(err) {
       console.log(err);
     } else if(downloaded){
       console.log(`Completed the download of "${filename}"`);
     } else {
       console.log(`"${filename}" was already downloaded`);
     }
});