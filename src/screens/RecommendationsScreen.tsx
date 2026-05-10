import { Ionicons } from '@expo/vector-icons';

import {
    RouteProp,
    useNavigation,
    useRoute
} from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
    useRef,
    useState
} from 'react';

import {
    Dimensions,
    FlatList,
    ImageBackground,
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';

import BackButton from '../components/BackButton';
import ExperienceCard from '../components/ExperienceCard';
import LanguageButton from '../components/LanguageButton';
import PlaceCard from '../components/PlaceCard';

import { CATEGORY_CONFIG } from '../config/categoryConfig';
import { ITEM_GROUPS } from '../config/itemGroups';

import { useItems } from '../places/ItemsProvider';

import { useT } from '../translations';

import { ItemWithDistance } from '../types/item';
import { RootStackParamList } from '../types/navigation';

const { height } = Dimensions.get('window');

const HERO_HEIGHT = height * 0.37;

const SCROLL_THRESHOLD = 300;

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Recommendations'>;

type RouteProps = RouteProp<RootStackParamList, 'Recommendations'>;

export default function RecommendationsScreen() {
    const navigation = useNavigation<NavigationProp>();
    
    const route = useRoute<RouteProps>();

    const t = useT();
    
    const { 
        category, 
        group 
    } = route.params;

    const { 
        getItems, 
        refreshItems, 
        isRefreshing 
    } = useItems();

    const [showScrollTop, setShowScrollTop] = useState(false);

    const flatListRef = useRef<FlatList<ItemWithDistance>>(null);

    const allItems = getItems(group);

    const items = allItems.filter((item) => 
        item.categories.includes(category)
    );

    const config = ITEM_GROUPS.find(
        (itemGroup) => itemGroup.key === group
    );

    if (!config) {
        return null;
    }

    const heroImage =
        CATEGORY_CONFIG[category].image.source;

    function handlePressItem(
        item: ItemWithDistance
    ) {
        Keyboard.dismiss();

        navigation.navigate('Detail', {
            item,
        });
    }

    function handleScrollTop() {
        flatListRef.current?.scrollToOffset({
            offset: 0,
            animated: true,
        });
    }

    function handleScroll(
        offset: number
    ) {
        setShowScrollTop(
            offset > SCROLL_THRESHOLD
        )
    }

    function renderItem({
        item,
    }: {
        item: ItemWithDistance;
    }) {
        return (
            <View style={styles.cardWrapper}>
                {item.itemType === 'experience' ? (
                    <ExperienceCard
                        item={item}
                        onPress={() => handlePressItem(item)}
                    />
                ) : (
                    <PlaceCard
                        item={item}
                        onPress={() => handlePressItem(item)}
                    />
                )}
            </View>
        );
    }

    return (
        <View style={styles.container}>

            <FlatList
                ref={flatListRef}
                data={items}
                keyExtractor={(item) => item.id}

                keyboardShouldPersistTaps="always"
                keyboardDismissMode="on-drag"

                initialNumToRender={5}
                maxToRenderPerBatch={5}
                windowSize={5}

                removeClippedSubviews

                refreshing={isRefreshing}
                onRefresh={refreshItems}

                onScroll={(event) => {
                    handleScroll(
                        event.nativeEvent
                            .contentOffset.y
                    );
                }}

                scrollEventThrottle={16}

                contentContainerStyle={
                    styles.contentContainer
                }

                ListHeaderComponent={
                    <>
                        <View style={styles.hero}>
                            <ImageBackground 
                                source={heroImage} 
                                style={
                                    styles.heroImage
                                }
                            >
                                <View style={styles.imageOverlay} />

                                <View style={styles.backWrapper}>
                                    <BackButton />
                                </View>

                                <View style={styles.languageWrapper}>
                                    <LanguageButton />
                                </View>

                                <View style={styles.heroContent}>
                                    <Text style={styles.heroEyebrow}>
                                        {t(`ui.group.${group}`)}
                                    </Text>

                                    <Text style={styles.heroTitle}>
                                        {t(`ui.category.${category}`)}
                                    </Text>

                                    <Text style={styles.heroSubtitle}>
                                        {t('ui.recommendationsSubtitle')}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={styles.resultsContainer}>
                            <Text style={styles.resultsCount}>
                                {items.length}{' '}
                                {items.length === 1
                                    ? t(`ui.group.${group}Singular`)
                                    : t(`ui.group.${group}Plural`)}
                            </Text>
                        </View>
                    </>
                }

                renderItem={renderItem}
            />

            {showScrollTop && (
                <Pressable
                    style={styles.scrollTopButton}
                    onPress={handleScrollTop}
                >
                    <Ionicons 
                        name="arrow-up" 
                        size={20} 
                        color="#fff" 
                    />
                </Pressable>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },

    contentContainer: {
        paddingBottom: 24,
    },

    hero: {
        width: '100%',
        height: HERO_HEIGHT,
    },

    heroImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.38)',
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

    heroContent: {
        paddingHorizontal: 16,
        paddingBottom: 28,

        alignItems: 'flex-start',
    },

    heroEyebrow: {
        color: 'rgba(255,255,255,0.7)',

        fontSize: 13,
        letterSpacing: 1.2,

        marginBottom: 6,

        textTransform: 'uppercase',

        fontFamily: 'InterMedium',
    },

    heroTitle: {
        color: '#fff',

        fontSize: 48,
        lineHeight: 52,

        fontFamily: 'PlayfairBold',
    },

    heroSubtitle: {
        color: 'rgba(255,255,255,0.85)',

        fontSize: 16,

        marginTop: 6,

        fontFamily: 'InterMedium',
    },

    resultsContainer: {
        paddingTop: 16,
        paddingBottom: 4,
        paddingHorizontal: 16,
    },

    resultsCount: {
        color: '#888',

        fontSize: 13,
        letterSpacing: 0.6,

        textTransform: 'uppercase',

        fontFamily: 'InterMedium',
    },

    cardWrapper: {
        paddingHorizontal: 16,
        marginTop: 12,
    },

    scrollTopButton: {
        position: 'absolute',

        right: 16,
        bottom: 24,

        width: 44,
        height: 44,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 22,

        backgroundColor: 'rgba(0,0,0,0.5)',

        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.4)'
    },
});