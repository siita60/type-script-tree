import fs from 'fs';
import path from 'path';
import { TODO_any } from './types';

const readDirectory = (dir, depth, options) => {
  if (options.level <  depth){
    return [];
  }
  const dirents = fs.readdirSync(dir, {
    withFileTypes: true,
  });
  const nodes: TODO_any[] = [];
  dirents.forEach((dirent) => {
    if(dirent.name.startsWith('.')){
      return;
    }

    if(dirent.isFile()){
      nodes.push({
        type: 'file',
        name: dirent.name,
      })
    } else if (dirent.isDirectory()){
      nodes.push({
        type: 'directory',
        name: dirent.name,
        children: readDirectory(
          path.join(dir, dirent.name),
          depth + 1, 
          options
        ),
      });
    }
  });
  
  return nodes;
}

export const read = (dir, options) => {
  let stat;

  try {
    stat = fs.statSync(dir);
  } catch (e){
    // dirが読み取れなかった場合
    throw new Error(`${dir} not exist!`);
  }

  // ディレクトリじゃない場合
  if(!stat.isDirectory()){
    throw new Error(`${dir} cannot be opened as directory`)
  }

  const root = {
    type: 'directory',
    name: dir,
    children: readDirectory(dir, 1, options),
  };

  return root;

}
