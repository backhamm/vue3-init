import router from "@/router";
import i18n from "@/i18n";
import { createPinia } from "pinia";

export default (app: any) => {
    const arr = [router, i18n, createPinia()]
    arr.forEach(el => app.use(el))
    return app
}