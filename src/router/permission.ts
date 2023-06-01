import router from "@/router/index";
import {setPageTitle} from "@/common/func";

router.beforeEach((to: any, from: any, next: any) => {
    next()
})

router.afterEach(() => {
    setPageTitle()
})