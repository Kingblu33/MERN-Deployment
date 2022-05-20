const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sundaes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Successfully connect to the mongo database"))
    .catch(err => console.log("Failed to Connect to mongo database", err))