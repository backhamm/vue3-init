import router from "@/router/index";
import {setPageTitle} from "@/utils/func";

router.beforeEach((to: any, from: any, next: any) => {
    next()
})

router.afterEach(() => {
    setPageTitle()
})