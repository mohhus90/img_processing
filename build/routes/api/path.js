"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imgFiles = exports.thumbpath = exports.imgPath = void 0;
var path_1 = __importDefault(require("path"));
var imgFiles = ['santamonica', 'fjord', 'palmtunnel', 'encenadaport', 'icelandwaterfall'];
exports.imgFiles = imgFiles;
var imgPath = path_1.default.resolve('./') + "/src/img/";
exports.imgPath = imgPath;
var thumbpath = path_1.default.resolve('./') + "/src/thumb/";
exports.thumbpath = thumbpath;
