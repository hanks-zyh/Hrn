
'use strict'

var React = require('react-native')

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Navigator,
  ViewPagerAndroid,
} = React;

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
    return {};
  },
  render: function(){
      return (
        <Text>ddd</Text>
      );
  }
});

var styles = StyleSheet.create({

});

module.exports = ViewPager;
