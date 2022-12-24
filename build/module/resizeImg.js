"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
// const imgname = '' as string;
// const width :number = 0;
// const hieght  :number = 0;
// const newpath = path.join(thumbpath,`${imgname}-${width}x${hieght}.jpg`);
// const fileImgPath = `${imgPath}${imgname}.jpg`;
var resizeImge = function (fileImgPath, hieght, width, newpath) {
    (0, sharp_1.default)(fileImgPath)
        .resize(hieght, width)
        .toFile(newpath);
};
exports.default = resizeImge;
