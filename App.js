import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import myStyles from './Styles';
import {
  WORK_TIME,
  WORK_LABEL,
  BREAK_TIME,
  LONG_BREAK_TIME
} from './utils/defaults';
import Timer from './components/timer/timer';
import Settings from './components/settings/settings';

const styles = myStyles;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: WORK_TIME,
      label: WORK_LABEL,
      workTime: WORK_TIME,
      breakTime: BREAK_TIME,
      longBreakTime: LONG_BREAK_TIME,
      started: false,
      stopped: false,
      working: true,
      resetted: false,
      showSettings: false,
      running: false
    };
  }

  onPressStart = () => {
    this.setState({
      started: true,
      stopped: false,
      resetted: false,
      running: true
    });
  };
  onPressStop = () => {
    this.setState({
      stopped: true,
      started: false,
      running: false
    });
  };
  onPressReset = () => {
    this.setState({
      currentTime: this.state.workTime,
      label: WORK_LABEL,
      working: true,
      started: false,
      stopped: false,
      resetted: true,
      running: false
    });
  };

  onPressSettings = () => {
    this.setState({
      stopped: true,
      // started: false,
      showSettings: true
    });
  };

  handleSettingsCancel = () => {
    // this.onPressReset();
    this.setState({
      started: this.state.started && !this.state.stopped,
      stopped: !this.state.started && this.state.stopped,
      showSettings: false
    });
  };
  handleSettingsChange = newSettings => {
    this.onPressReset();
    this.setState({
      currentTime: newSettings.workTime,
      workTime: newSettings.workTime,
      breakTime: newSettings.breakTime,
      longBreakTime: newSettings.longBreakTime,
      showSettings: false
      // label: WORK_LABEL,
      // working: true,
      // started: false,
      // stopped: false
    });
  };
  handleSettingsReset = () => {
    this.onPressReset();
    this.setState({
      currentTime: WORK_TIME,
      workTime: WORK_TIME,
      breakTime: BREAK_TIME,
      longBreakTime: LONG_BREAK_TIME,
      showSettings: false
      // label: WORK_LABEL,
      // working: true,
      // started: false,
      // stopped: false
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pomodoro Timer</Text>
        {/* <Text>{this.state.workTime || 'not defined!'}</Text>
        <Text>{this.state.longBreakTime || 'not defined!'}</Text>
        <Text>{this.state.breakTime || 'not defined!'}</Text> */}
        <View style={styles.timerContainer}>
          <Timer
            duration={this.state.currentTime}
            stopped={this.state.stopped}
            started={this.state.started}
            working={this.state.working}
            resetted={this.state.resetted}
            workTime={this.state.workTime}
            breakTime={this.state.breakTime}
            longBreakTime={this.state.longBreakTime}
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
          <Settings
            showSettings={this.state.showSettings}
            onCancel={this.handleSettingsCancel}
            onApply={this.handleSettingsChange}
            onReset={this.handleSettingsReset}
            workTime={this.state.workTime}
            breakTime={this.state.breakTime}
            longBreakTime={this.state.longBreakTime}
          />
        </View>
      </View>
    );
  }
}
