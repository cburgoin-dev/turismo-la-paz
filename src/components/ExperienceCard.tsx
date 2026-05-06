import { Ionicons } from '@expo/vector-icons';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useT } from '../translations';
import { PlaceWithDistance } from '../types/navigation';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

type Props = {
    place: PlaceWithDistance;
    onPress: () => void;
};

export default function ExperienceCard({ place, onPress }: Props) {
    const t = useT();

    return (
        <TouchableOpacity
            style={styles.card} 
            onPress={onPress} 
            activeOpacity={0.85}
        >

            <Image
                source={place.images[0].source}
                style={styles.image}
                resizeMode="cover"
                fadeDuration={0}
            />

            <View style={styles.content}>

                <Text style={styles.title} numberOfLines={2}>
                    {t(place.displayNameKey)}
                </Text>

                <View style={[
                    styles.badge,
                    { backgroundColor: place.durationColor}
                ]}>
                    <Text style={styles.badgeText}>
                        {place.duration === 'full_day'
                            ? t('duration.fullDay')
                            : t('duration.halfDay')}
                    </Text>
                </View>

                <View style={styles.distanceRow}>
                    <Ionicons name="time" size={16} color="#555" />
                    <Text style={styles.distance}>{place.distance}</Text>
                </View>

                <View style={styles.tagsContainer}>
                    {place.tags.slice(0, 3).map((tag, i) => (
                        <View key={i} style={styles.tag}>
                            <Text style={styles.tagText}>
                                {t(`tag.${tag}`)}
                            </Text>
                        </View>
                    ))}
                </View>

            </View>
        
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        height: height * 0.18 ,
        marginBottom: 16,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#fff',

        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3},
        elevation: 3,
    },
    image: {
        width: width * 0.35 ,
        height: '100%',
    },
    content: {
        flex: 1,
        padding: 12,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontFamily: 'InterSemiBold',
        color: '#111',
        lineHeight: 20,
        minHeight: 40,
    },
    badge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 8,
        marginTop: 4,
    },
    badgeText: {
        fontSize: 12,
        fontFamily: 'InterSemiBold',
        color: '#fff',
    },
    distanceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 6,
    },
    distance: {
        fontSize: 13,
        color: '#555',
        fontFamily: 'InterRegular',
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginTop: 6,
    },
    tag: {
        backgroundColor: '#EEE',
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 8,
        maxWidth: '100%',
    },
    tagText: {
        fontSize: 12,
        color: '#333',
        fontFamily: 'InterMedium',
        flexShrink: 1,
    },
});