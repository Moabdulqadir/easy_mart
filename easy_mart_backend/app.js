const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors')
dotenv.config({ path: './config.env' })
require('./config/db')

app.use(cookieParser())
app.use(cors())
app.use(express.json());

app.use(require('./route/auth')); //this is a router link file
const PORT = process.env.PORT


const middleware = (req, res, next) => {
    console.log('he;;');
    next();
}

// app.get('/', (req, res) => {
//     res.send("hello world ")
// });
app.get('/about', (req, res) => {
    res.send("hello world about page ")
});
app.get('/contect', (req, res) => {
    // res.cookie("Test", 'abdul');
    res.send("hello world about page ")
});
app.get('/login', middleware, (req, res) => {
    res.send("hello world logi page")

});
app.get('/signup', (req, res) => {
    res.send("hello world signup page    ")
});
app.listen(PORT, () => {
    console.log(`server is running in ${PORT}`);
})