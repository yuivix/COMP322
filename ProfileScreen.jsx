import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

//filtering logic
export default function ProfileScreen() {
  const [hasAllergies, setHasAllergies] = useState(false);
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [selectedDietary, setSelectedDietary] = useState('');

  //needs to have this logic with the arrays to map through later.
  const allergiesList = [
    'Peanuts', 'Tree Nuts', 'Dairy', 'Eggs', 'Gluten', 'Soy',
    'Shellfish', 'Fish', 'Wheat', 'Sesame', 'Mustard', 'Sulphites'
  ];

  const dietaryList = [
    'Vegetarian', 'Vegan', 'Pescatarian', 'Keto', 'Low Carb',
    'Low Fat', 'Halal', 'Kosher', 'NONE'
  ];

  //we have this to be able to toggle allergies on and off
  const toggleAllergy = (item) => {
    if (selectedAllergies.includes(item)) {
      setSelectedAllergies(selectedAllergies.filter(i => i !== item));
    } else {
      setSelectedAllergies([...selectedAllergies, item]);
    }
  };

  //dietary selection logic. if none is selected, we clear the selection and show all the recipes (allergies still apply)
  const selectDietary = (item) => {
    if (item === 'NONE') {
      setSelectedDietary('');
    } else if (selectedDietary === item) {
      setSelectedDietary(''); //deselectingng
    } else {
      setSelectedDietary(item);
    }
  };

  const handleAllergyToggle = (value) => {
    setHasAllergies(value);
    if (!value) setSelectedAllergies([]);//making surre to clear. 
  };

  // Hardcoded recipes covering all dietary options & allergens
  //same thing ryan had but added more recipes and the allergens to each one.
  const recipes = [
    { id: 1, title: 'Spaghetti Carbonara', tags: ['Keto'], allergens: ['Eggs', 'Dairy'] },
    { id: 2, title: 'Shakshouka', tags: ['Vegetarian'], allergens: ['Eggs'] },
    { id: 3, title: 'Creamy Tomato Soup', tags: ['Vegan', 'Low Fat'], allergens: [] },
    { id: 4, title: 'Chocolate Cake', tags: ['Vegetarian', 'Low Fat'], allergens: ['Eggs', 'Gluten', 'Dairy'] },
    { id: 5, title: 'Grilled Chicken', tags: ['Keto', 'Halal'], allergens: [] },
    { id: 6, title: 'Vegetable Stir Fry', tags: ['Vegan', 'Low Carb'], allergens: ['Soy'] },
    { id: 7, title: 'Beef Tacos', tags: ['Keto', 'Kosher'], allergens: ['Gluten'] },
    { id: 8, title: 'Pancakes', tags: ['Vegetarian', 'Low Carb'], allergens: ['Eggs', 'Gluten', 'Dairy'] },
    { id: 9, title: 'Grilled Salmon', tags: ['Pescatarian'], allergens: ['Fish'] },
    { id: 10, title: 'Vegan Salad', tags: ['Vegan', 'Kosher'], allergens: ['Mustard'] },
    { id: 11, title: 'Egg-Free Veggie Quiche', tags: ['Vegetarian'], allergens: [] },
    { id: 12, title: 'Lobster Thermidor', tags: ['Pescatarian'], allergens: ['Shellfish'] },
  ];

  //array lookup to filter recipes based on selection of the alergen or dietary preference.
  const filteredRecipes = recipes.filter(recipe => {

    //made a var to check if it matches dietary or allergies
    const matchesDietary = selectedDietary === '' || recipe.tags.includes(selectedDietary);
    const matchesAllergy = selectedAllergies.length === 0
      ? true
      : !recipe.allergens.some(allergy => selectedAllergies.includes(allergy));
    return matchesDietary && matchesAllergy;
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={{ height: 100 }} />

      {/* Header */}
      <Text style={styles.header}>Your Profile</Text>
      <Text style={styles.broccoliHeader}>🥦</Text>
      <Text style={styles.subHeader}>Here you can make the app yours!</Text>
      <Text style={styles.subHeader}>Add your name and any information you want for us to understand you better.</Text>

      {/* Name Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name / Nickname:</Text>
        <TextInput style={styles.input} placeholder="Enter your name or nickname" />
      </View>

      {/* Favorite Food Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Favorite Food 🍕:</Text>
        <TextInput style={styles.input} placeholder="Enter your favorite food" />
      </View>

      {/* Allergies question */}
      <Text style={[styles.label, { marginTop: 20 }]}>Allergies?</Text>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TouchableOpacity
          style={[styles.toggleButton, hasAllergies && { backgroundColor: '#72c372ff' }]}
          onPress={() => handleAllergyToggle(true)}
        >
          <Text style={styles.toggleText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.toggleButton, !hasAllergies && { backgroundColor: '#fe95a7ff' }]}
          onPress={() => handleAllergyToggle(false)}
        >
          <Text style={styles.toggleText}>No</Text>
        </TouchableOpacity>
      </View>

      {/* Allergies checklist */}
      {hasAllergies && (
        <View style={styles.checklistContainer}>
          {allergiesList.map(item => (
            <TouchableOpacity
              key={item}
              style={[styles.checkbox, selectedAllergies.includes(item) && styles.checkedBox]}
              onPress={() => toggleAllergy(item)}
            >
              <Text style={styles.checkboxText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Dietary preference */}
      <Text style={[styles.label, { marginTop: 20 }]}>Dietary Preferences (pick one):</Text>
      <View style={styles.checklistContainer}>
        {dietaryList.map(item => (
          <TouchableOpacity
            key={item}
            style={[styles.checkbox, selectedDietary === item && styles.checkedBox]}
            onPress={() => selectDietary(item)}
          >
            <Text style={styles.checkboxText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Example Recipes Section */}
      <View style={styles.exampleRecipes}>
        <Text style={styles.exampleTitle}>Recipe examples!</Text>
        <Text style={styles.exampleSubtitle}>View how your choices affect the recipes shown</Text>
        {filteredRecipes.map(recipe => (
          <Text key={recipe.id} style={styles.recipeText}>• {recipe.title}</Text>
        ))}
      </View>
    </ScrollView>
  );
}


//styling just simplified by chat. seems like simply put int into arrays to conserve space.
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8DC' },
  contentContainer: { paddingHorizontal: 20, paddingBottom: 40 },
  header: { fontSize: 28, fontWeight: '700', textAlign: 'center' },
  subHeader: { fontSize: 20, color: '#333', textAlign: 'center', marginVertical: 10 },
  broccoliHeader: { fontSize: 35, color: '#1e5727ff', textAlign: 'center', marginVertical: 10 },
  inputGroup: { marginTop: 15 },
  label: { fontSize: 16, marginBottom: 5 },
  input: { backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' },
  toggleButton: { backgroundColor: '#FFF8DC', paddingHorizontal: 20, paddingVertical: 10, marginRight: 10, borderRadius: 10 },
  toggleText: { fontSize: 16 },
  checklistContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  checkbox: { backgroundColor: '#FFF8DC', paddingHorizontal: 12, paddingVertical: 8, margin: 5, borderRadius: 10 },
  checkedBox: { backgroundColor: '#FF8C00' },
  checkboxText: { fontSize: 14 },
  exampleRecipes: { marginTop: 30, padding: 15, backgroundColor: '#ffc6baff', borderRadius: 12 },
  exampleTitle: { fontSize: 20, fontWeight: '700', marginBottom: 5 },
  exampleSubtitle: { fontSize: 14, color: '#333', marginBottom: 10 },
  recipeText: { fontSize: 16, marginBottom: 3 },
});
