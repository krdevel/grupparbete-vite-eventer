<script>
	export default {
		created() {
			this.assignTagsToEvent(0, 0)
			this.assignTagsToEvent(0, 2)

			this.assignTagsToEvent(1, 1)
			this.assignTagsToEvent(1, 3)

			this.assignTagsToEvent(2, 1)
			this.assignTagsToEvent(2, 4)

			// Print out Events with tags in the console:
			let events = this.$store.state.events
			for (let i = 0; i < events.length; i++) {
				console.log('Event:')
				console.log(' name: ' + events[i].name)
				console.log('  Tags:')
				let tags = events[i].tags
				for (let j = 0; j < tags.length; j++) {
					let tag = this.getTagFromId(tags[j])
					console.log(
						'    Location: ' +
							tag.location +
							', Type: ' +
							tag.type +
							', Date: ' +
							tag.date
					)
				}
			}
		},
		methods: {
			assignTagsToEvent(eventIndex, tagIndex) {
				console.log('assignTagsToEvents')
				this.$store.commit('addTagToEvent', {
					eventIndex: eventIndex,
					tagIndex: tagIndex
				})
			},
			getTagFromId(id) {
				return this.$store.state.tags.find((element) => element.id == id)
			}
		}

		// data() {
		// 	return {
		// 		cities: null
		// 	}
		// }
	}
</script>

<style>
	p {
		display: none; /* Invisible, with 0 space */
	}
</style>

<template><p /></template>
