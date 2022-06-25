import { Router } from 'express';
import welcome from './controllers/welcome';
import { createABooking, searchBookings } from './controllers/bookings';

const routes: Router = Router();

routes.get('/', welcome)
  .post('/bookings', createABooking)
  .get('/bookings/search', searchBookings);

export default routes;
