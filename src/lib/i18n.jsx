import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../locale/en-us.json';
import ptTranslations from '../locale/pt-br.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslations,
        },
        pt: {
            translation: ptTranslations,
        },
    },
    lng: 'pt',
});

export default i18n;