import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Pressable, Image, Dimensions, Modal, Button } from 'react-native';
import React, { Component } from 'react';

class MainPage extends Component {

  state = {
    modalVisible: false,
    selectedRecipe: null,
  };

  openRecipe = (recipe) => {
    this.setState({ selectedRecipe: recipe, modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false, selectedRecipe: null });
  }

  render() {
    const categories = [
      "Pasta", "Vegan", "Protein","Vegatarian", "Soups", "Dessert",
    ];

    const recipes = [
      { id: 1, title: 'Spaghetti Carbonara', image: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg' },
      { id: 2, title: 'Shakshouka', image: 'https://www.themealdb.com/images/media/meals/crd1jz1763592990.jpg' },
      { id: 3, title: 'Creamy Tomato Soup', image: 'https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg' },
      { id: 4, title: 'Chocolate Cake', image: 'https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg' },
      { id: 5, title: 'Grilled Chicken', image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg' },
      { id: 6, title: 'Vegetable Stir Fry', image: 'https://www.themealdb.com/images/media/meals/wqurxy1511453156.jpg' },
      { id: 7, title: 'Beef Tacos', image: 'https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg' },
      { id: 8, title: 'Pancakes', image: 'https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg' },
    ];

    return (
      <View style={styles.container}>
        { /* Category Scroll */ }
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {categories.map((cat, index) => (
            <TouchableOpacity key={index} style={styles.categoryBox}>
              <Text style={styles.categoryText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        { /* Recipe Cards */ }
        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <View style={styles.recipeGrid}>
            {recipes.map((recipe) => (
              <View key={recipe.id} style={styles.recipeWrapper}>
                <Pressable style={styles.recipeCard} onPress={() => this.openRecipe(recipe)}>
                  <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
                </Pressable>
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
            </View>
            ))}
          </View>
        </ScrollView>

        { /* Recipe Modal */ }
        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          animationType="slide"
          >
            <View style={styles.modalContainer}>
            <Image 
              source={{ uri: this.state.selectedRecipe?.image }}
              style={styles.modalImage}
            />

            <Text style={styles.modalTitle}>
              {this.state.selectedRecipe?.title}
            </Text>

            <TouchableOpacity 
              onPress={this.closeModal} 
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
          </Modal>
          <TouchableOpacity 
          style = {styles.colorButton}
          onPress={() => {this.props.navigation.navigate("ProfilePage")}} >
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
        
    );
  }
}

export default MainPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcfcfc' },
  categoryScroll: { marginTop: 12, maxHeight: 90, marginBottom: 10 },
  categoryBox: {
    backgroundColor: '#c0d698',
    borderRadius: 15,
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: { fontSize: 16, color: '#080808', fontWeight: '600' },

  recipeList: { 
    padding: 10,
  },

  recipeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  recipeWrapper: {
    width: '47.5%',
    marginBottom: 15,
  },

  recipeCard: {
    width: '100%',
    height: 225,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },

  recipeImage: {
    width: '100%',
    height: '100%',
  },

  recipeTitle: {
    fontSize: 14,
    color: '#080808',
    textAlign: 'center',
    fontWeight: '200',
  },

  modalContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 70,
    alignItems: 'center',
    },

  modalImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    },

  modalTitle: {
    fontSize: 26,
    fontWeight: '700',
    marginTop: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
    },
  
  closeButton: {
    marginTop: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#c0d698',
    borderRadius: 12,
    },
  
  closeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    },

   colorButton: {
    colorButton: 'blue',
    alignItems: 'center',
    height: 25
    },
});