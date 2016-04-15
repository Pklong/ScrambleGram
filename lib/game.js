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
  debugger;
  this.view.scoreBox.innerHTML = 'Score: ' + this.score;
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
  }
  this.correctAnswer.classList.add('correct-choice');
  this.view.timer.parentNode.classList.remove('strobe');
  this.view.timer.style.display = 'none';
  document.getElementById('play-again').style.display = 'block';
};

Game.prototype.reset = function() {
  for (var i = 0, n = this.view.choices.length; i < n; i++) {
    this.view.choices[i].disabled = false;
  }
  this.correctAnswer.classList.remove('correct-choice');
  this.view.timer.parentNode.classList.add('strobe');
  this.view.timer.style.display = '';
  document.getElementById('play-again').style.display = 'none';

  this.currentWord = null;
  this.score = 0;
  this.level = 1;
  this.timeRemaining = 500;
  this.correctAnswer = null;

  this.view.scoreBox.innerHTML = 'Score: ' + this.score;
  this.play();
};

Game.prototype.setup = function() {
  for (var i = 0, n = this.view.choices.length; i < n; i++) {
    this.view.choices[i].addEventListener(
      'click',
      this._handleClick.bind(this)
    );
  }

  // window.setTimeout(function() {
  //   this.view.scoreBox.innerHTML = 'Score: ' + this.score;
  //   document.getElementById('intro').pause();
    this.play();
  // }.bind(this), 6000);
};

Game.prototype.begin = function() {
  // document.getElementById('intro').play();
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
