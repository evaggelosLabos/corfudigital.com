import { BookingQuote, Property } from "@repo/types";

/**
 * Calculates number of nights between check-in and check-out strings (YYYY-MM-DD)
 */
export function calculateNights(checkIn: string, checkOut: string): number {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

/**
 * Calculates how much money a hotel/villa loses to OTAs (Booking.com / Airbnb)
 * and how much they save with a custom direct booking platform.
 */
export interface CommissionEstimate {
  annualRevenue: number;
  otaRatePercentage: number;
  otaLossAmount: number;
  directStripeFee: number;
  netAnnualSavings: number;
}

export function calculateOtaSavings(
  annualRevenue: number,
  otaRatePercentage: number = 18,
  stripeFeePercentage: number = 1.6
): CommissionEstimate {
  const otaLossAmount = Math.round(annualRevenue * (otaRatePercentage / 100));
  const directStripeFee = Math.round(annualRevenue * (stripeFeePercentage / 100));
  const netAnnualSavings = otaLossAmount - directStripeFee;

  return {
    annualRevenue,
    otaRatePercentage,
    otaLossAmount,
    directStripeFee,
    netAnnualSavings,
  };
}

/**
 * Computes direct booking price with optional seasonal rates and tax
 */
export function calculateBookingPrice(
  property: Property,
  checkIn: string,
  checkOut: string,
  options?: {
    cleaningFee?: number;
    taxRatePercentage?: number;
  }
): BookingQuote {
  const nights = calculateNights(checkIn, checkOut);
  const basePricePerNight = property.basePricePerNight;
  const baseTotal = nights * basePricePerNight;
  const cleaningFee = options?.cleaningFee ?? 80;
  const taxRate = (options?.taxRatePercentage ?? 0.5) / 100;
  const localTax = Math.round(baseTotal * taxRate * 100) / 100;
  const totalPrice = baseTotal + cleaningFee + localTax;

  const breakdown: Array<{ date: string; price: number }> = [];
  const current = new Date(checkIn);
  for (let i = 0; i < nights; i++) {
    const d = new Date(current);
    d.setDate(d.getDate() + i);
    breakdown.push({
      date: d.toISOString().split("T")[0],
      price: basePricePerNight,
    });
  }

  return {
    nights,
    pricePerNight: basePricePerNight,
    baseTotal,
    cleaningFee,
    localTax,
    totalPrice,
    currency: property.currency,
    breakdown,
  };
}

/**
 * Checks if a requested date range conflicts with existing bookings
 */
export function isRangeAvailable(
  checkIn: string,
  checkOut: string,
  existingBookings: Array<{ checkIn: string; checkOut: string }>
): boolean {
  const reqStart = new Date(checkIn).getTime();
  const reqEnd = new Date(checkOut).getTime();

  for (const b of existingBookings) {
    const bStart = new Date(b.checkIn).getTime();
    const bEnd = new Date(b.checkOut).getTime();

    if (reqStart < bEnd && reqEnd > bStart) {
      return false;
    }
  }

  return true;
}
