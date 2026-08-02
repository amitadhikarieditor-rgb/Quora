const express=require("express");
const app=express();
const path=require("path");
const {v4:uuid}=require("uuid");


const port=8080;

app.use(express.urlencoded({extended :true}));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts =[
    {
        id:uuid(),
    username:"beerbiceps",
    content:"would you rather",
    },
    {
        id:uuid(),
        username:"Assam police",
        content:"jail main daal denge"
    },
    {
        id:uuid(),
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
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    posts.push({id:uuid(),username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((post)=>post.id===id);
    res.render("show.ejs",{post});
});
