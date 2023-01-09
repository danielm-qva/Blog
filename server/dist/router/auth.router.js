"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = require("../controller/auth.controller");
var routerAuth = (0, express_1.Router)();
routerAuth.post('/login', auth_controller_1.login);
exports.default = routerAuth;
//# sourceMappingURL=auth.router.js.map