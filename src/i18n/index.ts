import { createI18n } from "vue-i18n";
import messages from "@/i18n/require";
import {getStorageStore} from "@/common/func";

export const initLang: string = getStorageStore('commonStore.commonState.lang') || navigator.language.slice(0, 2) || 'zh'

const i18n: any = createI18n({
    locale: initLang,
    legacy: false,
    globalInjection: true,
    messages
})

export default i18n