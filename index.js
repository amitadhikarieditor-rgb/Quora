const express=require("express");
const app=express();
const path=require("path");

const port=8080;

app.use(express.urlencoded({extended :true}));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts =[
    {
    username:"beerbiceps",
    content:"would you rather",
    },
    {
        username:"Assam police",
        content:"jail main daal denge"
    },
    {
        username:"samay raina",
        content:"3 FIR "
    },
]
app.listen(port,(req,res)=>{
    console.log(`listening to the port: ${port}`)
});

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});