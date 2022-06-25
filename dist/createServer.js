"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const invalidRoute_1 = __importDefault(require("./routes/controllers/invalidRoute"));
exports.default = (v) => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.static('public'));
    app.use((0, cors_1.default)());
    app.use(`/api/v${v}/`, routes_1.default);
    app.get('*', invalidRoute_1.default);
    return app;
};
//# sourceMappingURL=createServer.js.map