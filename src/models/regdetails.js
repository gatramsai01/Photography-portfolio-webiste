const mongoose=require("mongoose")
const contactSchema =new mongoose.Schema(
    {
        fname: {type:String,required:true},
        lname: {type:String,required:true},
        email: {type:String,required:true},
        message: {type:String,required:true}

    }
    )

    const register =new mongoose.model("contable",contactSchema);
    module.exports=register;