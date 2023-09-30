const express = require ("express")


const App = express()

App.use(express.json())

require("./server")

// soo jiidasha waayeh tan file route aa ka shaqyasy ,rak so import garysy baa xgaan ka isticmaalysaa


const authroutes =  require("./Routers/Authroutes")
const blogrouted =  require("./Routers/BlogRoutes")
const commente =  require("./Routers/CommenteRoute")





// xagaan waa endepoint laga soo codsanayo api


// authroot / logn signup



App.use("/auth" , authroutes)
App.use("/blog" , blogrouted)
App.use("/comm" , commente)




const port = 43781

// xagaan waa port

App.listen( port ,(req,res) => {
    console.log("hllow prorte")
})