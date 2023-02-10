const fs=require('fs');
fs.readFile('abcd.txt','utf-8',(data,error) =>{
if(error){
    return;
}
console.log(data);
});