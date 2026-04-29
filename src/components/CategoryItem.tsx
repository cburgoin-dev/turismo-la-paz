import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { t } from '../translations';

type CategoryKey = 'relax' | 'family' | 'social' | 'adventure';

type Props = {
    category: CategoryKey;
    onPress?: () => void;
};

const CATEGORY_STYLES: Record<CategoryKey, {
    bg: string;
    border: string;
    icon: string;
    cardBg: string;
}> = {
    relax: {
        bg: 'rgba(88,170,165,0.15)',
        border: 'rgba(88,170,165,0.35)',
        icon: '#58AAA5',
        cardBg: 'rgba(88,170,165,0.06)',
    },
    family: {
        bg: 'rgba(214,185,141,0.25)',
        border: 'rgba(214,185,141,0.5)',
        icon: '#B89B6B',
        cardBg: 'rgba(214,185,141,0.12)',
    },
    social: {
        bg: 'rgba(143,47,74,0.12)',
        border: 'rgba(143,47,74,0.3)',
        icon: '#8F2F4A',
        cardBg: 'rgba(143,47,74,0.05)',
    },
    adventure: {
        bg: 'rgba(28,100,120,0.18)',
        border: 'rgba(28,100,120,0.45)',
        icon: '#1C6478',
        cardBg: 'rgba(28,100,120,0.07)',
    },
};

const PRIMARY = '#C44569';
const PRIMARY_SOFT = 'rgba(196,69,105,0.16)';
const PRIMARY_BORDER = 'rgba(196,69,105,0.55)';
const PRIMARY_TEXT = '#9F2F50';

function getIcon(category: CategoryKey) {

    switch (category) {
        case 'relax':
            return 'leaf';
        case 'family':
            return 'people'
        case 'social':
            return 'wine';
        case 'adventure':
            return 'compass';
        default:
            return 'leaf';
    }
}

export default function CategoryItem({ category, onPress }: Props) {
    const style = CATEGORY_STYLES[category];

    return (
        <Pressable
            onPress={onPress} 
            style={({ pressed}) => [
                styles.card,
                {
                    backgroundColor: pressed
                        ? style.bg
                        : style.cardBg,
                    transform: [{ scale: pressed ? 0.98 : 1}],
                }
            ]}
        >

            <View 
                style={[
                    styles.iconContainer,
                    {
                        backgroundColor: style.bg,
                        borderColor: style.border,
                    }
                ]}
            >
                <Ionicons 
                    name={getIcon(category)}
                    size={32}
                    color={style.icon}
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {t(`ui.categoryDescription.${category}`)}
                </Text>

                <Text style={styles.subtitle} numberOfLines={2}>
                    {t(`ui.categorySubtitle.${category}`)}
                </Text>
            </View>

        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 16,
        
        marginBottom: 12,
        borderWidth: 1.2,
        borderColor: '#6B7280',
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 16,

        backgroundColor: 'rgba(143,47,74,0.12)',
        borderWidth: 1,
        borderColor: 'rgba(143,47,74,0.25)',

        justifyContent: 'center',
        alignItems: 'center',

        marginRight: 14,
    },
    textContainer: {
        flex: 1,
    },
    icon: {
        fontSize: 22,
    },
    iconImage: {
        width: 32,
        height: 32,
    },
    iconLabel: {
        fontSize: 12,
        marginTop: 4,
        color: PRIMARY_TEXT,
        fontFamily: 'InterSemiBold',
        textAlign: 'center'
    },
    textBlock: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontFamily: 'InterSemiBold',
        color: '#1F2937',
        flexShrink: 1,
    },
    subtitle: {
        fontSize: 13.5,
        fontFamily: 'InterRegular',
        color: '#374151',
        marginTop: 4,
    },
});