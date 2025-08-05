const express = require('express');
const router = express.Router();
import { getLost } from '../controllers/lostitemsController.js';

router.get('/Dashboard/LostItems', getLost)   

module.exports = router