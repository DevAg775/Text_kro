const mongoose = require("mongoose")

async function connectDb(url){
try {
  await mongoose.connect(url);
  console.log("Mongodb connected")
} catch (error) {
  console.log("Mongo Err",err.message)
  process.exit(1)
}
}

module.exports = connectDb