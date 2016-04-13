var React = require('react'),
    Words = require('../game/words'),
    Util = require('../game/util'),
    ShuffledWord = require('./shuffled_word'),
    TargetWord = require('./target_word'),
    ScoreBox = require('./score_box'),
    Level = require('./level'),
    ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
    Countdown = require('./countdown');

var Game = React.createClass({
  getInitialState: function() {
    return({
      word: Words.getEasyWord(),
      score: 0,
      level: 1,
      inPlay: true
    });
  },

  getWord: function() {
    var level = this.state.level;
    switch(level) {
      case (1):
        return Words.getEasyWord();
      case (2):
        return Words.getMediumWord();
      case (3):
        return Words.getHardWord();
      case (4):
        return Words.getExtremeWord();
    }
  },

  _handleClick: function() {
    this.setState({word: this.getWord()});
  },

  _timeIsUp: function() {
    this.setState({inPlay: false});
  },

  _goodJob: function() {
    var newScore = this.state.score + 1;
    var newLevel = Util.calculateLevel(newScore);
    this.setState(
      {
        word: this.getWord(),
        score: newScore,
        level: newLevel
      }
    );
  },

  assembleChoices: function() {
    var choices = [],
        word = this.state.word,
        choice;
    for (var i = 0; i < 4; i++) {
      if (i === 0) {
        choice = (
          <ShuffledWord word={Util.shuffleWord(word)}
                        clicked={this._goodJob}
                        key={i} />
                    );
      } else {
        choice = (
          <ShuffledWord word={Util.shuffleDecoyWord(word)}
                        clicked={this._wrongChoice}
                        key={i} />
                    );
      }
      choices.push(choice);
    }
    return Util.shuffleChoices(choices);
  },

  _wrongChoice: function() {
    this.setState({inPlay: false});
  },

  _restart: function() {
    this.setState({
      word: this.getWord(),
      inPlay: true,
      score: 0,
      level: 1
    });
  },

  render: function() {
    var timeRemaining = 5000;
    var shuffledChoices = this.assembleChoices();

    var modal = '';
    if (!this.state.inPlay) {
      modal = (
        <div className='modal'>
          <div className='modal-content'>
            <h2>You Lost!</h2>
            <button onClick={this._restart}>Restart Game</button>
          </div>
        </div>
      );
      timeRemaining = 0;
    }

    return (
      <div className='container'>
        {modal}
        <Countdown initialTimeRemaining={timeRemaining}
                   interval={50}
                   completeCallback={this._timeIsUp} />
          <ScoreBox score={this.state.score} />
          <TargetWord word={this.state.word}/>
          <Level level={this.state.level} />
          <ul className='choice-container'>
            <ReactCSSTransitionGroup transitionName="shuffled-word"
                                     transitionEnterTimeout={500}
                                     transitionLeaveTimeout={500}>
              {shuffledChoices}
            </ReactCSSTransitionGroup>
          </ul>
      </div>
    );
  }
});

module.exports = Game;
