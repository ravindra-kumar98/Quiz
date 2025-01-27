const mongoose = require('mongoose'); // Import mongoose
const bcrypt = require('bcryptjs'); // Import bcrypt

const UserSchema = new mongoose.Schema({ // Create a new mongoose schema
    username: { // Define the username field
        type: String, // Set the type of the field
        required: [true, 'Please provide a username'] // Set the field as required
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true, // Set the field as unique
        match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, // Set the regex pattern
        'Please provide a valid email'
        ]
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6, // Set the minimum length of the password
        select: false // Do not return the password
    },
    role:{
        type: String,
        enum: ['user', 'admin'], // Set the enum values
        default: 'user' // Set the default value
    },
    ceatedAt: {
        type: Date, // Set the type of the field
        default: Date.now // Set the default value
    }
}); // Create a new mongoose schema

UserSchema.pre('save', async function(next) { // Create a pre save hook
    if(!this.isModified('password')) { // Check if the password is modified
        next(); // Call the next middleware
    }
    const salt = await bcrypt.genSalt(10); // Generate a salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next(); // Call the next middleware
}); // Hash the password before saving

UserSchema.methods.matchPasswords = async function(password) { // Create a method to compare the password
    return await bcrypt.compare(password, this.password); // Compare the password
}; // Compare the password  

export default mongoose.model('User', UserSchema); // Export the model