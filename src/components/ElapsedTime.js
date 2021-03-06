import React, { Component } from 'react';
import lodash from 'lodash';
import MinimalistSpinner from './MinimalistSpinner';
import { computeElapsedSeconds,
         toHoursAndMinutes } from '../util';

export default class ElapsedTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elapsedSeconds: computeElapsedSeconds(props.startedEpoch,
                                            props.duration)
    };
  }

  tick() {
    this.setState({
      elapsedSeconds: computeElapsedSeconds(this.props.startedEpoch,
                                            this.props.duration)
    });
  }

  componentDidMount() {
    if(this.props.startedEpoch) {
      this.intervalId = window.setInterval(() => this.tick(), 1000);
    }
    else {
      this.intervalId = null;
    }
  }

  componentWillReceiveProps(newProps) {
    window.clearInterval(this.intervalId);
    if (newProps.startedEpoch) {
      // Timer was just started
      this.intervalId = window.setInterval(() => this.tick(), 1000);
    }
    else {
      this.intervalId = null;
    }

    this.setState({
      elapsedSeconds: computeElapsedSeconds(newProps.startedEpoch,
                                            newProps.duration)
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
    this.intervalId = null;
  }

  toggleTimer() {
    return lodash.debounce(this.props.onClick, 100);
  }

  render() {
    let buttonContents = 'Start';
    let startedIndicator = null;
    if (this.props.startedEpoch) {
      buttonContents = 'Stop';
      startedIndicator = <MinimalistSpinner tickInterval={200} />;
    }

    const { hours, minutes } = toHoursAndMinutes(this.state.elapsedSeconds);
    const hoursString = lodash.padStart(hours, 1, '0');
    const minutesString = lodash.padStart(minutes, 2, '0');
    return (
      <div>
        <span>{`${hoursString}:${minutesString}`}</span>
        <button onClick={this.toggleTimer()}>
          {buttonContents}
        </button>
        {startedIndicator}
      </div>
    )
  }
}
