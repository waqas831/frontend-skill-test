import React from 'react';
import { TextInput, StyleSheet, View, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const NumberInput = ({ value, onChangeText, placeholder, dynamicStyles }: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, dynamicStyles]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType="numeric"
        maxLength={10} 
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#ffffff',
    color: '#333',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
});

export default NumberInput;
