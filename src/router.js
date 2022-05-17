import { createRouter, createWebHashHistory } from 'vue-router'

import EventView from './views/EventView.vue'
import FilterView from './views/FilterView.vue'
import AdminView from './views/AdminView.vue'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			component: EventView,
			name: 'event-view',
			path: '/event/:id?'
		},
		{
			component: FilterView,
			name: 'filter-view',
			path: '/'
		},
		{
			component: AdminView,
			name: 'admin-view',
			path: '/admin'
		}
	]
})
