<script>
	import GridItem from './GridItem.vue'
	import ListItem from './ListItem.vue'

	export default {
		components: {
			ListItem,
			GridItem
		},
		props: {
			isList: {
				default: true,
				type: Boolean
			}
		},
		data() {
			return {
				events: []
			}
		},
		watch: {
			'$store.state.dbFilteredTags': {
				handler: function () {
					this.filterEvents()
				},
				deep: true
			}
		},
		created() {
			this.filterEvents()
		},
		methods: {
			filterEvents() {
				const filteredTypeTags = this.$store.state.dbFilteredTags.type
				const filteredLocationTags = this.$store.state.dbFilteredTags.location
				const filteredDateTags = this.$store.state.dbFilteredTags.date
				const filteredTimeTags = this.$store.state.dbFilteredTags.time

				// First, the exception.
				if (
					filteredTypeTags.length === 0 &&
					filteredLocationTags.length === 0 &&
					filteredDateTags.length === 0 &&
					filteredTimeTags.length === 0
				) {
					this.events = this.$store.state.dbEvents
					return
				}

				// Create a temporary list so that this.events can be instantly replaced.
				const filteredEvents = []

				// Loop through the events.
				this.$store.state.dbEvents.forEach((event) => {
					if (
						filteredTypeTags.length !== 0 &&
						filteredTypeTags.includes(event.type) === false
					) {
						return
					}
					if (
						filteredLocationTags.length !== 0 &&
						filteredLocationTags.includes(event.location) === false
					) {
						return
					}
					if (
						filteredDateTags.length !== 0 &&
						filteredDateTags.includes(event.date) === false
					) {
						return
					}
					if (
						filteredTimeTags.length !== 0 &&
						filteredTimeTags.includes(event.time) === false
					) {
						return
					}

					filteredEvents.push(event)
				})

				this.events = filteredEvents
			}
		}
	}
</script>

<template>
	<ul v-if="events.length !== 0 && isList === true" id="filter-list">
		<ListItem
			v-for="event in events"
			:id="event.id"
			:key="event.id"
			:event-id="event.id"
		/>
	</ul>
	<!-- Show grid if isList is set to false -->
	<div v-else class="grid-container">
		<GridItem
			v-for="event in events"
			:key="event.id"
			:event-id="event.id"
			class="grid-item"
		/>
	</div>
</template>

<style>
	#filter-list {
		padding: 0;
		list-style-type: none;
	}

	#filter-list a {
		display: flex;
		text-decoration: none;
		padding: 1rem;
	}

	#filter-list li:not(:last-child) {
		border-bottom: 1px solid rgba(0, 0, 0, 0.125);
	}

	#filter-list img {
		display: block;
		width: 8rem;
		height: 6rem;
		object-fit: contain;
		margin-right: 1rem;
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
		gap: 3rem;
	}

	.grid-item {
		grid-auto-columns: auto;
		justify-self: center;
	}
</style>
