import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';

const CustomButton = ({ title, onPress }: { title: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 20,
    width: '80%',
    alignSelf: 'center',
  } as ViewStyle,
  button: {
    backgroundColor: '#4CAF50', 
    borderRadius: 10,
    paddingVertical: 15, 
    paddingHorizontal: 20, 
    elevation: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignItems: 'center',
  } as ViewStyle,
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold', 
  } as TextStyle,
});

export default CustomButton;
