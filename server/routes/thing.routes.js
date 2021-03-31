const ThingsController = require("../controllers/thing.controller");

module.exports = app => {

    app.get('/api/things/all', ThingsController.findAllThings);
    app.post('/api/things/create', ThingsController.createOneThing);
    app.get('/api/things/:thingid', ThingsController.findAThing);
    app.put('/api/things/update/:thingid', ThingsController.updateExistingThing);
    app.delete('/api/things/delete/:thingid', ThingsController.deleteThing)
}