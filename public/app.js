  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let gameWords = ['RABBIT', 'BUNNY', 'CARROT', 'LETTUCE', 'BURROW', 'FLUFFY', 'FLOPPY', 'LITTER', 'PELLETS']

  $(() => {

  let currentWord = gameWords[Math.floor(Math.random() * (gameWords.length))];
  let currentLetter = null;
  let guesses = 8;

  const createBlanks = () => {
    // let currentWord = gameWords[Math.floor(Math.random() * (gameWords.length))];
    console.log(currentWord);
    for (let i = 0; i < currentWord.length; i++) {
        const $blank = $('<div>').addClass('blank');
        $('.blanks').append($blank);
    }
  }

  const createKeyboard = () => {
    console.log(currentWord);
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
  }

  const checkLetterMatch = () => {
    let currentWordArr = currentWord.split("");
    console.log(currentWord);
    for (let i = 0; i < currentWordArr.length; i++) {
      if (currentWordArr[i] === currentLetter) {
        addLetter(i);
        return true;
      }
    }
    return false;
  }

  const addLetter = (n) => {
    console.log(currentLetter);
    console.log(n);
    console.log($('.blank').eq(n));
    const $blank = $('.blank').eq(n);
    $blank.text(currentLetter);
  }

  createBlanks();
  createKeyboard();
  createGuesses();







// end
})
