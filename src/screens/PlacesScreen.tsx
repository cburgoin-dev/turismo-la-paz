import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import PlaceCard from '../components/PlaceCard';
import { beaches } from '../data/beaches';
import { t } from '../translations';
import { PlaceWithDistance, RootStackParamList } from '../types/navigation';
import { getDistanceValue, getTravelTimeFromKm, getUserLocation } from '../utils/location';
import { PLACE_TYPE_ASSETS } from '../utils/placeTypeAssets';

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

    const route = useRoute<RouteProps>();
    const { placeType } = route.params;

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

    const placesData = beaches;
    const filteredPlaces: PlaceWithDistance[] = placesData
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

                <ImageBackground
                    source={PLACE_TYPE_ASSETS[placeType].hero}
                    style={styles.header}
                >
                    <View style={styles.overlay}>

                        <View style={styles.headerRow}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={42} color="#fff" />
                            </TouchableOpacity>

                            <View style={styles.searchContainer}>
                                <Ionicons name="search" size={18} color="#334155" />

                                <TextInput
                                    placeholder={t('ui.searchPlaceholder')}
                                    value={search}
                                    onChangeText={setSearch}
                                    style={styles.searchInput}
                                    placeholderTextColor="#64748B"
                                />

                                {search.length > 0 && (
                                    <TouchableOpacity onPress={() => setSearch('')}>
                                        <Ionicons name="close-circle" size={20} color="#334155" />
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>

                    </View>
                </ImageBackground>

                <FlatList 
                    data={filteredPlaces}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}

                    renderItem={({ item}) => (
                        <PlaceCard
                            place={item}
                            onPress={() => navigation.navigate('Detail', { place: item})}
                        />
                    )}

                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <Ionicons name="search" size={52} color="#64748B" />
                            <Text style={styles.emptyTitle}>{t('ui.noResultsTitle')}</Text>
                            <Text style={styles.emptySubtitle}>{t('ui.noResultsSubtitle')}</Text>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.35)',
        justifyContent: 'flex-end',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,

        paddingLeft: 10,
        paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 10,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 12,

        paddingHorizontal: 14,
        paddingVertical: 8,
    },
    searchInput: {
        flex: 1,
        marginLeft: 6,
        fontSize: 15,
        color: '#0F172A',
        fontFamily: 'InterMedium',
    },
    emptyContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    emptyTitle: {
        marginTop: 12,
        fontSize: 18,
        fontFamily: 'InterSemiBold',
        color: '#334155',
    },
    emptySubtitle: {
        marginTop: 4,
        fontSize: 14,
        color: '#64748B',
    },
    content: {
        padding: 16,
    }
});