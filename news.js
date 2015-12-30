
'use strict'

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Navigator,
  ScrollView,
  ViewPager,
  BackAndroid,
  ViewPagerAndroid,
  Image,
  ListView,
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
var PAGES = 5;
var imageUrls = [
  'https://img.alicdn.com/bao/uploaded/i3/TB1vkdZKFXXXXaAXVXXXXXXXXXX_!!0-item_pic.jpg',
  'https://img.alicdn.com/bao/uploaded/i5/TB1CGo3KXXXXXb6XpXXYXGcGpXX_M2.SS2',
  'https://img.alicdn.com/bao/uploaded/i1/TB1jkifKVXXXXXhXXXXXXXXXXXX_!!0-item_pic.jpg',
  'https://img.alicdn.com/bao/uploaded/i2/TB1GCgoKVXXXXcaXpXXXXXXXXXX_!!0-item_pic.jpg',
  'https://img.alicdn.com/bao/uploaded/i1/TB1D6A7KVXXXXaQXVXXXXXXXXXX_!!0-item_pic.jpg',
]
var NewsView = React.createClass({

  getInitialState: function(){
    _navigator = this.props.navigator;
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._getData()),
    };
  },
  _getData:function(){
    var datas = [];
    fetch('http://news-at.zhihu.com/api/4/themes')
    .then((response) => response.text())
    .then((responseText) => {
      var  jsonObject = eval("(" + responseText + ")");
      var array = jsonObject.others;
      for(var i=0; i<array.length; i++ ){
        datas.push(array[i]);
      }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(datas),
        isLoading: false
      });
    })
    .catch((error) => {
      console.warn(error);
    }).done;
    return datas;
  },

  render:function(){
    var pages = [];
    for (var i = 0; i < PAGES; i++) {
      pages.push(
        <View key={i} style={{ flex: 1, alignItems: 'stretch' }} collapsable={false}>
          <Image
            style={{ flex:1 }}
            source={{uri: imageUrls[i%PAGES] }}
          />
       </View>
      );
    }
    return (
      <ScrollView>
        <View>
          <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}
            onPageScroll={this.onPageScroll}
            onPageSelected={this.onPageSelected}
            ref={viewPager => { this.viewPager = viewPager; }}>
            {pages}
          </ViewPagerAndroid>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
                    <TouchableOpacity>
                        <View style={{ flexDirection:'row' }}>
                          <Image source={{ uri: rowData.thumbnail }} style={{height:60,width:80, margin:12,}} />
                          <View>
                            <Text style={{ marginTop:12, color:'#234', fontSize:16,}}>{rowData.name}</Text>
                            <Text style={{ marginTop:12, color:'#888', fontSize:12,}}>{rowData.description}</Text>
                            <View style={{height:1.5,  backgroundColor:'#222' }}></View>
                          </View>
                        </View>
                      </TouchableOpacity>
                      }
          />
        </View>
      </ScrollView>
    );
  },
});
var styles = StyleSheet.create({
  viewPager:{
    height : 200,
  },
});

module.exports = NewsView;
