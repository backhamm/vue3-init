import router from "@/router";
import i18n from "@/i18n";
import { createPinia } from "pinia";
import piniaPersistPlugin from 'pinia-plugin-persist'

export default (app: any) => {
    const pinia = createPinia()
    pinia.use(piniaPersistPlugin)
    const arr = [router, i18n, pinia]
    arr.forEach(el => app.use(el))
    return app
}