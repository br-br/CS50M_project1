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
  explainingText =
    'Change the length of the working units, of the short breaks and of the long breaks:';

  changeWorkTime(val) {
    this.setState({
      workTime: val * 60
    });
  }
  changeLongBreakTime(val) {
    this.setState({
      longBreakTime: val * 60
    });
  }
  changeBreakTime(val) {
    this.setState({
      breakTime: val * 60
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
          <View style={styles.infoContainer}>
            {/* <Text style={styles.settingsText}>The Pomodoro Technique</Text> */}
            <Text style={styles.settingsText}>{this.explainingText}</Text>
          </View>

          <View style={styles.fullWidthCentered}>
            <View style={styles.sliderContainer}>
              <Slider
                style={styles.fullWidthCentered}
                minimumTrackTintColor='forestgreen'
                thumbTintColor='forestgreen'
                step={5}
                minimumValue={10}
                maximumValue={50}
                value={parseInt(this.state.workTime / 60)}
                onValueChange={val => this.changeWorkTime(val)}
              />
            </View>
            <Text style={styles.sliderText}>
              {'pomodoro time is: ' +
                parseInt(this.state.workTime / 60) +
                ' minutes'}
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
                value={parseInt(this.state.breakTime / 60)}
                onValueChange={val => this.changeBreakTime(val)}
              />
            </View>
            <Text style={styles.sliderText}>
              {'short break time is: ' +
                parseInt(this.state.breakTime / 60) +
                ' minutes'}
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
                maximumValue={50}
                value={parseInt(this.state.longBreakTime / 60)}
                onValueChange={val => this.changeLongBreakTime(val)}
              />
            </View>
            <Text style={styles.sliderText}>
              {'long break Time is: ' +
                parseInt(this.state.longBreakTime / 60) +
                ' minutes'}
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
