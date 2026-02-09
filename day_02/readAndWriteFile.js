//const fs = require('fs') // type common js

import fs from 'fs'; // type module
//console.log(fs);

const appendFileSync = (file, path) => {
   try{
     fs.appendFileSync(file, path);
    console.log("File has been appended succesfully ...")
   }
   catch(error){
    console.log("some error occured while appending file");
   }
}
appendFileSync("./example.txt", "this data has been appended through sync function of fs module");