//* Node imports
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const parser = require("body-parser");

//*Class imports
const { DatabaseConnection } = require("./server/connection/Connection")

//*Variables
const app = express();

//*Routers
const IndexRouter = require("./server/routes/index.routes");

//*Use applications
app.use(cors({
    origin: "http://localhost:4200",
    credentials: true,
    allowedHeaders: ["Content-Type"],
}));
app.use(parser.json());
app.use(morgan("dev"));

//*App use routes
app.use("/", IndexRouter);


app.listen(process.env.PORT || 3000, () => {
    console.info(`Application listen at port ${process.env.PORT || 3000}`);
})