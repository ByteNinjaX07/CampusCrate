import express from 'express';
import { getLost } from '../controllers/lostitemsController.js';
import { getFound } from '../controllers/founditemsController.js';
import { postfound } from '../controllers/PostFoundController.js';
import { postlost } from '../controllers/PostLostController.js';

const router = express.Router();

router.get('/Dashboard/LostItems', getLost);   
router.get('/Dashboard/FoundItems', getFound);
router.post('/PostLost', postlost);
router.post('/PostFound', postfound);

export default router; // Fixed export