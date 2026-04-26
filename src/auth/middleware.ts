/**
 * Middleware to validate JWT tokens in incoming requests.
 *
 * This middleware checks for the presence of an Authorization header
 * with a Bearer token, verifies the token using the verifyToken function,
 * and attaches the decoded payload to the request object.
 *
 * Usage:
 * app.use('/protected', validateToken, (req, res) => { ... });
 *
 * @param req - The Express request object
 * @param res - The Express response object
 * @param next - The next middleware function
 */

import { verifyToken } from './token';

export function validateToken(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  const token = authHeader.slice(7);
  try {
    const payload = verifyToken(token);
    (req as any).user = payload;
    next();
  } catch (err: any) {
    return res.status(401).json({ error: 'Invalid token', detail: err.message });
  }
}