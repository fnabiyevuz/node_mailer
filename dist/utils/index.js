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
exports.sendEmail = void 0;
const index_1 = require("./../configs/index");
const sendEmail = (content, to) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.trasport.sendMail({
            to,
            html: `<h1>${content}<h1>`
        });
    }
    catch (err) {
        throw err;
    }
});
exports.sendEmail = sendEmail;
