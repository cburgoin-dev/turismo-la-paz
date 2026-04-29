import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

import { useT } from '../translations';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PlaceType'>;

export default function PlaceTypeScreen() {
    const navigation = useNavigation<NavigationProp>();
    const t = useT();

    return (
        <View style={styles.container}>

            <ImageBackground
                source={require('../../assets/images/beaches/hero/5.jpg')}
                style={styles.hero}
                imageStyle={styles.heroImage}
            >
                <View style={styles.overlay} />
                <Text style={styles.heroTitle}>
                    Choose what to explore
                </Text>
            </ImageBackground>

            <View style={styles.content}>

                <Pressable
                    style={styles.card}
                    onPress={() => navigation.navigate('Categories')}
                >
                    <ImageBackground
                        source={require('../../assets/images/beaches/hero/1.jpg')}
                        style={styles.cardImage}
                        imageStyle={styles.cardRadius}
                    >
                        <View style={styles.cardOverlay} />

                        <View style={styles.cardText}>
                            <Text style={styles.cardTitle}>
                                {t('ui.placeType.beaches') || 'Beaches'}
                            </Text>

                            <Text style={styles.cardSubtitle}>
                                {t('ui.placeType.beachesDesc') || 'Clear waters & soft sand'}
                            </Text>
                        </View>
                    </ImageBackground>
                </Pressable>
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
        height: 220,
        justifyContent: 'flex-end',
        padding: 20,
    },
    heroImage: {
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.35)'
    },
    heroTitle: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'PlayfairBold',
    },
    content: {
        padding: 16,
    },
    card: {
        height: 180,
        borderRadius: 20,
        overflow: 'hidden',
    },
    cardImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    cardRadius: {
        borderRadius: 20,
    },
    cardOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    cardText: {
        padding: 16,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'InterSemiBold',
    },
    cardSubtitle: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 14,
        marginTop: 4,
    }
})