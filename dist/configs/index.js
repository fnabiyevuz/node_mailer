"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trasport = void 0;
const nodemailer_1 = require("nodemailer");
const index_1 = require("./../secrets/index");
exports.trasport = (0, nodemailer_1.createTransport)({
    service: "Gmail",
    auth: {
        user: index_1.EMAIL,
        pass: index_1.PASSWORD
    }
});
