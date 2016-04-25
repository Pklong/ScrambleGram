module.exports = {
  // Fisher-Yates shuffle
  shuffleWord: function(word) {
    var letters = word.split('');

    for (var i = letters.length - 1; i >= 0; i--) {
      var randomIdx = Math.floor(Math.random() * (i + 1));
      var letterAtIdx = letters[randomIdx];

      letters[randomIdx] = letters[i];
      letters[i] = letterAtIdx;
    }

    var newWord = letters.join('');
    if (newWord === word) {
      return this.shuffleWord(newWord);
    } else {
      return newWord;
    }
  },

  decoyWord: function(word) {
    var shuffled = this.shuffleWord(word);
    return this.replaceLetterWithRandomCharacter(shuffled);
  },

  calculateLevel: function(score) {
    switch(true) {
      case (score < 5):
        return 1;
      case (score < 10):
        return 2;
      case (score < 15):
        return 3;
      case (score < 20):
        return 4;
      case (score < 25):
        return 5;
      case (score < 100):
        return 6;
    }
  },

  shuffleChoices: function(choices) {
    for (var i = choices.length - 1; i >= 0; i--) {
      var randomIdx = Math.floor(Math.random() * (i + 1));
      var choiceAtIdx = choices[randomIdx];

      choices[randomIdx] = choices[i];
      choices[i] = choiceAtIdx;
    }
    return choices;
  },

  replaceLetterWithRandomCharacter: function(word) {
    var swapIdx = Math.floor(Math.random() * word.length);
    var randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    while (randomLetter === word[swapIdx]) {
      randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return word.substr(0, swapIdx) + randomLetter + word.substr(swapIdx + 1);
  },
};
