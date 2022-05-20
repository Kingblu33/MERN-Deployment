const Pet = require("../models/pet.model")


module.exports.createNewPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.status(400).json({ err, message: "Create new pet functionality currently unresponsive" }))
}

module.exports.findAllPets = (req, res) => {
    Pet.find({})
        .then(pets => res.json(pets))
        .catch(err => res.status(400).json({ message: "Find all pet functionality currently unresponsive", err }))
}


module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
        .then(pets => res.json(pets))
        .catch(err => res.status(400).json({ message: "update new pet functionality currently unresponsive", err }))
}


module.exports.deleteOnePet = (req, res) => {
    Pet.deleteOne({ _id: req.params._id }, { new: true, runValidators: true })
        .then(pets => res.json(pets))
        .catch(err => res.status(400).json({ message: "Delete  pet functionality currently unresponsive", err }))

}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params._id })
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Find all functionality currently unresponsive", err }))
}