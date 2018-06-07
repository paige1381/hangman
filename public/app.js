$(() => {

  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let gameWords = ['RABBIT', 'BUNNY', 'CARROT', 'LETTUCE', 'BURROW', 'FLUFFY', 'FLOPPY', 'LITTER', 'PELLETS']

  let guesses = 8;


  const createKeyboard = () => {
    for (let i = 0; i < alphabet.length; i++) {
      const $key = $('<div>').addClass('key').text(alphabet[i]);
      $('.keyboard').append($key);
    }
  }

  const createBlanks = () => {
    let word = gameWords[Math.floor(Math.random() * (gameWords.length))];
    console.log(word);
    for (let i = 0; i < word.length; i++) {
        const $blank = $('<div>').addClass('blank');
        $('.blanks').append($blank);
    }
  }

  const createGuesses = () => {
    $('.guesses').text(guesses + " guesses left!")
  }


createKeyboard();
createBlanks();
createGuesses();







// end
})
