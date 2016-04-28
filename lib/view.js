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

View.prototype.updateScore = function(score) {

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
