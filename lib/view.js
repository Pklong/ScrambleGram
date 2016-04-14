var View = function () {
  this.root = document.getElementById('root');
  this.timer = document.getElementById('countdown-timer');
  this.scoreBox = document.getElementById('score-box');
  this.targetWord = document.getElementById('target-word');
  this.currentLevel = document.getElementById('current-level');
  this.choicesContainer = document.getElementById('choices-container');
  this.choices = document.getElementsByClassName('choice-button');
};

View.prototype.setTime = function(time) {
  this.timer.innerHTML = time;
  var colorTime = parseInt(time.replace('.', '')) / 2;
  var color = 'rgb(255, ' + colorTime + ", " + colorTime + ")";
  document.body.style.background = color;
};

module.exports = View;
