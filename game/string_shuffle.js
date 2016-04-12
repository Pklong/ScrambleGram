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

    var newWord = letters.join('');
    if (newWord === word) {
      return this.shuffle(newWord);
    } else {
      return newWord;
    }
  },

  replaceLetterWithRandomCharacter: function(word) {
    var swapIdx = word.length - 1;
    var randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    return word.substr(0, swapIdx) + randomLetter + word.substr(swapIdx + 1);
  },
};
