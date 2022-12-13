import { createApp  } from 'vue'
import App from './App.vue'
import Vue3TouchEvents from "vue3-touch-events";



createApp(App).use(Vue3TouchEvents,{disableClick: false, swipeTolerance:40}).mount('#app')
