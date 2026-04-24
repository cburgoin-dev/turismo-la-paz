import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    beach: any;
    onPress: () => void;
};

export default function PlaceCard({ beach, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>

            <ImageBackground
                source={beach.images[0]}
                style={styles.image}
                imageStyle={styles.imageRadius}
            >
                <View style={styles.overlay} />

                <View style={styles.topLeft}>
                    <Text style={styles.title}>Playa {beach.name}</Text>
                    <Text style={styles.distance}>{beach.distance}</Text>
                </View>

                <View style={styles.bottomBlock}>
                    
                    <View style={styles.tagsContainer}>
                        {(beach.tags).slice(0, 3).map((tag: string, index: number) => (
                            <View key={index} style={styles.tag}>
                                <Text style={styles.tagText}>{tag}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={[
                        styles.tipContainer,
                        { backgroundColor: beach.quickTipColor || 'rgba(0,0,0,0.45)' }
                    ]}>
                        <Text style={styles.tipText}>
                            <Text style={styles.tipLabel}>Quick Tip: </Text>
                            {beach.quickTip || beach.tip}
                        </Text>
                    </View>

                </View>

            </ImageBackground>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 220,
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
        backgroundColor: 'rgba(0,0,0,0.25)',
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