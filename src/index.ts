import express from "express";
import cors from "cors"
import { Helper } from "./utils/help";
import simpleGit from "simple-git";
import path from "path";
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/", (req, res)=>{
    res.send("I am vercel clone");
})


app.post("/deploy",async (req, res) =>{
    const repoUrl = req.body.repoUrl;
    if(!repoUrl){
        res.status(400).send("repoUrl is required");
        return;
    }
    const id = Helper.generateRandomIdForUpload();

    const gitClonedRepo =await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));

    const allFiles = await Helper.getAllTheFilesPathFromDirectory(path.join(__dirname, `output/${id}`));



   res.status(200).json({
    msg:"deploying",
    repoUrl,
    id:Helper.generateRandomIdForUpload(),
    allFiles : allFiles
   })
})

app.listen(3000, ()=>{
    console.log(`server is running at http://localhost:3000`);
})