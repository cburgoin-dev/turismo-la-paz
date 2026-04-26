import { ImageBackground, StyleSheet, Text, View } from 'react-native';

type Props = {
    placeType: string;
};

function getHeroImage(type: string) {
    switch (type) {
        case 'beaches':
            return require('../../assets/images/beaches/hero/4.jpg')
        default:
            return require('../../assets/images/beaches/hero/4.jpg')
    }
}

export default function Hero({ placeType }: Props) {
    return (
        <ImageBackground
            source={getHeroImage(placeType)}
            style={styles.container}
            imageStyle={styles.image}
        >
            <View style={styles.centerContent}>
                <Text style={styles.title}>Find your perfect place</Text>
                <Text style={styles.subtitle}>
                    La Paz, Baja California Sur
                </Text>
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
        marginTop: -40,
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