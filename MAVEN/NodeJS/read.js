const fs=require("fs");

//unicode transformation format
//filepath parameter
function readUTFBFile(filepath){
    //call back
    fs.readFile(filepath,"utf-8", (data, error) => {
        if(error){
            console.error(error);
            return;
        }
        console.log(data);
    });
}

//Non existing file
readUTFBFile("./abcd.txt");

//existing file
readUTFBFile("./static/file/testFile.txt");

//file with difference encoding. will read with missing characters
readUTFBFile("./static/files/testFileDifferentEncoding.txt");