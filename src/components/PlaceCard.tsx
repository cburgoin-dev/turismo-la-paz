import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { t } from '../translations';
import { PlaceWithDistance } from '../types/navigation';

type Props = {
    place: PlaceWithDistance;
    onPress: () => void;
};

export default function PlaceCard({ place, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>

            <ImageBackground
                source={place.images[0].source}
                style={styles.image}
                imageStyle={styles.imageRadius}
            >
                <View style={styles.overlay} />

                <View style={styles.topLeft}>
                    <Text style={styles.title}>
                        {t(place.displayNameKey)}
                    </Text>
                    <Text style={styles.distance}>{place.distance}</Text>
                </View>

                <View style={styles.bottomBlock}>
                    
                    <View style={styles.tagsContainer}>
                        {(place.tags).slice(0, 3).map((tag: string, index: number) => (
                            <View key={index} style={styles.tag}>
                                <Text style={styles.tagText}>{t(`tag.${tag}`)}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={[
                        styles.tipContainer,
                        { backgroundColor: place.quickTipColor || 'rgba(0,0,0,0.45)' }
                    ]}>
                        <Text style={styles.tipText}>
                            <Text style={styles.tipLabel}>{t('ui.quickTip')}: </Text>
                            {t(place.quickTipKey)}
                        </Text>
                    </View>

                </View>

            </ImageBackground>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 240,
        marginBottom: 16,
        borderRadius: 16,
        overflow: 'hidden',
    },

    image: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 16,
    },
    imageRadius: {
        borderRadius: 20,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    topLeft: {
        position: 'absolute',
        top: 8,
        left: 16,
    },
    title: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'InterMedium',
    },
    distance: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'InterRegular',
    },
    bottomBlock: {
        position: 'absolute',
        left: 12,
        right: 12,
        bottom: 10,
    },
    tagsContainer: {
        flexDirection: 'row',
        gap: 6,
        marginBottom: 8,
        justifyContent: 'flex-end',
    },
    tag: {
        backgroundColor: 'rgba(255,255,255,0.78)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
    },
    tagText: {
        fontSize: 13,
        color: '#111',
        fontFamily: 'InterSemiBold',
        flexShrink: 1,
    },
    tipContainer: {
        backgroundColor: 'rgba(193,165,126,0.9)',
        padding: 10,
        borderRadius: 12,
    },
    tipLabel: {
        fontFamily: 'InterBold',
    },
    tipText: {
        color: '#fff',
        fontSize: 13,
        fontFamily: 'InterRegular',
        lineHeight: 18,
    },
});