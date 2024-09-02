// components/Header.tsx
import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface HeaderProps {
  title: string;
  height: number;
  backgroundColor?: string;
}

const Header: React.FC<HeaderProps> = ({ title, height }) => {
  const heightAnim = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: height,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [height]);

  return (
    <Animated.View
      style={[
        styles.headerContainer,
        { height: heightAnim },
      ]}
    >
      <LinearGradient
        colors={['#FF6F61', '#FF8E53']}
        style={styles.gradientBackground}
      >
        <Text style={styles.headerText}>{title}</Text>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 10,
  } as ViewStyle,
  gradientBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  } as ViewStyle,
  headerText: {
    fontSize: 26,
    fontWeight: '600',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  } as TextStyle,
});

export default Header;
