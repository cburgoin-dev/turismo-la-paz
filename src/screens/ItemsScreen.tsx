import { Ionicons } from '@expo/vector-icons';

import {
    RouteProp,
    useNavigation,
    useRoute
} from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
    useMemo,
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
    TextInput,
    View
} from 'react-native';

import BackButton from '../components/BackButton';
import ExperienceCard from '../components/ExperienceCard';
import LanguageButton from '../components/LanguageButton';
import PlaceCard from '../components/PlaceCard';

import { ITEM_GROUPS } from '../config/itemGroups';

import { useItems } from '../places/ItemsProvider';

import { useT } from '../translations';

import { RootStackParamList } from '../types/navigation';

const { height } = Dimensions.get('window');

const HERO_HEIGHT = height * 0.42;

const SCROLL_THRESHOLD = 300;

type NavigationProp = NativeStackNavigationProp<RootStackParamList,'Items'>;

type RouteProps = RouteProp<RootStackParamList, 'Items'>;

export default function ItemsScreen() {
    const navigation = useNavigation<NavigationProp>();

    const route = useRoute<RouteProps>();
    
    const t = useT();

    const { group } = route.params;

    const { 
        getItems, 
        refreshItems, 
        isRefreshing 
    } = useItems();

    const items = getItems(group);

    const config = ITEM_GROUPS.find(
        (itemGroup) => itemGroup.key === group
    );

    if (!config) {
        return null;
    }

    const heroImage = config.image.source;
    const example = config.example;

    const groupLabel = 
        t(`ui.group.${group}`).toLowerCase();

    const [search, setSearch] = useState('');

    const [showScrollTop, setShowScrollTop] = useState(false);

    const flatListRef = useRef<FlatList>(null);

    const filteredItems = useMemo(() => {
        return items.filter((item) => {
            if (!search.trim()) {
                return true;
            }
    
            const query = search.toLowerCase();
    
            return (
                t(item.displayNameKey)
                    .toLowerCase()
                    .includes(query) ||
                item.aliases.some((alias) => 
                    alias
                        .toLowerCase()
                        .includes(query)
                )
            );
        });
    }, [items, search, t]);

    const isSingleResult = 
        filteredItems.length === 1;

    function handlePressItem(
        item: typeof filteredItems[number]
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
        );
    }

    function renderItem({
        item,
    }: {
        item: typeof filteredItems[number];
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
                data={filteredItems}
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
                                        La Paz, Baja California Sur
                                    </Text>

                                    <Text style={styles.heroTitle}>
                                        {t(`ui.group.${group}`)}
                                    </Text>

                                    <View style={styles.searchContainer}>
                                        <Ionicons 
                                            name="search" 
                                            size={18} 
                                            color="#64748B" 
                                        />

                                        <TextInput
                                            value={search}
                                            onChangeText={setSearch}
                                            style={styles.searchInput}
                                            placeholderTextColor="#94A3B8"
                                            placeholder={t('ui.searchPlaceholder', {
                                                type: groupLabel,
                                                example,
                                            })}
                                        />

                                        {search.length > 0 && (
                                            <Pressable 
                                                onPress={() => setSearch('')}
                                            >
                                                <Ionicons 
                                                    name="close-circle" 
                                                    size={20} 
                                                    color="#64748B" 
                                                />
                                            </Pressable>
                                        )}
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={styles.resultsContainer}>
                            <Text style={styles.resultsCount}>
                                {search.length > 0
                                    ? `${filteredItems.length} ${t('ui.resultsFor')} "${search}"`
                                    : `${filteredItems.length} ${
                                        isSingleResult
                                            ? t(`ui.group.${group}Singular`)
                                            : t(`ui.group.${group}Plural`)}`}
                            </Text>
                        </View>
                    </>
                }

                renderItem={renderItem}

                ListEmptyComponent={
                    search.length > 0 ? (
                        <View style={styles.emptyContainer}>
                            <Ionicons 
                                name="search" 
                                size={48} 
                                color="#C0A0A8" 
                            />
                            <Text style={styles.emptyTitle}>
                                {t('ui.noResultsTitle', { type: groupLabel })}
                            </Text>

                            <Text style={styles.emptySubtitle}>
                                {t('ui.noResultsSubtitle')}
                            </Text>
                        </View>
                    ) : null
                }
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
        paddingBottom: 20,
    },

    heroEyebrow: {
        color: 'rgba(255,255,255,0.7)',

        fontSize: 14,
        letterSpacing: 0.6,

        marginBottom: 4,

        fontFamily: 'InterMedium',
    },

    heroTitle: {
        color: '#fff',

        fontSize: 48,
        lineHeight: 52,

        marginBottom: 16,

        fontFamily: 'PlayfairBold',
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',

        gap: 8,
        
        paddingHorizontal: 14,
        paddingVertical: 11,

        borderRadius: 14,

        backgroundColor: 'rgba(255,255,255,0.96)',
    },

    searchInput: {
        flex: 1,

        color: '#0F172A',

        fontSize: 15,

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

    emptyContainer: {
        alignItems: 'center',

        marginTop: 60,
        paddingHorizontal: 32,
    },

    emptyTitle: {
        color: '#334155',

        fontSize: 19,

        marginTop: 14,

        textAlign: 'center',

        fontFamily: 'InterSemiBold',
    },

    emptySubtitle: {
        color: '#64748B',

        fontSize: 15,

        marginTop: 6,

        textAlign: 'center',

        fontFamily: 'InterRegular',
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