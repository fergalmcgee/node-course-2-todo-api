//const MongoClient = require('mongodb').MongoClient; **Below is the same**
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a94e52af735423458d772a2')  
    }, {
        $set: {
            name: 'Fergal'
        },
        $inc: {
            Age:1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log (result);
    }); 
    //db.close();
});