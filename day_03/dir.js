import fs from "fs/promises";
const makeDir =async (path)=>{
    try{
        await fs.mkdir(path);
        console.log("directory has been created successfully");
    }
    catch(error){
        console.log("unable to create directory due to some error");
    }
}

makeDir(".//day_04");