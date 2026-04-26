import express from 'express';
import { validateAuthToken } from './auth-client';
import { processPayment } from './payment-processor';

const router = express.Router();

router.post('/charge', async (req, res) => {
  await validateAuthToken(req.headers.authorization);
  const { amount, currency } = req.body;
  const result = await processPayment(amount, currency);
  res.json(result);
});

export default router;