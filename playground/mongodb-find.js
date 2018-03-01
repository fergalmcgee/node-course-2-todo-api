//const MongoClient = require('mongodb').MongoClient; **Below is the same**
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a95e402da9cca58bf0c9b74')
    // }).toArray().then((docs) => {
    //     console.log('Todos....');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('Unable to fetch documents', err)        
    // }); 

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count:',count);
    // },(err) => {
    //     console.log('Unable to fetch documents', err)        
    // }); 
    
    db.collection('Users').find({name: 'Fergal'}).toArray().then((docs) => {
        console.log('Users: ')
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find users');
    });

    //db.close();
});