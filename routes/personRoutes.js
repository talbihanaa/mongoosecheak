const express = require('express');
const personRouter = express.Router();
const {createPerson , fetchData , personOne,findPersonById,Updateperson,deletePersonByName, removeperson}= require('../handlers/person');

personRouter.post('/newPerson', createPerson);
personRouter.get('/getPerson', fetchData);
personRouter.get('/find',personOne );
personRouter.get('/findId',findPersonById );
personRouter.put('/findup',Updateperson );
personRouter.delete('/deleted',removeperson );
 personRouter.delete('/removes',deletePersonByName );


module.exports = personRouter
