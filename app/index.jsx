//import for our text
import { StyleSheet, Text, View } from 'react-native'
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

class Screen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Header heading="Pantry Pal" />
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
        } 
});




