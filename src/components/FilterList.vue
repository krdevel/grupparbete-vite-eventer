<script>
	import FilterItem from './FilterItem.vue'

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
				for (let i = 0; i < this.$store.state.events.length; i++) {
					// Count and store the number of matching tags.
					const tagCounter = this.$store.state.events[i].tags.filter((value) =>
						this.$store.state.filteredTags.includes(value)
					).length

					// When the number of found event tags match the number of supplied tags, save the event.
					if (tagCounter === this.$store.state.filteredTags.length) {
						filteredEvents.push(this.$store.state.events[i])
					}
				}

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
