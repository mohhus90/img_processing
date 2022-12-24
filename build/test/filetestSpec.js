"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("../module/path");
var fileprocess_1 = __importDefault(require("../module/fileprocess"));
var fs_1 = __importDefault(require("fs"));
describe('Test if Image Exist', function () {
    it('Expect checkImgExist function defined ', function () {
        expect(fileprocess_1.default).toBeDefined();
    });
    it('Expect checkImgExist function to return true with file name fjord-500x200.jpg ', function () {
        expect((0, fileprocess_1.default)('fjord', 500, 200) instanceof Promise).toEqual(true);
    });
    it('Expect Image fjord-500x600.jpg should not be exist in the new path', function () {
        expect(fs_1.default.existsSync("".concat(path_1.thumbpath, "/fjord-500x600.jpg"))).toBeFalsy();
    });
    it('Expect Image fjord-500x600.jpg should exist in the new path', function () {
        expect(fs_1.default.existsSync("".concat(path_1.thumbpath, "/fjord-500x200.jpg"))).toBeTruthy();
    });
});
