const express = require ("express");
const app = express();
require("./db/conn.js");
const hbs = require("hbs");
const path = require("path");
const resgister =require("./models/regdetails")

const viewspath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");
app.use(express.static(path.join(__dirname, '/public')));
app.set("view engine","hbs");
app.set("views",viewspath);
hbs.registerPartials(partialspath);
app.get("/",(req,res)=>{
res.render("home");
})
app.get("/gallery",(req,res)=>{res.render("gallery");})
app.get("/wild_life",(req,res)=>{res.render("wild_life");})
app.get("/astrophotography",(req,res)=>{res.render("astrophotography");})
app.get("/experimental",(req,res)=>{
    res.render("experimental");})
app.get("/about_us",(req,res)=>{res.render("about_us");})
app.get("/contact",(req,res)=>{res.render("contact")});
app.use(express.urlencoded({extended:false}));
app.post("/contact",async (req,res) =>{
    try{
        const contactTable = new resgister({
            fname : req.body.fname,
            lname : req.body.lname,
            email : req.body.email,
            message : req.body.message
        })
        const regstatus= await contactTable.save();
        res.render("contact");
    }
    catch(e)
    {
        res.status(400);
        res.send(e);
    }

})

app.listen(3006,()=>{"sever is listening to 3000 port"});
