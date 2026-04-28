import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PlaceCard from '../components/PlaceCard';
import { beaches } from '../data/beaches';
import { t } from '../translations';
import { RootStackParamList } from '../types/navigation';
import { getDistanceValue, getTravelTimeFromKm, getUserLocation } from '../utils/location';
import { PLACE_TYPE_ASSETS } from '../utils/placeTypeAssets';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Recommendations'>;

type RouteProps = RouteProp<RootStackParamList, 'Recommendations'>

export default function RecommendationsScreen() {
    const navigation = useNavigation<NavigationProp>();
    
    const route = useRoute<RouteProps>();
    const { category, placeType } = route.params;

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

    const placesData = beaches;
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

                contentContainerStyle={styles.content}

                renderItem={({ item, index }) => (
                    <View style={{
                        paddingHorizontal: 16,
                        marginTop: index === 0 ? -165 : 0
                    }}>
                        <PlaceCard
                            place={item}
                            onPress={() => navigation.navigate('Detail', { place: item })}
                        />
                    </View>
                )}

                ListHeaderComponent={
                    <View style={styles.hero}>
                        <ImageBackground
                            source={PLACE_TYPE_ASSETS[placeType].hero}
                            style={styles.heroImage}
                        >
                            <View style={styles.imageOverlay} />
                            
                            <View style={styles.headerRow}>
                                <TouchableOpacity
                                    style={styles.backButton}
                                    onPress={() => navigation.goBack()}
                                >
                                    <Ionicons name="chevron-back" size={42} color="#fff" />
                                </TouchableOpacity>

                                <View style={styles.textColumn}>
                                    <Text style={styles.title} numberOfLines={1}>
                                        {t('ui.recommendationsTitle', {
                                            category: t(`ui.category.${category}`)
                                        })}
                                    </Text>

                                    <Text style={styles.subtitle}>
                                        {t('ui.recommendationsSubtitle')}
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hero: {
        height: 280,
        width: '100%',
    },
    heroImage: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.35)',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',

        paddingTop: 30,
        paddingHorizontal: 8,
    },
    backButton: {
        marginRight: 6,
        marginTop: -20,
    },
    textColumn: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'InterSemiBold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'InterMedium',
        color: '#FAFAFA',
        textAlign: 'center',
    },
    content: {
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