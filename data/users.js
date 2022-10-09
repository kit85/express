//databas

let users=[
   {
    "id": 1,
    "firstname":"kit",
    "lastname": "phung",
    
   },
   {
    "id": 2,
    "firstname":"brad",
    "lastname": "svensson",
 
   
   },
]

//funktion som delete
const removeById=(id) => {
    users=users.filter(user => user.id !=id)
}

//update
//
const updateUserById =(id,newProperties) =>{
    users=users.map(user=>user.id ==id ? {...user,...newProperties}
    : user)
    return users.find(user => user.id==id);
}

//måste exportera
export {users, removeById, updateUserById};