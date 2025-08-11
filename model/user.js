const mongoose = require('mongoose'); 


const DB = 'mongodb+srv://chinmaymk13:jaisadguru@cluster0.5m9apsg.mongodb.net/UserProfileApp_EJS?retryWrites=true&w=majority&appName=Cluster0';  

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