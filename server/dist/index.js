"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var PORT = 3200;
app.listen(PORT, function () {
    console.log("server Runnig port ".concat(PORT));
});
//# sourceMappingURL=index.js.map