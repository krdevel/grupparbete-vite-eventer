import { createRouter, createWebHashHistory } from 'vue-router'

import EventView from './views/EventView.vue'
import FilterView from './views/FilterView.vue'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			component: EventView,
			path: '/event/:id?'
		},
		{
			component: FilterView,
			path: '/'
		}
	]
})
