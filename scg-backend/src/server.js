const express = require("express");
const app = express();
const port = process.env.PORT | 3000;
const DOSCG = require("./controller/DOSCG");
const cors = require('cors')


// Router
app.use(express.json());
app.use(cors())
app.use(DOSCG);

// Create server
app.listen(port, () => {
  console.log("Start on port " + port);
});