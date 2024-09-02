import React from 'react';
import { Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface DynamicTextProps {
  text: string;
  textStyle?: TextStyle;
}

const DynamicText: React.FC<DynamicTextProps> = ({ text, textStyle }) => {
  return (
    <Text style={[styles.defaultText, textStyle]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    textShadowColor: '#aaa',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 0.5,
    lineHeight: 24,
  } as TextStyle,
});

export default DynamicText;
