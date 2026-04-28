import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
    return (
        <ImageBackground
            source={require('../../assets/images/beaches/hero/1.jpg')}
            style={styles.container}
        >
            <View style={styles.overlay} />

            <View style={styles.content}>

                <Text style={styles.title}>
                    Explore La Paz
                </Text>

                <Text style={styles.subtitle}>
                    Discover beaches, culture and more
                </Text>

                <View style={styles.languageContainer}>
                    <TouchableOpacity style={styles.languageButtonActive}>
                        <Text style={styles.languageTextActive}>English</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.languageButton}>
                        <Text style={styles.languageText}>Español</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueText}>
                        Continue
                    </Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.35)',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 42,
        fontFamily: 'PlayfairBold',
        color: '#fff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#E5E7EB',
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'InterMedium',
    },
    languageContainer: {
        flexDirection: 'row',
        marginTop: 40,
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 999,
        padding: 4,
    },
    languageButton: {
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 999,
    },
    languageButtonActive: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 999
    },
    languageText: {
        color: '#fff',
        fontFamily: 'InterMedium',
    },
    languageTextActive: {
        color: '#111',
        fontFamily: 'InterSemiBold',
    },
    continueButton: {
        marginTop: 30,
        backgroundColor: '#D6B98C',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 999,
    },
    continueText: {
        color: '#111',
        fontSize: 16,
        fontFamily: 'InterSemiBold',
    },
});