"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const welcome_1 = __importDefault(require("./controllers/welcome"));
const bookings_1 = require("./controllers/bookings");
const routes = (0, express_1.Router)();
routes.get('/', welcome_1.default)
    .post('/bookings', bookings_1.createABooking)
    .get('/bookings/search', bookings_1.searchBookings);
exports.default = routes;
//# sourceMappingURL=index.js.map