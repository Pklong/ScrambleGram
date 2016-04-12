var React = require('react'),
    Words = require('../game/words'),
    StringShuffle = require('../game/string_shuffle'),
    ShuffledWord = require('./shuffled_word'),
    Countdown = require('./countdown');

var Game = React.createClass({
  getInitialState: function() {
    return({
      word: this.getWord(),
      level: 0
    });
  },
  getWord: function() {
    return Words.getEasyWord();
  },
  _handleClick: function() {
    this.setState({word: this.getWord()});
  },
  _timeIsUp: function() {
    alert('you lose!');
  },
  _goodJob: function() {
    this.setState({word: this.getWord()});
  },
  _badJob: function() {
    console.log("no!");
  },
  _makeDecoyWords: function() {
    var decoyWords = [];
    while (decoyWords.length < 3) {
      var decoy = StringShuffle.shuffle(this.state.word);
      var swappedDecoy = StringShuffle.replaceLetterWithRandomCharacter(decoy);
      if (swappedDecoy !== this.state.word) {
        decoyWords.push(swappedDecoy);
      }
    }
    return decoyWords;
  },
  _makeCorrectChoice: function() {
    var word = StringShuffle.shuffle(this.state.word);
    return <ShuffledWord word={word} clicked={this._goodJob} key={-1} />;
  },
  render: function() {

    var correctChoice = this._makeCorrectChoice();
    var decoys = this._makeDecoyWords().map(function(word, i) {
      return <ShuffledWord word={word} clicked={this._badJob} key={i} />;
    }.bind(this));

    return (
      <div>
        <Countdown
            initialTimeRemaining={5000}
            interval={50}
            completeCallback={this._timeIsUp} />
        <div  className="daDiv"
          onClick={this._handleClick}>{this.state.word}
        </div>
        <ul>
          {decoys}
          {correctChoice}
        </ul>
      </div>
    );
  }
});

module.exports = Game;
