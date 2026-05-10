import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet } from 'react-native';

export default function BackButton() {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => [
                styles.button,
                {
                    opacity: pressed ? 0.75 : 1,
                    transform: [{ scale: pressed ? 0.92 : 1 }],
                },
            ]}
        >
            <Ionicons 
                name="chevron-back" 
                size={26} 
                color="#fff" 
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 42,
        height: 42,
        
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 14,

        backgroundColor: 'rgba(0,0,0,0.3)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
    },
});