"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const createServer_1 = __importDefault(require("./createServer"));
const logger_1 = __importDefault(require("./utils/logger"));
dotenv_1.default.config();
const app = (0, createServer_1.default)(1);
const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
    logger_1.default.info(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map