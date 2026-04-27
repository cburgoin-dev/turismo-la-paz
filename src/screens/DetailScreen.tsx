import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Dimensions, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { t } from '../translations';
import { RootStackParamList } from '../types/navigation';
import { getDistanceValue, getTravelTimeFromKm, getUserLocation } from '../utils/location';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

type RouteProps = RouteProp<RootStackParamList, 'Detail'>;

export default function DetailScreen() {
    const route = useRoute<RouteProps>();
    const navigation = useNavigation<NavigationProp>();
    
    const { place } = route.params;

    const { width } = Dimensions.get('window');

    const openMaps = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${place.coordinates.latitude},${place.coordinates.longitude}`;
        Linking.openURL(url);
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const [distance, setDistance] = useState(
        t('distance.minutes', { value: place.fallbackMinutes })
    )

    useEffect(() => {
        getUserLocation()
            .then((userLocation) => {
                const distanceKm = getDistanceValue(
                    userLocation,
                    place.coordinates
                );

                const minutes = getTravelTimeFromKm(distanceKm)

                setDistance(
                    t('distance.minutes', {value: minutes})
                );
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
                    {place.images.map((img, index: number) => (
                        <Image
                            key={index}
                            source={img.source}
                            style={[styles.image, { width }]}
                        />
                    ))}
                </ScrollView>

                <View style={styles.dotsContainer}>
                    {place.images.map((_: any, index: number) => (
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
                <Text style={styles.title}>
                     {t(place.displayNameKey)}
                </Text>

                <Text style={styles.location}>{t(place.locationKey)}</Text>

                <View style={styles.infoRow}>
                    <View style={styles.badge}>
                        <Ionicons name="time" size={30} color= "#8F2F4A" />
                        <Text 
                            style={styles.badgeLabel}
                            numberOfLines={2}
                        >
                            {distance}
                        </Text>
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.badge}>
                        <Ionicons name="partly-sunny" size={30} color="#8F2F4A" />
                        <Text 
                            style={styles.badgeLabel}
                            numberOfLines={2}
                        >
                            {t(`type.${place.type}`)}

                        </Text>
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.badge}>
                        <Ionicons name="car" size={30} color="#8F2F4A" />
                        <Text 
                            style={styles.badgeLabel}
                            numberOfLines={2}
                        >
                            {t(`parking.${place.parking}`)}
                        </Text>
                    </View>
                </View>

                <View style={styles.tipBox}>
                    <Ionicons name="sparkles" size={20} color="#A15B1D" />
                    <Text 
                        style={styles.tipText}
                        numberOfLines={1}
                    >
                        {t(place.tipKey)}
                    </Text>
                </View>

                <Text 
                    style={styles.description}
                    numberOfLines={3}
                >
                    {t(place.descriptionKey)}
                </Text>

                <Text style={styles.mapLink}>
                    {t('ui.openMaps')}
                </Text>

                <TouchableOpacity style={styles.button} onPress={openMaps}>
                    <Text style={styles.buttonText}>{t('ui.getDirections')}</Text>
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
        fontSize: 37,
        fontFamily: 'PlayfairRegular',
        color: '#111',
        marginTop: -10,
        letterSpacing: 0.3,
    },
    location: {
        fontSize: 17,
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
    type: {
        flexShrink: 1,
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
        flexWrap: 'wrap',
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