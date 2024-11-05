# 1 Getting Started

- Note: For now, use javascript expo, soon will convert to typescript

## 1.7. Your First App

- View -> UIView for IOS or AndroidView for Android
- Abstract Representation, Platform independent way
- React Native will map to their native widgets
  > CTRL + ` > Terminal
  > npm start
  > npx expo install react-native-web react-dom @expo/metro-runtime

## 1.8. Running on an IOS Simulator

    Needs XCode, Mac :):) Soon

## 1.9. Running on an Android Emulator

    developer.android.com/studio
      npm start
      a open android
      w open web
      CTRL + m

## 1.10 Running on a Device

Install Expo Client
Scan QR Code
Shake device to show developer tools

## 1.11 Logging

Debugging
console.log("App");

    Terminal
    Metro Bundler
    Info

## 1.12 Debugging in Chrome

    CMD / CTRL + M or D
    Remote Debugging
      in Chrome

    Chrome Developer Tools
    Pause on caught exceptions

    Reload
    click Number

    CMD + R

    Step over or Step into it
    Step out of current function

    Watch +
    x

    Stop Remote Debugging

    Network Tab

    Elements Tab
      Debugger Window

## 1.13 Debugging in VSCode

Debug > Create json file > React Native > Attach to Packager
View > Debug Console
Code > Preferences > Settings > react-native.packager.port
Variables, Watch

- Go back here

## 1.14 Publishing

Metro Bundler > Publish or Republish project
Terminal > expo publish

## 1.15 Fixing the Auto Import Issue

Extensions

- should have no auto import
  add > jsconfig.json
  {
  "exclude": ["node_modules"]
  }

## 1.16 Source Code

## 1.17 Follow Me Around

## 1.18 Learning Paths
