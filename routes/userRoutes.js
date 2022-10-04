import express from "express";
//föra över data till userRoutes
import { users, removeById, updateUserById} from "../data/users.js";

const route = express.Router();

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



export default route;
