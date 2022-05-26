//*NodeJS imports
require("dotenv").config();
const mongoose = require("mongoose");

const { MONGO_URI } = require("../../vars");

/**
 * Handle the database connection
 */
class MongoDBConnection{

    /**
     * Try to connect to a database given a URL connection
     * @param {string} urlConnection The string connection 
     */
    constructor(urlConnection = undefined){
        this.OpenConnection(urlConnection);
    }

    /**
     * Close the database connection 
     */
    CloseConnection(){
        mongoose.connection.close().then(() =>{
            return console.log("Database closed successfully")
        });
    }

    /**
     * Open the connection to a database
     */
    OpenConnection(urlConnection = undefined){
        mongoose.connect(urlConnection || process.env.MONGODB_URI || MONGO_URI);
        mongoose.connection.on("connected", () => {
            return console.log("Database connected")
        });
        mongoose.connection.on("error", (err) => {
            if(err) throw err;
        })
    }

}

const DatabaseConnection = new MongoDBConnection();

module.exports = {
    DatabaseConnection
}