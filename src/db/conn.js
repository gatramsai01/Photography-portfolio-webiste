const mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost:27017/regdb").then(()=>{
    console.log("connnection established");
}).catch(()=>{console.log("error in establishing connection")});