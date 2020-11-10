const {MongoClient} = require('mongodb');
const { UserValidations } = require('../migrations/userCollections');

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'kamEdu';

var db;

// Create a new MongoClient
const client = new MongoClient(url);

function connect(callback) {
    client.connect(function (error) {
        if (error) {
            console.log("Failed connect to mongodb");
        } else {
            console.log("Success connect to mongodb");
            db = client.db(dbName)
            UserValidations (db, (error, result) => {
                console.log('result ', result);
                if (error) {
                    console.log('error', err);
                    callback(error)
                }                 
            })
        }
        callback(error);
    })
}

function getDatabase() {
    return db;
}

module.exports = {
    connect,
    getDatabase
}