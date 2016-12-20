// 'use strict'

import React, {Component} from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native'
import YouTube from 'react-native-youtube'

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
    console.log("URL: ", this.props.video[0].id.videoId)
    const videoID = this.props.video[0].id.videoId
    return (
      <View style={styles.container}>
      <YouTube
        ref="youtubePlayer"
        videoId="KVZ-P-ZI6W4" // The YouTube video ID
        play={true}           // control playback of video with true/false
        hidden={false}        // control visiblity of the entire view
        playsInline={true}    // control whether the video should play inline
        loop={false}          // control whether the video should loop when ended

        onReady={(e)=>{this.setState({isReady: true})}}
        onChangeState={(e)=>{this.setState({status: e.state})}}
        onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
        onError={(e)=>{this.setState({error: e.error})}}
        onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}

        style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
      />
      </View>
    )
  }
}

module.exports = VideoView
