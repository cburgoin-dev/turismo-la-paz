import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { CATEGORY_CONFIG } from '../config/categoryConfig';
import { useT } from '../translations';

type CategoryKey = 'relax' | 'family' | 'social' | 'adventure';

type Props = {
    category: CategoryKey;
    onPress?: () => void;
};

export default function CategoryItem({ category, onPress }: Props) {
    const t = useT();

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.card,
                {
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                    opacity: pressed ? 0.85 : 1,
                },
            ]}
        >
            <ImageBackground
                source={CATEGORY_CONFIG[category].image.source}
                style={styles.image}
                imageStyle={styles.imageRadius}
            >
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.6)']}
                    locations={[0.55, 1]}
                    style={styles.overlay}
                />
    
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        {t(`ui.category.${category}`)}
                    </Text>
    
                    <Text style={styles.subtitle} numberOfLines={2}>
                        {t(`ui.categoryDescription.${category}`)}
                    </Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
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
        justifyContent: 'flex-end',
    },
    imageRadius: {
        borderRadius: 16,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    textContainer: {
        padding: 12,
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'InterSemiBold',
    },
    subtitle: {
        color: '#FFF',
        fontSize: 14,
        marginTop: 2,
        lineHeight: 18,

        height: 36,
        textAlignVertical: 'top',
    },
});