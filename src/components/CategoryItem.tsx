import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    title: string;
    description: string;
    onPress?: () => void;
};

const PRIMARY = '#C44569';
const PRIMARY_SOFT = 'rgba(196,69,105,0.16)';
const PRIMARY_BORDER = 'rgba(196,69,105,0.55)';

const PRIMARY_TEXT = '#9F2F50';

const ACCENT = '#FF7A18';
const ACCENT_SOFT = 'rgba(255,122,24,0.15)';

function getIcon(title: string) {

    switch (title) {
        case 'Relax':
            return require('../../assets/icons/relax.png');
        case 'Family':
            return require('../../assets/icons/family.png');
        case 'Social':
            return require('../../assets/icons/social.png');
        case 'Adventure':
            return require('../../assets/icons/adventure.png');
        default:
            return require('../../assets/icons/relax.png');
    }
}

function getSubtitle(title: string) {
    switch(title) {
        case 'Relax':
            return 'Calm waters and peaceful spots to unwind and disconnect';
        case 'Family':
            return 'Safe, accessible beaches perfect for families and groups';
        case 'Social':
            return 'Popular beaches with food, music and a lively atmosphere';
        case 'Adventure':
            return 'Explore beaches with activities, tours and outdoor experiences';
        default:
            return '';
    }
}

export default function CategoryItem({ title, description, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
            <View style={styles.iconBox}>
                <Image
                    source={getIcon(title)}
                    style={styles.iconImage}
                    resizeMode="contain"
                />
                <Text style={styles.iconLabel}>{title}</Text>
            </View>

            <View style={styles.textBlock}>
                <Text style={styles.title}>{description}</Text>
                <Text style={styles.subtitle}>
                    {getSubtitle(title)}
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
        fontSize: 13,
        color: '#666',
        marginTop: 4,
    },
});