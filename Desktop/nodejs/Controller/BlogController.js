exports.blog = (req,res) => {
    res.status(200).json({mssege : "ger all blog"})
}




exports.onblog = (req,res) => {
    res.status(200).json({mssege : "get one blog"})
}


exports.post = (req,res) => {
    res.status(200).json({mssege : "poste blog"})
}

exports.editblog = (req,res) => {
    res.status(200).json({mssege : "edited blog"})
}



exports.delete = (req,res) => {
    res.status(200).json({mssege : "dleeted blog"})
}