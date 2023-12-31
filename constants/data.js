const alphabetBrailleCells = [
  {
    name: "⠁",
    braille_name: "Cell A",
    translation: "A",
    braille_id: "1",
    braille_format: "dot 1",
  },
  {
    name: "⠃",
    braille_name: "Cell B",
    translation: "B",
    braille_id: "2",
    braille_format: "dots 1 and 2",
  },
  {
    name: "⠉",
    braille_name: "Cell C",
    translation: "C",
    braille_id: "3",
    braille_format: "dots 1 and 4",
  },
  {
    name: "⠙",
    braille_name: "Cell D",
    translation: "D",
    braille_id: "4",
    braille_format: "dots 1, 4, and 5",
  },
  {
    name: "⠑",
    braille_name: "Cell E",
    translation: "E",
    braille_id: "5",
    braille_format: "dots 1 and 5",
  },
  {
    name: "⠋",
    braille_name: "Cell F",
    translation: "F",
    braille_id: "6",
    braille_format: "dots 1, 2, and 4",
  },
  {
    name: "⠛",
    braille_name: "Cell G",
    translation: "G",
    braille_id: "7",
    braille_format: "dots 1, 2 and 4, 5",
  },
  {
    name: "⠓",
    braille_name: "Cell H",
    translation: "H",
    braille_id: "8",
    braille_format: "dots 1, 2, and 5",
  },
  {
    name: "⠊",
    braille_name: "Cell I",
    translation: "I",
    braille_id: "9",
    braille_format: "dots 2 and 4",
  },
  {
    name: "⠚",
    braille_name: "Cell J",
    translation: "J",
    braille_id: "10",
    braille_format: "dots 2, 4, and 5",
  },
  {
    name: "⠅",
    braille_name: "Cell K",
    translation: "K",
    braille_id: "11",
    braille_format: "dots 1, 3",
  },
  {
    name: "⠇",
    braille_name: "Cell L",
    translation: "L",
    braille_id: "12",
    braille_format: "dots 1, 2, 3",
  },
  {
    name: "⠍",
    braille_name: "Cell M",
    translation: "M",
    braille_id: "13",
    braille_format: "dots 1, 3, and 4",
  },
  {
    name: "⠝",
    braille_name: "Cell N",
    translation: "N",
    braille_id: "14",
    braille_format: "dots 1, 2, 3, and 4",
  },
  {
    name: "⠕",
    braille_name: "Cell O",
    translation: "O",
    braille_id: "15",
    braille_format: "dots 1, 3, and 5",
  },
  {
    name: "⠏",
    braille_name: "Cell P",
    translation: "P",
    braille_id: "16",
    braille_format: "dots 1, 2, 3, and 5",
  },
  {
    name: "⠟",
    braille_name: "Cell Q",
    translation: "Q",
    braille_id: "17",
    braille_format: "dots 1, 2, 3 and 4,  5",
  },
  {
    name: "⠗",
    braille_name: "Cell R",
    translation: "R",
    braille_id: "18",
    braille_format: "dots 1, 2, 3 and  5",
  },
  {
    name: "⠎",
    braille_name: "Cell S",
    translation: "S",
    braille_id: "19",
    braille_format: "dots 2, 3 and  4",
  },
  {
    name: "⠞",
    braille_name: "Cell T",
    translation: "T",
    braille_id: "20",
    braille_format: "dots 2, 3  and  4 , 5 ",
  },
  {
    name: "⠥",
    braille_name: "Cell U",
    translation: "U",
    braille_id: "21",
    braille_format: "dots 1 and 3 ,6 ",
  },
  {
    name: "⠧",
    braille_name: "Cell V",
    translation: "V",
    braille_id: "22",
    braille_format: "dots 1,2, 3 and  6 ",
  },
  {
    name: "⠺",
    braille_name: "Cell W",
    translation: "W",
    braille_id: "23",
    braille_format: "dots 2 and 4 , 5 ,6 ",
  },
  {
    name: "⠭",
    braille_name: "Cell X",
    translation: "X",
    braille_id: "24",
    braille_format: "dots 1, 3 and 4, 6",
  },
  {
    name: "⠽",
    braille_name: "Cell Y",
    translation: "Y",
    braille_id: "25",
    braille_format: "dots 1, 3 and 4 , 5 , 6 ",
  },
  {
    name: "⠵",
    braille_name: "Cell Z",
    translation: "Z",
    braille_id: "26",
    braille_format: "dots 1, 3, and 5, 6",
  },
];

