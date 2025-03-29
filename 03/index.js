console.log("testing!!");

const { format } = require('date-fns');  // Correct import
const { v4:uuid} =require('uuid')

console.log(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));  // Example format


console.log('uuid is -> '+uuid())