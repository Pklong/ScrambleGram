var React = require('react');

var TargetWord = React.createClass({
  render: function() {
    return (
      <div className='target-word-display'>{this.props.word}</div>
    );
  }
});

module.exports = TargetWord;
