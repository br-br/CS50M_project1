# Project 1 - Pomodoro Timer

For this project, you'll be implementing a Pomodoro timer. This timer will help
people trying to use the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique).
It will vibrate to tell you when to take breaks or resume working, based on some
determined values. Check out the [staff solution](#staff-solution) for a working
version.

## Requirements

- You may not import libraries other than the below:
  - `expo`
  - `react`
  - `react-native`
  - `prop-types`
- Timer should display minutes and seconds in text
- Timer should count down seconds until it reaches 00:00
- Phone should buzz when timer reaches 0
- Timers should switch between 25 and 5 minutes
- Timer should be able to start, stop, and reset

The aesthetics of the app is up to you!

### Challenge (Not Required)

- Allow the user to input any arbitrary time for the timers (e.g. 5 mins of work time and 5 mins of break)

# My solution

The app fullfills the requirements. In addition, following the description on the wikipedia page, it switches to a long break after 4 working units.

I implemented the challenge as a Modal. Sliders allow to change work time, break and long break.

![Main screen](assets/pomodoro-main.png?raw=true 'Pomodoro Timer') ![Settings screen](assets/pomodoro_settings_.png?raw=true 'Pomodoro Timer')

## Demo video

A video demonstrating the app can be viewed [here](https://youtu.be/7oaCeURu6nQ)
To be able to verify the status of the settings, the demo app shows some additional information:

![Main screen with info](assets/pomodoro_info-text_.png?raw=true 'Pomodoro Timer with additional info')
