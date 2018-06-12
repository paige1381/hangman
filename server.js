const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


const alphabet = require('./models/alphabet.js');
const gameWords = require('./models/gameWords.js');
const turns = require('./models/turns.js');

app.get('/', (req, res) => {
  gameWords.resetWords();
  turns.resetTurns();
  turns.clearCorrectLetters();
  gameWords.findUnusedWords();
  turns.findRemainingTurns();
  res.render('index.ejs', {
    alphabet: alphabet,
    currentWord: gameWords.currentWord,
    correctLetters: turns.correctLetters,
    turns: turns.turnsLeft,
    gameWords: gameWords.gameWords
  });
  console.log('--- new game ---');
  console.log('gameWords:', gameWords.gameWords);
  console.log('currentWord:', gameWords.currentWord);
});

app.get('/newRound', (req, res) => {
  console.log('currentWord:', gameWords.currentWord);
  gameWords.flagUsedWord(gameWords.currentWord);
  gameWords.findUnusedWords();
  turns.clearCorrectLetters();
  turns.resetTurns();
  res.render('index.ejs', {
    alphabet: alphabet,
    currentWord: gameWords.currentWord,
    correctLetters: turns.correctLetters,
    turns: turns.turnsLeft,
    gameWords: gameWords.gameWords
  });
});

app.get('/undo', (req, res) => {
  turns.undoTurn();
  turns.findCorrectLetters();
  turns.findRemainingTurns();
  res.render('index.ejs', {
    alphabet: alphabet,
    currentWord: gameWords.currentWord,
    correctLetters: turns.correctLetters,
    turns: turns.turnsLeft,
    gameWords: gameWords.gameWords
  });
});

app.get('/share', (req, res) => {
  res.render('index.ejs', {
    alphabet: alphabet,
    currentWord: gameWords.currentWord,
    correctLetters: turns.correctLetters,
    turns: turns.turnsLeft,
    gameWords: gameWords.gameWords
  });
});

app.get('/:id', (req, res) => {
  turns.addTurns(alphabet[req.params.id], gameWords.currentWord);
  turns.findCorrectLetters();
  turns.findRemainingTurns();
  res.render('index.ejs', {
    alphabet: alphabet,
    currentWord: gameWords.currentWord,
    correctLetters: turns.correctLetters,
    turns: turns.turnsLeft,
    gameWords: gameWords.gameWords
  });
  console.log('--- new turn ---');
  console.log('gameWords:', gameWords.gameWords);
  console.log('currentWord:', gameWords.currentWord);
  console.log('correctLetters:', turns.correctLetters);
});


app.listen(PORT, console.log('listening on port', PORT));
