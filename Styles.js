import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const DARK_TEXT = '#117';
const LIGHT_TEXT = 'linen';
const BG_DARK = '#113';
const BG_LIGHT = '#fdb';
const GREEN = 'forestgreen';
const RED = 'crimson';
const YELLOW = 'darkorange';
const LILA = 'slateblue';
const BLUE = '#248';

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_LIGHT,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    padding: 10,
    color: DARK_TEXT
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

  timer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timerText: {
    height: 120,
    fontSize: 80,
    color: DARK_TEXT
  },

  label: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelText: {
    fontSize: 38,
    color: DARK_TEXT,
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
    borderColor: LIGHT_TEXT
  },
  buttonText: {
    color: LIGHT_TEXT,
    fontSize: 28
  },
  buttonStart: {
    backgroundColor: GREEN
  },
  buttonStop: {
    backgroundColor: RED
  },
  buttonReset: {
    backgroundColor: YELLOW
  },

  buttonSettings: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: BLUE,
    padding: 10,
    height: 48,
    marginHorizontal: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: LIGHT_TEXT
  },
  settingsText: {
    color: LIGHT_TEXT,
    fontSize: 22
  },

  controlContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },
  settingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  settingsPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: BG_DARK,
    paddingTop: Constants.statusBarHeight
  },
  apply: {
    backgroundColor: GREEN,
    margin: 3
  },
  reset: {
    backgroundColor: LILA,
    margin: 3
  },
  cancel: {
    backgroundColor: YELLOW,
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
  },
  sliderContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '80%',
    height: 40,
    // paddingTop: 10,
    backgroundColor: 'linen',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'linen'
  },
  fullWidthCentered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  sliderText: {
    color: LIGHT_TEXT,
    fontSize: 22,
    // marginBottom: 10,
    marginTop: 5
  }
});
export default myStyles;
