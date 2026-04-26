const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL;

export async function validateAuthToken(authHeader: string | undefined): Promise<void> {
  const response = await fetch(`${AUTH_SERVICE_URL}/validate`, {
    method: 'POST',
    headers: { Authorization: authHeader }
  });
  if (!response.ok) {
    throw new Error('Auth validation failed');
  }
}