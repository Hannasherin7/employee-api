const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const employees=require("./models/employee")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/search",(req,res)=>{
    res.send("welcome")
})

app.listen(8086,()=>{
    console.log("server started")
})