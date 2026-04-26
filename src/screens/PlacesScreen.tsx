import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import PlaceCard from '../components/PlaceCard';
import { beaches } from '../data/beaches';
import { RootStackParamList } from '../types/navigation';
import { getDistanceText, getDistanceValue, getUserLocation } from '../utils/location';

type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Places'
>;

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

    const filteredPlaces = beaches
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
        .filter((place) => 
            place.name.toLowerCase().includes(search.toLowerCase())
        )
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
                        <Ionicons name="search" size={18} color="#888" />

                        <TextInput
                            placeholder="Search beaches..."
                            value={search}
                            onChangeText={setSearch}
                            style={styles.searchInput}
                            placeholderTextColor="#888"
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
                            beach={place}
                            onPress={() =>
                                navigation.navigate('Detail', { beach: place})
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

        paddingHorizontal: 12,
        paddingTop: 20,
        paddingBottom: 10,

        backgroundColor: 'rgba(0,0,0,0.4)',

        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.08)',
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#F1F5F9',
        borderRadius: 12,

        paddingHorizontal: 14,
        paddingVertical: 8,
    },
    searchInput: {
        flex: 1,
        marginLeft: 6,
        fontSize: 15,
        color: '#111',
        fontFamily: 'InterMedium',
    },
    content: {
        padding: 16,
    }
});