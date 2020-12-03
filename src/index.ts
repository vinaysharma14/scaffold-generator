import { FlatDirStructure, DirStructure } from './types';

import {
  SHOW_PATH,
  CURR_DEPTH,
  LINE_HEIGHT,
  INDENTATION,
  DIR_STRUCTURE,
  SHALLOW_DEPTH,
} from './constants';

const flatDirStructure: FlatDirStructure[] = [];

const flattenDirStructure = (
  data: DirStructure['data'],
  depth: number,
  dir?: string
) => {
  if (typeof data === 'string') {
    return { path: dir, isFile: true };
  } else {
    data.reverse().forEach(({ name, data }) => {
      const { path, isFile } = flattenDirStructure(
        data,
        depth + INDENTATION,
        `${dir}/${name}`
      );

      flatDirStructure.push({
        name,
        path,
        depth,
        isFile,
      });
    });

    return { path: dir, isFile: true };
  }
};

const prettyPrintTodo = () => {
  console.clear();

  console.log(
    flatDirStructure
      .reverse()
      .map(({ name, depth, path }, index) => {
        let shallowDir = new Set();

        // create a set of all the unique depths
        // shallower than this this directory/file
        for (let i = index; i < flatDirStructure.length - 1; i++) {
          if (flatDirStructure[i].depth < depth) {
            shallowDir.add(flatDirStructure[i].depth);
          }
        }

        // just to detect if it's last file or last directory
        // const isLastNode = index === flatDirStructure.length - 1 ? true : flatDirStructure[index + 1].depth !== depth;

        // number of depths shallower than this directory/file
        const shallowDirLen = [...shallowDir].length;

        // generate a prefix for the directory tree like: |  |  |__
        // where |  and |  represent all the shallow directories/files
        // and |__ represents the actual current directory/file in this iteration
        const prefix = `${' '.repeat(depth - (shallowDirLen * 2))}${SHALLOW_DEPTH.repeat(shallowDirLen)}${CURR_DEPTH}`;

        // return the name of directory/file with the prefix
        return `${depth ? prefix : ''}${name}${SHOW_PATH ? ` [${path}]` : ''}${shallowDirLen}`;
      })
      .join('\n')
  );
};

const prettyPrint = () => {
  console.clear();

  console.log(
    flatDirStructure
      .reverse()
      .map(({ name, depth, path }) =>
        `${depth ? `${'|\n'.repeat(LINE_HEIGHT)}|` : ''}${'_'.repeat(depth)}${name} [${path}]`
      )
      .join('\n')
  );
};

flattenDirStructure(DIR_STRUCTURE, 0, '');
prettyPrint();