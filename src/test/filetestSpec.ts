import { thumbpath } from '../module/path';
import checkImgExist from '../module/fileprocess';
import resizeImge from '../module/resizeImg';
import { imgPath } from '../module/path';

describe('Test if Image Exist', () => {
  it('Expect checkImgExist function defined ', () => {
    expect(checkImgExist).toBeDefined();
  });

  it('Expect checkImgExist function to return true with file name fjord-500x200.jpg ', () => {
    expect(checkImgExist('fjord', 500, 300) instanceof Promise).toEqual(true);
  });
  const newimgpath = `${thumbpath}/fjord-500x600.jpg`;
  it('Expect Image fjord-500x300.jpg should exist in the new path', async () => {
    const fileImgPath = `${imgPath}fjord.jpg`;
    expect(await resizeImge(fileImgPath, 500, 300, newimgpath)).toBeTruthy();
  });


});
