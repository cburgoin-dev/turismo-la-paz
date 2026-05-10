import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

const LANGUAGE_STORAGE_KEY = 'language';

export type Language = 'en' | 'es';

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => {},
});

type Props = {
    children: React.ReactNode;
};

export function LanguageProvider({ children }: Props) {
    const [language, setLanguageState] = useState<Language | null>(null);

    useEffect(() => {
        const loadLanguage = async () => {
            const saved = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
            setLanguageState(
                saved ? (saved as Language) : 'en'
            );
        };
    
        loadLanguage();
    }, []);

    const setLanguage = async (lang: Language) => {
        setLanguageState(lang);
        await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    };

    // Wait until persisted language is loaded
    if (!language) {
        return null;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}