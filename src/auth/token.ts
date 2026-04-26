export interface TokenPayload {
  sub: string;
  email: string;
  exp: number;
}

export function verifyToken(token: string): TokenPayload {
  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid token format');
  }
  const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'));
  if (payload.exp < Date.now() / 1000) {
    throw new Error('Token expired');
  }
  return payload;
}