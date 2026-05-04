import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useRef, useState } from 'react';
import { AppState, Dimensions, FlatList, ImageBackground, Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import BackButton from '../components/BackButton';
import LanguageButton from '../components/LanguageButton';
import PlaceCard from '../components/PlaceCard';
import SkeletonCard from '../components/SkeletonCard';
import { PLACE_TYPES } from '../config/placeTypes';
import { placesByType } from '../data';
import { useT } from '../translations';
import { RootStackParamList } from '../types/navigation';
import { preparePlaces } from '../utils/location';

const { height } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Places'
>;

type RouteProps = RouteProp<RootStackParamList, 'Places'>;

export default function PlacesScreen() {
    const navigation = useNavigation<NavigationProp>();

    const t = useT();

    const route = useRoute<RouteProps>();

    const { placeType, preloadedPlaces } = route.params;

    const [places, setPlaces] = useState(preloadedPlaces ?? []);
    const [loading, setLoading] = useState(!preloadedPlaces);

    const appState = useRef(AppState.currentState);
    const lastUpdateRef = useRef(Date.now());

    const typeLabel = t(`ui.placeType.${placeType}`).toLowerCase();

    const config = PLACE_TYPES.find(p => p.key === placeType);

    const heroImage = config?.image.source;

    const example = config?.example ?? '';

    const [search, setSearch] = useState('');

    const [showScrollTop, setShowScrollTop] = useState(false);

    const [showSkeleton, setShowSkeleton] = useState(false);

    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        if (preloadedPlaces) {
            setPlaces(preloadedPlaces);
            setLoading(false);
        }
    }, [preloadedPlaces]);

    async function refreshPlaces() {
        setLoading(true);
        setShowSkeleton(true);
    
        try {
            const base = placesByType[placeType];
            const start = Date.now();

            const prepared = await preparePlaces(base);
            
            const elapsed = Date.now() - start;
            const MIN_SKELETON = 300;

            if (elapsed < MIN_SKELETON) {
                await new Promise(res => setTimeout(res, MIN_SKELETON - elapsed));
            }
            
            setPlaces(prepared);
            lastUpdateRef.current = Date.now();
    
        } catch (e) {
            console.warn('Refresh error', e);
        }
    
        setLoading(false);
        setShowSkeleton(false);
    }

    useEffect(() => {
        const subscription = AppState.addEventListener('change', async (nextState) => {
            
            if (
                appState.current.match(/inactive|background/) &&
                nextState === 'active'
            ) {
                const now = Date.now();
                const diff = now - lastUpdateRef.current;
    
                if (diff > 15000 && !search && places.length > 0) {
                    await refreshPlaces();
                }
            }
    
            appState.current = nextState;
        });
    
        return () => subscription.remove();
    }, [placeType]);

    const filteredPlaces = places.filter(p => {
        if (!search.trim()) return true;
    
        const query = search.toLowerCase();
    
        return (
            t(p.displayNameKey).toLowerCase().includes(query) ||
            p.aliases.some(a => a.toLowerCase().includes(query))
        );
    });

    return (
        <View style={styles.container}>

            <FlatList
                ref={flatListRef}
                data={showSkeleton ? [] : filteredPlaces}
                keyExtractor={(item) => item.id}

                keyboardShouldPersistTaps="always"
                keyboardDismissMode="on-drag"

                onScroll={(e) => {
                    const offset = e.nativeEvent.contentOffset.y;
                    setShowScrollTop(offset > 300);
                }}
                scrollEventThrottle={16}

                ListHeaderComponent={
                    <>
                        <View style={styles.hero}>
                            <ImageBackground
                                source={heroImage}
                                style={styles.heroImage}
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
                                        {t(`ui.placeType.${placeType}`)}
                                    </Text>

                                    <View style={styles.searchContainer}>
                                        <Ionicons name="search" size={18} color="#64748B" />

                                        <TextInput
                                            placeholder={t('ui.searchPlaceholder', {
                                                type: typeLabel,
                                                example,
                                            })}
                                            value={search}
                                            onChangeText={setSearch}
                                            style={styles.searchInput}
                                            placeholderTextColor="#94A3B8"
                                        />

                                        {search.length > 0 && (
                                            <Pressable onPress={() => setSearch('')}>
                                                <Ionicons name="close-circle" size={20} color="#64748B" />
                                            </Pressable>
                                        )}
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={styles.resultsContainer}>
                            <Text style={styles.resultsCount}>
                                {search.length > 0
                                    ? `${filteredPlaces.length} ${t('ui.resultsFor')} "${search}"`
                                    : `${filteredPlaces.length} ${
                                        filteredPlaces.length === 1
                                            ? t(`ui.placeType.${placeType}Singular`)
                                            : t(`ui.placeType.${placeType}Plural`)
                                    }`
                                }
                            </Text>
                        </View>
                    </>
                }

                renderItem={({ item }) => (
                    <View style={styles.cardWrapper}>
                        <PlaceCard
                            place={item}
                            onPress={() => {
                                Keyboard.dismiss();
                                navigation.navigate('Detail', { place: item });
                            }}
                        />
                    </View>
                )}

                contentContainerStyle={{ paddingBottom: 24 }}

                ListEmptyComponent={
                    search.length > 0 ? (
                        <View style={styles.emptyContainer}>
                            <Ionicons name="search" size={48} color="#C0A0A8" />
                            <Text style={styles.emptyTitle}>
                                {t('ui.noResultsTitle', { type: typeLabel })}
                            </Text>
                            <Text style={styles.emptySubtitle}>
                                {t('ui.noResultsSubtitle')}
                            </Text>
                        </View>
                    ) : null
                }

                ListFooterComponent={
                    showSkeleton ? (
                        <>
                            {[...Array(5)].map((_, i) => (
                                <View key={i} style={styles.cardWrapper}>
                                    <SkeletonCard />
                                </View>
                            ))}
                        </>
                    ) : null
                }
            />

            {showScrollTop && (
                <Pressable
                    style={styles.scrollTopButton}
                    onPress={() => {
                        flatListRef.current?.scrollToOffset({
                            offset: 0,
                            animated: true,
                        });
                    }}
                >
                    <Ionicons name="arrow-up" size={20} color="#fff" />
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
    hero: {
        height: height * 0.42,
        width: '100%',
    },
    heroImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.38)',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
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
        fontSize: 14,
        fontFamily: 'InterMedium',
        color: 'rgba(255,255,255,0.7)',
        letterSpacing: 0.6,
        marginBottom: 4,
    },
    heroTitle: {
        fontSize: 48,
        fontFamily: 'PlayfairBold',
        color: '#fff',
        lineHeight: 52,
        marginBottom: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.96)',
        borderRadius: 14,
        paddingHorizontal: 14,
        paddingVertical: 11,
        gap: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        color: '#0F172A',
        fontFamily: 'InterMedium',
    },
    resultsContainer: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 4,
    },
    resultsCount: {
        fontSize: 13,
        fontFamily: 'InterMedium',
        color: '#888',
        textTransform: 'uppercase',
        letterSpacing: 0.6,
    },
    cardWrapper: {
        paddingHorizontal: 16,
        marginTop: 12,
    },
    listContent: {
        paddingBottom: 24,
    },
    emptyContainer: {
        alignItems: 'center',
        marginTop: 60,
        paddingHorizontal: 32,
    },
    emptyTitle: {
        marginTop: 14,
        fontSize: 19,
        fontFamily: 'InterSemiBold',
        color: '#334155',
        textAlign: 'center',
    },
    emptySubtitle: {
        marginTop: 6,
        fontSize: 15,
        fontFamily: 'InterRegular',
        color: '#64748B',
        textAlign: 'center',
    },
    scrollTopButton: {
        position: 'absolute',
        right: 16,
        bottom: 24,

        width: 44,
        height: 44,
        borderRadius: 22,

        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.4)'
    },
});