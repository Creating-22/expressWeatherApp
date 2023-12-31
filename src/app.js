const express=require('express');
const app=express();
const hbs=require('hbs');
const port=8000;
const path=require('path');
//public static path
app.set('view engine', 'hbs');
const staticPath=(path.join(__dirname,"../public"));
const template_path=(path.join(__dirname,"../templates/views"));
const partials_path=(path.join(__dirname,"../templates/partials"));
app.set('views',template_path);
app.set('view engine', 'hbs');

hbs.registerPartials(partials_path);

app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.render("index")
}
)
app.get("/about",(req,res)=>{
    res.render("about")
}
)

app.get("/weather",(req,res)=>{
    res.render("weather")
}
)
app.get("*",(req,res)=>{
    res.render("error")
}
)
app.listen(port,()=>{
    console.log(`${port}`);
})

