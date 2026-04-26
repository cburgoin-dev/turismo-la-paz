import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import PlaceCard from '../components/PlaceCard';
import { beaches } from '../data/beaches';
import { PlaceWithDistance, RootStackParamList } from '../types/navigation';
import { getDistanceText, getDistanceValue, getUserLocation } from '../utils/location';

type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Places'
>;

function normalize(text: string) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

export default function PlacesScreen() {
    const navigation = useNavigation<NavigationProp>();

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
            let distance = place.distance;

            if (userLocation) {
                distanceValue = getDistanceValue(
                    userLocation,
                    place.coordinates
                );

                distance = getDistanceText(
                    userLocation,
                    place.coordinates
                );
            }

            return {
                ...place,
                distanceValue,
                distance,
            };
        })
        .filter((place) => {
            const query = normalize(search)

            return (
                normalize(place.name).includes(query) || normalize(place.displayName).includes(query) || place.aliases?.some((alias: string) => normalize(alias).includes(query))
            );
        })
        .sort((a: any, b: any) => {
            if (!a.distanceValue || !b.distanceValue) return 0;
            return a.distanceValue - b.distanceValue;
        });

        return (
            <View style={styles.container}>
                
                <View style={styles.header}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={42} color="#fff" />
                    </TouchableOpacity>

                    <View style={styles.searchContainer}>
                        <Ionicons name="search" size={18} color="#334155" />

                        <TextInput
                            placeholder="Search beaches (e.g. Balandra)"
                            value={search}
                            onChangeText={setSearch}
                            style={styles.searchInput}
                            placeholderTextColor="#64748B"
                        />
                    </View>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}
                >
                    {filteredPlaces.map((place) => (
                        <PlaceCard
                            key={place.id}
                            place={place}
                            onPress={() =>
                                navigation.navigate('Detail', { place })
                            }
                        />
                    ))}
                </ScrollView>
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

        paddingLeft: 10,
        paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 10,

        backgroundColor: 'rgba(15, 23, 42, 0.75)',

        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.08)',
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
    content: {
        padding: 16,
    }
});