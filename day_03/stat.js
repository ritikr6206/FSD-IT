import fs from "fs/promises";
const filestaus= async(path)=>{
    try{
        const stats= await fs.stat(path);
        console.log(stats.size);
        console.log(stats.isFile());
        console.log(stats.isDirectory());
    }
    catch(error){
        console.log("unable to get the file stats due to some error ",error);
    }
}

filestaus("./dir.js");