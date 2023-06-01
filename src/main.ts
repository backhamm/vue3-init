import { createApp } from 'vue'
import App from './App.vue'
import VueUse from "@/common/vueUse";
import '@/common/entry'

VueUse(createApp(App)).mount('#app')
