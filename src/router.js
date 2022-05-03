import { createRouter, createWebHashHistory } from 'vue-router'
import EventView from './views/EventView.vue'
import HomeView from './views/HomeView.vue'
export default createRouter({
	history: createWebHashHistory(),
	routes: [
		//Router component
		{
			component: EventView,
			path: '/event/:id?'
		},
		{
			component: HomeView,
			path: '/'
		}
	]
})
