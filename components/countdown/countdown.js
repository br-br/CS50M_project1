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
      stopped: this.props.duration <= 0
    };
  }

  componentDidMount() {
    let interval = setInterval(this.countdown, 1000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    this.clearInterval(this.state.interval);
  }

  countdown = () => {
    if (!this.state.stopped) {
      this.setState({
        currentTime: this.state.currentTime - 1
      });
    }

    if (this.state.currentTime === 0) {
      this.setState({
        stopped: true
      });
      vibrate();
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
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>
          {this.getCurrentTimeString(this.state.currentTime)}
        </Text>
      </View>
    );
  }
}
