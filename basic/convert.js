//Create a function that reads image file in the jpg format from the 'images' folder and returns a list of the image file names.
//Image file extensions are not case sensitive.
//Use the ES module scope

import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const convert = () => {
    const files = fs.readdirSync(path.join(__dirname, 'images'));
    return files.filter(file => path.extname(file).toLowerCase() === '.jpg');
};

export default convert;

//print the output
console.log(convert()); // [ 'image1.jpg', 'image2.JPG' ]
