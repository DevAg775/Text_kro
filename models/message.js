const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
roomId:{
type:String,
required: true,
},
sender:{
type:mongoose.Schema.Types.ObjectId,
ref: "User"
},
text:{
type:String,
required: true,
trim: true
}
},{timestamps: true})


module.exports = mongoose.Schema("messages",messageSchema)