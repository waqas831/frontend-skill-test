import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import Header from '@/components/header/Header';
import DynamicText from '@/components/text/DynamicText';
import { useLocalSearchParams } from 'expo-router';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

const Screen2 = () => {
    const { height } = Dimensions.get('window');
    const [headerHeight, setHeaderHeight] = useState(height * 0.2);
    const { number } = useLocalSearchParams<{ number: string }>();
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const lineHeight = 20;
    const minHeightForThreeLines = Math.max(4.5 * lineHeight, height * 0.1);
    const [expandedHeight, setExpandedHeight] = useState('50%');
    const snapPoints = useMemo(() => [minHeightForThreeLines, '50%', expandedHeight], [expandedHeight, minHeightForThreeLines]);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const handleSheetAnimate = useCallback((index: number) => {
        if (index === 1) {
            bottomSheetModalRef.current?.snapToIndex(0);
        }
    }, []);

    const generateDummyText = (num: string) => {
        const parsedNumber = parseInt(num);
        if (isNaN(parsedNumber)) return 'Invalid number provided.';

        const lines = Array(parsedNumber).fill(`Lorem Ipsum is simply dummy This is line number  `);
        return lines.map((line, index) => `${line} ${index + 1}`).join('\n');
    };

    useEffect(() => {
        if (number) {
            const dummyText = generateDummyText(number);
            const numOfLines = dummyText.split('\n').length;
            const contentHeight = numOfLines * lineHeight;
            setExpandedHeight(`${Math.max(contentHeight / height * 100, 50)}%`);
        }
        bottomSheetModalRef.current?.present();
    }, [number, height]);

    return (
        <View style={styles.container}>
            <Header
                title="This is Screen 2 Header part"
                height={headerHeight}
                backgroundColor="#4CAF50"
            />
            <DynamicText
                text="Screen 2!"
                textStyle={{
                    fontSize: 24,
                    color: '#4CAF50',
                    fontWeight: 'bold',
                    paddingTop: 40,
                    letterSpacing: 1.2,
                    lineHeight: 30,
                    textShadowColor: '#888',
                    textShadowRadius: 3,
                }}
            />
            <BottomSheetModalProvider>
                <View style={styles.container}>
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={0}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                        onAnimate={handleSheetAnimate}
                        backgroundStyle={styles.bottomSheetBackground}
                    >
                        <BottomSheetView style={styles.contentContainer}>
                            <Text style={styles.text}>{generateDummyText(number)}</Text>
                        </BottomSheetView>
                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>
        </View>
    );
};

export default Screen2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    contentContainer: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 2,
        borderColor: 'red'
    },

    bottomSheetBackground: {
        backgroundColor: '#fff',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },

    text: {
        fontSize: 15,
        color: '#333',
        textAlign: 'center',
    },
});
