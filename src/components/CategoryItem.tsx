import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { t } from '../translations';

type CategoryKey = 'relax' | 'family' | 'social' | 'adventure';

type Props = {
    category: CategoryKey;
    onPress?: () => void;
};

const PRIMARY = '#C44569';
const PRIMARY_SOFT = 'rgba(196,69,105,0.16)';
const PRIMARY_BORDER = 'rgba(196,69,105,0.55)';
const PRIMARY_TEXT = '#9F2F50';

function getIcon(category: CategoryKey) {

    switch (category) {
        case 'relax':
            return require('../../assets/icons/relax.png');
        case 'family':
            return require('../../assets/icons/family.png');
        case 'social':
            return require('../../assets/icons/social.png');
        case 'adventure':
            return require('../../assets/icons/adventure.png');
        default:
            return require('../../assets/icons/relax.png');
    }
}

export default function CategoryItem({ category, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
            <View style={styles.iconBox}>
                <Image
                    source={getIcon(category)}
                    style={styles.iconImage}
                    resizeMode="contain"
                />
                <Text style={styles.iconLabel}>
                    {t(`ui.category.${category}`)}
                </Text>
            </View>

            <View style={styles.textBlock}>
                <Text style={styles.title}>
                    {t(`ui.categoryDescription.${category}`)}
                </Text>

                <Text 
                    style={styles.subtitle}
                    numberOfLines={2}
                >
                    {t(`ui.categorySubtitle.${category}`)}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 16,
        marginBottom: 10,
        borderWidth: 1.5,
        borderColor: PRIMARY_BORDER,
    },
    iconBox: {
        width: 70,
        height: 70,
        borderRadius: 16,
        backgroundColor: PRIMARY_SOFT,

        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,

        borderWidth: 1,
        borderColor: PRIMARY_BORDER,
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
        fontSize: 17,
        fontWeight: '600',
        color: '#111',
        flexShrink: 1,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});