import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useRef, useState } from 'react';
import { AppState, Dimensions, FlatList, ImageBackground, Keyboard, Pressable, StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import BackButton from '../components/BackButton';
import LanguageButton from '../components/LanguageButton';
import PlaceCard from '../components/PlaceCard';
import SkeletonCard from '../components/SkeletonCard';
import { CATEGORY_CONFIG } from '../config/categoryConfig';
import { PLACE_TYPES } from '../config/placeTypes';
import { placesByType } from '../data';
import { useT } from '../translations';
import { RootStackParamList } from '../types/navigation';
import { preparePlaces } from '../utils/location';

const { height } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Recommendations'>;

type RouteProps = RouteProp<RootStackParamList, 'Recommendations'>

export default function RecommendationsScreen() {
    const navigation = useNavigation<NavigationProp>();
    
    const route = useRoute<RouteProps>();

    const { category, placeType } = route.params;

    const t = useT();

    const { preloadedPlaces } = route.params;

    const [places, setPlaces] = useState(preloadedPlaces ?? []);
    const [loading, setLoading] = useState(!preloadedPlaces);

    const [showSkeleton, setShowSkeleton] = useState(false);

    const config = PLACE_TYPES.find(p => p.key === placeType);

    const heroImage =
        CATEGORY_CONFIG[category].image.source ??
        config?.image.source;

    const [showScrollTop, setShowScrollTop] = useState(false);

    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        if (preloadedPlaces) {
            const filtered = preloadedPlaces.filter(p =>
                p.categories.includes(category)
            );
    
            setPlaces(filtered);
            setLoading(false);
        }
    }, [preloadedPlaces, category]);

    useEffect(() => {
        if (!preloadedPlaces) {
            setShowSkeleton(true);
        } else {
            setShowSkeleton(false);
        }
    }, [placeType]);

    async function refreshPlaces() {
        setLoading(true);
        setShowSkeleton(true);
    
        try {
            const base = placesByType[placeType];
    
            const start = Date.now();
    
            const prepared = await preparePlaces(base);
    
            const filtered = prepared.filter(p =>
                p.categories.includes(category)
            );
    
            const elapsed = Date.now() - start;
            const MIN_SKELETON = 300;
    
            if (elapsed < MIN_SKELETON) {
                await new Promise(res => setTimeout(res, MIN_SKELETON - elapsed));
            }
    
            setPlaces(filtered);
            lastUpdateRef.current = Date.now();
    
        } catch (e) {
            console.warn('Refresh error', e);
        }
    
        setLoading(false);
        setShowSkeleton(false);
    }

    const appState = useRef(AppState.currentState);
    const lastUpdateRef = useRef(Date.now());

    useEffect(() => {
        const subscription = AppState.addEventListener('change', async (nextState) => {

            if (
                appState.current.match(/inactive|background/) &&
                nextState === 'active'
            ) {
                const now = Date.now();
                const diff = now - lastUpdateRef.current;

                if (diff > 15000 && places.length > 0) {
                    await refreshPlaces();
                    lastUpdateRef.current = Date.now();
                }
            }

            appState.current = nextState;
        });

        return () => subscription.remove();
    }, [placeType, category]);

    return (
        <View style={styles.container}>

            <FlatList
                ref={flatListRef}
                data={showSkeleton ? [] : places}
                keyExtractor={(item) => item.id}

                keyboardShouldPersistTaps="always"
                keyboardDismissMode="on-drag"

                onScroll={(e) => {
                    const offset = e.nativeEvent.contentOffset.y;
                    setShowScrollTop(offset > 300);
                }}

                ListHeaderComponent={
                    <>
                        <View style={styles.hero}>
                            <ImageBackground source={heroImage} style={styles.heroImage}>
                                <View style={styles.imageOverlay} />

                                <View style={styles.backWrapper}>
                                    <BackButton />
                                </View>

                                <View style={styles.languageWrapper}>
                                    <LanguageButton />
                                </View>

                                <View style={styles.heroContent}>
                                    <Text style={styles.heroEyebrow}>
                                        {t(`ui.placeType.${placeType}`)}
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
                                {places.length} {
                                    places.length === 1
                                        ? t(`ui.placeType.${placeType}Singular`)
                                        : t(`ui.placeType.${placeType}Plural`)
                                }
                            </Text>
                        </View>
                    </>
                }

                renderItem={({ item }) => (
                    <View style={{ paddingHorizontal: 16, marginTop: 12 }}>
                        <PlaceCard
                            place={item}
                            onPress={() => {
                                Keyboard.dismiss();
                                navigation.navigate('Detail', { place: item });
                            }}
                        />
                    </View>
                )}

                ListFooterComponent={
                    showSkeleton ? (
                        <>
                            {[...Array(5)].map((_, i) => (
                                <View key={i} style={{ paddingHorizontal: 16, marginTop: 12 }}>
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
        height: height * 0.37,
        width: '100%',
    },
    heroContent: {
        paddingHorizontal: 16,
        paddingBottom: 28,
        alignItems: 'flex-start',
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
        top:15,
        left: 10,
        zIndex: 10,
    },
    languageWrapper: {
        position: 'absolute',
        top: 15,
        right: 10,
        zIndex: 10,
    },
    heroEyebrow: {
        fontSize: 13,
        fontFamily: 'InterMedium',
        color: 'rgba(255,255,255,0.7)',
        letterSpacing: 1.2,
        marginBottom: 6,
        textTransform: 'uppercase',
    },
    heroTitle: {
        fontSize: 48,
        fontFamily: 'PlayfairBold',
        color: '#fff',
        lineHeight: 52,
    },
    heroSubtitle: {
        fontSize: 16,
        fontFamily: 'InterMedium',
        color: 'rgba(255,255,255,0.85)',
        marginTop: 6,
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
    card: {
        borderRadius: 12,
        marginBottom: 12,
        position: 'relative',
        overflow: 'hidden',
    },
    listContent: {
        paddingBottom: 24,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 12,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    description: {
        color: '#ddd',
        marginTop: 4,
    },
    cta: {
        marginTop: 6,
        color: '#fff',
        fontWeight: '600',
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
    }
});