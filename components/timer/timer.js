import React, { Component } from 'react';
import { View, Text, Vibration } from 'react-native';
import styles from '../../Styles';
import {
  WORK_TIME,
  BREAK_TIME,
  WORK_LABEL,
  BREAK_LABEL,
  VIB_PATTERN
} from '../../utils/defaults';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      currentTime: this.props.duration,
      stopped: this.props.stopped,
      started: this.props.started,
      resetted: this.props.resetted,
      working: this.props.working,
      label: this.props.working ? WORK_LABEL : BREAK_LABEL
    };
  }

  componentDidMount() {
    let interval = setInterval(this.countdown, 1000);

    this.setState({ interval });
  }

  componentWillUnmount() {
    this.clearInterval(this.state.interval);
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.started !== this.props.started ||
      nextProps.stopped !== this.props.stopped ||
      nextProps.resetted !== this.props.resetted
    ) {
      Vibration.cancel();
      this.setState({
        started: nextProps.started,
        stopped: nextProps.stopped,
        resetted: nextProps.resetted
      });
    }

    if (nextProps.resetted === true) {
      this.setState({
        resetted: nextProps.resetted,
        currentTime: nextProps.duration,
        stopped: true,
        started: false,
        label: nextProps.working ? WORK_LABEL : BREAK_LABEL
      });
    }
  }

  countdown = () => {
    if (!this.state.stopped && this.state.started) {
      this.setState({
        currentTime: this.state.currentTime - 1
      });
    }

    if (this.state.currentTime === 0) {
      Vibration.vibrate(VIB_PATTERN, true);
      this.setState({
        stopped: true,
        started: false
      });

      this.switchTimer();
      setTimeout(() => {
        if (!this.state.resetted) {
          this.setState({
            stopped: false,
            started: true
          });
        }
        Vibration.cancel();
      }, 10000);
    }
  };

  switchTimer = () => {
    this.setState({
      currentTime: !this.state.working ? WORK_TIME : BREAK_TIME,
      working: !this.state.working,
      label: !this.state.working ? WORK_LABEL : BREAK_LABEL
    });
  };

  padZeros = num => {
    return num < 10 ? '0' + num : '' + num;
  };

  getCurrentTimeString = totalSeconds => {
    return (
      this.padZeros(parseInt(totalSeconds / 60)) +
      ' : ' +
      this.padZeros(totalSeconds % 60)
    );
  };
  render() {
    return (
      <View>
        <Text style={styles.timerLabel}>{this.state.label}</Text>
        <Text style={styles.timer}>
          {this.getCurrentTimeString(this.state.currentTime)}
        </Text>
      </View>
    );
  }
}
