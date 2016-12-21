'use strict'
import React, {Component} from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text
} from 'react-native'
import VideoView from './VideoView'

const styles = StyleSheet.create({
  thumb: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  description: {
    fontSize: 10,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 5
  }
})

class YouTubeSearchResults extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.etag !== r2.etag}
    )
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.videos)
    }
  }
  rowPressed(etag) {
    const video = this.props.videos.filter(item => item.etag === etag)
    this.props.navigator.push({
      title: 'Video',
      component: VideoView,
      passProps: {video: video}
    })
  }
  renderRow(rowData, sectionID, rowID) {
    const title = rowData.snippet.title
    const description = rowData.snippet.description
    const thumbnail = rowData.snippet.thumbnails.medium.url
    return (
      <TouchableHighlight onPress={() => this.rowPressed(rowData.etag)}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{uri: rowData.snippet.thumbnails.medium.url}}/>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    )
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}/>
      </View>
    )
  }
}

module.exports = YouTubeSearchResults
