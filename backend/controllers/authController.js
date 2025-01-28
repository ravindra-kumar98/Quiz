const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userExists = await User.findOne({email: email});
        if(userExists) {
            res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }
        const user = await User.create({
            username,
            email,
            password,
        });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '30d'
        });

        // const options = {
        //     expires: new Date(
        //         Date.now() + 30 * 24 * 60 * 60 * 1000
        //     ),
        //     httpOnly: true
        // };
        // const cookie = res.cookie('token', token, options);
        
        res.status(201).json({
            success: true,
            token: token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            }
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};