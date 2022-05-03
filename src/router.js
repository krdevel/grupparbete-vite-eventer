import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import EventView from './views/EventView.vue'
import HomeView from './views/HomeView.vue'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			component: AboutView,
			path: '/about'
		},
		{
			component: ContactView,
			path: '/contact'
		},
		{
			//Router component
			component: EventView,
			path: '/event/:id?'
		},
		{
			component: HomeView,
			path: '/'
		}
	]
})
