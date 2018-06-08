  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let gameWords = ['RABBIT', 'BUNNY', 'CARROT', 'LETTUCE', 'BURROW', 'FLUFFY', 'FLOPPY', 'LITTER', 'PELLETS']

  $(() => {

  let currentWord = gameWords[Math.floor(Math.random() * (gameWords.length))];
  let currentLetter = null;
  let guessWord = null;
  let guesses = 8;
  let correctLetters = [];

  const createBlanks = () => {
    console.log(currentWord);
    for (let i = 0; i < currentWord.length; i++) {
        const $blank = $('<div>').addClass('blank');
        $('.blanks').append($blank);
    }
  }

  const createWordSpace = () => {
    const $space = $('<input>').addClass('word-space').attr('type', 'text');
    $('.word').append($space);
    const $button = $('<div>').addClass('word-button').text('Guess word');
    $('.word').append($button);
    $button.on('click', setWordButtonAction);
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

  const setWordButtonAction = (event) => {
    const $button = $(event.currentTarget);
    console.log($button.parent().children('.word-space'));
    guessWord = $button.parent().children('.word-space').val();
    checkWordMatch();
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
      $('.guesses').text("Great job! Try again?");
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

const checkWordMatch = () => {
  if (guessWord.toUpperCase() === currentWord) {
    let currentWordDistinct = [...new Set(currentWord)];
    correctLetters = currentWordDistinct;
    for (let i = 0; i < currentWord.length; i++) {
      currentLetter = currentWord[i];
      addLetter(i);
    }
  }
  $('.word').remove();
}

  const addLetter = (n) => {
    const $blank = $('.blank').eq(n);
    $blank.text(currentLetter);
  }

  createBlanks();
  createWordSpace();
  createKeyboard();
  createGuesses();







// end
})
