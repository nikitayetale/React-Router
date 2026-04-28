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

mongoose.connect('mongodb://localhost:27017/cakeShop')
.then(()=>console.log('Connected to MongoDB'))
.catch((err)=>console.log(err));

const cakeSchema = new mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String,
    img:String
});
const loginSchema = new mongoose.Schema({
    username:String,
    password:Number
});

const orders = mongoose.model('orders', cakeSchema)
const cakes = mongoose.model('cakes',cakeSchema)
const login = mongoose.model('login', loginSchema);

app.post('/orders', async (req, res) => {
    try {
        const { name, image } = req.body;
        const newOrder = new orders({ name,image });
        await newOrder.save();
        res.status(201).json({ message: 'Cake added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding cake', error });
    }
});
app.post('/cakes', async (req, res) => {
    try {
        const { name, price, image } = req.body;
        const newCacke = new cakes({ name,price,image });
        await newCacke.save();
        res.status(201).json({ message: 'Cake added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding cake', error });
    }
});
app.post('/login', async (req, res) => {
    try {
        const {usr, pass } = req.body;
        const user = login.findOne({ username:usr });
       
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Check password (plain comparison for now)
        if (user.password !== pass) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful' });

    } catch (error) {
        res.status(500).json({ message: 'Error adding login', error });
    }
});

app.get("/cakes", async (req, res) => {

});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});