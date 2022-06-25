"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookings = exports.searchBookings = exports.createABooking = void 0;
const lodash_1 = __importDefault(require("lodash"));
const dayjs_1 = __importDefault(require("dayjs"));
const isBetween_1 = __importDefault(require("dayjs/plugin/isBetween"));
const bookingValidation_1 = __importDefault(require("../../utils/bookingValidation"));
const bookings_json_1 = __importDefault(require("../../data/bookings.json"));
const utils_1 = require("../../utils");
dayjs_1.default.extend(isBetween_1.default);
function createABooking(req, res) {
    const booking = req.body;
    const errors = (0, bookingValidation_1.default)(booking);
    if (errors.length > 0) {
        res.status(400).send(errors);
    }
    const id = (0, utils_1.getNewId)(bookings_json_1.default);
    bookings_json_1.default.push(Object.assign(Object.assign({}, booking), { id }));
    res.send(lodash_1.default.last(bookings_json_1.default));
}
exports.createABooking = createABooking;
function searchBookings(req, res) {
    const { date, term } = req.query;
    if (!date && !term) {
        res.status(400).send('Bad request, you must provide date or term');
    }
    if (date && (0, dayjs_1.default)(date, 'YYYY-MM-DD', true).isValid() === false) {
        res.status(400).send('Invalid date');
    }
    const filteredBookings = bookings_json_1.default.filter((booking) => {
        const dateMatch = (0, dayjs_1.default)(date).isBetween(booking.checkInDate, booking.checkOutDate, 'day', '[]');
        const termMatch = (0, utils_1.matchStrings)(term, booking.firstName, booking.surname, booking.email);
        return dateMatch || termMatch;
    });
    if (filteredBookings.length === 0) {
        res.status(404).send('No bookings found');
    }
    res.send(filteredBookings);
}
exports.searchBookings = searchBookings;
function getBookings(_req, res) {
    res.send(bookings_json_1.default);
}
exports.getBookings = getBookings;
//# sourceMappingURL=bookings.js.map