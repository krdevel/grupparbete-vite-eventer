<script>
	import FilterItem from './FilterItem.vue'
	import { getAllEvents, getFilteredTags } from '../persistanceManager'

	export default {
		components: {
			FilterItem
		},
		created() {
			this.filterEvents()
		},
		data() {
			return {
				events: []
			}
		},
		watch: {
			'$store.state.filteredTags': {
				handler: function () {
					this.filterEvents()
				},
				deep: true
			}
		},
		methods: {
			filterEvents() {
				// Create a temporary list so that this.events can be instantly replaced.
				const filteredEvents = []

				// Loop through the events.
				getAllEvents().forEach((event) => {
					// Count and store the number of matching tags.
					const tagCounter = event.tags.filter((value) =>
						getFilteredTags().includes(value)
					).length

					// When the number of found event tags match the number of supplied tags, save the event.
					if (tagCounter === getFilteredTags().length) {
						filteredEvents.push(event)
					}
				})

				this.events = filteredEvents
			}
		}
	}
</script>

<template>
	<ul v-if="events.length !== 0">
		<FilterItem :id="event.id" :key="event.id" v-for="event in events" />
	</ul>
</template>
