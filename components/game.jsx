var React = require('react'),
    Words = require('../game/words'),
    Countdown = require('./countdown');

var Game = React.createClass({
  getInitialState: function() {
    return({word: this.getWord()});
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
  render: function() {

    return (
      <div>
        <Countdown
            initialTimeRemaining={5000}
            interval={50}
            completeCallback={this._timeIsUp} />
        <div  className="daDiv"
          onClick={this._handleClick}>{this.state.word}</div>
      </div>
    );
  }
});

module.exports = Game;
