const mongoose = require('mongoose'); // Import mongoose

const connectDB = async () =>{
    try{
        const connectionStringUri = await mongoose.connect(process.env.MONGODB_URI); // Connect to MongoDB
        console.log(`MongoDB Connected: ${connectionStringUri.connection.host}`);  // Log the host of the connection
    }catch(error){
        console.log(`Error connection to MongioDB: ${error.massge}`); // Log the error message
        process.exit(1); // Exit the process
    }
}
module.exports = connectDB;