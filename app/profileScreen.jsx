import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput,
TouchableOpacity } from 'react-native';
export default function ProfileScreen() {
    const [hasAllergies, setHasAllergies] = useState(false);
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [selectedDietary, setSelectedDietary] = useState([]);
    const allergiesList = [
        'Peanuts', 'Tree Nuts', 'Dairy', 'Eggs', 'Gluten', 'Soy',
        'Shellfish', 'Fish', 'Wheat', 'Sesame', 'Mustard', 'Sulphites'
    ];
    const dietaryList = [
        'Vegetarian', 'Vegan', 'Pescatarian', 'Keto', 'Low Carb',
        'Low Fat', 'Halal', 'Kosher' , 'NONE'
    ];
    const toggleAllergy = (item) => {
        if (selectedAllergies.includes(item)) {
        setSelectedAllergies(selectedAllergies.filter(i => i !== item));
        } else {
        setSelectedAllergies([...selectedAllergies, item]);
        }
    };
    const toggleDietary = (item) => {
        if (selectedDietary.includes(item)) {
            setSelectedDietary(selectedDietary.filter(i => i !== item));
        } else {
            setSelectedDietary([...selectedDietary, item]);
        }
    };
    return (
        <ScrollView style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={{ height:100 }} />
    {/* Header */}
        <Text style={styles.header}>Your Profile</Text>
        <Text style={styles.broccoliHeader}>��</Text>
        <Text style={styles.subHeader}>Here you can make the app
        yours!</Text>
        <Text style={styles.subHeader}>Add you name and any information
        you want for us to understand you better.</Text>
        {/* Name Input */}
        <View style={styles.inputGroup}>
        <Text style={styles.label}>Name / Nickname:</Text>
        <TextInput style={styles.input} placeholder="Enter your name
        or nickname" />
        </View>
        {/* Favorite Food Input */}
        <View style={styles.inputGroup}>
        <Text style={styles.label}>Favorite Food ��:</Text>
        <TextInput style={styles.input} placeholder="Enter your
        favorite food" />
        </View>
        {/* Allergies question and togglr*/}
        <Text style={[styles.label, { marginTop: 20
        }]}>Allergies?</Text>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TouchableOpacity
        style={[
        styles.toggleButton,
        hasAllergies && { backgroundColor: '#72c372ff' }
        ]}
        onPress={() => setHasAllergies(true)}
        >
        <Text style={styles.toggleText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[
        styles.toggleButton,
        !hasAllergies && { backgroundColor: '#fe95a7ff' }
        ]}
        onPress={() => setHasAllergies(false)}
        >
        <Text style={styles.toggleText}>No</Text>
        </TouchableOpacity>
        </View>
        {/* Allergies checklist */}
        {hasAllergies && (
        <View style={styles.checklistContainer}>
        {allergiesList.map((item) => (
        <TouchableOpacity
        key={item}
        style={[
        styles.checkbox,
        selectedAllergies.includes(item) && styles.checkedBox
        ]}
        onPress={() => toggleAllergy(item)}
        >
        <Text style={styles.checkboxText}>{item}</Text>
        </TouchableOpacity>
        ))}
        </View>
        )}
        {/* dietary preference */}
        <Text style={[styles.label, { marginTop: 20 }]}>Dietary
        Preferences:</Text>
        <View style={styles.checklistContainer}>
        {dietaryList.map((item) => (
        <TouchableOpacity
        key={item}
        style={[
        styles.checkbox,
        selectedDietary.includes(item) && styles.checkedBox
        ]}
        onPress={() => toggleDietary(item)}
        >
        <Text style={styles.checkboxText}>{item}</Text>
        </TouchableOpacity>
        ))}
        </View>
        </ScrollView>
     );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    },
    contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    },
    header: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    },
    subHeader: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
    },
    broccoliHeader: {
    fontSize: 35,
    color: '#1e5727ff',
    textAlign: 'center',
    marginVertical: 10,
    },
    inputGroup: {
    marginTop: 15,
    },
    label: {
    fontSize: 16,
    marginBottom: 5,
    },
    input: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    },
    toggleButton: {
    backgroundColor: '#FFF8DC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 10,
    },
    toggleText: {
    fontSize: 16,
    },
    checklistContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    },
    checkbox: {
    backgroundColor: '#FFF8DC',
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 5,
    borderRadius: 10,
    },
    checkedBox: {
    backgroundColor: '#FF8C00',
    }
})