const express = require("express")

const app = express()

app.get("/" ,(req,res)=> {
    res.status(200).json({mssege : "hllow mssege"})
})
app.post("/add" ,(req,res)=> {
    res.send({mssege : "hllow mssege"})
})
app.put("/add/edeit" ,(req,res)=> {
    res.send({mssege : "hllow edited user"})
})
app.delete("/add/delet" ,(req,res)=> {
    res.send({mssege : "hllow editdeleteded user"})
})




app.listen(30000 , ()=> console.log("this   porte 3000"))