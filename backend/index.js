const express= require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("kuch bhi")
})


app.listen(4000,()=>{
    console.log(`Server Running on port 4000`);
})