import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebe',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    padding: 10
  },
  timerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  labelContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  timer: {
    fontSize: 72
  },
  timerLabel: {
    fontSize: 36
  },

  button: {
    // flex: 1,
    alignItems: 'center',
    marginLeft: 0,
    padding: 10,
    marginHorizontal: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'linen'
  },
  buttonText: {
    color: 'linen',
    fontSize: 28
  },
  buttonStart: {
    flex: 1,
    backgroundColor: 'teal'
  },
  buttonStop: {
    flex: 1,
    backgroundColor: 'crimson'
  },
  buttonReset: {
    flex: 1,
    backgroundColor: 'indigo'
  },

  buttonSettings: {
    flex: 1,
    margin: 2,
    backgroundColor: 'linen'
  },
  settingsText: {
    color: 'indigo',
    fontSize: 18
  },

  controlContainer: {
    // flex: 1,
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50
  },
  settingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }
});
export default myStyles;
