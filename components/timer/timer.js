import React, { Component } from 'react';
import { View, Text, Vibration } from 'react-native';
import styles from '../../Styles';
import { WORK_LABEL, BREAK_LABEL, VIB_PATTERN } from '../../utils/defaults';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      currentTime: this.props.duration,
      workTime: this.props.workTime,
      breakTime: this.props.breakTime,
      longBreakTime: this.props.longBreakTime,
      stopped: this.props.stopped,
      started: this.props.started,
      resetted: this.props.resetted,
      working: this.props.working,
      label: this.props.working ? WORK_LABEL + 1 : BREAK_LABEL,
      unit: 1
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
        unit: 1,
        label: nextProps.working ? WORK_LABEL + 1 : BREAK_LABEL
      });
    }
    if (
      nextProps.workTime !== this.props.workTime ||
      nextProps.breakTime !== this.props.breakTime ||
      nextProps.longBreakTime !== this.props.longBreakTime
    ) {
      this.setState({
        currentTime: nextProps.duration,
        workTime: nextProps.workTime,
        breakTime: nextProps.breakTime,
        longBreakTime: nextProps.longBreakTime
      });
    }
  }

  countdown = () => {
    if (!this.state.stopped && this.state.started) {
      this.setState({
        currentTime: this.state.currentTime - 1
      });
    }

    if (this.state.currentTime < 0) {
      // Vibration.vibrate(VIB_PATTERN, true);
      Vibration.vibrate();
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
      }, 1000);
    }
  };

  switchTimer = () => {
    this.setState({
      currentTime: !this.state.working
        ? this.state.workTime
        : this.state.breakTime,
      working: !this.state.working,
      label: !this.state.working ? WORK_LABEL + this.state.unit : BREAK_LABEL,
      unit: this.state.working ? this.state.unit + 1 : this.state.unit
    });
    if (this.state.unit > 4) {
      this.setState({
        unit: 1,
        currentTime: this.state.longBreakTime
      });
    }
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
      <View style={styles.timerWrapper}>
        <View style={styles.label}>
          <Text style={styles.labelText}>{this.state.label}</Text>
        </View>
        <View style={styles.timer}>
          <Text style={styles.timerText}>
            {this.getCurrentTimeString(this.state.currentTime)}
          </Text>
        </View>
      </View>
    );
  }
}
