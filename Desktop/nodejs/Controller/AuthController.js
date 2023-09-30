const User  = require("../Model/Usermofrl")

exports.login  = (req,res) => {
    res.status(200).json({mssge : 'hlow from login'})
}


exports.signup = (req,res) => {
    console.log(req.body)


    User.create(req.body).then((res) => console.log("succefully"))
  
    res.status(200).json({mssge : 'hlow from signup'})
}