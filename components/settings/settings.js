import React from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';
import styles from '../../Styles';
import {
  WORK_TIME,
  BREAK_TIME,
  LONG_BREAK_TIME,
  WORK_LABEL,
  BREAK_LABEL,
  VIB_PATTERN
} from '../../utils/defaults';

const settings = props => {
  //   state = {
  //     workTime: this.props.workTime,
  //     breakTime: this.props.breakTime,
  //     longBreakTime: this.props.longBreakTime
  //   };
  modalContent = (
    <View>
      {/* <Image source={props.selectedPlace.image} style={styles.placeImage} /> */}
      <Text style={styles.labelText}>Some explaining text</Text>
    </View>
  );
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.showSettings}
      animationType='slide'>
      <View style={styles.settingsPage}>
        <View style={styles.settingsTextContainer}>
          {/* <Image source={props.selectedPlace.image} style={styles.placeImage} /> */}
          <Text style={styles.settingsText}>Some explaining text</Text>
        </View>
        {/* {modalContent} */}
        <View style={styles.settingsButtonsContainer}>
          <TouchableHighlight
            style={[styles.buttonControls, styles.apply]}
            // title='Apply'
            // color='seagreen'
            onPress={props.onApply}>
            <Text style={styles.buttonText}> Apply Changes </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.buttonControls, styles.reset]}
            // title='Reset'
            // color='purple'
            onPress={props.onReset}>
            <Text style={styles.buttonText}> Reset to Defaults </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.buttonControls, styles.cancel]}
            // title='Cancel'
            // color='darkorange'
            onPress={props.onCancel}>
            <Text style={styles.buttonText}> Cancel</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};
export default settings;
