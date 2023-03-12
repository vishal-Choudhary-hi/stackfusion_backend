const { config } = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./Routes/routes");

const app = express();
config();
app.use(bodyParser.json({ limit: "20mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: "true" }));
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,FETCH",
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
const connection = process.env.CONNECTION_URL;
const port = process.env.PORT || 5000;
mongoose
  .connect(connection)
  .then(() => app.listen(port, () => console.log(`Server on port ${port}`)))
  .catch((error) => console.log(error));
app.use("/userForm", routes);
