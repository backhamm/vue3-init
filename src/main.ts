import { createApp } from 'vue'
import App from './App.vue'
import VueUse from "@/utils/vueUse";
import '@/utils/entry'

VueUse(createApp(App)).mount('#app')
