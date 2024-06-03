const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express()


app.use(express.json());



app.get('/', (req, res) => {
    res.send("HELLO from Node API Server Updated");
});


app.get('/api/products', async (req, res) => {
    try {
        const product = await product.find({});
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.get('/api/products:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await product.findById(id);
        res.status(500).json({ message: error.message });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.post('/api/products', async (req, res) => {
    try {
        await Product.create(req.body);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});




mongoose.connect("mongodb+srv://shakshik805:Kjqo40BykSlrYcxN@nodeapi.ajmwnvr.mongodb.net/Node-API{?retryWrites=true&w=majority&appName=NodeAPI")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });