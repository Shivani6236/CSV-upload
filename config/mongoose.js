const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://shivani:BRiUiJ4FAdYZloPr@cluster0.5nm8wnz.mongodb.net/?retryWrites=true&w=majority');

const db=mongoose.connection;

db.on('error',console.error.bind(console, 'connection error:'));

db.once('open',function(){
  console.log("Connection was Successful on mongoose");
});

module.exports=db;