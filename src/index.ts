import { FlatDirStructure, DirStructure } from './types';
import { LINE_HEIGHT, INDENTATION, DIR_STRUCTURE, } from './constants';

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
      .map(({ name, depth, path }) =>
        `${depth ? `${' '.repeat(depth - INDENTATION)}|__` : ''}${name} [${path}]`
      )
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