// 'use strict'

import React, {Component} from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  WebView
} from 'react-native'
// import YouTube from 'react-native-youtube'

const styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  video: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  heading: {
    backgroundColor: '#F8F8F8'
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#656565'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});

class VideoView extends Component {
  render() {
    const videoID = this.props.video[0].id.videoId
    const URI = 'https://www.youtube.com/embed/' + videoID + '?rel=0&autoplay=0&showinfo=0&controls=0'
    // const URI = 'https://www.youtube.com/embed?listType=search&list=cats'
    console.log("PROPS ", this.props.video[0])
    console.log("URL ", URI)
    return (
      <WebView
        style={{flex:1}}
        javaScriptEnabled={true}
        source={{uri: URI}} />
    )
  }
}

module.exports = VideoView
