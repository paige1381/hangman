  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let gameWords = ['RABBIT', 'BUNNY', 'CARROT', 'LETTUCE', 'BURROW', 'FLUFFY', 'FLOPPY', 'LITTER', 'PELLETS']

  $(() => {

  let currentWord = gameWords[Math.floor(Math.random() * (gameWords.length))];
  let currentLetter = null;
  let guesses = 8;
  let correctLetters = [];

  const createBlanks = () => {
    console.log(currentWord);
    for (let i = 0; i < currentWord.length; i++) {
        const $blank = $('<div>').addClass('blank');
        $('.blanks').append($blank);
    }
  }

  const createKeyboard = () => {
    for (let i = 0; i < alphabet.length; i++) {
      const $key = $('<div>').addClass('key').text(alphabet[i]);
      $('.keyboard').append($key);
      $key.on('click', setKeyAction);
    }
  }

  const createGuesses = () => {
    $('.guesses').text(guesses + " guesses left!")
  }

  const setKeyAction = (event) => {
    const $key = $(event.currentTarget);
    currentLetter = $key.text();
    console.log(currentLetter);
    checkLetterMatch();
    decreaseGuesses();
  }

  const decreaseGuesses = () => {
    console.log('guesses:', guesses);
    console.log('correctLetters:', correctLetters);
    let currentWordDistinct = [...new Set(currentWord)];
    if (guesses > 1 && correctLetters.length < currentWordDistinct.length) {
      guesses--;
      $('.guesses').text(guesses + " guesses left!");
    }
    else if (guesses === 1 && correctLetters.length < currentWordDistinct.length) {
      $('.guesses').text("You lost!");
    }
    else {
      $('.guesses').text("You win!");
    }
  }

  const checkLetterMatch = () => {
    let currentWordArr = currentWord.split("");
    for (let i = 0; i < currentWordArr.length; i++) {
      if (currentWordArr[i] === currentLetter) {
        addLetter(i);
      }
      if (currentWordArr[i] === currentLetter && correctLetters.join("").indexOf(currentLetter) < 0) {
        correctLetters.push(currentLetter);
        console.log('correctLetters:', correctLetters);
      }
    }
  }

  const addLetter = (n) => {
    const $blank = $('.blank').eq(n);
    $blank.text(currentLetter);
  }

  createBlanks();
  createKeyboard();
  createGuesses();







// end
})
