
'use strict'

var React = require('react-native')

var {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  ViewPagerAndroid,
  BackAndroid,
} = React;
var PAGES = 5;
var BGCOLOR = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];
var IMAGE_URIS = [
  'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
  'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
  'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
  'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
  'http://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg',
];

BackAndroid.addEventListener('hardwareBackPress', function() {
  if(_navigator == null){
    return false;
  }
  if(_navigator.getCurrentRoutes().length === 1){
    return false;
  }
  _navigator.pop();
  return true;
});

var _navigator ;


var ViewPager  = React.createClass({

  getInitialState: function(){
    _navigator = this.props.navigator;
    return {
      page: 0,
      animationsAreEnabled: true,
      progress: {
        position: 0,
        offset: 0,
      },
    };
  },
  onPageSelected: function(e) {
    this.setState({page: e.nativeEvent.position});
  },

  onPageScroll: function(e) {
    this.setState({progress: e.nativeEvent});
  },

  move: function(delta) {
    var page = this.state.page + delta;
    this.go(page);
  },

  go: function(page) {
    if (this.state.animationsAreEnabled) {
      this.viewPager.setPage(page);
    } else {
      this.viewPager.setPageWithoutAnimation(page);
    }

    this.setState({page});
  },

  render: function(){
    var pages = [];
    for (var i = 0; i < PAGES; i++) {
      var pageStyle = {
        backgroundColor: BGCOLOR[i % BGCOLOR.length],
        flex: 1,
        alignItems: 'stretch'
      };
      pages.push(
        <View key={i} style={pageStyle} collapsable={false}>
          <Image
            style={styles.image}
            source={{uri: IMAGE_URIS[i % BGCOLOR.length]}}
          />
       </View>
      );
    }
    var { page, animationsAreEnabled } = this.state;
      return (
        <View style={styles.container}>
         <ViewPagerAndroid
           style={styles.viewPager}
           initialPage={0}
           onPageScroll={this.onPageScroll}
           onPageSelected={this.onPageSelected}
           ref={viewPager => { this.viewPager = viewPager; }}>
           {pages}
         </ViewPagerAndroid>

       </View>
      );
  }
});

var styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    imageContainer: {
      flex: 1,
      alignItems: 'stretch'
    },
    image: {
      flex: 1,
    },
    likeButton: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderColor: '#333333',
      borderWidth: 1,
      borderRadius: 5,
      flex: 1,
      margin: 8,
      padding: 8,
    },

    viewPager: {
      flex: 1,
    },
});

module.exports = ViewPager;
