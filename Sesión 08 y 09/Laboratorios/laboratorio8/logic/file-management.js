const fs = require("fs");

fs.readdir("./",(err,files)=>{
    files.forEach(file=>{console.log('File Name forma 1: '+ file)});
    files.forEach(function (file){
        console.log('File Name forma 2: '+ file);
    });
});