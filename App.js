import React from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';

import myStyles from './Styles';

const styles = myStyles;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      stopped: false,
      resetted: false,
      settings: 'default'
    };
  }
  onPressStart = () => {
    this.setState({
      started: true
    });
  };
  onPressStop = () => {
    this.setState({
      stopped: true
    });
  };
  onPressReset = () => {
    this.setState({
      resetted: true
    });
  };
  onPressReset = () => {
    this.setState({
      resetted: true
    });
  };

  onPressSettings = () => {
    this.setState({
      settings: 'customized'
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pomodoro Timer</Text>
        <View style={styles.timerContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.timer}>12 : 34</Text>
            <Text style={styles.timerLabel}>Time to work</Text>
          </View>

          <View style={styles.controlContainer}>
            <TouchableHighlight
              accessibilityLabel='Start or resume the pomodoro timer'
              style={[styles.button, styles.buttonStart]}
              onPress={this.onPressStart}>
              <Text style={styles.buttonText}> Start </Text>
            </TouchableHighlight>

            <TouchableHighlight
              accessibilityLabel='Stop the timer - resume by clicking on Start'
              style={[styles.button, styles.buttonStop]}
              onPress={this.onPressStop}>
              <Text style={styles.buttonText}> Stop </Text>
            </TouchableHighlight>

            <TouchableHighlight
              accessibilityLabel='Reset the timer'
              style={[styles.button, styles.buttonReset]}
              onPress={this.onPressReset}>
              <Text style={styles.buttonText}> Reset </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <TouchableHighlight
            accessibilityLabel='Customize the settings for work-time and break-time'
            style={[styles.button, styles.buttonSettings]}
            onPress={this.onPressSettings}>
            <Text style={styles.settingsText}> Settings </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
