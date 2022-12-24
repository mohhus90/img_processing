import Express, { NextFunction } from 'express';

const logger = (
  req: Express.Request,
  res: Express.Response,
  next: NextFunction
): void => {
  const url = req.url;
  console.log(`${url} was visited`);
  next();
};
export default logger;
