import en from './en';
import es from './es';
import { useLanguage } from './LanguageContext';

let currentLang: 'en' | 'es' = 'es';

const translations = { en, es };

export function getLanguage() {
    return currentLang;
}

export function setLanguage(lang: 'en' | 'es') {
    currentLang = lang;
}

export function useT() {
    const { language } = useLanguage();

    function t(key: string, params?: Record<string, any>) {
        const keys = key.split('.');
        let value: any = translations[language];
    
        for (const k of keys) {
            value = value?.[k];
        }
    
        if (!value) {
            console.warn(`Missing translation: ${key}`);
            return key;
        }
    
        if (params) {
            Object.keys(params).forEach((param) => {
                value = value.replace(`{{${param}}}`, params[param]);
            });
        }
    
        return value;
    }

    return t;
}