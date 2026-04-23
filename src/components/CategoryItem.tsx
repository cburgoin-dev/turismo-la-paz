import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    title: string;
    description: string;
    onPress?: () => void;
};

export default function CategoryItem({ title, description, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        padding: 18,
        borderRadius: 16,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#3fa7a3',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111111',
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
});