
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://xaaaancde:abdrhmaan@cluster0.o3wc5kr.mongodb.net/?retryWrites=true&w=majority")
.then((res) => console.log("connectes database"))
.catch((e) => console.log(e))


