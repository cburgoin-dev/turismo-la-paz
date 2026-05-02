import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';

import BackButton from '../components/BackButton';
import PlaceCard from '../components/PlaceCard';
import { CATEGORY_CONFIG } from '../config/categoryConfig';
import { PLACE_TYPES } from '../config/placeTypes';
import { usePlaces } from '../hooks/usePlaces';
import { useT } from '../translations';
import { RootStackParamList } from '../types/navigation';

const { height } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Recommendations'>;

type RouteProps = RouteProp<RootStackParamList, 'Recommendations'>

export default function RecommendationsScreen() {
    const navigation = useNavigation<NavigationProp>();
    
    const route = useRoute<RouteProps>();

    const { category, placeType } = route.params;

    const t = useT();

    const config = PLACE_TYPES.find(p => p.key === placeType);

    const heroImage =
        CATEGORY_CONFIG[category].image.source ??
        config?.image.source;

    const { places } = usePlaces(placeType);

    const filteredPlaces = places.filter(p => 
        p.categories.includes(category)
    );

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

                                <View style={styles.backWrapper}>
                                    <BackButton />
                                </View>

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
        paddingHorizontal: 16,
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