"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utils_1 = require("../utils");
const app = (0, express_1.Router)();
app.post('/send', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { message, to } = req.body;
        const content = message || "No content.";
        yield (0, utils_1.sendEmail)(content, to);
        res.status(200).send({
            message: `Email is sent to ${to}`
        });
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "internal Server Error."
        });
    }
}));
exports.default = app;
