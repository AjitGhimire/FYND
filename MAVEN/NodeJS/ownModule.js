//const testDt=require("date");

function getCurrentTime(){
return Date.now();
}

function getCurrentDate(){
    return new Date(Date.now());
}

function getLocalDate(date){
    try{
        if(!date){
            throw{
                name:"inderfinederror",
                message:"Param date cannot be undefined or null",
            };
        }

        if(typeof date === "object"  || !(date instanceof Date)) 
        { 
             throw {
                    name: "InvalidTypeError",
                    message: "getLocale only accepts Date Type",
      };        
    }
    return date.toLocaleDateString();
}catch (error){
    console.error(error);
}
}

module.exports={
    getCurrentDate,
    getCurrentTime,
    getLocalDate,
};