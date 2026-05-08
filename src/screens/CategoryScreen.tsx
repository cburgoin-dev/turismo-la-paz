import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

import { CATEGORY_CONFIG, CategoryKey } from '../config/categoryConfig';
import { PLACE_TYPES } from '../config/placeTypes';
import { useT } from '../translations';
import { RootStackParamList } from '../types/navigation';

import BackButton from '../components/BackButton';
import CategoryCard from '../components/CategoryCard';
import Hero from '../components/Hero';
import LanguageButton from '../components/LanguageButton';

const { height } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Categories'>;

type RouteProps = RouteProp<RootStackParamList, 'Categories'>;

export default function CategoryScreen() {
    const navigation = useNavigation<NavigationProp>();

    const route = useRoute<RouteProps>();

    const t = useT();

    const { placeType } = route.params;

    const categories = Object.keys(CATEGORY_CONFIG) as CategoryKey[];

    const categoryPairs = categories.reduce<CategoryKey[][]>((acc, cat, i) => {
        if (i % 2 === 0) acc.push([cat]);
        else acc[acc.length - 1].push(cat);
        return acc;
    }, []);

    const config = PLACE_TYPES.find(p => p.key === placeType);

    return (
        <View style={styles.container}>
            <Hero 
                image={config?.image.source}
                title={t(`ui.hero.title.${placeType}`)}
                showOverlay={true}
            />

            <View style={styles.backWrapper}>
                <BackButton />
            </View>

            <View style={styles.languageWrapper}>
                <LanguageButton />
            </View>

            <View style={styles.content}>

                <View>
                    {categoryPairs.map((pair, rowIndex) => (
                        <View key={rowIndex} style={styles.row}>
                            {pair.map((cat) => (
                                <View key={cat} style={styles.gridItem}>
                                    <CategoryCard
                                        category={cat}
                                        onPress={async () => {
                                            navigation.navigate('Recommendations', {
                                                category: cat,
                                                placeType,
                                            });
                                        }}
                                    />
                                </View>
                            ))}

                            {pair.length === 1 && (
                                <View style={[styles.gridItem, { opacity: 0 }]} />
                            )}
                        </View>
                    ))}
                </View>

                <Pressable 
                    onPress={async () => {
                        navigation.navigate('Places', {
                            placeType,
                        });
                    }}
                    style={({ pressed }) => [
                        styles.browseCard,
                        {
                            transform: [{ scale: pressed ? 0.97 : 1 }],
                            opacity: pressed ? 0.85 : 1,
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <View style={styles.browseContent}>

                            <View style={styles.leftContent}>

                            <View style={styles.iconContainer}>
                                <Ionicons name="search" size={18} color="#fff" />
                            </View>

                                <View style={styles.textContainer}>
                                    <Text style={styles.browseTitle}>
                                        {t(`ui.browseAll.${placeType}`)}
                                    </Text>
                                </View>
                            </View>

                            <Ionicons 
                                name="chevron-forward" 
                                size={18} 
                                color="#8F2F4A"
                            />

                        </View>
                    )}

                </Pressable>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    content: {
        paddingTop: 24,
        padding: 16,
        flex: 1,
    },
    backWrapper: {
        position: 'absolute',
        top: 15,
        left: 10,
        zIndex: 10,
    },
    languageWrapper: {
        position: 'absolute',
        top: 15,
        right: 10,
        zIndex: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    gridItem: {
        width: '48%',
        height: height * 0.24,
    },
    browseCard: {
        paddingTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 12,

        marginTop: 4,
        marginBottom: 12,

        borderWidth: 1,
        borderColor: 'rgba(143,47,74,0.7)',
    },
    browseContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    iconContainer: {
        width: 28,
        height: 28,
        borderRadius: 10,

        backgroundColor: '#8F2F4A',

        justifyContent: 'center',
        alignItems: 'center',
        
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    browseTitle: {
        fontSize: 15,
        fontFamily: 'InterMedium',
        color: '#8F2F4A',
    },
    browseSubtitle: {
        fontSize: 13.5,
        fontFamily: 'InterRegular',
        color: '#8F2F4A',
        marginTop: 2,
        textAlign: 'left',
    }
});