import express from "express";
import cors from "cors"

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/", (req, res)=>{
    res.send("I am vercel clone");
})


app.post("/deploy", (req, res) =>{
    const repoUrl = req.body.repoUrl;
    if(!repoUrl){
        res.status(400).send("repoUrl is required");
        return;
    }

   res.status(200).json({
    msg:"deploying",
    repoUrl
   })
})

app.listen(3000, ()=>{
    console.log(`server is running at http://localhost:3000`);
})