const popularWords = [
  {
    word: "⠓⠑⠇⠇⠕. ",
    translation: "hello",
    word_id: "1",
  },
  {
    word: "⠑⠁⠞. ",
    translation: "eat",
    word_id: "2",
  },
  {
    word: "⠎⠇⠑⠑⠏. ",
    translation: "sleep",
    word_id: "3",
  },
  {
    word: "⠃⠁⠞⠓. ",
    translation: "bath",
    word_id: "4",
  },
  {
    word: "⠺⠁⠇⠅. ",
    translation: "walk",
    word_id: "5",
  },
  {
    word: "⠇⠑⠁⠗⠝. ",
    translation: "learn",
    word_id: "6",
  },
  {
    word: "⠺⠗⠊⠞⠑. ",
    translation: "write",
    word_id: "7",
  },
  {
    word: "⠗⠑⠁⠙. ",
    translation: "read",
    word_id: "8",
  },
];

const numberBrailleCells = [
  {
    name: "⠼⠁",
    braille_name: "Cell 1",
    translation: "1",
    braille_id: "1",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 1",
  },
  {
    name: "⠼⠃",
    braille_name: "Cell 2",
    translation: "2",
    braille_id: "2",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 1, 2 ",
  },
  {
    name: "⠼⠉",
    braille_name: "Cell 3",
    translation: "3",
    braille_id: "3",
    braille_format: "3, 4, 5, 6 and cell 2 dot 1, 4 ",
  },
  {
    name: "⠼⠊",
    braille_name: "Cell 4",
    translation: "4",
    braille_id: "4",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 1, 5 ",
  },
  {
    name: "⠼⠚",
    braille_name: "Cell 5",
    translation: "5",
    braille_id: "5",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 1, 5, 6 ",
  },
  {
    name: "⠼⠍",
    braille_name: "Cell 6",
    translation: "6",
    braille_id: "6",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 1, 2, 4  ",
  },
  {
    name: "⠼⠝",
    braille_name: "Cell 7",
    translation: "7",
    braille_id: "7",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dots 1, 2, 3,  4  ",
  },
  {
    name: "⠼⠕",
    braille_name: "Cell 8",
    translation: "8",
    braille_id: "8",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 1, 2,5 ",
  },
  {
    name: "⠼⠏",
    braille_name: "Cell 9",
    translation: "9",
    braille_id: "9",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 2, 4 ",
  },
  {
    name: "⠼⠟",
    braille_name: "Cell 10",
    translation: "10",
    braille_id: "10",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 2, 4, 5 ",
  },
  {
    name: "⠼⠑",
    braille_name: "Cell 11",
    translation: "11",
    braille_id: "11",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 3 ",
  },
  {
    name: "⠼⠋⠃",
    braille_name: "Cell 12",
    translation: "12",
    braille_id: "12",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 3, 4 ",
  },
  {
    name: "⠼⠛",
    braille_name: "Cell 13",
    translation: "13",
    braille_id: "13",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 3, 5 ",
  },
  {
    name: "⠼⠓⠉",
    braille_name: "Cell 14",
    translation: "14",
    braille_id: "14",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 3, 5, 6 ",
  },
  {
    name: "⠼⠊⠉",
    braille_name: "Cell 15",
    translation: "15",
    braille_id: "15",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4 ",
  },
  {
    name: "⠼⠚⠛",
    braille_name: "Cell 16",
    translation: "16",
    braille_id: "16",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 1 ",
  },
  {
    name: "⠼⠍⠃",
    braille_name: "Cell 17",
    translation: "17",
    braille_id: "17",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 2 ",
  },
  {
    name: "⠼⠝⠃",
    braille_name: "Cell 18",
    translation: "18",
    braille_id: "18",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 2, 1 ",
  },
  {
    name: "⠼⠕⠃",
    braille_name: "Cell 19",
    translation: "19",
    braille_id: "19",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 2, 4 ",
  },
  {
    name: "⠼⠏⠃",
    braille_name: "Cell 20",
    translation: "20",
    braille_id: "20",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 2, 5 ",
  },
  {
    name: "⠼⠟⠋⠃",
    braille_name: "Cell 21",
    translation: "21",
    braille_id: "21",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 3 ",
  },
  {
    name: "⠼⠋⠙",
    braille_name: "Cell 22",
    translation: "22",
    braille_id: "22",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 3, 4 ",
  },
  {
    name: "⠼⠛⠋⠃",
    braille_name: "Cell 23",
    translation: "23",
    braille_id: "23",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 3, 5 ",
  },
  {
    name: "⠼⠓⠋⠃",
    braille_name: "Cell 24",
    translation: "24",
    braille_id: "24",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 3, 5, 6 ",
  },
  {
    name: "⠼⠊⠋⠃",
    braille_name: "Cell 25",
    translation: "25",
    braille_id: "25",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 4 ",
  },
  {
    name: "⠼⠚⠓⠃",
    braille_name: "Cell 26",
    translation: "26",
    braille_id: "26",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 4, 1 ",
  },
  {
    name: "⠼⠍⠋⠃",
    braille_name: "Cell 27",
    translation: "27",
    braille_id: "27",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 4, 2 ",
  },
  {
    name: "⠼⠝⠋⠃",
    braille_name: "Cell 28",
    translation: "28",
    braille_id: "28",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 4, 2, 1 ",
  },
  {
    name: "⠼⠕⠋⠃",
    braille_name: "Cell 29",
    translation: "29",
    braille_id: "29",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 4, 2, 4 ",
  },
  {
    name: "⠼⠏⠋⠃",
    braille_name: "Cell 30",
    translation: "30",
    braille_id: "30",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 4, 2, 5 ",
  },
  {
    name: "⠼⠟⠑",
    braille_name: "Cell 31",
    translation: "31",
    braille_id: "31",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 5 ",
  },
  {
    name: "⠼⠋⠛",
    braille_name: "Cell 32",
    translation: "32",
    braille_id: "32",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 4, 5, 6 ",
  },
  {
    name: "⠼⠛⠑",
    braille_name: "Cell 33",
    translation: "33",
    braille_id: "33",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5 ",
  },
  {
    name: "⠼⠓⠋⠃",
    braille_name: "Cell 34",
    translation: "34",
    braille_id: "34",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 1 ",
  },
  {
    name: "⠼⠊⠛",
    braille_name: "Cell 35",
    translation: "35",
    braille_id: "35",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 2 ",
  },
  {
    name: "⠼⠚⠑",
    braille_name: "Cell 36",
    translation: "36",
    braille_id: "36",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 2, 1 ",
  },
  {
    name: "⠼⠍⠙",
    braille_name: "Cell 37",
    translation: "37",
    braille_id: "37",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 2, 4 ",
  },
  {
    name: "⠼⠝⠙",
    braille_name: "Cell 38",
    translation: "38",
    braille_id: "38",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 2, 4, 1 ",
  },
  {
    name: "⠼⠕⠙",
    braille_name: "Cell 39",
    translation: "39",
    braille_id: "39",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 2, 4, 2 ",
  },
  {
    name: "⠼⠏⠙",
    braille_name: "Cell 40",
    translation: "40",
    braille_id: "40",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 2, 4, 2, 1 ",
  },

  {
    name: "⠼⠟⠋⠑",
    braille_name: "Cell 41",
    translation: "41",
    braille_id: "41",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 3 ",
  },
  {
    name: "⠼⠋⠙⠃",
    braille_name: "Cell 42",
    translation: "42",
    braille_id: "42",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 3, 4 ",
  },
  {
    name: "⠼⠛⠋⠑",
    braille_name: "Cell 43",
    translation: "43",
    braille_id: "43",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 3, 5 ",
  },
  {
    name: "⠼⠓⠋⠑",
    braille_name: "Cell 44",
    translation: "44",
    braille_id: "44",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 3, 5, 6 ",
  },
  {
    name: "⠼⠊⠋⠑",
    braille_name: "Cell 45",
    translation: "45",
    braille_id: "45",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 4 ",
  },
  {
    name: "⠼⠚⠓⠑",
    braille_name: "Cell 46",
    translation: "46",
    braille_id: "46",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 4, 1 ",
  },
  {
    name: "⠼⠍⠋⠑",
    braille_name: "Cell 47",
    translation: "47",
    braille_id: "47",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 4, 2 ",
  },
  {
    name: "⠼⠝⠋⠑",
    braille_name: "Cell 48",
    translation: "48",
    braille_id: "48",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 4, 2, 1 ",
  },
  {
    name: "⠼⠕⠋⠑",
    braille_name: "Cell 49",
    translation: "49",
    braille_id: "49",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 4, 2, 4 ",
  },
  {
    name: "⠼⠏⠋⠑",
    braille_name: "Cell 50",
    translation: "50",
    braille_id: "50",
    braille_format: "dot 3, 4, 5, 6 and cell 2 dot 5, 4, 2, 5 ",
  },
];

export { alphabetBrailleCells, popularWords, numberBrailleCells };
