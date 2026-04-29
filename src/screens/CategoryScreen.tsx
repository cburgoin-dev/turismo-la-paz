import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useT } from '../translations';
import { PlaceType, RootStackParamList } from '../types/navigation';

import CategoryItem from '../components/CategoryItem';
import Hero from '../components/Hero';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Categories'>;
type RouteProps = RouteProp<RootStackParamList, 'Categories'>;

type CategoryKey = 'relax' | 'family' | 'social' | 'adventure';

const categoriesByType: Record<PlaceType, CategoryKey[]> = {
    beaches: ['relax', 'family', 'social', 'adventure'],
    museums: [],
    viewpoints: [],
};

export default function CategoryScreen() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<RouteProps>();

    const { placeType } = route.params;

    const categories = categoriesByType[placeType];

    const t = useT();

    return (
        <ScrollView style={styles.container}>
            <Hero placeType={placeType} showLocation={false}/>

            <View style={styles.content}>

                <Pressable 
                    onPress={() => navigation.navigate('Places', { placeType })}
                    style={({ pressed }) => [
                        styles.browseCard,
                        {
                            backgroundColor: pressed ? '#7A283E' : '#8F2F4A',
                            transform: [{ scale: pressed ? 0.98 : 1}],
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <View style={styles.browseContent}>

                            <View 
                                style={[
                                    styles.iconContainer,
                                    {
                                        backgroundColor: pressed
                                            ? 'rgba(255,255,255,0.25)'
                                            : 'rgba(255,255,255,0.35)',
                                    }
                                ]}
                            >
                                <Ionicons name="search" size={22} color="#fff" />
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.browseTitle}>
                                    {t(`ui.browseAll.${placeType}`)}
                                </Text>
                                <Text style={styles.browseSubtitle}>
                                    {t('ui.browseSubtitle')}
                                </Text>
                            </View>

                        </View>
                    )}
                </Pressable>

                {categories.map((cat) => (
                    <CategoryItem
                        key={cat}
                        category={cat}
                        onPress={() =>
                            navigation.navigate('Recommendations', {
                                category: cat,
                                placeType
                            })
                        }
                    />
                ))}

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
        marginTop: -95,
    },
    browseCard: {
        marginTop: -20,
        marginBottom: 50,
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 18,

        backgroundColor: '#8F2F4A', // D6B98D o 8F2F4A, still testing

        borderWidth: 1,
        borderColor: 'rgba(143,47,74,0.18)',

        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4},
        elevation: 4,
    },
    browseContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 42,
        height: 42,
        borderRadius: 12,

        backgroundColor: 'rgba(255,255,255,0.35)',

        justifyContent: 'center',
        alignItems: 'center',
        
        marginRight: 14,
    },
    textContainer: {
        flex: 1,
    },
    browseTitle: {
        fontSize: 16,
        fontFamily: 'InterSemiBold',
        color: '#FFF',
    },
    browseSubtitle: {
        fontSize: 13.5,
        fontFamily: 'InterRegular',
        color: 'rgba(255,255,255,0.9)',
        marginTop: 2,
        textAlign: 'left',
    }
});