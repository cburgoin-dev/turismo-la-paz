import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Hero() {
    return (
        <ImageBackground
            source={{
                uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
            }}
            style={styles.container}
        >
            <View style={styles.overlay}>
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
        height: 320,
        justifyContent: 'flex-end',
    },
    overlay: {
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.35)',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        marginTop: 6,
    },
})