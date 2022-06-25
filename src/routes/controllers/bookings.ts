import { Request, Response } from 'express';
import _ from 'lodash';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import bookingValidation from '../../utils/bookingValidation';
import TBooking from '../../types/booking';
import bookings from '../../data/bookings.json';
import { getNewId, matchStrings } from '../../utils';

dayjs.extend(isBetween);

export function createABooking(req:Request, res:Response):void {
  const booking: TBooking = req.body;
  const errors: string[] = bookingValidation(booking);
  if (errors.length > 0) {
    res.status(400).send(errors);
  }
  const id = getNewId(bookings);
  bookings.push({
    ...booking,
    id,
  });
  res.send(_.last(bookings));
}

interface ISearchByDate extends Request {
  query: {
    date: string;
    term: string;
  }
}

export function searchBookings(req:ISearchByDate, res:Response):void {
  const { date, term } = req.query;
  if (!date && !term) {
    res.status(400).send('Bad request, you must provide date or term');
  }
  if (date && dayjs(date, 'YYYY-MM-DD', true).isValid() === false) {
    res.status(400).send('Invalid date');
  }
  const filteredBookings = bookings.filter((booking: TBooking) => {
    const dateMatch = dayjs(date).isBetween(booking.checkInDate, booking.checkOutDate, 'day', '[]');
    const termMatch = matchStrings(term, booking.firstName, booking.surname, booking.email);
    return dateMatch || termMatch;
  });
  if (filteredBookings.length === 0) {
    res.status(404).send('No bookings found');
  }
  res.send(filteredBookings);
}

export function getBookings(_req:Request, res:Response):void {
  res.send(bookings);
}
