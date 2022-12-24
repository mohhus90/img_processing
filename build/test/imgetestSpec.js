"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fileprocess_1 = __importDefault(require("../module/fileprocess"));
describe('Test if Image Exist', function () {
    it('expect ccheckImgExist function defined ', function () {
        expect(fileprocess_1.default).toBeDefined();
    });
    it('expect checkImgExist function to return true with file name icelandwaterfall-500x200.jpg ', function () {
        expect((0, fileprocess_1.default)('icelandwaterfall', 500, 200) instanceof Promise).toEqual(true);
    });
});
