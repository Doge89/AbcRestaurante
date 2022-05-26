//*Node Imports
require("dotenv").config();

/**
 * Define the MongoDB URI
 */
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/restaurant";

/**
 * Define the port to listen the app
 * @var number
 */
const PORT = process.env.PORT || 3000;

module.exports = {
    MONGO_URI,
    PORT
}