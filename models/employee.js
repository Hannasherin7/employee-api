const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "empname":String,
    "id":String,
    "salary":String,
    "department":String
})

let employeesmodel=mongoose.model("employees",schema);
module.exports={employeesmodel}
