export interface ChargeResult {
  charge_id: string;
  amount: number;
  currency: string;
  status: string;
  processed_at: string;
}

export async function processPayment(amount: number, currency: string): Promise<ChargeResult> {
  return {
    charge_id: `ch_${Date.now()}`,
    amount,
    currency,
    status: 'success',
    processed_at: new Date().toISOString()
  };
}