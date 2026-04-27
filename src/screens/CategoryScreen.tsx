import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { t } from '../translations';
import { RootStackParamList } from '../types/navigation';

import CategoryItem from '../components/CategoryItem';
import Hero from '../components/Hero';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Categories'>;

type CategoryKey = 'relax' | 'family' | 'social' | 'adventure';

type PlaceType = 'beaches' | 'museums' | 'galleries';

const placeType: PlaceType = 'beaches';

const categoriesByType: Record<PlaceType, CategoryKey[]> = {
    beaches: ['relax', 'family', 'social', 'adventure'],
    museums: [],
    galleries: [],
};

export default function CategoryScreen() {
    const navigation = useNavigation<NavigationProp>();

    const categories = categoriesByType[placeType];

    return (
        <ScrollView style={styles.container}>
            <Hero placeType={placeType} />

            <View style={styles.content}>

                {categories.map((cat) => (
                    <CategoryItem
                        key={cat}
                        category={cat}
                        onPress={() =>
                            navigation.navigate('Recommendations', {
                                category: cat,
                            })
                        }
                    />
                ))}

                <TouchableOpacity 
                    style={styles.browseCard}
                    onPress={() => navigation.navigate('Places')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.browseTitle}>
                        {t(`ui.browseAll.${placeType}`)}
                    </Text>

                    <Text style={styles.browseSubtitle}>
                        {t('ui.browseSubtitle')}
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
        fontSize: 13,
        color: '#777',
        marginTop: 2,
        textAlign: 'center',
    }
});