"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validMideware = exports.imgreszeValid = void 0;
var express_validator_1 = require("express-validator");
var path_1 = require("../module/path");
var imgreszeValid = function () { return [
    (0, express_validator_1.query)('name').exists().withMessage("Please enter File name ")
        .isIn(path_1.imgFiles).withMessage("Please enter avalid File name like ['santamonica', 'fjord',  'palmtunnel', 'encenadaport','icelandwaterfall']"),
    (0, express_validator_1.query)('width').exists().withMessage("Please enter width size ")
        .toInt().isInt({ max: 1000, min: 50 }).withMessage("Please enter a width number betweeen 50 and 1000"),
    (0, express_validator_1.query)('hieght').exists().withMessage("Please enter hieght size ")
        .toInt().isInt({ max: 1000, min: 50 }).withMessage("Please enter a hieght number betweeen 50 and 1000"),
]; };
exports.imgreszeValid = imgreszeValid;
var validMideware = function (Request, Response, next) {
    var errorFormatter = function (_a) {
        var msg = _a.msg, param = _a.param;
        return "[".concat(param, "]: ").concat(msg);
    };
    var errors = (0, express_validator_1.validationResult)(Request).formatWith(errorFormatter);
    if (errors.isEmpty()) {
        return next();
    }
    return Response.status(422).json({
        errors: errors.array({ onlyFirstError: false })
    });
};
exports.validMideware = validMideware;
