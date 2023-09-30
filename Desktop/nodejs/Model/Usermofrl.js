

const mongoose  =require("mongoose")



const  userschem =  mongoose.Schema({

    firstname :  {
        type : String,
        required  : true
        
    }, 
    secondname : String,
    pssword :  Number,
    email : String
})


 const Usermofrl = mongoose.model('User', userschem)

module.exports = Usermofrl