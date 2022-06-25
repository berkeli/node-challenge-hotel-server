"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (searchString, ...strings) => {
    return strings.some((string) => {
        return string.toLowerCase().includes(searchString.toLowerCase());
    });
};
//# sourceMappingURL=matchStrings.js.map