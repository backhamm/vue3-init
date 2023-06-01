import {defineStore} from "pinia";
import {UserStateT} from "@/store/type";
import {reactive, UnwrapNestedRefs} from "vue";
import {persist, setState} from "@/store/config";

export const useUserStore = defineStore('userStore', () => {
    const userState: UnwrapNestedRefs<UserStateT> = reactive({})

    const setUserState = (data: UserStateT) => setState(userState, data)

    return {userState, setUserState}
}, persist)