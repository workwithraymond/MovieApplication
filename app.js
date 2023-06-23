const express = require('express')
const app = express()
const mongoose = require('mongoose')
const flash = require('express-flash')
const passport = require('passport')

const helmet = require('helmet')
const methodOverride = require("method-override")
const seed = require("./seed")
const connectDB = require("./config/database");
const indexRoutes = require("./routes/index");
const moviesRoutes = require("./routes/movies");
const screeningRoutes = require("./routes/screening");
const bookingRoutes = require("./routes/booking");
const authenticationRoutes = require("./routes/authentication");
const search = require("./routes/check");
const profile = require("./routes/profile");


require('dotenv').config({path: './config/.env'})


// Passport config
require('./config/passport')(passport)

connectDB()

app.use(helmet());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride("_method"))

//Passport middleware

app.use(passport.initialize());
app.use(passport.session());

//routes

app.use(indexRoutes);
app.use(moviesRoutes);
app.use(screeningRoutes);
app.use(bookingRoutes);
app.use(authenticationRoutes);
app.use(search);
app.use(profile);

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
}) 