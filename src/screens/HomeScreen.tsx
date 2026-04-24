import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';

import { RootStackParamList } from '../types/navigation';

import CategoryItem from '../components/CategoryItem';
import Hero from '../components/Hero';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp>();
    return (
        <ScrollView style={styles.container}>
            <Hero />

            <View style={styles.content}>
                <CategoryItem
                    title="Relax"
                    description="Quiet beaches"
                    onPress={() => navigation.navigate('Recommendations', { category: 'relax' })}
                />
                <CategoryItem
                    title="Explore"
                    description="Popular and beautiful beaches"
                />
                <CategoryItem
                    title="Near me"
                    description="Closest beaches"
                />
                <CategoryItem
                    title="Budget"
                    description="Easy and accesible beaches"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7Fa',
    },
    content: {
        padding: 16,
        marginTop: 10,
    },
});