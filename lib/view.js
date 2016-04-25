var View = function () {
  this.root = document.getElementById('root');
  this.timer = document.getElementById('countdown-timer');
  this.scoreBox = document.getElementById('score-box');
  this.highScore = document.getElementById('high-score');
  this.targetWord = document.getElementById('target-word');
  this.currentLevel = document.getElementById('current-level');
  this.choicesContainer = document.getElementById('choices-container');
  this.choices = document.getElementsByClassName('choice-button');
  this.addHoverEffect();
};

View.prototype.setTime = function(time) {
  this.timer.innerHTML = time;
  var colorTime = parseInt(time.replace('.', '')) / 2;
  var color = 'rgb(255, ' + colorTime + ", " + colorTime + ")";
  document.body.style.background = color;
};

View.prototype.setScore = function(score) {
  var highScore = window.localStorage.highScore;
  if (!highScore) {
    window.localStorage.setItem('highScore', score);
    highScore = score;
  }

  this.highScore.innerHTML = 'High Score: ' + highScore;
  this.scoreBox.innerHTML = 'Score: ' + score;
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
