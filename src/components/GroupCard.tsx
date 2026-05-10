import { LinearGradient } from 'expo-linear-gradient';
import {
    ImageBackground,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { useT } from '../translations';

type Props = {
    titleKey: string;
    subtitleKey: string;
    image: ImageSourcePropType;
    onPress: () => void;
};

export default function GroupCard({
    titleKey,
    subtitleKey,
    image,
    onPress,
}: Props) {
    const t = useT();

    return (
        <TouchableOpacity 
            style={styles.card} 
            activeOpacity={0.85} 
            onPress={onPress}
        >
            <ImageBackground
                source={image}
                style={styles.cardImage}
                imageStyle={styles.cardRadius}
            >
                <LinearGradient
                    colors={[
                        'transparent', 
                        'rgba(0,0,0,0.7)'
                    ]}
                    locations={[0.55, 1]}
                    style={styles.overlay}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        {t(titleKey)}
                    </Text>

                    <Text 
                        style={styles.subtitle} 
                        numberOfLines={2}
                    >
                        {t(subtitleKey)}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,

        borderRadius: 20,
        overflow: 'hidden',

        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
    },

    cardImage: {
        flex: 1,
    },

    cardRadius: {
        borderRadius: 20,
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
    },

    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',

        padding: 12,
    },

    title: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'InterMedium',
    },

    subtitle: {
        height: 36,

        marginTop: 2,

        color: '#fff',
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'InterRegular',

        textAlignVertical: 'top',
    },
});