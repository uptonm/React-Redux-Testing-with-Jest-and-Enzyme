const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();
require("./models/user.model");

// Mongoose Setup
mongoose.connect(
  process.env.DBURI,
  { useNewUrlParser: true }
);

// App Setup
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

require("./routes/user.routes")(app);
require("./routes/auth.routes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve prod assets i.e. main.js/main.class
  app.use(express.static("client/build")); // If a route is unrecognized, look at react build

  // Express will serve up index.html if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    // Serve the client the document in that case
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Server Setup
const PORT = process.env.PORT;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
