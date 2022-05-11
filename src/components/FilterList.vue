<script>
	import GridItem from './GridItem.vue'
	import ListItem from './ListItem.vue'

	export default {
		components: {
			ListItem,
			GridItem
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
	<ul
		id="filter-list"
		class="scroll"
		v-if="events.length !== 0 && isList === true"
	>
		<ListItem
			:event="event"
			:id="event.id"
			:key="event.id"
			v-for="event in events"
		/>
	</ul>
	<!-- Show grid if isList is set to false -->

	<div v-else class="grid-container">
		<GridItem
			:event="event"
			class="grid-item"
			:key="event.id"
			v-for="event in events"
		/>
	</div>
</template>

<style>
	.scroll {
		/* overflow: hidden;
		overflow-y: scroll;
		height: 80%;
		width: 100%; */
	}
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		/* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
		gap: 20px 0;
		grid-auto-rows: minmax(100px, auto);
	}

	.grid-item {
		grid-auto-columns: auto;
		justify-self: center;
	}
</style>
