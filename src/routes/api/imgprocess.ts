import express, { Request, Response } from 'express';
import checkImgExist from '../../module/fileprocess';
import path from 'path';
import { thumbpath, imgPath } from '../../module/path';
import {
  imgreszeValid,
  validMideware,
} from '../../middelware/validurl.middelware';
import resizeImge from '../../module/resizeImg';

const imgroutes = express.Router();
imgroutes.get(
  '/',
  imgreszeValid(),
  validMideware,
  async (req: Request, res: Response): Promise<void> => {
    const imgname = req.query.name as string;
    const width = parseInt(req.query.width as string);
    const hieght = parseInt(req.query.hieght as string);
    const newpath = path.join(thumbpath, `${imgname}-${width}x${hieght}.jpg`);
    try {
      const findImg = await checkImgExist(imgname, width, hieght);
      if (!findImg) {
        const fileImgPath = `${imgPath}${imgname}.jpg`;
        await resizeImge(fileImgPath, hieght, width, newpath);
        res.sendFile(newpath);
      } else if (findImg) {
        res.sendFile(newpath);
      }
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }
);
export default imgroutes;
