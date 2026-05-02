import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HOME_SCREEN } from '../config/uiConfig';
import { useT } from '../translations';
import { useLanguage } from '../translations/LanguageContext';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp>();

    const insets = useSafeAreaInsets();

    const { language, setLanguage } = useLanguage();
    const t = useT();

    return (
        <ImageBackground
            source={HOME_SCREEN.hero}
            style={styles.container}
        >
            <View style={styles.overlayTop} />
            <View style={styles.overlayBottom} />

            <View style={[
                styles.content,
                {
                    paddingTop: insets.top + 40,
                    paddingBottom: insets.bottom + 20,
                }
            ]}>

                <View style={styles.topSection}>
                    <Text style={styles.title}>
                        {t('ui.home.title')}
                    </Text>

                    <Text style={styles.subtitle}>
                        {t('ui.home.subtitle')}
                    </Text>
                </View>

                <View style={styles.bottomSection}>

                    <View style={styles.languageContainer}>
                        <Pressable
                            onPress={() => setLanguage('en')}
                            style={({ pressed }) => [
                                language === 'en'
                                    ? styles.languageButtonActive
                                    : styles.languageButton,
                                pressed && { opacity: 0.8, transform: [{ scale: 0.97 }] },
                            ]}
                        >
                            <Text
                                style={
                                    language === 'en'
                                        ? styles.languageTextActive
                                        : styles.languageText
                                }
                            >
                                English
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={() => setLanguage('es')}
                            style={({ pressed }) => [
                                language === 'es'
                                    ? styles.languageButtonActive
                                    : styles.languageButton,
                                pressed && { opacity: 0.8, transform: [{ scale: 0.97 }] },
                            ]}
                        >
                            <Text 
                                style={
                                    language === 'es'
                                        ? styles.languageTextActive
                                        : styles.languageText
                                }
                            >
                                Español
                            </Text>
                        </Pressable>

                    </View>

                    <Pressable
                        onPress={() => navigation.navigate('PlaceType')}
                        style={({ pressed }) => [
                            styles.continueButton,
                            {
                                backgroundColor: pressed ? '#7A283E' : '#8F2F4A',
                                transform: [{ scale: pressed ? 0.97 : 1 }],
                            },
                        ]}
                    >
                        <Text style={styles.continueText}>
                            {t('ui.home.continue')}
                        </Text>

                        <Ionicons name="chevron-forward" size={20} color="#fff" />
                    </Pressable>

                </View>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlayTop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    overlayBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '35%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        paddingTop: 80,
        paddingBottom: 20,
    },
    topSection: {
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 56,
        fontFamily: 'PlayfairBold',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 60,
    },
    subtitle: {
        fontSize: 18,
        color: 'rgba(255,255,255,0.92)',
        marginTop: 14,
        textAlign: 'center',
        fontFamily: 'InterMedium',
        lineHeight: 24,
    },
    bottomSection: {
        width: '100%',
    },
    languageContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 999,
        padding: 6,
        marginBottom: 16,
    },
    languageButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 999,
        alignItems: 'center',
    },
    languageButtonActive: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 999,
        alignItems: 'center',

        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2},
        elevation: 2,
    },
    languageText: {
        color: '#222',
        fontSize: 16,
        fontFamily: 'InterMedium',
    },
    languageTextActive: {
        color: '#111',
        fontSize: 16,
        fontFamily: 'InterSemiBold',
    },
    continueButton: {
        width: '100%',
        backgroundColor: '#8F2F4A',
        paddingVertical: 14,
        borderRadius: 999,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
    },
    continueText: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'InterSemiBold',
    },
});