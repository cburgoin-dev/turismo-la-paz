import en from './en';
import es from './es';

let currentLang: 'en' | 'es' = 'en';

const translations = { en, es };

export function setLanguage(lang: 'en' | 'es') {
    currentLang = lang;
}

export function t(key: string, params?: Record<string, any>) {
    const keys = key.split('.');
    let value: any = translations[currentLang];

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