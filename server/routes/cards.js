import express from 'express';

import { getPosts} from '../controllers/cards.js';

const router = express.Router();

router.get('/', getPosts);

export default router;