const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/OrderPanel')
.then(()=>console.log('Connected to MongoDB'))
.catch((err)=>console.log(err));

const cakeSchema = new mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String,
    img:String
});

const Cake = mongoose.model('cakeShop', cakeSchema);
app.post('/cakes', async (req, res) => {
    try {
        const { name, price, image } = req.body;
        const newCake = new Cake({ name, price, image });
        await newCake.save();
        res.status(201).json({ message: 'Cake added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding cake', error });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});