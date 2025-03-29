const fs=require('fs')


// fs.readFile("./files/stater.txt", (err,data) =>{
//     if(err) throw err;
//     console.log(data.toString());
// })


fs.readFile("./files/stater.txt", 'utf8',(err,data) =>{
    if(err) throw err;
    // console.log(data.toString());
    console.log(data);
})

//  ---   throws error


// fs.readFile("./files/stater3.txt", 'utf8',(err,data) =>{
//     if(err) throw err;
//     // console.log(data.toString());
//     console.log(data);
// })

console.log("hello")

process.on('uncaughtException',err =>{
    console.log(`theer was an uncaught errrpr: ${err}`)
    process.exit(1);
})