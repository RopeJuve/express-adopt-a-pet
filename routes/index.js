import express from 'express';
import { getIndexHTML } from '../controllers/animalsControllers.js';

const router = express.Router();

router.get('/', getIndexHTML);

export default router;