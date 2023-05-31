import { createApp } from 'vue'
import App from './App.vue'
import entry from "@/common/entry";

entry(createApp(App)).mount('#app')
