import React from 'react';
import { View, Text, Modal, Button } from 'react-native';
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
      // visible={props.showSettings}
      animationType='slide'>
      {modalContent}
      {/* <View style={styles.settingsPage}> */}
      {/* <View style={styles.settingsButtonsContainer}>
        <Button title='Apply' color='seagreen' onPress={props.onApply} />
        <Button title='Reset' color='purple' onPress={props.onReset} />
        <Button title='Cancel' color='darkorange' onPress={props.onCancel} />
      </View> */}
      {/* </View> */}
    </Modal>
  );
};
export default settings;
