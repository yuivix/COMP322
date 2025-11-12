//import for our text
import { StyleSheet, Text, View, StatusBar, Button, TouchableHighlight } from 'react-native'
//import react, make a module called Component
import React, {Component} from 'react'


//This is our first basicApp
class Header extends Component {
    render() {
      return (
        <View style={styles.header}>
          <Text style={styles.heading}>{ this.props.heading }</Text>
        </View>
        );
    }
}

class Box1 extends Component{
  render() {
    return (
      <View style = {styles.box}>
        <Text style = {styles.boxWriting}> {this.props.label}</Text>
      </View>
    );
  }
}

class ButtonBox extends Component{
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style = {styles.box}>
          <Text style = {styles.boxWriting}> {this.props.label}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}


class Screen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Header heading = "Pantry Pal" />

          <View style={styles.boxSpace}>
            <Box1 label = "Dairy" />
            <Box1 label = "Vegtable" />
            <Box1 label = "Fruit" />
            <Box1 label = "Meat" />
            <ButtonBox 
            label = "Start" 
            onPress={() => {this.props.navigation.navigate("MainPage")}}
             />
            <Box1 label = "Cheese" />
            <Box1 label = "Spices" />
            <Box1 label = "Exotic Fruit" />
            <Box1 label = "Snacks" />
          </View>
        </View>
        ); 
    }
}

export default Screen;




const styles = StyleSheet.create({
    container: {
            flex: 1,
            backgroundColor: '#fcfcfc'
        },
        header: {
            height: '20%',
            backgroundColor: '#c0d698',
            padding: 50
        },
        heading: {
            color: '#080808',
            fontSize: 22,
            textAlign: 'center',
        },
        boxSpace: {
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          paddingLeft: 300,
          paddingRight: 300,
          paddingTop: 20,
          paddingBottom: 250,
        },
        box: {
          height: '50%',
          width: '30%',
          backgroundColor: '#F5F5DC',
          opacity: '100%',
          marginBottom: '3%',

        },
        boxWriting: {
          fontSize: 18,
          color: '#080808',
          textAlign: 'center'
        }
         
});



