/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';
import YouTubeSearch from './YouTubeSearch'

class YouTubeApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'YouTube Search',
          component: YouTubeSearch,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('YouTubeApp', () => YouTubeApp);

// tar -czf ~/Documents/app.tar.gz ~/Library/Developer/Xcode/DerivedData/YouTubeApp-fvibrxepeinqtjbolnenchbrwjxz/Build/Products/Release-iphonesimulator/*.app
