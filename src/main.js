import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import eventTagRelations from './eventTagRelations'

createApp(App).use(router).use(store).mount('#app')

eventTagRelations.assignTagsToEvent(0, 0)
