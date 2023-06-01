import {defineStore} from "pinia";
import {UserInfoT, UserStateT} from "@/store/type";
import {reactive, UnwrapNestedRefs} from "vue";
import {persist} from "@/store/config";

export const useUserStore = defineStore('userStore', () => {
    const userState: UnwrapNestedRefs<UserStateT> = reactive({
        userInfo: {}
    })

    const setUserInfo = (data: UserInfoT) => userState.userInfo = data

    return {userState, setUserInfo}
}, persist)