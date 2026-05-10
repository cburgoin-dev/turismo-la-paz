import { Ionicons } from '@expo/vector-icons';
import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { useT } from '../translations';
import { ItemWithDistance } from '../types/item';

const { height } = Dimensions.get('window');

type Props = {
    item: ItemWithDistance;
    onPress: () => void;
};

export default function PlaceCard({ 
    item, 
    onPress,
}: Props) {
    const t = useT();

    return (
        <TouchableOpacity 
            style={styles.card} 
            activeOpacity={0.88} 
            onPress={onPress}
        >

            <ImageBackground
                source={item.images[0].source}
                resizeMode="cover"
                fadeDuration={0}
                style={[
                    styles.image,
                    styles.imagePlaceholder,
                ]}
                imageStyle={styles.imageRadius}
            >
                <View style={styles.overlay} />

                <View style={styles.topLeft}>
                    <Text style={styles.title}>
                        {t(item.displayNameKey)}
                    </Text>
                    
                    <View style={styles.distanceRow}>
                        <Ionicons 
                        name="time" 
                        size={18} 
                        color="rgba(255,255,255,0.9)" 
                    />
                        <Text style={styles.distance}>
                            {item.distance}
                        </Text>
                    </View>
                </View>

                <View style={styles.bottomBlock}>
                    <View style={styles.tagsContainer}>
                        {item.tags
                            .slice(0, 3)
                            .map((tag) => (
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

                    {item.quickTipKey && (
                        <View
                            style={[
                                styles.tipContainer,
                                {
                                    backgroundColor:
                                        item.quickTipColor ??
                                        'rgba(0,0,0,0.45)',
                                },
                            ]}
                        >
                            <Text style={styles.tipText}>
                                <Text style={styles.tipLabel}>
                                    {t('ui.quickTip')}:
                                </Text>{' '}
                                
                                {t(item.quickTipKey)}
                            </Text>
                        </View>
                    )}
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        height: height * 0.3035,
        marginBottom: 16,

        borderRadius: 16,
        overflow: 'hidden',

        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
    },

    image: {
        flex: 1,
        justifyContent: 'space-between',

        padding: 16,
    },

    imagePlaceholder: {
        backgroundColor: '#CFCFCF',
    },

    imageRadius: {
        borderRadius: 16,
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.25)',
    },

    topLeft: {
        position: 'absolute',
        top: 12,
        left: 16,
    },

    title: {
        color: '#fff',
        fontSize: height * 0.035,
        fontFamily: 'InterMedium',
    },

    distanceRow: {
        flexDirection: 'row',
        alignItems: 'center',

        gap: 6,
        marginTop: 2,
    },

    distance: {
        color: '#fff',
        fontSize: height * 0.0226,
        fontFamily: 'InterRegular',
    },

    bottomBlock: {
        position: 'absolute',
        right: 12,
        bottom: 10,
        left: 12,
    },

    tagsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',

        gap: 6,
        marginBottom: 8,
    },

    tag: {
        paddingHorizontal: 8,
        paddingVertical: 4,

        borderRadius: 10,

        backgroundColor: 'rgba(255,255,255,0.78)',
    },

    tagText: {
        flexShrink: 1,

        color: '#111',
        fontSize: 13,
        fontFamily: 'InterSemiBold',
    },

    tipContainer: {
        padding: 10,

        borderRadius: 12,

        backgroundColor: 'rgba(193,165,126,0.9)',
    },

    tipLabel: {
        fontFamily: 'InterBold',
    },

    tipText: {
        color: '#fff',
        fontSize: 13,
        lineHeight: 18,
        fontFamily: 'InterRegular',
    },
});