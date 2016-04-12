var React = require('react');

var TargetWord = React.createClass({
  render: function() {
    return (
      <div className='daDiv'>{this.props.word}</div>
    );
  }
});

module.exports = TargetWord;
