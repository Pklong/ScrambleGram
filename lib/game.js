var View = require('./view'),
    Words = require('./words'),
    Util = require('./util');

var Game = function () {
  this.currentWord = null;
  this.score = 0;
  this.highScore = window.localStorage.scrambleGramScore || 0;
  this.level = 1;
  this.timeRemaining = 500;
  this.correctAnswer = null;

  this.view = new View(this.highScore);
  this.setupWordChoiceHandlers();
};


Game.prototype.setCountdown = function() {
  clearInterval(this.timer);
  this.timer = setInterval(function() {
    if (this.timeRemaining === 0) {
      clearInterval(this.timer);
      this.over();
    } else {
      this.timeRemaining--;
    }
    this.view.displayTime((this.timeRemaining / 100).toFixed(2));
  }.bind(this), 10);
};

Game.prototype.resetTimer = function() {
  this.timeRemaining = 500;
};

Game.prototype.adjustDifficulty = function() {
  this.level = Util.calculateLevel(this.score);
};

Game.prototype.updateScore = function() {
  this.score++;
  this.view.updateScore();
  this.view.scoreBox.classList.add('bounce');
  this.view.scoreBox.innerHTML = 'Score: ' + this.score;
  setTimeout(function() {
    this.view.scoreBox.classList.remove('bounce');
  }.bind(this), 400);
};

Game.prototype.getWord = function() {
  switch(this.level) {
    case (1):
      return Words.getEasyWord();
    case (2):
      return Words.getMediumWord();
    case (3):
      return Words.getHardWord();
    case (4):
      return Words.getExtremeWord();
    case (5):
      return Words.getInsaneWord();
    case (6):
      return Words.getChampionWord();
  }
};

Game.prototype.resetChoices = function() {
  this.correctAnswer = this.view.choices[Math.floor(Math.random() * 4)];

  this.correctAnswer.innerHTML = Util.shuffleWord(this.currentWord);

  for (var i = 0, n = this.view.choices.length; i < n; i++) {
    if (this.view.choices[i] === this.correctAnswer) { continue; }
    this.view.choices[i].innerHTML = Util.decoyWord(this.currentWord);
  }
};

Game.prototype.play = function() {
  this.adjustDifficulty();
  this.currentWord = this.getWord();

  this.view.displayCurrentWord(this.currentWord);
  this.view.displayCurrentLevel(this.level);

  this.resetChoices();
  this.setCountdown();
};

Game.prototype.over = function() {
  this.timeRemaining = 0;

  for (var i = 0, n = this.view.choices.length; i < n; i++) {
    this.view.choices[i].disabled = true;
    if (this.view.choices[i].classList.contains('choice-button-hover')) {
      this.view.choices[i].classList.remove('choice-button-hover');
    }
  }
  this.correctAnswer.classList.add('correct-choice');
  this.view.timer.parentNode.classList.remove('strobe');
  this.view.timer.style.display = 'none';

  var highScore = window.localStorage.scrambleGramScore;
  if (highScore < this.score) {
    window.localStorage.setItem('scrambleGramScore', this.score);
    this.view.highScore.innerHTML = 'High Score: ' + this.score;
    this.view.highScore.classList.add('bounce');
    setTimeout(function() {
      this.view.highScore.classList.remove('bounce');
    }.bind(this), 400);
  }

  var replayBtn = document.getElementById('play-again');
  replayBtn.classList.remove('play-again-hide');
  replayBtn.classList.add('play-again-appear');
};

Game.prototype.reset = function() {
  for (var i = 0, n = this.view.choices.length; i < n; i++) {
    this.view.choices[i].disabled = false;
  }
  this.correctAnswer.classList.remove('correct-choice');
  this.view.timer.parentNode.classList.add('strobe');
  this.view.timer.style.display = '';

  var replayBtn = document.getElementById('play-again');
  replayBtn.classList.remove('play-again-appear');
  replayBtn.classList.add('play-again-hide');

  this.currentWord = null;
  this.score = 0;
  this.level = 1;
  this.timeRemaining = 500;
  this.correctAnswer = null;

  this.view.setScore(this.score);
  this.play();
};

Game.prototype.setupWordChoiceHandlers = function() {
  for (var i = 0, n = this.view.choices.length; i < n; i++) {
    this.view.choices[i].addEventListener(
      'click',
      this._handleWordClick.bind(this)
    );
  }
};

Game.prototype.begin = function() {
  this.view.clearIntroduction();
  this.play();
};

Game.prototype._handleWordClick = function(e) {
  if (e.target === this.correctAnswer) {
    this.resetTimer();
    this.updateScore();
    this.play();
  } else {
    this.over();
  }
};

module.exports = Game;
