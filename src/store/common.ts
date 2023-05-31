import { defineStore } from 'pinia'
import { initLang } from "@/i18n";
import i18n from "@/i18n";
import { reactive } from "vue";
import {CommonStateT} from "@/store/type";

export const useCommonStore = defineStore('commonStore', () => {
    const commonState: CommonStateT = reactive({
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