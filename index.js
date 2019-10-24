// implement your API here
const express=require('express');
const server=express();

server.get("/",(req,res)=>{
  res.send("Hello from express")
})

server.listen(5000, ()=>
console.log("Server Running on https://localhost:5000"));