import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

import Hero from '../components/Hero';
import PlaceTypeCard from '../components/PlaceTypeCard';
import { PLACE_TYPES } from '../config/placeTypes';
import { PLACE_TYPE_SCREEN } from '../config/uiConfig';
import { useT } from '../translations';
import { RootStackParamList } from '../types/navigation';

const { height } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PlaceType'>;

export default function PlaceTypeScreen() {
    const navigation = useNavigation<NavigationProp>();

    const t = useT();

    const rows = PLACE_TYPES.reduce<(typeof PLACE_TYPES[number] | null)[][]>(
        (acc, item, i) => {
            if (i % 2 === 0) acc.push([item]);
            else acc[acc.length - 1].push(item);
            return acc;
        },
        []
    ).map((row) => (row.length === 1 ? [...row, null] : row));

    return (
        <View style={styles.container}>

            <Hero
                image={PLACE_TYPE_SCREEN.hero}
                title={t('ui.placeType.title')}
                subtitle="La Paz, Baja California Sur"
                showOverlay={false}
            />

            <FlatList
                data={rows}
                keyExtractor={(_, index) => String(index)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.grid}
                renderItem={({ item: pair }) => (
                    <View style={styles.row}>
                        {pair.map((placeType, i) =>
                            placeType ? (
                                <View key={placeType.key} style={styles.cardWrapper}>
                                    <PlaceTypeCard
                                        titleKey={placeType.titleKey}
                                        subtitleKey={placeType.subtitleKey}
                                        image={placeType.image.source}
                                        onPress={() =>
                                            navigation.navigate(
                                                placeType.route,
                                                placeType.params
                                            )
                                        }
                                    />
                                </View>
                            ) : (
                                <View key={`empty-${i}`} style={styles.cardWrapper} />
                            )
                        )}
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
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
    cardWrapper: {
        width: '48%',
        height: height * 0.29,
    },
    emptyCard: {
        width: '48%',
        height: height * 0.29,
    },
})