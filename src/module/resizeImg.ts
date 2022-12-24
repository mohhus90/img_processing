import sharp from 'sharp';

const resizeImge = async (
  fileImgPath: string,
  hieght: number,
  width: number,
  newpath: string
): Promise<void> => {
  await sharp(fileImgPath).resize(hieght, width).toFile(newpath);
};

export default resizeImge;
