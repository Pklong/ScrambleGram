var React = require('react');

var ScoreBox = React.createClass({
  render: function() {
    return (
      <div className='score-box-display'>{this.props.score}</div>
    );
  }
});

module.exports = ScoreBox;
