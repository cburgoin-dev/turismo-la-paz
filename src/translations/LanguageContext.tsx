import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'es';

const LanguageContext = createContext<{
    language: Language;
    setLanguage: (lang: Language) => void;
}>({
    language: 'en',
    setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language | null>(null);

    useEffect(() => {
        const loadLanguage = async () => {
            const saved = await AsyncStorage.getItem('language');
            if (saved) {
                setLanguageState(saved as Language);
            } else {
                setLanguageState('en');
            }
        };
    
        loadLanguage();
    }, []);

    const setLanguage = async (lang: Language) => {
        setLanguageState(lang);
        await AsyncStorage.setItem('language', lang);
    };

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