import { Schema, model } from "mongoose";
import { Router } from "react-router-dom";
const express = require('express');
const router = express.Router();
const itemModel = require('../models/itemModel.js');
const { getLost } = require('../controllers/lostitemsController.js');
const { getFound } = require('../controllers/founditemsController.js');
const { postfound } = require('../controllers/PostFoundController.js')
const { postlost }= require('../controllers/PostLostController.js')

router.get('/Dashboard/LostItems', getLost)   
router.get('/Dashboard/FoundItems', getFound)
router.post('/PostLost', postlost);
router.post('/PostFound', postfound);

export const routerrr=routers;