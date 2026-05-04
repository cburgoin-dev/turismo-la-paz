import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import BackButton from '../components/BackButton';
import LanguageButton from '../components/LanguageButton';
import PlaceCard from '../components/PlaceCard';
import SkeletonCard from '../components/SkeletonCard';
import { PLACE_TYPES } from '../config/placeTypes';
import { usePlaces } from '../hooks/usePlaces';
import { useT } from '../translations';
import { RootStackParamList } from '../types/navigation';

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

    const { placeType } = route.params;

    const typeLabel = t(`ui.placeType.${placeType}`).toLowerCase();

    const config = PLACE_TYPES.find(p => p.key === placeType);

    const heroImage = config?.image.source;

    const example = config?.example ?? '';

    const [search, setSearch] = useState('');
    
    const { places, loading } = usePlaces(placeType, search)

    const [showScrollTop, setShowScrollTop] = useState(false);

    const scrollViewRef = useRef<ScrollView>(null);

    const [showSkeleton, setShowSkeleton] = useState(true);

    useEffect(() => {
        if (!loading) {
          const timer = setTimeout(() => {
            setShowSkeleton(false);
          }, 600);
      
          return () => clearTimeout(timer);
        }
      }, [loading]);

    useEffect(() => {
        setShowSkeleton(true);
    }, [placeType, search]);

    return (
        <View style={styles.container}>

        <ScrollView
            ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"

            onScroll={(e) => {
                const offset = e.nativeEvent.contentOffset.y;
                setShowScrollTop(offset > 300);
            }}
            scrollEventThrottle={16}
        >

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
                                    <Ionicons name="close-circle" size={19} color="#64748B" />
                                </Pressable>
                                )}
                        </View>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.resultsContainer}>
                <Text style={styles.resultsCount}>
                    {search.length > 0
                    ? `${places.length} ${t('ui.resultsFor')} "${search}"`
                    : `${places.length} ${
                        places.length === 1
                            ? t(`ui.placeType.${placeType}Singular`)
                            : t(`ui.placeType.${placeType}Plural`)
                        }`
                    }
                </Text>
            </View>

            {showSkeleton ? (
                <View style={styles.listContent}>
                    {[...Array(5)].map((_, i) => (
                        <View key={i} style={styles.cardWrapper}>
                            <SkeletonCard />
                        </View>
                    ))}
                </View>
            ) : (
                <FlatList
                    data={places}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false}
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
                    contentContainerStyle={styles.listContent}
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
                />
            )}

        </ScrollView>

        {showScrollTop && (
            <Pressable
                style={styles.scrollTopButton}
                onPress={() => {
                    scrollViewRef.current?.scrollTo({
                        y: 0,
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
    }
});