import { defineStore } from 'pinia'
import { initLang } from "@/i18n";
import i18n from "@/i18n";
import { reactive } from "vue";

export const useCommonStore = defineStore('lang', () => {
    const commonState = reactive({
        lang: initLang,
        count: 1
    })

    const setLang = (val: string) => {
        i18n.global.locale.value = val
        localStorage.setItem('lang', val)
        commonState.lang = val
    }

    return { commonState, setLang }
})