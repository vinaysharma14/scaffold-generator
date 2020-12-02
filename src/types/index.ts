type DirStructure = {
  name: string;
  data: string | DirStructure[];
};

type FlatDirStructure = {
  name: string;
  depth: number;
  path?: string;
  isFile: boolean;
};

export {
  DirStructure,
  FlatDirStructure,
}