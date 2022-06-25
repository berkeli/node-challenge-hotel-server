import dayjs from 'dayjs';
import * as EmailValidator from 'email-validator';
import TBooking from '../types/booking';

const bookingValidation = (booking: TBooking): string[] => {
  const errors = [];
  if (!booking.title) {
    errors.push('Required field title isn\'t filled');
  }
  if (!booking.firstName) {
    errors.push('Required field firstName isn\'t filled');
  }
  if (!booking.surname) {
    errors.push('Required field surname isn\'t filled');
  }
  if (!booking.email) {
    errors.push('Required field email isn\'t filled');
  } else if (EmailValidator.validate(booking.email) === false) {
    errors.push('Invalid email');
  }
  if (!booking.roomId) {
    errors.push('Required field roomId isn\'t filled');
  }
  if (!booking.checkInDate || dayjs(booking.checkInDate, 'YYYY-MM-DD', true).isValid() === false) {
    errors.push('Required field checkInDate isn\'t filled');
  }
  if (!booking.checkInDate || dayjs(booking.checkOutDate, 'YYYY-MM-DD', true).isValid() === false) {
    errors.push('Required field checkInDate isn\'t filled');
  }
  return errors;
};

export default bookingValidation;
