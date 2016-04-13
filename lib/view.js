var View = function () {
  this.root = document.getElementById('root');
  this.timer = document.getElementById('countdown-timer');
  this.scoreBox = document.getElementById('score-box');
  this.targetWord = document.getElementById('target-word');
  this.currentLevel = document.getElementById('current-level');
  this.choicesContainer = document.getElementById('choices-container');
  this.choices = document.getElementsByClassName('choice-button');
};

module.exports = View;
