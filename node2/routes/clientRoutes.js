import express from 'express';
import { getsDetails, postsDetails } from '../action/action.js';

const router = express.Router();

router.get('/',getsDetails)
router.post('/',postsDetails)

export default router;
