import { createI18n } from "vue-i18n";
import messages from "@/i18n/require";

export const initLang = localStorage.getItem('lang') || navigator.language.slice(0, 2) || 'zh'

const i18n = createI18n({
    locale: initLang,
    legacy: false,
    globalInjection: true,
    messages
})

export default i18n