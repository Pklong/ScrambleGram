var View = function (highScore) {
  this.root = document.getElementById('root');
  this.timer = document.getElementById('countdown-timer');
  this.scoreBox = document.getElementById('score-box');
  this.highScore = document.getElementById('high-score');
  this.targetWord = document.getElementById('target-word');
  this.currentLevel = document.getElementById('current-level');
  this.choicesContainer = document.getElementById('choices-container');
  this.choices = document.getElementsByClassName('choice-button');
  this.introduction = document.getElementById('introduction');
  this.replayBtn = document.getElementById('play-again');

  this.addHoverEffect();
  this.setInitialScores(highScore);
};

View.prototype.setInitialScores = function(highScore) {
  this.scoreBox.innerHTML = 'Score: 0';
  this.highScore.innerHTML = 'High Score: ' + highScore;
};

View.prototype.displayTime = function(time) {
  this.timer.innerHTML = time;
  var colorTime = parseInt(time.replace('.', '')) / 2;
  var color = 'rgb(255, ' + colorTime + ", " + colorTime + ")";
  document.body.style.background = color;
};

View.prototype.clearIntroduction = function() {
  this.introduction.style.display = 'none';
};

View.prototype.displayCurrentLevel = function(level) {
  this.currentLevel.innerHTML = "Level: " + level;
};

View.prototype.displayCurrentWord = function(currentWord) {
  this.targetWord.innerHTML = currentWord;

  this.targetWord.classList.add('shimmy');
  setTimeout(function() {
    this.targetWord.classList.remove('shimmy');
  }.bind(this), 1000);
};

View.prototype.setScore = function(score) {
  var highScore = window.localStorage.scrambleGramScore;

  if (!highScore) {
    window.localStorage.setItem('scrambleGramScore', score);
    highScore = score;
  }

};

View.prototype.displayHighScore = function(score) {
  this.highScore.innerHTML = 'High Score: ' + score;
  this.highScore.classList.add('bounce');
  setTimeout(function() {
    this.highScore.classList.remove('bounce');
  }.bind(this), 400);
};

View.prototype.displayEndGame = function() {
  for (var i = 0, n = this.choices.length; i < n; i++) {
    this.choices[i].disabled = true;
    if (this.choices[i].classList.contains('choice-button-hover')) {
      this.choices[i].classList.remove('choice-button-hover');
    }
  }
  this.timer.parentNode.classList.remove('strobe');
  this.timer.style.display = 'none';
  this.replayBtn.classList.remove('play-again-hide');
  this.replayBtn.classList.add('play-again-appear');
};

View.prototype.resetDisplay = function() {
  for (var i = 0, n = this.choices.length; i < n; i++) {
    this.choices[i].disabled = false;
  }
  this.timer.parentNode.classList.add('strobe');
  this.timer.style.display = '';

  this.replayBtn.classList.remove('play-again-appear');
  this.replayBtn.classList.add('play-again-hide');
};

View.prototype.displayUpdateScore = function(score) {
  this.scoreBox.classList.add('bounce');
  this.scoreBox.innerHTML = 'Score: ' + score;
  setTimeout(function() {
    this.scoreBox.classList.remove('bounce');
  }.bind(this), 400);
};

View.prototype.addHoverEffect = function() {
  // fixes problem where mobile taps cause hover effect to linger
  for (var i = 0, n = this.choices.length; i < n; i++) {
    this.choices[i].addEventListener('touchstart', function(e) {
      e.currentTarget.classList.add('choice-button-hover');
    });
    this.choices[i].addEventListener('mouseenter', function(e) {
      e.currentTarget.classList.add('choice-button-hover');
    });
    this.choices[i].addEventListener('mouseleave', function(e) {
      e.currentTarget.classList.remove('choice-button-hover');
    });
    this.choices[i].addEventListener('touchmove', function(e) {
      e.currentTarget.classList.remove('choice-button-hover');
    });
    this.choices[i].addEventListener('click', function(e) {
      e.currentTarget.classList.remove('choice-button-hover');
    });
  }
};

module.exports = View;
