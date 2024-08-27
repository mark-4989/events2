import express from 'express';
import { getsDetails, postsDetails,updateDetails } from '../action/action.js';

const router = express.Router();

router.get('/',getsDetails)
router.post('/',postsDetails)
router.patch('/:id',updateDetails)

export default router;
