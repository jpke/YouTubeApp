'use strict';

import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native'
import YouTubeSearchResults from './YouTubeSearchResults.js'

const styles = StyleSheet.create({
  description: {
    marginBottom: 40,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 3,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 50,
    marginBottom: 30
  }
});

function urlForQueryAndPage(query) {
  const data = {
          q: query,
          r: 'json',
          part: 'snippet',
          key: 'AIzaSyDKUr7nLe1fsOaQt-1CtrPlujbMv4EWBEo',
          maxResults: 10,
       }

  let querystring = Object.keys(data).map(key => key + '=' + encodeURIComponent(data[key])).join('&');

  return 'https://www.googleapis.com/youtube/v3/search?' + querystring;
}

class YouTubeSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      isLoading: false,
      message: ''
    }
  }
  onSearchTextChanged(event) {
    this.setState({searchString: event.nativeEvent.text})
  }
  _executeQuery(query) {
    console.log("QUERY: ", query)
    this.setState({isLoading: true})
    fetch(query)
    .then(res => res.json())
    .then(json => {
      console.log("JSON: ",json)
      this._handleResponse(json)
    })
    .catch(err =>
      this.setState({
        isLoading: false,
        message: 'An error occured when fetching your query: ' + err
      }))
  }
  _handleResponse(res) {
    this.setState({isLoading: false, message: ''})
    this.props.navigator.push({
      title: 'Search Results',
      component: YouTubeSearchResults,
      passProps: {videos: res.items}
    })
  }
  onSearchPressed() {
    let query = urlForQueryAndPage(this.state.searchString)
    this._executeQuery(query)
  }
  render() {
    let spinner = this.state.isLoading ? (<ActivityIndicator size= 'large'/>) : (<View/>)
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for Videos on YouTube
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search videos here'/>
          <TouchableHighlight style={styles.button}
            underlayColor= '#99d9f4'
            onPress={this.onSearchPressed.bind(this)}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <Image source={require('./Resources/youTubeImage.png')} style={styles.image}/>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </View>
    )
  }
}

module.exports = YouTubeSearch
