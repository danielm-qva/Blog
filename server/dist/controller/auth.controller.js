"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
var fs = __importStar(require("fs"));
var login = function (req, res) {
    var loginB = false;
    var _a = req.body, nameuser = _a.nameuser, password = _a.password;
    var redM = JSON.parse(fs.readFileSync(__dirname + '/db.json', 'utf8'));
    redM.map(function (res) {
        if (res.user === nameuser && res.pass == password) {
            loginB = !loginB;
        }
    });
    if (loginB) {
        res.status(200).send({ date: new Date(), login: true, mensaje: "Loing realizaon con exito..." });
    }
    else {
        res.status(500).send({ date: new Date(), login: false, mensaje: "Login no ha sido exitos..." });
    }
};
exports.login = login;
//# sourceMappingURL=auth.controller.js.map