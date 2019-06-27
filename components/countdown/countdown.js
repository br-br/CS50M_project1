import React, { Component } from 'react';
import { View, Text } from 'react-native';
import vibrate from '../../utils/vibrate';
import styles from '../../Styles';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      currentTime: this.props.duration,
      stopped: this.props.stopped,
      started: this.props.started
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
    // if (nextProps.started !== this.props.started) {
    //   this.setState({
    //     started: nextProps.started
    //   });
    // }
    // if (nextProps.stopped !== this.props.stopped) {
    //   this.setState({
    //     stopped: nextProps.stopped
    //   });
    // }
    this.setState({
      ...nextProps
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ started: nextProps.started, stopped: nextProps.stopped });
  // }

  countdown = () => {
    if (!this.state.stopped && this.state.started) {
      this.setState({
        currentTime: this.state.currentTime - 1
      });
    }

    if (this.state.currentTime === 0) {
      this.setState({
        stopped: true,
        started: false
      });
      // vibrate();
    }
  };
  switchTimer = () => {};
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
      <View style={styles.timerContainer}>
        {/* <Text>
          timer started: {this.state.started === true ? 'true' : 'false'}
        </Text>
        <Text>
          timer stopped: {this.state.stopped === true ? 'true' : 'false'}
        </Text> */}
        <Text style={styles.timer}>
          {this.getCurrentTimeString(this.state.currentTime)}
        </Text>
      </View>
    );
  }
}
