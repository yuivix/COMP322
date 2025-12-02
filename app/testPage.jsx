//import for our text
import { StyleSheet, Text, View } from 'react-native'
//import react, make a module called Component
import React, {Component} from 'react'

class Header extends Component {
    render() {
      return (
        <View style={styles.header}>
          <Text style={styles.heading}>{ this.props.heading }</Text>
        </View>
        ); 
    }
}

// screen container
class Screen2 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Header heading="Shining above the Spire" />
        </View>
    ); 
  }
}

export default Screen2;

const styles = StyleSheet.create({
    container: {
  flex: 1,
      backgroundColor: '#CCCCCC'
    },
    header: {
      height: '20%',
      backgroundColor: '#333333',
      padding: 50
  }, heading: {
      color: '#DEDEDE',
      fontSize: 22,
      textAlign: 'center',
  } });




