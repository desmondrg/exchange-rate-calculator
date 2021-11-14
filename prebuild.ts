import * as fs from 'fs';

import rimraf  from  'rimraf';
import path from 'path';

const distDir = path.resolve(process.cwd(), "dist/server");
//remove the directory
rimraf(distDir,  () =>{

    // recreate the directory
    fs.mkdirSync(distDir, {recursive: true});

    // copy files
    fs.copyFileSync('./package.json', `${distDir}/package.json`);
    fs.copyFileSync('./README.md', `${distDir}/README.md`);
    fs.copyFileSync('./tsconfig.json', `${distDir}/tsconfig.json`);
    fs.copyFileSync('./tsconfig.server.json', `${distDir}/tsconfig.server.json`);

});

