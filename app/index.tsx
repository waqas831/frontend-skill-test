import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Alert } from 'react-native';
import Header from '@/components/header/Header';
import NumberInput from '@/components/inputs/NumberInput';
import { useRouter, useNavigation } from 'expo-router';
import CustomButton from '@/components/buttons/CustomButton';

const Index: React.FC = () => {
    const { width, height } = Dimensions.get('window');
    const [value, setValue] = useState<string>('');
    const [headerHeight, setHeaderHeight] = useState(height * 0.5);
    const router: any = useRouter();
    const navigation = useNavigation();

    const handleNavigate = () => {
        const numberValue = parseFloat(value);
        if (isNaN(numberValue) || numberValue < 3) {
            Alert.alert('Validation Error', 'Please enter a number that is 3 or greater before proceeding.');
            return;
        }

        setHeaderHeight(100);
        setTimeout(() => {
            router.push({
                pathname: '/screen2',
                params: { number: value },
            });
        }, 300);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setHeaderHeight(height * 0.5);
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Header
                title="This is Screen 1 Header part"
                height={headerHeight}
                backgroundColor="#4CAF50"
            />
            <View style={styles.content}>
                <NumberInput
                    value={value}
                    onChangeText={(text: string) => setValue(text)}
                    placeholder="Enter number"
                    dynamicStyles={{ borderColor: '#4CAF50' }}
                />
                <View style={styles.buttonContainer}>
                    <CustomButton title="Go to Screen 2" onPress={handleNavigate} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FE9E91'

    },
    buttonContainer: {
        marginBottom: 20,
        width: '80%',
        margin: 'auto'

    },
});

export default Index;
