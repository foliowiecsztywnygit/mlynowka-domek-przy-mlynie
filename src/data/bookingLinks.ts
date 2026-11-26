export const PIENINY_BOOKING_URL = 'https://booking.brosystems.pl/6b32dd5c8ba1bf9f?propId=367409';
export const ITALY_BOOKING_URL = 'https://booking.brosystems.pl/6b32dd5c8ba1bf9f?propId=954321';

export interface BookingDates {
  checkIn?: string;
  checkOut?: string;
}

export function getBookingUrl(isItaly: boolean, dates?: BookingDates): string {
  const baseUrl = isItaly ? ITALY_BOOKING_URL : PIENINY_BOOKING_URL;
  if (!dates?.checkIn && !dates?.checkOut) {
    return baseUrl;
  }

  const url = new URL(baseUrl);
  if (dates.checkIn) {
    url.searchParams.set('checkIn', dates.checkIn);
  }
  if (dates.checkOut) {
    url.searchParams.set('checkOut', dates.checkOut);
  }
  return url.toString();
}
