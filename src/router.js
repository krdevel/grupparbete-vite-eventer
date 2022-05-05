import { createRouter, createWebHashHistory } from 'vue-router'

import EventView from './views/EventView.vue'
import FilterView from './views/FilterView.vue'
import HomeView from './views/HomeView.vue'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			component: EventView,
			path: '/event/:id?'
		},
		{
			component: FilterView,
			path: '/filter'
		},
		{
			component: HomeView,
			path: '/'
		}
	]
})
