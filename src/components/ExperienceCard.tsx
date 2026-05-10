import { Ionicons } from '@expo/vector-icons';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { useT } from '../translations';
import { ExperienceItemWithDistance } from '../types/item';

const { height, width } = Dimensions.get('window');

type Props = {
    item: ExperienceItemWithDistance;
    onPress: () => void;
};

export default function ExperienceCard({ 
    item, 
    onPress,
}: Props) {
    const t = useT();

    return (
        <TouchableOpacity
            style={styles.card} 
            onPress={onPress} 
            activeOpacity={0.85}
        >

            <Image
                source={item.images[0].source}
                style={styles.image}
                resizeMode="cover"
                fadeDuration={0}
            />

            <View style={styles.content}>
                <Text 
                    style={styles.title} 
                    numberOfLines={2}
                >
                    {t(item.displayNameKey)}
                </Text>

                <View 
                    style={[
                        styles.badge,
                        { 
                            backgroundColor: item.durationColor,
                        }
                    ]}
                >
                    <Text style={styles.badgeText}>
                        {item.duration === 'full_day'
                            ? t('duration.fullDay')
                            : t('duration.halfDay')}
                    </Text>
                </View>

                <View style={styles.distanceRow}>
                    <Ionicons 
                        name="navigate" 
                        size={16} 
                        color="#555" 
                    />

                    <Text style={styles.distance}>
                        {item.distance}
                    </Text>
                </View>

                <View style={styles.tagsContainer}>
                    {item.tags.slice(0, 3).map((tag) => (
                        <View 
                            key={tag} 
                            style={styles.tag}
                        >
                            <Text style={styles.tagText}>
                                {t(`tag.${tag}`)}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
    
        </TouchableOpacity>
    );
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
        justifyContent: 'space-between',

        padding: 12,
    },

    title: {
        minHeight: 40,
        
        color: '#111',
        lineHeight: 20,
        fontSize: 16,
        fontFamily: 'InterSemiBold',
    },

    badge: {
        alignSelf: 'flex-start',

        marginTop: 4,

        paddingHorizontal: 8,
        paddingVertical: 3,

        borderRadius: 8,
    },

    badgeText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'InterSemiBold',
    },

    distanceRow: {
        flexDirection: 'row',
        alignItems: 'center',

        gap: 4,
        marginTop: 6,
    },

    distance: {
        color: '#555',
        fontSize: 13,
        fontFamily: 'InterRegular',
    },

    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',

        gap: 6,
        marginTop: 6,
    },

    tag: {
        maxWidth: '100%',

        marginBottom: 6,
        
        paddingHorizontal: 6,
        paddingVertical: 3,

        borderRadius: 8,

        backgroundColor: '#EEE',
    },
    
    tagText: {
        flexShrink: 1,

        color: '#333',
        fontSize: 12,
        fontFamily: 'InterMedium',
    },
});