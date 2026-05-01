import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useT } from '../translations';
import { RootStackParamList } from '../types/navigation';
import { getDistanceValue, getTravelTimeFromKm, getUserLocation } from '../utils/location';
import { HIGHLIGHT_ICONS, TYPE_ICONS } from '../utils/placeIcons';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

type RouteProps = RouteProp<RootStackParamList, 'Detail'>;

export default function DetailScreen() {
    const route = useRoute<RouteProps>();
    const navigation = useNavigation<NavigationProp>();
    
    const { place } = route.params;
    const { width } = Dimensions.get('window');

    const scrollRef = useRef<ScrollView>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const [isInteracting, setIsInteracting] = useState(false);

    const [descriptionExpanded, setDescriptionExpanded] = useState(false);

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const t = useT();

    const [distance, setDistance] = useState(
        t('distance.minutes', { value: place.fallbackMinutes })
    )

    const openMaps = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${place.coordinates.latitude},${place.coordinates.longitude}`;
        Linking.openURL(url);
    }

    const resumeAutoplay = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    
        timeoutRef.current = setTimeout(() => {
            setIsInteracting(false);
        }, 1200);
    };

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

    useEffect(() => {
        if (isInteracting) return;

        const interval = setInterval(() => {
            const nextIndex =
                activeIndex + 1 >= place.images.length
                    ? 0
                    : activeIndex + 1;
    
            scrollRef.current?.scrollTo({
                x: nextIndex * width,
                animated: true,
            });
        }, 3500);
    
        return () => clearInterval(interval);
    }, [activeIndex, isInteracting]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.hero}>
                <ScrollView
                    ref={scrollRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    style={styles.carousel}

                    onTouchStart={() => {
                        if (timeoutRef.current) {
                            clearTimeout(timeoutRef.current);
                        }
                        setIsInteracting(true);
                    }}
                    onTouchEnd={resumeAutoplay}
                    onTouchCancel={resumeAutoplay}
                    
                    onScrollBeginDrag={() => {
                        if (timeoutRef.current) {
                            clearTimeout(timeoutRef.current);
                        }
                        setIsInteracting(true);
                    }}
                    onScrollEndDrag={resumeAutoplay}

                    onMomentumScrollEnd={(e) => {
                        const index = Math.round(
                            e.nativeEvent.contentOffset.x / width
                        );
                        setActiveIndex(index);
                    }}
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
            </View>

            <ScrollView 
                style={{ flex: 1}}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >

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

                    {place.type && (
                    <>
                        <View style={styles.separator} />

                        <View style={styles.badge}>
                            <Ionicons 
                                name={TYPE_ICONS[place.type]} 
                                size={30} 
                                color="#8F2F4A" 
                            />
                            <Text 
                                style={styles.badgeLabel}
                                numberOfLines={2}
                            >
                                {t(`type.${place.type}`)}
                            </Text>
                        </View>
                    </>
                )}
                    
                    {place.highlight && (
                    <>
                        <View style={styles.separator} />

                        <View style={styles.badge}>
                            <Ionicons 
                                name={HIGHLIGHT_ICONS[place.highlight.key]}
                                size={30} 
                                color="#8F2F4A" 
                            />
                            <Text 
                                style={styles.badgeLabel}
                                numberOfLines={2}
                            >
                                {t(`highlight.${place.highlight.key}.${place.highlight.value}`)}
                            </Text>
                        </View>
                    </>
                )}

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

                <Pressable onPress={() => setDescriptionExpanded(v => !v)}>
                    <Text
                        style={styles.description}
                        numberOfLines={descriptionExpanded ? undefined : 3}
                    >
                        {t(place.descriptionKey)}
                    </Text>

                    <Text style={styles.expandToggle}>
                        {descriptionExpanded
                            ? t('ui.seeLess')
                            : t('ui.seeMore')}
                    </Text>
                </Pressable>

                <Pressable
                    onPress={openMaps}
                    style={({ pressed }) => [
                        styles.button,
                        {
                            backgroundColor: pressed ? '#7A283E' : '#8F2F4A',
                            transform: [{ scale: pressed ? 0.96 : 1 }],
                        }
                    ]}
                >
                    <Ionicons name="navigate" size={18} color="#fff" />

                    <Text style={styles.buttonText}>
                        {t('ui.getDirections')}
                    </Text>
                </Pressable>

            </ScrollView>
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
        top:15,
        left: 10,
        zIndex: 10,
    },
    backButton: {
        width: 42,
        height: 42,
        borderRadius: 14,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 37,
        fontFamily: 'PlayfairRegular',
        color: '#111',
        marginTop: -10,
        marginBottom: 2,
        letterSpacing: 0.3,
    },
    location: {
        fontSize: 17,
        fontFamily: 'InterRegular',
        color: '#111',
        marginBottom: 20,
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
    backText: {
        color: '#fff',
        fontSize: 16,
    },
    content: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        
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
        marginBottom: 6,
        lineHeight: 24,
    },
    expandToggle: {
        fontSize: 14,
        fontFamily: 'InterMedium',
        color: '#8F2F4A',
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        gap: 8,
        backgroundColor: '#8F2F4A',
        height: 52,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'InterSemiBold',
        fontWeight: '600',
        fontSize: 22,
    },
});