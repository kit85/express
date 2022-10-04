import express from 'express';
import  "dotenv/config";
//importera route klassen
import userRoute from "./routes/userRoutes.js"

//skapa express server med port
const server=express();
const PORT= 3040;

//parsa data som json, jobba med json data
server.use(express.json())



//Mappar Get- anrop till en viss adress
server.get("/api",
((req,res)=> res.json({message: "Helloworld brad kit"})))

//använde klassen userRoutes
server.use("/api/user", userRoute)

//lyssna på angiven port
server.listen(PORT, ()=> 
console.log(`Server started on ${PORT}`));


 