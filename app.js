const express = require('express')
const app = express()
const mongoose = require('mongoose')
const flash = require('express-flash')
const passport = require('passport')
const LocalStrategy = require("passport-local")
const helmet = require('helmet')

require('dotenv').config({path: './config/.env'})