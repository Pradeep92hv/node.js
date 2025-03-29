console.log("testing!!");

const { format } = require('date-fns');  // Correct import
const { v4:uuid} =require('uuid')

const fs=require('fs')
const fsPromise=require('fs').promises;
const path=require('path')


const logEvents = async(message) => {
    const dateTime= `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
    const logTime = `\n${dateTime}\t${uuid()}\t${message}`
    console.log(logTime)

    try{
        if(!fs.existsSync(path.join(__dirname,'logs')))
            await fsPromise.mkdir(path.join(__dirname,'logs'))
 
    await fsPromise.appendFile(path.join(__dirname,'logs','eventLog.txt'),logTime);
    }catch(err)
    {
        console.log(err)
    }
}

// console.log(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));  // Example format

// format(new Date(), 'yyyy-MM-dd HH:mm:ss')


module.exports= logEvents;