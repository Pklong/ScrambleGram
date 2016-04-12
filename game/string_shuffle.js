module.exports = {
  // Fisher-Yates shuffle
  shuffle: function(word) {
    var letters = word.split('');

    for (var i = letters.length - 1; i >= 0; i--) {
      var randomIdx = Math.floor(Math.random() * (i + 1));
      var letterAtIdx = letters[randomIdx];

      letters[randomIdx] = letters[i];
      letters[i] = letterAtIdx;
    }
    return letters.join("");
  }
};
