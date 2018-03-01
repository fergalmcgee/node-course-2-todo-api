//const MongoClient = require('mongodb').MongoClient; **Below is the same**
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

   //delete many
    // db.collection('Todos').deleteMany({text: 'Find apartment'}).then((result) => {
    //     console.log(result);
    // });
   //deleteOne
    // db.collection('Todos').deleteOne({text: 'Find apartment'}).then((result) => {
    //     console.log(result);
    // });
   //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    
    // db.collection('Users').deleteMany({name: 'Fergal'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a95ebabb0cb1e3bbc6c3485')}).then((result) =>{
        console.log(JSON.stringify(result, undefined, 2));
    });
    //db.close();
});