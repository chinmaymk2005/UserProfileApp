const { timeStamp } = require('console');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose'); 
const { version } = require('os');

const DB = 'mongodb+srv://cmkhairnar05:jaisadguru@cluster0.zdargvi.mongodb.net/shery_db?retryWrites=true&w=majority&appName=Cluster0';  
 
mongoose.connect(DB).then(()=>{
    console.log("Database connected"); 
}).catch((err)=>{
    console.log(err); 
})
   
const userSchema = mongoose.Schema({
    image: String, 
    email: String, 
    name: String  
}); 

module.exports =  mongoose.model('user',userSchema);  