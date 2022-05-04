import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import assignTagsToEvents from './eventTagRelations'
import assignTagsToEvent from './eventTagRelations'

createApp(App).use(router).use(store).mount('#app')

assignTagsToEvents()
assignTagsToEvent(2, 12)
