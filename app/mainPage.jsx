import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Pressable, Image, Dimensions, Modal } from 'react-native';
import React, { Component } from 'react';

class MainPage extends Component {

  state = {
    modalVisible: false,
    selectedRecipe: null,
    recipes: [],
    selectedCategory: null,
  };

  closeModal = () => {
    this.setState({ modalVisible: false, selectedRecipe: null });
  }

  fetchRecipeDetails = async (idMeal) => {
    const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );

      const data = await res.json();
  
      if (data.meals && data.meals.length > 0) {
        const recipe = data.meals[0];
        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
          const ingredient = recipe[`strIngredient${i}`];
          const measure = recipe[`strMeasure${i}`];
          
          if (ingredient && ingredient.trim() !== "") {
            ingredients.push(`${measure} ${ingredient}`.trim());
          }
        }
  
        this.setState({
          selectedRecipe: {
            title: recipe.strMeal,
            image: recipe.strMealThumb,
            instructions: recipe.strInstructions, ingredients,
          },
          modalVisible: true,
        });
      }  
    };  

  fetchMealsByCategory = async (category) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const res = await fetch(url);
    const data = await res.json();

    this.setState({
      recipes: data.meals || [],
      selectedCategory: category,
    });
  };

  render() {
    const categories = [
      "Pasta", "Vegan", "Beef", "Chicken", "Vegetarian", "Seafood", "Dessert",
    ];

    const { recipes } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          What <Text style={{ color: '#c0d698' }}>recipe</Text> shall we make today?
        </Text>

         {/* category scroll */}
         <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {categories.map((cat, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryBox}
              onPress={() => this.fetchMealsByCategory(cat)}
            >
              <Text style={styles.categoryText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* recipe cards */}
        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <View style={styles.recipeGrid}>
            {recipes.map((recipe) => (
              <View key={recipe.idMeal} style={styles.recipeWrapper}>
                <Pressable
                  style={styles.recipeCard}
                  onPress={() => this.fetchRecipeDetails(recipe.idMeal)}
                >
                  <Image
                    source={{ uri: recipe.strMealThumb }}
                    style={styles.recipeImage}
                  />
                </Pressable>
                <Text style={styles.recipeTitle}>{recipe.strMeal}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* recipe modal */}
        <Modal visible={this.state.modalVisible} transparent={true} animationType="slide">
          <ScrollView
            style={{ flex: 1, backgroundColor: '#ffffff', paddingTop: 70 }}
            contentContainerStyle={{ paddingBottom: 30 }}
          >
            <Image
              source={{ uri: this.state.selectedRecipe?.image }}
              style={{ width: '100%', height: 300, resizeMode: 'cover' }}
              />
              
            <View style={{ width: '100%', paddingHorizontal: 20 }}>
              <Text style={styles.modalTitle}>{this.state.selectedRecipe?.title}</Text>

              <Text style={styles.modalSubtitle}>Ingredients:</Text>
              {this.state.selectedRecipe?.ingredients.map((item, index) => (
                <Text key={index} style={styles.modalText}>• {item}</Text>
              ))}

              <Text style={styles.modalSubtitle}>Instructions:</Text>
              <Text style={styles.modalText}>{this.state.selectedRecipe?.instructions}</Text>

              <TouchableOpacity onPress={this.closeModal} style={[styles.closeButton]}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>
      </View>
    );
  }
}

export default MainPage;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fcfcfc' },

  headerText: { 
    fontSize: 24, 
    fontWeight: '700', 
    marginTop: 15, 
    marginBottom: 5, 
    paddingHorizontal: 20, 
    color: '#525151' },

  categoryScroll: { 
    marginTop: 12, 
    maxHeight: 90, 
    marginBottom: 10 },

  categoryBox: {
    backgroundColor: '#c0d698',
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 17,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  categoryText: { 
    fontSize: 16, 
    color: '#525151', 
    fontWeight: '600' },

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
    alignSelf: 'center',
    borderRadius: 12,
    },
  
  closeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    },

    modalSubtitle: {
      fontSize: 18,
      fontWeight: "600",
      marginTop: 15,
      marginBottom: 5,
    },

    modalText: {
      fontSize: 14,
      marginBottom: 5,
      lineHeight: 20,
    },    
});


