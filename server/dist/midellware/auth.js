"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteAuth = void 0;
var RouteAuth = function (req, res, next) {
    var headre = req.headers["login"];
    if (!headre) {
        res.status(403).json({ mensaje: "No autorizado..." });
    }
    else
        next();
};
exports.RouteAuth = RouteAuth;
//# sourceMappingURL=auth.js.map