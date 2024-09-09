import express from 'express';
import { getsDetails, postsDetails,updateDetails,deleteDetails, detailsId } from '../action/action.js';

const router = express.Router();

router.get('/',getsDetails)
router.post('/',postsDetails)
router.get('/:id',detailsId)
router.patch('/:id',updateDetails)
router.delete('/:id',deleteDetails)

export default router;
