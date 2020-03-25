const express = require('express');

const Ongcontroller = require('./controllers/OngController');
const Incidentcontroller = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
 
const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);

routes.get('/profile', ProfileController.index)

routes.get('/incindents', Incidentcontroller.index)
routes.post('/incindents', Incidentcontroller.create)
routes.delete('/incindents/:id', Incidentcontroller.delete)


module.exports = routes;