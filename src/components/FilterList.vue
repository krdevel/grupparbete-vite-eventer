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
				this.$store.state.events.forEach((event) => {
					// Count and store the number of matching tags.
					const tagCounter = event.tags.filter((value) =>
						this.$store.state.filteredTags.includes(value)
					).length

					// When the number of found event tags match the number of supplied tags, save the event.
					if (tagCounter === this.$store.state.filteredTags.length) {
						filteredEvents.push(event)
					}
				})

				this.events = filteredEvents
			}
		},
		props: {
			isList: {
				default: true,
				type: Boolean
			}
		}
	}
</script>

<template>
	<ul id="filter-list" v-if="events.length !== 0 && isList === true">
		<FilterItem :id="event.id" :key="event.id" v-for="event in events" />
	</ul>
	<!-- Show grid if isList is set to false -->
	<h1 v-else>Hej</h1>
</template>
