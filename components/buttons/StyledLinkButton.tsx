import React from 'react';
import { TouchableOpacity, Text, StyleSheet ,Button} from 'react-native';

const StyledLinkButton = ({ href, title, dynamicStyles, textStyle,navigated,handleNavigate }:any) => {
  return (
    <TouchableOpacity style={[styles.button, dynamicStyles]} activeOpacity={0.8} onPress={handleNavigate}>
      <Button title={title} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200EA',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  }
});
export default StyledLinkButton;
