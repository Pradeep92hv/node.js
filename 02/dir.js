const fs=require('fs')

if(!fs.existsSync('./new'))
{
    fs.mkdir('./new',(err) => {
        if(err) throw err;
        console.log("new dir created");
    })
    
}

if(fs.existsSync('./new')){
    console.log("new dir present")
}

if(fs.existsSync('./new'))
    {
        fs.rmdir('./new',(err) => {
            if(err) throw err;
            console.log("new dir removed");
        })
        
    }
    

process.on('uncaughtException',err =>{
    console.log(`theer was an uncaught errrpr: ${err}`)
    process.exit(1);
})