const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


// let currentWord = gameWords[Math.floor(Math.random() * (gameWords.length))].split("");
// let link = null;

const alphabet = require('./models/alphabet.js');
const gameWords = require('./models/gameWords.js');
const turns = require('./models/turns.js');

app.get('/', (req, res) => {
  gameWords.resetWords();
  turns.clearCorrectLetters();
  gameWords.findUnusedWords();
  turns.findRemainingTurns();
  res.render('index.ejs', {
    alphabet: alphabet,
    currentWord: gameWords.currentWord,
    correctLetters: turns.correctLetters,
    turns: turns.turnsLeft
  });
  console.log('--- new game ---');
  console.log('gameWords:', gameWords.gameWords);
  console.log('currentWord:', gameWords.currentWord);
});

app.get('/:id', (req, res) => {
  turns.addTurns(alphabet[req.params.id], gameWords.currentWord);
  turns.findCorrectLetters();
  turns.findRemainingTurns();
  res.render('index.ejs', {
    alphabet: alphabet,
    currentWord: gameWords.currentWord,
    correctLetters: turns.correctLetters,
    turns: turns.turnsLeft
  });
  console.log('--- new turn ---');
  console.log('gameWords:', gameWords.gameWords);
  console.log('currentWord:', gameWords.currentWord);
  console.log('correctLetters:', turns.correctLetters);
});


// app.get('/newRound', (req, res) => {
//   let index = gameWords.indexOf(currentWord.join(""));
//   gameWords.splice(index, 1);
//   currentWord = gameWords[Math.floor(Math.random() * (gameWords.length))].split("");
//   guesses = 8;
//   currentLetter = [];
//   correctLetters = [];
//   allLetters = [];
//   link = null;
//   res.render('index.ejs', {
//     alphabet: alphabet,
//     gameWords: gameWords,
//     currentWord: currentWord,
//     guesses: guesses,
//     currentLetter: currentLetter,
//     guessWord: guessWord,
//     correctLetters: correctLetters,
//     allLetters: allLetters,
//     link: link
//   });
//   console.log('--- new round ---');
//   console.log('gameWords:', gameWords);
//   console.log('currentWord:', currentWord);
//   console.log('guesses:', guesses);
//   console.log('currentLetter:', currentLetter);
//   console.log('correctLetters:', correctLetters);
//   console.log('allLetters:', allLetters);
// });


// app.get('/share', (req, res) => {
//   link = req.protocol + '://' + req.get('host') + req.originalUrl;
//   res.render('index.ejs', {
//     alphabet: alphabet,
//     gameWords: gameWords,
//     currentWord: currentWord,
//     guesses: guesses,
//     currentLetter: currentLetter,
//     guessWord: guessWord,
//     correctLetters: correctLetters,
//     allLetters: allLetters,
//     link: link
//   });
//   console.log('--- new round ---');
//   console.log('gameWords:', gameWords);
//   console.log('currentWord:', currentWord);
//   console.log('guesses:', guesses);
//   console.log('currentLetter:', currentLetter);
//   console.log('correctLetters:', correctLetters);
//   console.log('allLetters:', allLetters);
// });


// app.get('/undo', (req, res) => {
//   guesses++;
//   let undoLetter = allLetters.pop();
//   let index = correctLetters.indexOf(undoLetter);
//   if (index >= 0) {
//     correctLetters.splice(index, 1);
//   }
//   currentLetter = allLetters[allLetters.length - 1];
//   link = null;
//   res.render('index.ejs', {
//     alphabet: alphabet,
//     gameWords: gameWords,
//     currentWord: currentWord,
//     guesses: guesses,
//     currentLetter: currentLetter,
//     guessWord: guessWord,
//     correctLetters: correctLetters,
//     allLetters: allLetters,
//     link: link
//   });
//   console.log('--- undo ---');
//   console.log('gameWords:', gameWords);
//   console.log('currentWord:', currentWord);
//   console.log('guesses:', guesses);
//   console.log('currentLetter:', currentLetter);
//   console.log('correctLetters:', correctLetters);
//   console.log('allLetters:', allLetters);
// });


app.get('/:id', (req, res) => {
  currentLetter = alphabet[req.params.id];
  if (currentWord.indexOf(currentLetter) > -1) {
    correctLetters.push(currentLetter);
  };
  correctLetters = [...new Set(correctLetters)];
  allLetters.push(currentLetter);
  guesses -= 1;
  link = null;
  res.render('index.ejs', {
    alphabet: alphabet,
    gameWords: gameWords,
    currentWord: currentWord,
    guesses: guesses,
    currentLetter: currentLetter,
    guessWord: guessWord,
    correctLetters: correctLetters,
    allLetters: allLetters,
    link: link
  });
  console.log('--- new turn ---');
  console.log('gameWords:', gameWords);
  console.log('currentWord:', currentWord);
  console.log('guesses:', guesses);
  console.log('currentLetter:', currentLetter);
  console.log('correctLetters:', correctLetters);
  console.log('allLetters:', allLetters);
});



app.listen(PORT, console.log('listening on port', PORT));
