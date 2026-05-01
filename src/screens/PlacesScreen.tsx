import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import PlaceCard from '../components/PlaceCard';
import { placesByType } from '../data/index';
import { useT } from '../translations';
import { RootStackParamList } from '../types/navigation';
import { getDistanceValue, getTravelTimeFromKm, getUserLocation } from '../utils/location';
import { PLACE_TYPE_ASSETS } from '../utils/placeTypeAssets';

const { height } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Places'
>;

type RouteProps = RouteProp<RootStackParamList, 'Places'>;

function normalize(text: string) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

export default function PlacesScreen() {
    const navigation = useNavigation<NavigationProp>();

    const t = useT();
    
    const route = useRoute<RouteProps>();
    const { placeType } = route.params;
    const typeLabel = t(`ui.placeType.${placeType}`).toLowerCase();

    const examplesByType = {
        beaches: 'Balandra',
        museums: 'Arte',
        viewpoints: 'Calavera',
    };
    const example = examplesByType[placeType] || '';

    const [userLocation, setUserLocation] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);

    const [search, setSearch] = useState('');

    useEffect(() => {
        getUserLocation()
            .then(setUserLocation)
            .catch(() => {
                console.log('Location permission denied');
            });
    }, []);

    const placesData = placesByType[placeType] || []
    const heroImage = PLACE_TYPE_ASSETS[placeType].hero;
    
    const filteredPlaces = placesData
        .map((place) => {
            let distanceValue = null;
            let distance = t('distance.minutes', { value: place.fallbackMinutes });

            if (userLocation) {
                const distanceKm = getDistanceValue(
                    userLocation,
                    place.coordinates
                );

                const minutes = getTravelTimeFromKm(distanceKm);

                distanceValue = distanceKm;

                distance = t('distance.minutes', {
                    value: minutes
                });
            }

            return {
                ...place,
                distanceValue,
                distance,
            };
        })
        .filter((place) => {
            const query = normalize(search)

            const searchableText = [
                t(place.displayNameKey),
                ...place.aliases,
                ...place.tags.map(tag => t(`tag.${tag}`))
            ].join(' ');

            return normalize(searchableText).includes(query);
        })
        .sort((a: any, b: any) => {
            if (!a.distanceValue || !b.distanceValue) return 0;
            return a.distanceValue - b.distanceValue;
        });

        return (
            <View style={styles.container}>

            <FlatList
                data={filteredPlaces}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                keyboardShouldPersistTaps="handled"

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

                ListHeaderComponent={
                    <>
                        <View style={styles.hero}>
                            <ImageBackground
                                source={heroImage}
                                style={styles.heroImage}
                            >
                                <View style={styles.imageOverlay} />

                                <Pressable
                                    onPress={() => navigation.goBack()}
                                    style={({ pressed }) => [
                                        styles.backButton,
                                        {
                                            transform: [{ scale: pressed ? 0.92 : 1 }],
                                            opacity: pressed ? 0.75 : 1,
                                        }
                                    ]}
                                >
                                    <Ionicons name="chevron-back" size={26} color="#fff" />
                                </Pressable>

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
            />
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
    backButton: {
        position: 'absolute',
        top: 15,
        left: 10,
        zIndex: 10,
        width: 42,
        height: 42,
        borderRadius: 14,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
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
        paddingBottom: 32,
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
});