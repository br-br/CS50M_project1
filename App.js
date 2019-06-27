import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import myStyles from './Styles';
import Timer from './components/countdown/countdown';

const styles = myStyles;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 15 * 60,
      started: false,
      stopped: false,
      resetted: false,
      settings: 'default'
    };
  }
  onPressStart = () => {
    this.setState({
      started: true,
      stopped: false
    });
  };
  onPressStop = () => {
    this.setState({
      stopped: true,
      started: false
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
            {/* <Text style={styles.timerLabel}>
              started: {this.state.started === true ? 'true' : 'false'}
            </Text>
            <Text style={styles.timerLabel}>
              stopped: {this.state.stopped === true ? 'true' : 'false'}
            </Text> */}
            <Text style={styles.timerLabel}>Time to work</Text>
            <Timer
              duration={this.state.currentTime}
              stopped={this.state.stopped}
              started={this.state.started}
            />
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
