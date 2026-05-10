import en from './en';
import es from './es';
import { Language, useLanguage } from './LanguageContext';

const translations: Record<Language, typeof en> = {
    en,
    es,
};

export function useT() {
    const { language } = useLanguage();

    function t(
        key: string, 
        params?: Record<string, string | number>
    ) {
        const keys = key.split('.');
        let value: unknown = translations[language];
    
        for (const k of keys) {
            if (
                typeof value === 'object' &&
                value !== null &&
                k in value
            ) {
                value = (value as Record<string, unknown>)[k];
            } else {
                value = undefined;
                break;
            }
        }
    
        if (!value) {
            console.warn(`Missing translation: ${key}`);
            return key;
        }
    
        if (typeof value !== 'string') {
            console.warn(`Invalid translation: ${key}`);
            return key;
        }
        
        let translated = value;
        
        if (params) {
            for (const param in params) {
                translated = translated.replace(
                    `{{${param}}}`,
                    String(params[param])
                );
            }
        }
        
        return translated;
    }

    return t;
}