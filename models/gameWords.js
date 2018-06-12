module.exports = {

  gameWords: [
    {
      word: 'RABBIT',
      used: 0,
      currentWord: 0
    },
    {
      word: 'BUNNY',
      used: 0,
      currentWord: 0
    },
    {
      word: 'CARROT',
      used: 0,
      currentWord: 0
    },
    {
      word: 'LETTUCE',
      used: 0,
      currentWord: 0
    },
    {
      word: 'BURROW',
      used: 0,
      currentWord: 0
    },
    {
      word: 'FLUFFY',
      used: 0,
      currentWord: 0
    },
    {
      word: 'FLOPPY',
      used: 0,
      currentWord: 0
    },
    {
      word: 'LITTER',
      used: 0,
      currentWord: 0
    },
    {
      word: 'PELLETS',
      used: 0,
      currentWord: 0
    }
  ],

  resetWords: function () {
    for (i = 0; i < this.gameWords.length; i++) {
      this.gameWords[i].used = 0;
      this.gameWords[i].currentWord = 0;
    }
  },

  currentWord: [],

  findUnusedWords: function () {
    let unUsedWords = [];
    for (i = 0; i < this.gameWords.length; i++) {
      if (this.gameWords[i].used === 0) {
        unUsedWords.push(this.gameWords[i].word);
      }
    }
    console.log(unUsedWords);
    this.findCurrentWord(unUsedWords);
  },

  findCurrentWord: function (arr) {
    let currentWordIndex = Math.floor(Math.random() * (arr.length));
    console.log(currentWordIndex);
    this.gameWords[currentWordIndex].currentWord = 1;
    this.currentWord = this.gameWords[currentWordIndex].word.split("");
  },

  flagUsedWord: function (arr) {
    console.log(arr.join(""));
    for (i = 0; i < this.gameWords.length; i++) {
      if (this.gameWords[i].word === arr.join("")) {
        this.gameWords[i].used = 1;
        this.gameWords[i].currentWord = 0;
      }
    }

    console.log(this.gameWords);
  }
}
