var React = require('react');

var Countdown = React.createClass({

  getInitialState: function() {
    return {
      timeRemaining: this.props.initialTimeRemaining,
      timeoutId: null,
      prevTime: null
    };
  },

  componentDidMount: function() {
    this.tick();
  },

  componentWillReceiveProps: function(newProps) {
    if (this.state.timeoutId) { clearTimeout(this.state.timeoutId); }
    this.setState({
      prevTime: null,
      timeRemaining: newProps.initialTimeRemaining
    });
  },

  componentDidUpdate: function() {
    if ((!this.state.prevTime) && this.state.timeRemaining > 0 && this.isMounted()) {
      this.tick();
    }
  },

  componentWillUnmount: function() {
    clearTimeout(this.state.timeoutId);
  },

  tick: function() {
    var currentTime = Date.now();
    var dt = this.state.prevTime ? (currentTime - this.state.prevTime) : 0;
    var interval = this.props.interval;

    // correct for small variations in actual timeout time
    var timeRemainingInInterval = (interval - (dt % interval));
    var timeout = timeRemainingInInterval;

    if (timeRemainingInInterval < (interval / 2.0)) {
      timeout += interval;
    }

    var timeRemaining = Math.max(this.state.timeRemaining - dt, 0);
    var countdownComplete = (this.state.prevTime && timeRemaining <= 0);

    if (this.isMounted()) {
      if (this.state.timeoutId) { clearTimeout(this.state.timeoutId); }
      this.setState({
        timeoutId: countdownComplete ? null : setTimeout(this.tick, timeout),
        prevTime: currentTime,
        timeRemaining: timeRemaining
      });
    }

    if (countdownComplete) {
      this.props.completeCallback();
      return;
    }
  },

  getFormattedTime: function(milliseconds) {

    var remaining = Math.round(milliseconds / 100);
    var decimalSeconds = (remaining / 10).toFixed(1);


    return decimalSeconds;
  },

  render: function() {
    var timeRemaining = this.state.timeRemaining;

    return (
      <div className='countdown-timer-display'>
        {this.getFormattedTime(timeRemaining)}
      </div>
    );
  }
});

module.exports = Countdown;
