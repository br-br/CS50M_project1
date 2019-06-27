import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import myStyles from './Styles';
import { WORK_TIME, WORK_LABEL } from './utils/defaults';
import Timer from './components/timer/timer';

const styles = myStyles;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: WORK_TIME,
      label: WORK_LABEL,
      started: false,
      stopped: false,
      working: true,
      resetted: false,
      settings: 'default'
    };
  }

  onPressStart = () => {
    this.setState({
      started: true,
      stopped: false,
      resetted: false
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
      currentTime: WORK_TIME,
      label: WORK_LABEL,
      working: true,
      started: false,
      stopped: false,
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
          <Timer
            duration={this.state.currentTime}
            stopped={this.state.stopped}
            started={this.state.started}
            working={this.state.working}
            resetted={this.state.resetted}
          />

          <View style={styles.controlContainer}>
            <TouchableHighlight
              accessibilityLabel='Start or resume the pomodoro timer'
              style={[styles.buttonControls, styles.buttonStart]}
              onPress={this.onPressStart}>
              <Text style={styles.buttonText}> Start </Text>
            </TouchableHighlight>

            <TouchableHighlight
              accessibilityLabel='Stop the timer - resume by clicking on Start'
              style={[styles.buttonControls, styles.buttonStop]}
              onPress={this.onPressStop}>
              <Text style={styles.buttonText}> Stop </Text>
            </TouchableHighlight>

            <TouchableHighlight
              accessibilityLabel='Reset the timer'
              style={[styles.buttonControls, styles.buttonReset]}
              onPress={this.onPressReset}>
              <Text style={styles.buttonText}> Reset </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <TouchableHighlight
            accessibilityLabel='Customize the settings for work-time and break-time'
            style={[styles.buttonSettings]}
            onPress={this.onPressSettings}>
            <Text style={styles.settingsText}> Settings </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
