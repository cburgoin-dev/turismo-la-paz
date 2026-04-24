import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text } from 'react-native';

import PlaceCard from '../components/PlaceCard';
import { beaches } from '../data/beaches';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Recommendations'>;

type RouteProps = RouteProp<RootStackParamList, 'Recommendations'>

export default function RecommendationsScreen() {
    const route = useRoute<RouteProps>();
    const { category } = route.params;
    const primary = beaches.filter(
        (b) => b.categories[0] === category
    );
    const secondary = beaches.filter(
        (b) =>
            b.categories.includes(category) && b.categories[0] !== category
    );
    const sortedBeaches = [...primary, ...secondary];
    const navigation = useNavigation<NavigationProp>();

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>
                Showing {category} beaches
            </Text>

            {sortedBeaches.map((beach) => (
                <PlaceCard
                    key={beach.id}
                    beach={beach}
                    onPress={() => navigation.navigate('Detail', { beach })}
                />
            ))}
        </ScrollView>
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