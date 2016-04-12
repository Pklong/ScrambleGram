var React = require('react');

var ScoreBox = React.createClass({
  render: function() {
    return (
      <div>{this.props.score}</div>
    );
  }
});

module.exports = ScoreBox;
