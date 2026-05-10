import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
    Dimensions,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HOME_SCREEN } from '../config/uiConfig';

import { useT } from '../translations';

import {
    useLanguage
} from '../translations/LanguageContext';

import { RootStackParamList } from '../types/navigation';

const { height } = Dimensions.get('window');

const ACTIVE_BUTTON_COLOR = '#8F2F4A';
const ACTIVE_BUTTON_PRESSED_COLOR = '#7A283E';

const TOP_OVERLAY_COLOR = 'rgba(0,0,0,0.25)';
const BOTTOM_OVERLAY_COLOR = 'rgba(0,0,0,0.5)';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp>();

    const insets = useSafeAreaInsets();

    const { language, setLanguage } = useLanguage();

    const t = useT();

    // Derived values
    const isEnglish = language === 'en';
    const isSpanish = language === 'es';

    function handleContinue() {
        navigation.replace('Group');
    }

    function getLanguageButtonStyle(
        active: boolean
    ) {
        return active
            ? styles.languageButtonActive
            : styles.languageButton;
    }

    function getLanguageTextStyle(
        active: boolean
    ) {
        return active
            ? styles.languageTextActive
            : styles.languageText;
    }

    return (
        <ImageBackground
            source={HOME_SCREEN.hero}
            style={styles.container}
        >
            <View style={styles.overlayTop} />
            <View style={styles.overlayBottom} />

            <View 
                style={[
                    styles.content,
                    {
                        paddingTop: insets.top + 40,
                        paddingBottom: insets.bottom + 20,
                    },
                ]}
            >

                <View style={styles.topSection}>
                    <Text style={styles.title}>
                        {t('ui.home.title')}
                    </Text>

                    <Text style={styles.subtitle}>
                        {t('ui.home.subtitle')}
                    </Text>
                </View>

                <View style={styles.bottomSection}>
                    <View 
                        style={
                            styles.languageContainer
                        }
                    >
                        <Pressable
                            onPress={() =>
                                setLanguage('en')
                            }
                            style={({ pressed }) => [
                                getLanguageButtonStyle(
                                    isEnglish
                                ),
                                pressed && {
                                    opacity: 0.8,
                                    transform: [
                                        {
                                            scale: 0.97,
                                        },
                                    ],
                                },
                            ]}
                        >
                            <Text
                                style={getLanguageTextStyle(isEnglish)}
                            >
                                English
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={() =>
                                setLanguage('es')
                            }
                            style={({ pressed }) => [
                                getLanguageButtonStyle(
                                    isSpanish
                                ),
                                pressed && {
                                    opacity: 0.8,
                                    transform: [
                                        {
                                            scale: 0.97,
                                        },
                                    ],
                                },
                            ]}
                        >
                            <Text
                                style={getLanguageTextStyle(isSpanish)}
                            >
                                Español
                            </Text>
                        </Pressable>
                    </View>

                    <Pressable
                        onPress={handleContinue}
                        style={({ pressed }) => [
                            styles.continueButton,
                            {
                                backgroundColor:
                                    pressed
                                        ? ACTIVE_BUTTON_PRESSED_COLOR
                                        : ACTIVE_BUTTON_COLOR,

                                transform: [
                                    {
                                        scale: pressed
                                            ? 0.97
                                            : 1,
                                    },
                                ],
                            },
                        ]}
                    >
                        <Text
                            style={
                                styles.continueText
                            }
                        >
                            {t(
                                'ui.home.continue'
                            )}
                        </Text>

                        <Ionicons
                            name="chevron-forward"
                            size={20}
                            color="#fff"
                        />
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
        backgroundColor: TOP_OVERLAY_COLOR,
    },
    
    overlayBottom: {
        position: 'absolute',

        bottom: 0,
        left: 0,
        right: 0,

        height: '35%',

        backgroundColor: BOTTOM_OVERLAY_COLOR,
    },

    content: {
        flex: 1,

        justifyContent: 'space-between',

        paddingHorizontal: 24,
        paddingTop: 80,
        paddingBottom: 20,
    },

    topSection: {
        alignItems: 'center',
        marginTop: 20,
    },
    
    title: {
        color: '#fff',

        fontSize: height * 0.071,
        lineHeight: 60,

        fontFamily: 'PlayfairBold',
        textAlign: 'center',
    },

    subtitle: {
        color: 'rgba(255,255,255,0.92)',

        fontSize: 18,
        lineHeight: 24,

        marginTop: 14,

        fontFamily: 'InterMedium',
        textAlign: 'center',
    },

    bottomSection: {
        width: '100%',
    },

    languageContainer: {
        flexDirection: 'row',

        marginBottom: 16,
        padding: 6,

        borderRadius: 999,

        backgroundColor: 'rgba(255,255,255,0.7)',
    },

    languageButton: {
        flex: 1,

        alignItems: 'center',

        paddingVertical: 12,

        borderRadius: 999,
    },

    languageButtonActive: {
        flex: 1,

        alignItems: 'center',

        paddingVertical: 12,

        borderRadius: 999,

        backgroundColor: '#fff',

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

        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',

        gap: 6,

        paddingVertical: 14,

        borderRadius: 999,
        
        backgroundColor: ACTIVE_BUTTON_COLOR

    },

    continueText: {
        color: '#fff',

        fontSize: height * 0.027,

        fontFamily: 'InterSemiBold',
    },
});