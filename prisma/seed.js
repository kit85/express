//generera en klient 
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

//rensa tabeller,user och todos
const seed = async () =>{
 await prisma.users.deleteMany()
 await prisma.todos.deleteMany()

 //skapa användare 1 
 await prisma.users.create({
    data: {
        
        fname: "alice",
        lname: "svensson"
    }
 })
 //skapa användare 2
 await prisma.users.create({
    data:{
        
        fname: "john",
        lname: "hammer"
    }
 })

 //skapa todos tilla användare
 await prisma.todos.create({
    data:{
        id: 1,
        title: "alice första todos",
        user_id: 1

    }

 })


}

//köra metoden seed
seed();

export default seed;