export async function handleRequest(req: any, res: any) {
  const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL;
  const PAYMENT_SERVICE_URL = process.env.PAYMENT_SERVICE_URL;

  const authResponse = await fetch(`${AUTH_SERVICE_URL}/verify`, {
    method: 'POST',
    headers: { Authorization: req.headers.authorization }
  });
  if (!authResponse.ok) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.path.startsWith('/payment')) {
    const paymentResponse = await fetch(`${PAYMENT_SERVICE_URL}/charge`, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json', Authorization: req.headers.authorization }
    });
    const result = await paymentResponse.json();
    res.json(result);
  } else {
    res.json({ message: 'OK' });
  }
}