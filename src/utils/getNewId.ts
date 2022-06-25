import TBooking from '../types/booking';

export default (bookings: TBooking[]) => {
  if (bookings.length === 0) return 1;
  return bookings[bookings.length - 1].id + 1;
};
