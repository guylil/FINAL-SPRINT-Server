const mongodb = require('mongodb');
const dbName = 'test'
var url = `mongodb://localhost:27017/${dbName}`;
console.info('Attampting to create Dummy DB')

mongodb.MongoClient.connect(url, function (err, db) {
    if (err) {
        cl('Cannot connect to DB', err)
        reject(err);
    }
    else {
        cl("Connected to DB");
        resolve(db);
    }
});

const collection = db.collection(dbName);
// var doc1 = {'hello':'doc1'};
// var doc2 = {'hello':'doc2'};
var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];


db.runCommand(
    {
        insert: "meal",
        foods: [],
        time: "timestamp",
        userId: "userId"
         {  user: "ijk123", status: "A" },
    { user: "xyz123", status: "P" },
    { user: "mop123", status: "P" }
      ],
    ordered: false,
    writeConcern: { w: "majority", wtimeout: 5000 }
},
    {
        insert: "meal",
        foods: [
            { user: "ijk123", status: "A" },
            { user: "xyz123", status: "P" },
            { user: "mop123", status: "P" }
        ],
        ordered: false,
        writeConcern: { w: "majority", wtimeout: 5000 }
    },
    {
        insert: "meal",
        foods: [
            { user: "ijk123", status: "A" },
            { user: "xyz123", status: "P" },
            { user: "mop123", status: "P" }
        ],
        ordered: false,
        writeConcern: { w: "majority", wtimeout: 5000 }
    },
)











// db.runCommend({
//     "insert": "meal",
//     "user": [
//         { "username": "aa", "password": "aA" },
//         { "_id": 2, "username": "bb", "password": "bB" },
//         { "_id": 3, "username": "cc", "password": "cC" },
//         { "_id": 4, "username": "jaja", "password": "jajA" }
//     ],
//     "ordered": false,
// },
//     {
//         "insert": "meal",
//         "user": [
//             { "_id": 1, "username": "aa", "password": "aA" },
//             { "_id": 2, "username": "bb", "password": "bB" },
//             { "_id": 3, "username": "cc", "password": "cC" },
//             { "_id": 4, "username": "jaja", "password": "jajA" }
//         ],
//         "ordered": false,
//     },
//     {
//         "insert": "felling",
//         "user": [
//             { "_id": 1, "username": "aa", "password": "aA" },
//             { "_id": 2, "username": "bb", "password": "bB" },
//             { "_id": 3, "username": "cc", "password": "cC" },
//             { "_id": 4, "username": "jaja", "password": "jajA" }
//         ],
//         "ordered": false,
//     })