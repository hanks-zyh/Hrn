
'use strict'

var React = require('react-native');
var {
  Image,
  View,
  Text,
  StyleSheet,
  ViewPagerAndroid,
  BackAndroid,
  ScrollView,
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


var UserInfoView = React.createClass({

  getInitialState: function(){
    _navigator = this.props.navigator;
    return {

    };
  },

  render: function(){
    return (
        <ScrollView>
      <View>
        <Image  source= {{ uri: 'http://img3.100bt.com/upload/ttq/20120908/1347116765019.jpg' }} style={{  height:230 }}>
          <View style={{ flex:1,alignItems:'center', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <Image  source= {{ uri: 'http://img3.100bt.com/upload/ttq/20120908/1347116765019.jpg' }}
              style={{width:60,  height:60, marginTop:30,borderRadius:40, borderWidth:2,borderColor:'#C251C0' }} />
              <Text style={{ fontSize:18, color:'#CECFCE', margin:4 }}> Jassell Charm</Text>
              <Text style={{ fontSize:14, color:'#C251C0'}}>Product Design</Text>
              <View style={{ width:140, marginLeft:40, marginTop:30, marginRight:40, flexDirection:'row', justifyContent:'space-between', alignItems:'center',   }}>
                <Text style={{ fontSize:12, color:'#CECFCE',}}>420<Text style={{ color:'#3A87DF'}}> Foller</Text></Text>
                <Text style={{ fontSize:12, color:'#CECFCE',}}>247<Text style={{ color:'#3A87DF'}}> Foller</Text></Text>
              </View>
          </View>
        </Image>

        <View style={{
          backgroundColor: '#191919',
          height: 56,
          justifyContent:'space-between',
          flexDirection:'row',
          alignItems:'center',
        }}>
        <Text style={{ color:'#C251C0', fontSize:16, flex:1,alignSelf:'center' ,textAlign: 'center'}}>FEED</Text>
        <Text style={{ color:'#545351', fontSize:16, flex:1,alignSelf:'center',textAlign: 'center'}}>PHOTOS</Text>
        </View>
        <View style={{ backgroundColor:'#C251C0', height:2, width:140}}></View>
        <View  style={{ flexDirection:'row', height:80,   }}>
          <View  style={{ width:80, alignItems:'center' }}>
            <View style={{height:8, width:8, borderColor:'#F1A289',  borderWidth:2, borderRadius:4, marginTop:40 }}></View>
            <View style={{flex:1, width:2, backgroundColor:'#DBDBDB'}} />
          </View>
          <View style={{ justifyContent:'center'}}>
            <Text style={{ color:'#8B8B8A', fontSize:14, marginBottom:5,  }}>Checked in at <Text style={{color:'#C251C0'}}>Nola Bar and Restaurant</Text></Text>
            <Text style={{ color:'#CBCCCB', fontSize:12, marginTop:5,  }}>WENNESDAY 7:00 PM</Text>
          </View>
        </View>
        <View  style={{ flexDirection:'row', height:80,   }}>
          <View  style={{ width:80, alignItems:'center' }}>
            <View style={{height:40, width:2, backgroundColor:'#DBDBDB', overflow:'visible'}} />
            <View style={{height:8, width:8, borderColor:'#54D8E7',  borderWidth:2, borderRadius:4, }}></View>
            <View style={{flex:1, width:2, backgroundColor:'#DBDBDB', overflow:'visible'}} />
          </View>
          <View style={{ justifyContent:'center'}}>
            <Text style={{ color:'#8B8B8A', fontSize:14, marginBottom:5,  }}>Hey team let us meet at 7:00 PM </Text>
            <Text style={{ color:'#CBCCCB', fontSize:12, marginTop:5,  }}>WENNESDAY 6:32 PM</Text>
          </View>
        </View>
        <View  style={{ flexDirection:'row', }}>
          <View  style={{ width:80, alignItems:'center' }}>
            <View style={{height:40, width:2, backgroundColor:'#DBDBDB', overflow:'visible'}} />
            <View style={{height:8, width:8, borderColor:'#3885E5',  borderWidth:2, borderRadius:4,  }}></View>
            <View style={{height:200, width:2, backgroundColor:'#DBDBDB', overflow:'visible'}} />
          </View>
          <View >
            <Text style={{ color:'#8B8B8A', fontSize:14, marginBottom:5, marginTop:20, }}>Bonfite with friends </Text>
            <Text style={{ color:'#CBCCCB', fontSize:12, marginTop:5,  }}>DEC 5</Text>
            <Image source={{ uri:'http://img.hb.aicdn.com/735afbfa2f6fee24d1a10e1a22b23c63f707ea82281c3-ajdFRe_fw658' }} style={{ borderRadius:5, height:120, width:200}} />
          </View>
        </View>
      </View>
        </ScrollView>
    );
  },
});

var styles = StyleSheet.create({

});

module.exports = UserInfoView;
