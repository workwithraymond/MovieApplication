const express = require('express')
const app = express()
const mongoose = require('mongoose')
const flash = require('express-flash')
const passport = require('passport')
const LocalStrategy = require("passport-local")
const helmet = require('helmet')
const methodOverride = require("method-override")
const seed = require("./seed")
const connectDB = require("./config/database");


require('dotenv').config({path: './config/.env'})

connectDB()

app.use(helmet());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride("_method"))
