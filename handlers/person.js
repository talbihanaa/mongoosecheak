const  person = require('../model/personmodel');

//createPerson
const createPerson = async(req, res)=>{
    let {name , age , favoriteFoods}=req.body;
    await person.insertMany(req.body)
    .then((doc)=>{
        res.status(200).json({msg:'person created with sucsses',doc})
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({msg:'server error',err})
    })
}
// get
const fetchData = async(req,res)=>{
    
    await person.find({})
    .then((doc)=>{
        res.status(200).json({msg: 'person, done', doc})
    })
.catch((err)=>{
    res.status(500).json({msg:'server error', err})
})
    
}
//findOne()
const personOne =async(req,res)=>{
    
    await person.findOne({_id:"6622346fe863978a4901fbad"})
    .then((doc)=>{
        res.status(200).json({msg: 'Found person who likes ${food}', doc})
    })
.catch((err)=>{
    res.status(500).json({msg:'Internal server error', err})
})
}
//findById()
const findPersonById= async(req,res)=> {
    await person.findById({_id:"6622346fe863978a4901fbad"})
    .then((doc)=>{
        res.status(200).json({msg: 'Found person', doc})
    })
.catch((err)=>{
    res.status(500).json({msg:'Error finding person by id:', err})
})
  }
  //findOneAndUpdate
const Updateperson =async(req,res)=>{
    
    await person.findOneAndUpdate({name:"hana",  new: true})
    .then((doc)=>{
        res.status(200).json({msg: 'name update with succes', doc})
    })
.catch((err)=>{
    res.status(500).json({msg:'Internal server error', err})
})
}
//model.remove()
const deletePersonByName = async(req, res)=>{
    await person.deleteOne ({name:"sana"})
    .then((doc)=>{
        res.status(200).json({msg: 'removed with succes', doc})
    })
.catch((err)=>{
    res.status(500).json({msg:'Internal server error', err})
})
}
//findByIdAndRemove
const removeperson =async(req,res)=>{
    
    await person.findByIdAndDelete("66258aa272df5185ae2e24e6")
    .then((doc)=>{
        res.status(200).json({msg: 'person removed with succes', doc})
    })
.catch((err)=>{
    res.status(500).json({msg:'Internal server error', err})
})
}

// const persones = new userSchema({
//         name: "person",
        
        
//          age: 25,
//          favoriteFoods:["pizza"] ,
//          })
//          person.save()
//          .then((person) => console.log(person));
//          //create personne//
//          const CreatePerson= person.create()
//         .then((createPerson) => {
//             console.log("Person created:", createPerson);
           
//         })
//         .catch((error) => {
//             console.error("Error creating person", error);
            
//         });

//          const arrayOfPeople = [
//             { name: "person1",
//              age: 25, 
//              favoriteFoods: ["sushi", "pasta"] 
//             },
//             { name: "person2",
//              age: 30, 
//              favoriteFoods: ["pizza", "burger"] 
//             },
//             { name: "person3",
//              age: 35,
//               favoriteFoods: ["steak", "salad"] 
//             }
//         ];


        module.exports = {createPerson, fetchData , personOne, findPersonById,Updateperson,deletePersonByName,removeperson}