import { DirStructure } from "../types";

const INDENTATION = 2;
const LINE_HEIGHT = 0;
const SHOW_PATH = false;
const CURR_DEPTH = '|__';
const SHALLOW_DEPTH = '|  ';

const DIR_STRUCTURE: DirStructure[] = [
  {
    name: 'root',
    data: [
      {
        name: 'dir_a',
        data: [
          { name: 'file_00.txt', data: 'file_00 content' },
          {
            name: 'dir_b',
            data: [
              {
                name: 'dir_c',
                data: [
                  { name: 'file_01.txt', data: 'file_01 content' },
                  { name: 'file_02.txt', data: 'file_02 content' },
                  { name: 'file_03.txt', data: 'file_03 content' },
                  {
                    name: 'file_04.txt',
                    data: [
                      {
                        name: 'dir_a',
                        data: [
                          { name: 'file_00.txt', data: 'file_00 content' },
                          {
                            name: 'dir_b',
                            data: [
                              {
                                name: 'dir_c',
                                data: [
                                  { name: 'file_01.txt', data: 'file_01 content' },
                                  { name: 'file_02.txt', data: 'file_02 content' },
                                  { name: 'file_03.txt', data: 'file_03 content' },
                                  { name: 'file_04.txt', data: 'file_04 content' }
                                ]
                              },
                              { name: 'file_05.txt', data: 'file_05 content' },
                              { name: 'file_06.txt', data: 'file_06 content' }
                            ]
                          },
                          {
                            name: 'dir_d',
                            data: [
                              { name: 'file_07.txt', data: 'file_07 content' },
                              { name: 'file_08.txt', data: 'file_08 content' }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              { name: 'file_05.txt', data: 'file_05 content' },
              { name: 'file_06.txt', data: 'file_06 content' }
            ]
          },
          {
            name: 'dir_d',
            data: [
              { name: 'file_07.txt', data: 'file_07 content' },
              { name: 'file_08.txt', data: 'file_08 content' }
            ]
          }
        ]
      }
    ]
  }
];

export {
  SHOW_PATH,
  CURR_DEPTH,
  LINE_HEIGHT,
  INDENTATION,
  DIR_STRUCTURE,
  SHALLOW_DEPTH,
}