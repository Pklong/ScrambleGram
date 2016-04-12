var React = require('react'),
    Words = require('../game/words');

var Game = React.createClass({
  getInitialState: function() {
    return({word: this.getWord()});
  },
  getWord: function() {
    return Words.getShortWord();
  },
  _handleClick: function() {
    this.setState({word: this.getWord()});
  },
  render: function() {

    return (
      <div  className="daDiv"
            onClick={this._handleClick}>{this.state.word}</div>
    );
  }
});

module.exports = Game;
