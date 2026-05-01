import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import PlaceCard from '../components/PlaceCard';
import { placesByType } from '../data/index';
import { useT } from '../translations';
import { RootStackParamList } from '../types/navigation';
import { getDistanceValue, getTravelTimeFromKm, getUserLocation } from '../utils/location';
import { PLACE_TYPE_ASSETS } from '../utils/placeTypeAssets';

const { height } = Dimensions.get('window');

const CATEGORY_IMAGES: Record<string, Record<string, any>> = {
    beaches: {
        relax: require('../../assets/images/beaches/hero/1.jpg'),
        family: require('../../assets/images/beaches/hero/2.jpg'),
        social: require('../../assets/images/beaches/hero/3.jpg'),
        adventure: require('../../assets/images/beaches/hero/4.jpg'),
    },
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Recommendations'>;

type RouteProps = RouteProp<RootStackParamList, 'Recommendations'>

export default function RecommendationsScreen() {
    const navigation = useNavigation<NavigationProp>();
    
    const route = useRoute<RouteProps>();
    const { category, placeType } = route.params;

    const t = useT();

    const [userLocation, setUserLocation] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);

    useEffect(() => {
        getUserLocation()
            .then(setUserLocation)
            .catch(() => {
                console.log('Location permission denied')
            });
    }, []);

    const placesData = placesByType[placeType] || []

    const heroImage =
        CATEGORY_IMAGES[placeType]?.[category] ??
        PLACE_TYPE_ASSETS[placeType].hero;
    
    const filteredPlaces = placesData
        .filter((b) => b.categories.includes(category))
        .map((place) => {
            let distanceValue = null;
            let distance = t('distance.minutes', {
                value: place.fallbackMinutes,
            });

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

                renderItem={({ item }) => (
                    <View style={{
                        paddingHorizontal: 16,
                        marginTop: 12,
                    }}>
                        <PlaceCard
                            place={item}
                            onPress={() => navigation.navigate('Detail', { place: item })}
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
                            {filteredPlaces.length}{' '}
                            {filteredPlaces.length === 1
                                ? t(`ui.placeType.${placeType}Singular`)
                                : t(`ui.placeType.${placeType}Plural`)
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
        height: height * 0.37,
        width: '100%',
    },
    heroContent: {
        paddingHorizontal: 20,
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
});