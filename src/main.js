import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import assignTagsToEvents from './eventTagRelations'

createApp(App).use(router).use(store).mount('#app')

// Add some tags to events, just to have something to work with.
//Later, this should be fetched from a backend with a persistent store
assignTagsToEvents()
