import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Dimensions, StyleSheet, View } from 'react-native';

import Hero from '../components/Hero';
import PlaceTypeCard from '../components/PlaceTypeCard';
import { useT } from '../translations';
import { RootStackParamList } from '../types/navigation';

const { height } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PlaceType'>;

export default function PlaceTypeScreen() {
    const navigation = useNavigation<NavigationProp>();
    const t = useT();

    return (
        <View style={styles.container}>

            <Hero
                image={require('../../assets/images/beaches/hero/6.jpg')}
                title={t('ui.placeType.title')}
                subtitle="La Paz, Baja California Sur"
                showOverlay={false}
            />

            <View style={styles.grid}>

                <View style={styles.row}>
                    <PlaceTypeCard
                        titleKey="ui.placeType.beaches"
                        subtitleKey="ui.placeType.beachesDesc"
                        image={require('../../assets/images/beaches/hero/1.jpg')}
                        onPress={() =>
                            navigation.navigate('Categories', { placeType: 'beaches' })
                        }
                    />

                    <PlaceTypeCard
                        titleKey="ui.placeType.museums"
                        subtitleKey="ui.placeType.museumsDesc"
                        image={require('../../assets/images/museums/hero/1.jpg')}
                        onPress={() =>
                            navigation.navigate('Places', { placeType: 'museums' })
                        }
                    />
                    
                </View>

                <View style={styles.row}>

                    <PlaceTypeCard
                            titleKey="ui.placeType.viewpoints"
                            subtitleKey="ui.placeType.viewpointsDesc"
                            image={require('../../assets/images/viewpoints/hero/3.jpg')}
                            onPress={() =>
                                navigation.navigate('Places', { placeType: 'viewpoints' })
                            }
                        />

                        <View style={[styles.emptyCard, { opacity: 0 }]} />

                </View>

            </View>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    heroContent: {
        alignItems: 'center',
    },
    heroTitle: {
        color: '#fff',
        fontSize: 48,
        fontFamily: 'PlayfairBold',
        textAlign: 'center',
    },
    heroLocation: {
        color: 'rgba(255,255,255,0.85)',
        fontSize: 17,
        fontFamily: 'InterMedium',
        marginTop: 6,
    },
    grid: {
        paddingHorizontal: 12,
        paddingTop: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    emptyCard: {
        width: '48%',
        height: height * 0.29,
    },
})