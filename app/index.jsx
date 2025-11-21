//import for our text
import { StyleSheet, Text, View, StatusBar, Button, TouchableHighlight, ImageBackground } from 'react-native'
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
      <TouchableHighlight onPress={this.props.onPress} style={styles.box} underlayColor="#e6e6c9">
        <Text style={styles.boxWriting}>{this.props.label}</Text>
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
            height: '10%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#c0d698',
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
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 30,
          paddingBottom: 250,
        },
        box: {
          height: '45%',
          width: '30%',
          backgroundColor: '#F5F5DC',
          opacity: .9,
          marginBottom: '5%',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',

        },
        boxWriting: {
          fontSize: 18,
          color: '#080808',
          textAlign: 'center'
        }
         
});



