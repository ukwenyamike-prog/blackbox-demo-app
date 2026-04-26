import express from 'express';
import { validateToken } from './middleware';

const router = express.Router();

router.post('/login', validateToken, (req, res) => {
  res.json({ message: 'login' });
});

router.post('/validate', validateToken, (req, res) => {
  res.json({ message: 'validate' });
});

export default router;