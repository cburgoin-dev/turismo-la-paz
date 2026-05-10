import { Ionicons } from '@expo/vector-icons';

import {
    RouteProp,
    useNavigation,
    useRoute
} from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
    useEffect,
    useRef,
    useState
} from 'react';

import {
    Dimensions,
    Image,
    Linking,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import AnimatedTitle from '../components/AnimatedTitle';
import BackButton from '../components/BackButton';
import LanguageButton from '../components/LanguageButton';

import { useT } from '../translations';

import { RootStackParamList } from '../types/navigation';

import {
    getHighlightIcon,
    getTypeIcon
} from '../utils/itemIcons';

const { height, width } = Dimensions.get('window');

const HERO_HEIGHT = height * 0.404;

const AUTOPLAY_DELAY = 3500;
const AUTOPLAY_RESUME_DELAY = 1200;

const HEADER_TOP = 15;

const ACCENT_COLOR = '#8F2F4A';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

type RouteProps = RouteProp<RootStackParamList, 'Detail'>;

export default function DetailScreen() {
    const navigation = useNavigation<NavigationProp>();

    const route = useRoute<RouteProps>();
    
    const { item } = route.params;

    const t = useT();

    const scrollRef = useRef<ScrollView>(null);

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const [isInteracting, setIsInteracting] = useState(false);

    const [descriptionExpanded, setDescriptionExpanded] = useState(false);

    const isExperience = item.itemType === 'experience';

    const experienceItem = isExperience ? item : null;

    const showTypeBadge = Boolean(item.type);

    const showHighlightBadge = Boolean(item.highlight);

    function clearAutoplayTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    function handleOpenMaps() {
        const url = `https://www.google.com/maps/search/?api=1&query=${item.coordinates.latitude},${item.coordinates.longitude}`;

        Linking.openURL(url);
    }

    function handleResumeAutoplay() {
        clearAutoplayTimeout();

        timeoutRef.current = setTimeout(() => {
            setIsInteracting(false);
        }, AUTOPLAY_RESUME_DELAY);
    }

    // Auto-advance image carousel
    useEffect(() => {
        if (isInteracting) return;

        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % item.images.length;
    
            scrollRef.current?.scrollTo({
                x: nextIndex * width,
                animated: true,
            });
        }, AUTOPLAY_DELAY);
    
        return () => clearInterval(interval);
    }, [activeIndex, isInteracting, item.images.length]);

    useEffect(() => {
        return () => {
            clearAutoplayTimeout();
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

                    // Pause autoplay while user interacts
                    onTouchStart={() => {
                        clearAutoplayTimeout();
                        setIsInteracting(true);
                    }}

                    onTouchEnd={handleResumeAutoplay}

                    onTouchCancel={handleResumeAutoplay}
                    
                    onScrollBeginDrag={() => {
                        clearAutoplayTimeout();
                        setIsInteracting(true);
                    }}

                    onScrollEndDrag={handleResumeAutoplay}

                    onMomentumScrollEnd={(e) => {
                        const index = Math.round(
                            e.nativeEvent.contentOffset.x / width
                        );
                        setActiveIndex(index);
                    }}
                >
                    {item.images.map((img, index) => (
                        <Image
                            key={index}
                            source={img.source}
                            style={styles.image}
                        />
                    ))}
                </ScrollView>

                <View style={styles.dotsContainer}>
                    {item.images.map((_, index) => (
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
                <BackButton />
            </View>

            <View style={styles.languageWrapper}>
                <LanguageButton />
            </View>

            <ScrollView 
                style={styles.scrollContainer}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >

                <AnimatedTitle
                    text={t(item.displayNameKey)}
                    style={styles.title}
                />

                <Text style={styles.location}>
                    {t(item.locationKey)}
                </Text>

                <View style={styles.infoRow}>
                    <View style={styles.badge}>
                        <Ionicons 
                            name={isExperience ? 'navigate' : 'time'} 
                            size={30} 
                            color={ACCENT_COLOR} 
                        />

                        <Text style={styles.badgeLabel}>
                            {item.showCity 
                                ? `${item.distance}\nLa Paz`
                                : item.distance
                            }
                        </Text>
                    </View>

                    {showTypeBadge && (
                        <>
                            <View style={styles.separator} />

                            <View style={styles.badge}>
                                <Ionicons 
                                    name={
                                        isExperience
                                        ? 'briefcase'
                                        : getTypeIcon(item.type)
                                    } 
                                    size={30} 
                                    color={ACCENT_COLOR}
                                />

                                <Text 
                                    style={styles.badgeLabel}
                                    numberOfLines={2}
                                >
                                    {isExperience
                                        ? t(`duration.${experienceItem?.duration === 'full_day'
                                            ? 'fullDay'
                                            : 'halfDay'}`)
                                        : t(`type.${item.type}`)}
                                </Text>
                            </View>
                        </>
                    )}
                    
                    {showHighlightBadge && (
                        <>
                            <View style={styles.separator} />

                            <View style={styles.badge}>
                                <Ionicons 
                                    name={getHighlightIcon(item.highlight.key)}
                                    size={30} 
                                    color={ACCENT_COLOR}
                                />

                                <Text 
                                    style={styles.badgeLabel}
                                    numberOfLines={2}
                                >
                                    {t(`highlight.${item.highlight.key}.${item.highlight.value}`)}
                                </Text>
                            </View>
                        </>
                    )}
                </View>

                <View style={styles.tipBox}>
                    <Ionicons 
                        name="bulb" 
                        size={20} 
                        color={ACCENT_COLOR}
                    />

                    <Text 
                        style={styles.tipText}
                        numberOfLines={1}
                    >
                        {t(item.tipKey)}
                    </Text>
                </View>

                <Pressable 
                    onPress={() => 
                        setDescriptionExpanded((prev) => !prev)
                    }
                >
                    <Text
                        style={styles.description}
                        numberOfLines={descriptionExpanded ? undefined : 3}
                    >
                        {t(item.descriptionKey)}
                    </Text>

                    <Text style={styles.expandToggle}>
                        {descriptionExpanded
                            ? t('ui.seeLess')
                            : t('ui.seeMore')}
                    </Text>
                </Pressable>

                <Pressable
                    onPress={handleOpenMaps}
                    style={({ pressed }) => [
                        styles.button,
                        {
                            backgroundColor: pressed ? '#7A283E' : ACCENT_COLOR,
                            transform: [{ scale: pressed ? 0.96 : 1 }],
                        }
                    ]}
                >
                    <Ionicons 
                        name="navigate" 
                        size={18} 
                        color="#fff" 
                    />

                    <Text style={styles.buttonText}>
                        {isExperience
                            ? t('ui.viewMeetingPoint')
                            : t('ui.getDirections')}
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
        height: HERO_HEIGHT,
    },

    carousel: {
        height: HERO_HEIGHT,
    },

    image: {
        width,
        height: '100%',
    },

    backWrapper: {
        position: 'absolute',

        top: HEADER_TOP,
        left: 10,

        zIndex: 10,
    },

    languageWrapper: {
        position: 'absolute',

        top: HEADER_TOP,
        right: 10,

        zIndex: 10,
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

        marginHorizontal: 4,

        borderRadius: 3,

        backgroundColor: 'rgba(255,255,255,0.5)',
    },

    activeDot: {
        width: 8,
        height: 8,

        backgroundColor: '#fff',
    },

    scrollContainer: {
        flex: 1,
    },

    content: {
        paddingTop: 20,
        paddingBottom: 30,
        paddingHorizontal: 20,
        
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,

        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: -4 },
    },

    title: {
        marginTop: -10,
        marginBottom: 2,

        color: '#111',

        fontSize: height * 0.0465,
        fontFamily: 'PlayfairRegular',

        letterSpacing: 0.3,
    },

    location: {
        marginBottom: 20,

        color: '#111',

        fontSize: 17,
        fontFamily: 'InterRegular',
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginBottom: 15,
    },

    badge: {
        width: '30%',

        alignItems: 'center',
    },

    badgeLabel: {
        marginTop: 6,

        color: '#111',

        fontSize: 17,
        fontFamily: 'InterRegular',

        textAlign: 'center',
        flexWrap: 'wrap',
    },

    separator: {
        width: 1,

        marginHorizontal: 6,

        alignSelf: 'stretch',

        backgroundColor: '#E5E7EB',
    },

    tipBox: {
        flexDirection: 'row',
        alignItems: 'center',

        gap: 10,
        
        marginBottom: 15,
        padding: 14,

        borderRadius: 16,

        backgroundColor: '#E6C79C',
    },

    tipText: {
        flex: 1,

        color: '#fff',

        fontSize: 16,
        lineHeight: 22,

        fontFamily: 'InterMedium',
    },

    description: {
        marginBottom: 6,

        color: '#111',

        fontSize: 16,
        lineHeight: 24,

        fontFamily: 'InterRegular',
    },

    expandToggle: {
        marginBottom: 20,

        color: ACCENT_COLOR,

        fontSize: 14,
        fontFamily: 'InterMedium',
    },

    button: {
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'center',

        gap: 8,

        height: 52,

        backgroundColor: ACCENT_COLOR,
        borderRadius: 999,
    },
    
    buttonText: {
        color: '#fff',

        fontSize: 20,
        fontFamily: 'InterSemiBold',
    },
});