import express from 'express';

import  "dotenv/config";
import userRoute from "./routes/userRoutes.js"

//skapa express server
const server=express();
const PORT=process.env.PORT;

//parsa, jobba med json data
server.use(express.json())


//Get anro
server.get("/api",
((req,res)=> res.json({message: "Hellowordl"})))

server.use("/api/user", userRoute)

//lyssna på angiven port
server.listen(PORT, ()=> 
console.log(`Sever started on ${PORT}`));


 