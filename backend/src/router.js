const express = require('express');
const tasksController = require('./controllers/tasksController'); //importar tasksController

const router = express.Router(); //instanciar variavel router

//rota '/' apos acessada sera enviada como resposta 'Ola, mundo'
//app.get('/tasks', (request, response) => response.status(200).send('Ola, mundo'));
//
router.get('/tasks', tasksController.getAll);



module.exports = router;