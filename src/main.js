import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import assignTagsToEvent from './eventTagRelations'

createApp(App).use(router).use(store).mount('#app')

assignTagsToEvent(0, 0)
