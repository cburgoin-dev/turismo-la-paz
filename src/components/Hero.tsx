import { Dimensions, ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

const { height } = Dimensions.get('window');

type Props = {
    image: ImageSourcePropType;
    title: string;
    subtitle?: string;
    showOverlay?: boolean;
}

export default function Hero({
    image,
    title,
    subtitle,
    showOverlay = false,
}: Props) {
    return (
        <ImageBackground
            source={image}
            style={styles.hero}
        >
            {showOverlay && <View style={styles.overlay} />}

            <View style={styles.content}>
                <Text style={styles.title}>
                    {title}
                </Text>

                {subtitle && (
                    <Text style={styles.subtitle}>
                        {subtitle}
                    </Text>
                )}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    hero: {
        height: height * 0.37,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    content: {
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: height * 0.0605,
        fontFamily: 'PlayfairBold',
        textAlign: 'center',
    },
    subtitle: {
        color: '#fff',
        fontSize: height * 0.0215,
        fontFamily: 'InterMedium',
        marginTop: 6,
    },
});