const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://moralfager:987123awds@cluster0.4btelfj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error Connecting to DB'));

db.once('open',function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;
