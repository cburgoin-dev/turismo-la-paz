import { Ionicons } from '@expo/vector-icons';

import {
    RouteProp,
    useNavigation,
    useRoute
} from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
    Dimensions,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';

import BackButton from '../components/BackButton';
import CategoryCard from '../components/CategoryCard';
import Hero from '../components/Hero';
import LanguageButton from '../components/LanguageButton';

import {
    CATEGORY_CONFIG,
    CategoryKey
} from '../config/categoryConfig';

import { ITEM_GROUPS } from '../config/itemGroups';

import { useT } from '../translations';

import { RootStackParamList } from '../types/navigation';

const { height } = Dimensions.get('window');

const GRID_ITEM_HEIGHT = height * 0.24;

const ACTIVE_COLOR = '#8F2F4A';

const PRESSED_SCALE = 0.97;
const PRESSED_OPACITY = 0.85;

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Categories'>;

type RouteProps = RouteProp<RootStackParamList, 'Categories'>;

type CategoryRow = [
    CategoryKey,
    CategoryKey?
];

export default function CategoryScreen() {
    const navigation = useNavigation<NavigationProp>();

    const route = useRoute<RouteProps>();

    const t = useT();

    const { group } = route.params;

    const config = ITEM_GROUPS.find(
        (itemGroup) => itemGroup.key === group
    );

    if (!config) {
        return null;
    }

    const categories = 
        Object.keys(CATEGORY_CONFIG) as CategoryKey[];

    // Split categories into rows of 2 items
    const categoryRows = 
        categories.reduce<CategoryRow[]>(
            (acc, category, index) => {
                if (index % 2 === 0) {
                    acc.push([category]);
                } else {
                    acc[acc.length - 1][1] = category;
                }

                return acc;

            },
            []
        );

    function handleCategoryPress(
        category: CategoryKey
    ) {
        navigation.navigate('Recommendations', {
            category,
            group,
        });
    }

    function handleBrowseAll() {
        navigation.navigate('Items', {
            group,
        });
    }

    return (
        <View style={styles.container}>
            <Hero 
                image={config.image.source}
                title={t(`ui.hero.title.${group}`)}
                showOverlay
            />

            <View style={styles.backWrapper}>
                <BackButton />
            </View>

            <View style={styles.languageWrapper}>
                <LanguageButton />
            </View>

            <View style={styles.content}>

                <View>
                    {categoryRows.map((row, rowIndex) => (
                        <View 
                            key={rowIndex} 
                            style={styles.row}
                        >
                            {row.map((category, index) => (
                                category ? (
                                    <View 
                                        key={category} 
                                        style={
                                            styles.gridItem
                                        }
                                    >
                                        <CategoryCard
                                            category={category}
                                            onPress={() => handleCategoryPress(category)}
                                        />
                                    </View>
                                ) : (
                                    <View
                                        key={`empty-${index}`}
                                        style={[
                                            styles.gridItem,
                                            styles.hiddenItem,
                                        ]}
                                    />
                                )
                            ))}
                        </View>
                    ))}
                </View>

                <Pressable 
                    onPress={handleBrowseAll}
                    style={({ pressed }) => [
                        styles.browseCard,
                        {
                            opacity: pressed ? PRESSED_OPACITY : 1,
                            transform: [{ scale: pressed ? PRESSED_SCALE : 1 }],
                        }
                    ]}
                >
                        <View style={styles.browseContent}>

                            <View style={styles.leftContent}>

                            <View 
                                style={
                                    styles.iconContainer
                                }
                            >
                                <Ionicons 
                                    name="search" 
                                    size={18} 
                                    color="#fff" 
                                />
                            </View>

                                <View 
                                    style={
                                        styles.textContainer
                                    }
                                >
                                    <Text 
                                        style={
                                            styles.browseTitle
                                        }
                                    >
                                        {t(`ui.browseAll.${group}`)}
                                    </Text>
                                </View>
                            </View>

                            <Ionicons 
                                name="chevron-forward" 
                                size={18} 
                                color={ACTIVE_COLOR}
                            />
                        </View>
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
        flex: 1,

        padding: 16,
        paddingTop: 24,
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
        height: GRID_ITEM_HEIGHT,
    },
    
    hiddenItem: {
        opacity: 0,
    },

    browseCard: {
        marginTop: 4,
        marginBottom: 12,

        paddingHorizontal: 14,
        paddingVertical: 10,

        borderRadius: 12,

        borderWidth: 1,
        borderColor: 'rgba(143,47,74,0.7)',
    },

    browseContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    leftContent: {
        flex: 1,

        flexDirection: 'row',
        alignItems: 'center',
    },

    iconContainer: {
        width: 28,
        height: 28,

        justifyContent: 'center',
        alignItems: 'center',

        marginRight: 12,

        borderRadius: 10,

        backgroundColor: ACTIVE_COLOR,
    },

    textContainer: {
        flex: 1,
    },

    browseTitle: {
        color: ACTIVE_COLOR,

        fontSize: 15,

        fontFamily: 'InterMedium',
    },
});