import express from 'express';
import { getAnimalsHTML } from '../controllers/animalsControllers.js';
const router = express.Router();

router.get('/:animal', getAnimalsHTML);

export default router;