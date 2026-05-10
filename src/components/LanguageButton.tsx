import { Ionicons } from '@expo/vector-icons';
import {
    Pressable,
    StyleSheet,
    Text
} from 'react-native';

import { useLanguage } from '../translations/LanguageContext';

export default function LanguageButton() {
    const { language, setLanguage } = useLanguage();

    function toggleLanguage() {
        setLanguage(
            language === 'es'
                ? 'en'
                : 'es'
        );
    }

    return (
        <Pressable
            onPress={toggleLanguage}
            style={({ pressed }) => [
                styles.button,
                {
                    opacity: pressed ? 0.75 : 1,
                    transform: [{ scale: pressed ? 0.92 : 1 }],
                },
            ]}
        >
            <Ionicons 
                name="globe-outline" 
                size={18} 
                color="#fff" 
            />

            <Text style={styles.text}>
                {language.toUpperCase()}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',

        gap: 4,

        height: 42,
        paddingHorizontal: 10,

        borderRadius: 14,

        backgroundColor: 'rgba(0,0,0,0.3)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
    },

    text: {
        color: '#fff',
        fontSize: 13,
        fontFamily: 'InterMedium',
    },
});