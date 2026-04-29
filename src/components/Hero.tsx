import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useT } from '../translations';
import { PLACE_TYPE_ASSETS } from '../utils/placeTypeAssets';

type PlaceType = 'beaches' | 'museums' | 'viewpoints';

type Props = {
    placeType: PlaceType;
    showLocation?: boolean;
};

export default function Hero({ placeType, showLocation }: Props) {
    const t = useT();

    return (
        <ImageBackground
            source={PLACE_TYPE_ASSETS[placeType].hero}
            style={styles.container}
        >
            <View style={styles.centerContent}>
                <Text style={styles.title}>
                    {t(`ui.hero.title.${placeType}`)}
                </Text>

                {showLocation && (
                    <Text style={styles.subtitle}>
                        {t(`ui.hero.location`)}
                    </Text>
                )}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 360,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
    },
    image: {
   
    },
    centerContent: {
        alignItems: 'center',
        marginTop: -30,
    },
    title: {
        fontSize: 48,
        fontFamily: 'PlayfairBold',
        color: '#fff',
        textAlign: 'center',
        maxWidth: 300,

        textShadowColor: 'rgba(0,0,0,0.4)',
        textShadowOffset: { width: 0, height: 2},
        textShadowRadius: 6,
    },
    subtitle: {
        fontSize: 17,
        color: '#fff',
        marginTop: 6,
        fontFamily: 'InterMedium',

        textShadowColor: 'rgba(0,0,0,0.4)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 4,
    },
})