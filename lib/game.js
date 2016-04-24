var View = require('./view'),
    Words = require('./words'),
    Util = require('./util');

var Game = function () {
  this.currentWord = null;
  this.score = 0;
  this.level = 1;
  this.timeRemaining = 500;
  this.correctAnswer = null;
  this.view = new View();
  this.view.addHoverEffect();
};


Game.prototype.displayTimer = function() {
  clearInterval(this.timer);
  this.timer = setInterval(function() {
    if (this.timeRemaining === 0) {
      clearInterval(this.timer);
      this.over();
    } else {
      this.timeRemaining--;
    }
    this.view.setTime((this.timeRemaining / 100).toFixed(2));
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
  this.view.targetWord.innerHTML = this.currentWord;

  this.view.currentLevel.innerHTML = "Level: " + this.level;
  this.resetChoices();
  this.displayTimer();
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


  var highScore = window.localStorage.highScore;
  if (!highScore || highScore < this.score) {
    window.localStorage.setItem('highScore', this.score);
  }
  this.currentWord = null;
  this.score = 0;
  this.level = 1;
  this.timeRemaining = 500;
  this.correctAnswer = null;

  this.view.scoreBox.innerHTML = 'Score: ' + this.score;
  this.view.highScore.innerHTML = 'High Score: ' + window.localStorage.highScore;
  this.play();
};

Game.prototype.setup = function() {
  for (var i = 0, n = this.view.choices.length; i < n; i++) {
    this.view.choices[i].addEventListener(
      'click',
      this._handleClick.bind(this)
    );
  }
  var highScore = window.localStorage.highScore;
  if (highScore) {
    this.view.highScore.innerHTML = 'High Score: ' + highScore;
  }
  this.view.scoreBox.innerHTML = 'Score: ' + this.score;
  this.play();
};

Game.prototype.begin = function() {
  document.getElementById('introduction').style.display = "none";
  this.setup();
};

Game.prototype._handleClick = function(e) {
  if (e.target === this.correctAnswer) {
    this.resetTimer();
    this.updateScore();
    this.resetChoices();
    this.play();
  } else {
    this.over();
  }
};

module.exports = Game;
