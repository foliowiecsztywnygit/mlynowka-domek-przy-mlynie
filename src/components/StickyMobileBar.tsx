import React from 'react';
import { useLocation } from 'react-router-dom';
import { getBookingUrl } from '../data/bookingLinks';

interface StickyMobileBarProps {
  onOpenBooking?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = () => {
  const location = useLocation();
  const isItaly = location.pathname.startsWith('/wlochy') || location.pathname.startsWith('/sardynia');
  const bookingUrl = getBookingUrl(isItaly);

  const whatsappMessage = isItaly
    ? 'Dzień dobry, pytam o wolny termin w obiekcie Il Dolce Tramonto Apartment na Sardynii'
    : 'Dzień dobry, pytam o wolny termin w domku Młynówka';

  return (
    <aside className="ukoi-sticky-mobile-bar" aria-label="Pasek rezerwacji mobilnej">
      <a 
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-sage btn-mobile-book ${isItaly ? 'btn-italy' : ''}`}
        style={isItaly ? { backgroundColor: '#C2633C', borderColor: '#C2633C' } : undefined}
        data-booking-trigger="true"
      >
        ZAREZERWUJ ONLINE
      </a>
      <a 
        href={`https://wa.me/48791040091?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-mobile-icon"
        aria-label="Napisz na WhatsApp"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      </a>
      <a href="tel:+48791040091" className="btn-mobile-icon" aria-label="Zadzwoń do nas">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </aside>
  );
};
