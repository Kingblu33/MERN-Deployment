const PetController = require("../controllers/pet.controllers")

module.exports = (app) => {

    app.post("/api/create/pets", PetController.createNewPet);

    app.get("/api/find/pets", PetController.findAllPets);

    app.put("/api/update/pets/:_id", PetController.updatePet);

    app.delete("/api/delete/pets/:_id", PetController.deleteOnePet);

    app.get("/api/findone/pets/:_id", PetController.findOnePet);

};