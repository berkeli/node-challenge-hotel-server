"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (bookings) => {
    if (bookings.length === 0)
        return 1;
    return bookings[bookings.length - 1].id + 1;
};
//# sourceMappingURL=getNewId.js.map