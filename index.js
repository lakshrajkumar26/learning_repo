const express=require("express")
const app=express();

// these two are parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));


  
app.get('./',function(res,req){
    res.set("chal rha h ");
})

app.listen(3000,function(){
    console.log("its running")
})
