import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DetailScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    
    const { beach } = route.params as any;

    const openMaps = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${beach.coordinates.latitude},${beach.coordinates.longitude}`;
        Linking.openURL(url);
    }

    return (
        <View style={styles.container}>
            <View style={styles.hero}>
                <Image source={{ uri: beach.image }} style={styles.image} />
            </View>

            <View style={styles.backWrapper}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={30} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Playa {beach.name}</Text>

                <Text style={styles.location}>{beach.location}</Text>

                <View style={styles.infoRow}>
                    <View style={styles.badge}>
                        <Ionicons name="time" size={30} color= "#3FA7A3" />
                        <Text style={styles.badgeLabel}>{beach.distance}</Text>
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.badge}>
                        <Ionicons name="partly-sunny" size={30} color="#3FA7A3" />
                        <Text style={styles.badgeLabel}>{beach.type}</Text>
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.badge}>
                        <Ionicons name="car" size={30} color="#3FA7A3" />
                        <Text style={styles.badgeLabel}>{beach.parking}</Text>
                    </View>
                </View>

                <View style={styles.tipBox}>
                    <Ionicons name="sparkles" size={20} color="#A15B1D" />
                    <Text style={styles.tipText}>{beach.tip}</Text>
                </View>

                <Text style={styles.description}>{beach.description}</Text>

                <Text style={styles.mapLink}>
                    Open route in Google Maps
                </Text>

                <TouchableOpacity style={styles.button} onPress={openMaps}>
                    <Text style={styles.buttonText}>Get Directions</Text>
                </TouchableOpacity>
            </View>

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
        top: 15,
        left: 10,
        zIndex: 10,

        elevation: 20,
    },
    title: {
        fontSize: 40,
        fontFamily: 'PlayfairRegular',
        color: '#111',
        marginTop: -10,
        letterSpacing: 0.3,
    },
    location: {
        fontSize: 18,
        fontFamily: 'InterRegular',
        color: '#111',
        marginBottom: 18,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 15,

        backgroundColor: 'rgba(255,255,255,0.4)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.8)',

        justifyContent: 'center',
        alignItems: 'center',
    },
    backText: {
        color: '#fff',
        fontSize: 16,
    },
    content: {
        paddingHorizontal: 20,
        paddingTop: 20,
        
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: -4 },

        backgroundColor: '#F5F7FA',
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
    badgeText: {
        fontSize: 28,
    },
    badgeLabel: {
        fontSize: 17,
        fontFamily: 'InterRegular',
        color: '#111',
        marginTop: 6,
        textAlign: 'center',
        width: 70,
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
        marginBottom: 20,
    },
    mapLink: {
        color: '#111',
        fontSize: 15,
        fontFamily: 'InterRegular',
        textAlign: 'center',
        marginBottom: 6,
    },
    button: {
        backgroundColor: '#2D8C8A',
        height: 52,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'InterMedium',
        fontWeight: '600',
        fontSize: 22,
    },
});