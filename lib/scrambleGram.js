var Game = require('./game');

document.addEventListener('DOMContentLoaded', function() {
  var game = new Game(),
      startBtn = document.getElementById('start'),
      resetBtn = document.getElementById('play-again');

  startBtn.addEventListener('click', game.begin.bind(game));
  resetBtn.addEventListener('click', game.reset.bind(game));
});
