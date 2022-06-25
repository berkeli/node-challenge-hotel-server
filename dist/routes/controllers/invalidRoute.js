"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../utils/logger"));
function invalidRoute(req, res) {
    logger_1.default.info(`INVALID ROUTE - ${req.method} - ${req.originalUrl}`);
    res.status(404).send('Nothing to see here');
}
exports.default = invalidRoute;
//# sourceMappingURL=invalidRoute.js.map