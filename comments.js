//Create webserver
var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';
var ObjectId = require('mongodb').ObjectID;
var db = require('../db');
var bodyParser = require('body-parser');