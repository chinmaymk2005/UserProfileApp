const mongoose = require('mongoose'); 
const DB = require('./db'); // Import the connection string from db.js

;  

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