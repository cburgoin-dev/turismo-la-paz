import { createContext, useContext, useState } from 'react';
type Language = 'en' | 'es';

const LanguageContext = createContext<{
    language: Language;
    setLanguage: (lang: Language) => void;
}>({
    language: 'en',
    setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}