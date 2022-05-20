const express = require("express")
const app = express();
const port = 8000;


app.use(express.json(), express.urlencoded({ extended: true }));// for post request

const cors = require("cors");
app.use(cors());

require("./server/config/mongoose.config");
require("./server/routes/pet.routes")(app);

// app.get("/api/test", (req, res) => {
//     res.json({ message: "test response!" })
// })


app.listen(port, () => console.log(`runnin on ${port} lets get it`));