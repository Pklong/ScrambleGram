var React = require('react');

var ShuffledWord = React.createClass({
  _handleClick: function() {
    this.props.clicked();
  },
  render: function() {
    return (

         <div
              className='shuffled-word-choice'
              onClick={this._handleClick}>
           {this.props.word}
         </div>

    );
  }
});

module.exports = ShuffledWord;
