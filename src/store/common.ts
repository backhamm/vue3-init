import {defineStore} from "pinia";
import { initLang } from "@/i18n";
import i18n from "@/i18n";
import {reactive, UnwrapNestedRefs} from "vue";
import {CommonStateT} from "@/store/type";
import {persist} from "@/store/config";
import {setPageTitle} from "@/common/func";

export const useCommonStore = defineStore('commonStore', () => {
    const commonState: UnwrapNestedRefs<CommonStateT> = reactive({
        lang: initLang,
    })

    const setLang = (val: string) => {
        i18n.global.locale.value = val
        commonState.lang = val
        setPageTitle()
    }

    return { commonState, setLang }
}, persist)