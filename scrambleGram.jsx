var React = require('react'),
    ReactDOM = require('react-dom'),
    game = require('./components/game');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Game />,
        document.getElementById('main')
    );
});
