import express from 'express';
import { getAnimalHTML } from '../controllers/animalsControllers.js';
const router = express.Router();

router.get('/:animal/:id', getAnimalHTML);

export default router;