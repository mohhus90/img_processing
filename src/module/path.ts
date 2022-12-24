import path from 'path';
const imgFiles: string[] = [
  'santamonica',
  'fjord',
  'palmtunnel',
  'encenadaport',
  'icelandwaterfall',
];
const imgPath: string = path.resolve('./') + `/src/img/`;
const thumbpath: string = path.resolve('./') + `/src/thumb/`;
export { imgPath, thumbpath, imgFiles };
