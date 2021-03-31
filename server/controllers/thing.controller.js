const Thing = require('../models/thing.model')

module.exports.findAllThings = (req, res) => {
    Thing.find()
        .then(allThings => res.json({ Result: allThings }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createOneThing = (req, res) => {
    Thing.create(req.body)
        .then(newlyCreatedThing => res.json({ Result: newlyCreatedThing }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findAThing = (req, res) => {
    Thing.findOne({ _id: req.params.thingid })
    .then(oneSingleThing => res.json({ result: oneSingleThing }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingThing = (req, res) => {
    Thing.findOneAndUpdate(
        { _id: req.params.thingid },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedThing => res.json({ Result: updatedThing }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.deleteThing = (req, res) => {
    Thing.deleteOne({ _id: req.params.thingid})
        .then(deletedResult => res.json({ result: deletedResult }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}