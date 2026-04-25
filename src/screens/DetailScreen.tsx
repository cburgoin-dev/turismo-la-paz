import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Dimensions, Image, ImageSourcePropType, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types/navigation';
import { getDistanceText, getUserLocation } from '../utils/location';

type RouteProps = RouteProp<RootStackParamList, 'Detail'>;

export default function DetailScreen() {
    const route = useRoute<RouteProps>();
    const navigation = useNavigation();
    
    const { beach } = route.params;

    const { width } = Dimensions.get('window');

    const openMaps = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${beach.coordinates.latitude},${beach.coordinates.longitude}`;
        Linking.openURL(url);
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const [distance, setDistance] = useState(beach.distance);

    useEffect(() => {
        getUserLocation()
            .then((userLocation) => {
                const distance = getDistanceText(
                    userLocation,
                    beach.coordinates
                );

                setDistance(distance);
            })
            .catch(() => {
                console.log('Location permission denied');
            });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.hero}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    style={styles.carousel}

                    onScroll={(e) => {
                        const index = Math.round(
                            e.nativeEvent.contentOffset.x / width
                        );
                        setActiveIndex(index);
                    }}
                    scrollEventThrottle={16}
                >
                    {beach.images.map((img: ImageSourcePropType, index: number) => (
                        <Image
                            key={index}
                            source={img}
                            style={[styles.image, { width }]}
                        />
                    ))}
                </ScrollView>

                <View style={styles.dotsContainer}>
                    {beach.images.map((_: any, index: number) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                activeIndex === index && styles.activeDot
                            ]}
                        />
                    ))}
                </View>
            </View>

            <View style={styles.backWrapper}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={30} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Playa {beach.name}</Text>

                <Text style={styles.location}>{beach.location}</Text>

                <View style={styles.infoRow}>
                    <View style={styles.badge}>
                        <Ionicons name="time" size={30} color= "#8F2F4A" />
                        <Text style={styles.badgeLabel}>{distance}</Text>
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.badge}>
                        <Ionicons name="partly-sunny" size={30} color="#8F2F4A" />
                        <Text style={styles.badgeLabel}>{beach.type}</Text>
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.badge}>
                        <Ionicons name="car" size={30} color="#8F2F4A" />
                        <Text style={styles.badgeLabel}>{beach.parking}</Text>
                    </View>
                </View>

                <View style={styles.tipBox}>
                    <Ionicons name="sparkles" size={20} color="#A15B1D" />
                    <Text style={styles.tipText}>{beach.tip}</Text>
                </View>

                <Text style={styles.description}>{beach.description}</Text>

                <Text style={styles.mapLink}>
                    Open route in Google Maps
                </Text>

                <TouchableOpacity style={styles.button} onPress={openMaps}>
                    <Text style={styles.buttonText}>Get Directions</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hero: {
        height: 320,
    },
    backWrapper: {
        position: 'absolute',
        top: 15,
        left: 10,
        zIndex: 10,

        elevation: 20,
    },
    title: {
        fontSize: 40,
        fontFamily: 'PlayfairRegular',
        color: '#111',
        marginTop: -10,
        letterSpacing: 0.3,
    },
    location: {
        fontSize: 18,
        fontFamily: 'InterRegular',
        color: '#111',
        marginBottom: 18,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    carousel: {
        height: 320,
    },
    dotsContainer: {
        position: 'absolute',
        bottom: 12,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 15,

        backgroundColor: 'rgba(255,255,255,0.4)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.8)',

        justifyContent: 'center',
        alignItems: 'center',
    },
    backText: {
        color: '#fff',
        fontSize: 16,
    },
    content: {
        paddingHorizontal: 20,
        paddingTop: 20,
        
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: -4 },

        backgroundColor: '#F5F7FA',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    badge: {
        alignItems: 'center',
        width: '30%',
    },
    badgeText: {
        fontSize: 28,
        
    },
    badgeLabel: {
        fontSize: 17,
        fontFamily: 'InterRegular',
        color: '#111',
        marginTop: 6,
        textAlign: 'center',
    },
    separator: {
        width: 1,
        backgroundColor: '#E5E7EB',
        marginHorizontal: 6,
        alignSelf: 'stretch',
    },
    tipBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6C79C',
        padding: 14,
        borderRadius: 16,
        marginBottom: 20,
        gap: 10,
    },
    tipIcon: {
        marginRight: 8,
    },
    tipText: {
        color: '#fff',
        fontFamily: 'InterMedium',
        flex: 1,
        lineHeight: 22,
        fontSize: 16,
    },
    description: {
        fontSize: 16,
        fontFamily: 'InterRegular',
        color: '#111',
        marginBottom: 20,
    },
    mapLink: {
        color: '#111',
        fontSize: 15,
        fontFamily: 'InterRegular',
        textAlign: 'center',
        marginBottom: 6,
    },
    button: {
        backgroundColor: '#8F2F4A',
        height: 52,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'InterMedium',
        fontWeight: '600',
        fontSize: 22,
    },
});