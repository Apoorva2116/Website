let mongoose = require("mongoose")
let con_string = "mongodb+srv://apoorvavarshney23cse:0QVCiw3oIE9UecFE@cluster0.e0uvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

let dbconnect = ()=>{
 try{  mongoose.connect(con_string, {})
console.log("databse is connected")
}
 catch(err)
 { console.log(err)}
}
module.exports = dbconnect