const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();


app.use(cors());
app.use(express.json());

// going to require your mongoose connection config file 

require("./server/config/mongoose.config")

require("./server/routes/thing.routes")(app)

const Thing = require("./server/models/thing.model")

// Going to require your routes file 

app.get("/", (req, res) => {
  res.json({"message": "ok"});
});

app.listen(port, () => console.log(`Listening on port ${port}`));