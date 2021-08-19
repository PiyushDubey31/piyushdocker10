const express=require("express");
const PORT=process.env.PORT||3002
const app=express();
app.get('/',(req,res)=>{
    res.json({"message":"hlw mr dubey"})
})
app.listen(PORT,()=>{
    console.log(`server has been started at port number ${PORT}`)
});
