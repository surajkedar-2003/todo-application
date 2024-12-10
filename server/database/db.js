import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.tecbg.mongodb.net`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

     mongoose.connection.on('error', (error) => {  // <-- Fix here: capture the error
        console.log('Error while connecting with the database:', error.message);  // <-- Use error parameter here
    });
}

export default Connection;
