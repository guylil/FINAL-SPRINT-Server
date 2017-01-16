'use strict'
function insertDocuments(numOfDummyEntries, db, callback) {

    for (var i = 0; i < numOfDummyEntries; i++) {
        // Get the documents collection
        var collection = db.collection('meal');
        // Insert some documents
        collection.insertMany([
            { foods: 'string' + Math.random(), time: Date.now() + Math.random() * 1000, userId: i + 1 },
        ]);
    };

    for (var i = 0; i < numOfDummyEntries; i++) {
        db.collection('feeling').insertMany([
            { rating: Math.random() * 10, time: Date.now() + Math.random() * 1000, userId: i + 1 }
        ]);
    };
    for (var i = 0; i < numOfDummyEntries; i++) {
        db.collection('user').insertMany([
            { eamil: 'aa@gmail.com', password: 123465, imageUrl: 'www', settings: { pushTImer: 1000, lnag: 'en' } },
        ]);
    };
};


function connectMongo(numberOfNewEntries) {
    var MongoClient = require('mongodb').MongoClient;
    var assert = require('assert');

    // Connection URL
    var projectName = 'FoodTrack'
    var url = 'mongodb://localhost:27017/' + projectName;
    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        insertDocuments(numberOfNewEntries, db, function () {
            db.close();
        });
    });
};

connectMongo(10);