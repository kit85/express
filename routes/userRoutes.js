import express from "express";
//föra över data till userRoutes
import { users, removeById, updateUserById} from "../data/users.js";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const route = express.Router();

//GET all users from database
route.get("/",  async (req,res) => {
    const users = await prisma.users.findMany({
      select:{
        id: true,
        fname:true,
        lname:true
      },
    })
    //.then(users => res.json(users))
    res.json(users)

})
//Get by id from database
route.get("/:id", async (req, res) => {
  const user = await prisma.users.findUnique({
    where:{
      id: parseInt (req.params.id)
    }
  })
  res.json(user)
})

//Post new user to database
route.post("/", async (req,res) =>{
    
    const user = await prisma.users.create({
      data:{
        fname: req.body.fname,
        lname: req.body.lname
      }
    })

    res.json(user)
})

//Delete by id 
route.delete("/:id", async(req,res) =>{
   const{id}=req.params
   await prisma.users.delete({
    where:{
      id: parseInt(id)
    }
   })
   res.sendStatus(204)

})

route.patch("/:id", async (req,res) =>{
    const{id}=req.params
    const user =  await prisma.users.update({
      where:{
        id: parseInt(id)
      },
      data:{
        fname: req.body.fname,
        lname: req.body.lname
      }
    })
      res.json(user)
})




/*
//GET ALL USER 
route.get ("/", ((req, res)=>{

  res.json(users)
}))

//Get by id 
route.get("/:id", ((req,res) => {
  const id=req.params.id;
  //vill ha en användare id
  const user=users.find(user=>user.id ==id)
  //skicka tilllbaks till användare
  res.json(user)
}))

//post new user
route.post("/", ((req,res) => {

  console.log(req.body)

  const addUser={
    //går genom hela lista med användare mappa om dom till dess id,
    // Max kontrollera vilket värde som är störs och sdena plusa till 1
    id: Math.max (...users.map(user => user.id)) + 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    
  
  }
  users.push(addUser)
  res.json(addUser)
  

}))

//Delete
route.delete("/:id", (req,res) => {
  removeById(req.params.id)
  res.json(204)
})

route.patch("/:id", (req,res) => {
  const user = updateUserById(req.params.id, req.body)
  res.json(user)
})
*/


export default route;
