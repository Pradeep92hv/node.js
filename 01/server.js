const os=require("os")

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)

console.log(__filename)



// ------------------------------

const path=require('path')

console.log("----------- usjing path------------")

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))


//-------------------   creating my own module---


// const math=require('./math')


// console.log(math.add(4,8))



const {add,sub}=require('./math')


console.log(add(4,8))