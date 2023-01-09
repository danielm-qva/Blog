"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var connectionMongoDb = mongoose_1.default.connect('mongodb://localhost:33017/test');
exports.default = connectionMongoDb;
//# sourceMappingURL=connect.js.map