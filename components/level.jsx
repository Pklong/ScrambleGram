var React = require('react');

var Level = React.createClass({
  render: function() {
    return (
      <p className='level-display'>{this.props.level}</p>
    );
  }
});

module.exports = Level;
