import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types/navigation';

import CategoryItem from '../components/CategoryItem';
import Hero from '../components/Hero';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Categories'>;

type PlaceType = 'beaches' | 'museums' | 'galleries';

const placeType: PlaceType = 'beaches';

export default function CategoryScreen() {
    const navigation = useNavigation<NavigationProp>();
    return (
        <ScrollView style={styles.container}>
            <Hero placeType={placeType} />

            <View style={styles.content}>
                <CategoryItem
                    title="Relax"
                    description="Quiet beaches"
                    onPress={() => navigation.navigate('Recommendations', { category: 'relax' })}
                />
                <CategoryItem
                    title="Family"
                    description="Safe and easy access"
                    onPress={() => navigation.navigate('Recommendations', { category: 'family' })}
                />
                <CategoryItem
                    title="Social"
                    description="Popular and lively spots"
                    onPress={() => navigation.navigate('Recommendations', { category: 'social' })}
                />
                <CategoryItem
                    title="Adventure"
                    description="Activities and exploration"
                    onPress={() => navigation.navigate('Recommendations', { category: 'adventure' })}
                />

                <TouchableOpacity 
                    style={styles.browseCard}
                    onPress={() => navigation.navigate('Places')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.browseTitle}>
                        Browse all {placeType}
                    </Text>

                    <Text style={styles.browseSubtitle}>
                        See all places and explore freely
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    content: {
        padding: 16,
        marginTop: -90,
    },
    browseCard: {
        marginTop: 6,
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 16,

        backgroundColor: '#fff',

        borderWidth: 1,
        borderColor: 'rgba(143,47,74,0.18)',

        alignItems: 'center',
    },
    browseTitle: {
        fontSize: 16,
        fontFamily: 'InterSemiBold',
        color: '#8F2F4A',
    },
    browseSubtitle: {
        fontSize: 12.5,
        color: '#777',
        marginTop: 2,
        textAlign: 'center',
    }
});