import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PlaceCard from '../components/PlaceCard';
import { beaches } from '../data/beaches';
import { RootStackParamList } from '../types/navigation';
import { getDistanceText, getDistanceValue, getUserLocation } from '../utils/location';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Recommendations'>;

type RouteProps = RouteProp<RootStackParamList, 'Recommendations'>

function getCategoryTitle(category: string) {
    switch (category) {
        case 'relax':
            return 'Relaxing';
        case 'family':
            return 'Family';
        case 'social':
            return 'Social';
        case 'adventure':
            return 'Adventure';
        default:
            return 'Great';

    }
}

export default function RecommendationsScreen() {
    const route = useRoute<RouteProps>();
    const { category } = route.params;
    const navigation = useNavigation<NavigationProp>();

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

    const filteredBeaches = beaches
        .filter((b) => b.categories.includes(category))
        .map((beach) => {
            let distanceValue = null;
            let distance = beach.distance;

            if (userLocation) {
                distanceValue = getDistanceValue(
                    userLocation,
                    beach.coordinates
                );

                distance = getDistanceText(
                    userLocation,
                    beach.coordinates
                );
            }

            return {
                ...beach,
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

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.hero}>
                    <ImageBackground
                        source={require('../../assets/images/beaches/hero/4.jpg')}
                        style={styles.heroImage}
                    >

                        <View style={styles.imageOverlay} />

                        <View style={styles.headerRow}>

                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                            <Ionicons name="chevron-back" size={42} color="#fff" />
                        </TouchableOpacity>

                            <View style={styles.textColumn}>
                                <Text 
                                    style={styles.title}
                                    numberOfLines={1}
                                >
                                    {getCategoryTitle(category)} spots near you
                                </Text>

                                <Text style={styles.subtitle}>
                                    Based on your location
                                </Text>
                            </View>
            
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.content}>
                    {filteredBeaches.map((beach) => (
                        <PlaceCard
                            key={beach.id}
                            beach={beach}
                            onPress={() => navigation.navigate('Detail', { beach})}
                        />
                    ))}
                </View>

            </ScrollView>
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
        color: '#E5E7EB',
        textAlign: 'center',
    },
    content: {
        padding: 16,
        marginTop: -180,
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