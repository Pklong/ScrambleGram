var React = require('react');

var ShuffledWord = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.word}
      </div>
    );
  }
});

module.exports = ShuffledWord;
