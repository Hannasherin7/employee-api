const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "empname":{type:String,required:true},
    "id":{type:String,required:true},
    "salary":{type:String,required:true},
    "department":{type:String,required:true}
})

let employeemodel=mongoose.model("employees",schema);
module.exports={employeemodel}
