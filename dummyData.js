'use strict'

function insertDocuments(db, callback) {
    // Get the documents collection
    var collection = db.collection('meal');
    // Insert some documents
    collection.insertMany([
    { foods: 'string',  time: Date.now()+Math.random()*1000 ,  userId: 1 },
    { foods: 'string',  time: Date.now()+Math.random()*1000 ,  userId: 2 },
    { foods: 'string',  time: Date.now()+Math.random()*1000 ,  userId: 3 },
    { foods: 'string',  time: Date.now()+Math.random()*1000 ,  userId: 4 },
    { foods: 'string',  time: Date.now()+Math.random()*1000 ,  userId: 5 },
    ]);
    db.collection('feeling').insertMany([
        {rating:1,time: Date.now()+Math.random()*1000,userId:1},
        {rating:3,time: Date.now()+Math.random()*1000,userId:2},
        {rating:5,time: Date.now()+Math.random()*1000,userId:3}
    ]);
    db.collection('user').insertMany([
        {eamil:'aa@gmail.com',password: 123465, imageUrl:'www',settings:{pushTImer:1000,lnag:'en'}},
        {eamil:'aabb@gmail.com',password: 123465, imageUrl:'www',settings:{pushTImer:1000,lnag:'en'}},
        {eamil:'aacc@gmail.com',password: 123465, imageUrl:'www',settings:{pushTImer:1000,lnag:'en'}}
    ]);
}

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
var projectName = 'FoodTrack'
var url = 'mongodb://localhost:27017/' + projectName;
// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    insertDocuments(db, function () {
        db.close();
    });
});

