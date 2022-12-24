import express, { Router } from 'express';
import imgroutes from './api/imgprocess';

const routes: Router = express.Router();
routes.use('/img', imgroutes);
export default routes;
