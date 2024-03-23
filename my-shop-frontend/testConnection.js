// Require the necessary packages
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

// Load environment variables from .env file
dotenv.config();

// MongoDB URI from .env file
const uri = process.env.MONGODB_URI;

// Create a MongoDB client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to connect to the MongoDB server and create a collection
async function createCollection() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to the MongoDB server');

        // Select a database (e.g., 'mydatabase')
        const database = client.db('mydatabase');

        // Create a new collection (e.g., 'customers')
        await database.createCollection('customers');
        console.log('Collection "customers" created successfully');
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the connection
        await client.close();
        console.log('Connection closed');
    }
}

// Call the function to create the collection
createCollection();
