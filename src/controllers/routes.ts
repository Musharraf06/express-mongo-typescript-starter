import express from 'express';
import { index } from './index';
let router = express.Router();

router.get('/', index);

export default router;
