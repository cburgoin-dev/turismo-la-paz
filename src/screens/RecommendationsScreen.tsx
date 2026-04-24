import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { beaches } from '../data/beaches';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Recommendations'>;

type RouteProps = RouteProp<RootStackParamList, 'Recommendations'>

export default function RecommendationsScreen() {
    const route = useRoute<RouteProps>();
    const { category } = route.params;
    const filteredBeaches = beaches.filter(
        (beach) => beach.category === category
    );
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Showing {category} beaches
            </Text>

            {filteredBeaches.map((beach) => (
                <TouchableOpacity
                    key={beach.id}
                    style={styles.card}
                    onPress={() => navigation.navigate('Detail', { beach })}
                >
                    <Image source={beach.images[0] } style={styles.image} />
                    
                    <View style={styles.overlay}>
                        <Text style={styles.name}>{beach.name}</Text>
                        <Text style={styles.description}>{beach.description}</Text>
                        <Text style={styles.cta}>See details</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F5F7FA',
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 12,
        color: '#111',
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
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 12,
        backgroundColor: 'rgba(0,0,0,0.45)',
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