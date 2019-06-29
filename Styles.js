import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdb',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    padding: 10,
    color: '#117'
  },
  timerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  timerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // labelContainer: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  timer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timerText: {
    height: 120,
    fontSize: 80,
    color: '#116'
  },

  label: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelText: {
    fontSize: 38,
    color: '#116',
    // height: 200
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  timerLabel22: {
    fontSize: 22
  },

  buttonControls: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
    padding: 10,
    height: 80,
    marginHorizontal: 3,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'linen'
  },
  buttonText: {
    color: 'linen',
    fontSize: 28
  },
  buttonStart: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'forestgreen'
  },
  buttonStop: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'crimson'
  },
  buttonReset: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'darkorange'
  },

  buttonSettings: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#248',
    padding: 10,
    height: 48,
    marginHorizontal: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'linen'
  },
  settingsText: {
    color: 'linen',
    fontSize: 22
  },

  controlContainer: {
    flex: 1,
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },
  settingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    // padding: 5
  },
  settingsPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#113',
    paddingTop: Constants.statusBarHeight
  },
  apply: {
    backgroundColor: 'forestgreen',
    margin: 3
  },
  reset: {
    backgroundColor: 'slateblue',
    margin: 3
  },
  cancel: {
    backgroundColor: 'darkorange',
    margin: 3
  },
  settingsButtonsContainer: {
    flex: 1,
    width: '100%',
    padding: 5,
    justifyContent: 'space-between'
  },
  settingsTextContainer: {
    flex: 1
  }
});
export default myStyles;
