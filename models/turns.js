module.exports = {
  turns: [
    {
      letter: null,
      correct: 0
    }
  ],

  addTurns: function (char, arr) {
    console.log(this.turns);
    this.turns.push({
      letter: char,
      correct: 0
    });
    this.checkLetterCorrect(char, arr, this.turns.length - 1);
    console.log(this.turns);
  },

  checkLetterCorrect: function (char, arr, index) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === char) {
        this.turns[index].correct = 1;
        break;
      }
    }
  },

  correctLetters: null,

  findCorrectLetters: function () {
    this.correctLetters = null;
    let correctLettersArr = [];
    for (i = 0; i < this.turns.length; i++) {
      if (this.turns[i].correct === 1) {
        correctLettersArr.push(this.turns[i].letter);
      }
    }
    this.correctLetters = correctLettersArr.join("");
    return this.correctLetters;
  },

  clearCorrectLetters: function () {
    this.correctLetters = null;
  },

  turnsLeft: null,

  findRemainingTurns: function () {
    this.turnsLeft = 9 - this.turns.length;
  }

}
