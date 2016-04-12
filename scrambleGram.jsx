var React = require('react'),
    ReactDOM = require('react-dom'),
    Game = require('./components/game');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Game />,
        document.getElementById('root')
    );
});
