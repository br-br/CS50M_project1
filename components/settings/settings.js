import React from 'react';
import { View, Text, Modal, TouchableHighlight, Slider } from 'react-native';
import styles from '../../Styles';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workTime: this.props.workTime,
      breakTime: this.props.breakTime,
      longBreakTime: this.props.longBreakTime
    };
  }
  explainingText = 'explain pomodoro technique';

  changeWorkTime(val) {
    this.setState({
      workTime: val
    });
  }
  changeLongBreakTime(val) {
    this.setState({
      longBreakTime: val
    });
  }
  changeBreakTime(val) {
    this.setState({
      breakTime: val
    });
  }
  applySettings = () => {
    this.props.onApply(this.state);
  };

  render() {
    return (
      <Modal
        onRequestClose={this.props.onCancel}
        visible={this.props.showSettings}
        animationType='slide'>
        <View style={styles.settingsPage}>
          <View style={styles.settingsTextContainer}>
            <Text style={styles.settingsText}>The Pomodoro Technique</Text>
            <Text style={styles.settingsText}>TODO: {this.explainingText}</Text>
          </View>

          <View style={styles.fullWidthCentered}>
            <View style={styles.sliderContainer}>
              <Slider
                style={styles.fullWidthCentered}
                minimumTrackTintColor='forestgreen'
                thumbTintColor='forestgreen'
                step={5}
                minimumValue={10}
                maximumValue={60}
                value={this.state.workTime}
                onValueChange={val => this.changeWorkTime(val)}
              />
            </View>
            <Text style={styles.sliderText}>
              {'pomodoro time is: ' + this.state.workTime + ' minutes'}
            </Text>
          </View>

          <View style={styles.fullWidthCentered}>
            <View style={styles.sliderContainer}>
              <Slider
                style={styles.fullWidthCentered}
                minimumTrackTintColor='forestgreen'
                thumbTintColor='forestgreen'
                step={1}
                minimumValue={1}
                maximumValue={10}
                value={this.state.breakTime}
                onValueChange={val => this.changeBreakTime(val)}
              />
            </View>
            <Text style={styles.sliderText}>
              {'short break time is: ' + this.state.breakTime + ' minutes'}
            </Text>
          </View>

          <View style={styles.fullWidthCentered}>
            <View style={styles.sliderContainer}>
              <Slider
                style={styles.fullWidthCentered}
                minimumTrackTintColor='forestgreen'
                thumbTintColor='forestgreen'
                step={5}
                minimumValue={10}
                maximumValue={60}
                value={this.state.longBreakTime}
                onValueChange={val => this.changeLongBreakTime(val)}
              />
            </View>
            <Text style={styles.sliderText}>
              {'long break Time is: ' + this.state.longBreakTime + ' minutes'}
            </Text>
          </View>

          <View style={styles.settingsButtonsContainer}>
            <TouchableHighlight
              style={[styles.buttonControls, styles.apply]}
              onPress={this.applySettings}>
              <Text style={styles.buttonText}> Apply Changes </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.buttonControls, styles.reset]}
              onPress={this.props.onReset}>
              <Text style={styles.buttonText}> Reset to Defaults </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.buttonControls, styles.cancel]}
              onPress={this.props.onCancel}>
              <Text style={styles.buttonText}> Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}
