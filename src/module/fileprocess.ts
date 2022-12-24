import fs from 'fs-extra';
import { thumbpath } from './path';

const checkImgExist = async (
  fname: string,
  width: number,
  hieght: number
): Promise<boolean> => {
  const newimgpath = `${thumbpath}${fname}-${width}x${hieght}.jpg`;
  try {
    await fs.ensureDir(thumbpath);
    const fullPathExist: boolean = await fs.pathExists(newimgpath);
    return fullPathExist;
  } catch (error) {
    throw new Error('file not exist');
  }
};
export default checkImgExist;
