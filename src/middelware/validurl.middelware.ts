import { Response, Request, NextFunction } from 'express';
import { query, validationResult, ValidationError } from 'express-validator';
import { imgFiles } from '../module/path';

const imgreszeValid = () => [
  query('name')
    .exists()
    .withMessage('Please enter File name ')
    .isIn(imgFiles)
    .withMessage(
      "Please enter avalid File name like ['santamonica', 'fjord',  'palmtunnel', 'encenadaport','icelandwaterfall']"
    ),
  query('width')
    .exists()
    .withMessage('Please enter width size ')
    .toInt()
    .isInt({ max: 1000, min: 50 })
    .withMessage('Please enter a width number betweeen 50 and 1000'),
  query('hieght')
    .exists()
    .withMessage('Please enter hieght size ')
    .toInt()
    .isInt({ max: 1000, min: 50 })
    .withMessage('Please enter a hieght number betweeen 50 and 1000'),
];

const validMideware = (
  Request: Request,
  Response: Response,
  next: NextFunction
) => {
  const errorFormatter = ({ msg, param }: ValidationError) =>
    `[${param}]: ${msg}`;
  const errors = validationResult(Request).formatWith(errorFormatter);
  if (errors.isEmpty()) {
    return next();
  }
  return Response.status(422).json({
    errors: errors.array({ onlyFirstError: false }),
  });
};

export { imgreszeValid, validMideware };
