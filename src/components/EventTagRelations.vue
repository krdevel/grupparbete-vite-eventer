<script>
	export default {
		created() {
			this.assignTagsToEvents(0, 0)
			this.assignTagsToEvents(0, 2)

			this.assignTagsToEvents(1, 1)
			this.assignTagsToEvents(1, 3)

			this.assignTagsToEvents(2, 1)
			this.assignTagsToEvents(2, 4)

			// Print out Events with tags in the console:
			let events = this.$store.state.events
			for (let i = 0; i < events.length; i++) {
				console.log('Event:')
				console.log(' name: ' + events[i].name)
				console.log('  Tags:')
				let tags = events[i].tags
				for (let j = 0; j < tags.length; j++) {
					let tag = this.getTagFromId(tags[j])
					console.log('TTTTT ' + tag)
					console.log(
						'   Location: ' +
							tag.location +
							' Type: ' +
							tag.type +
							' Date: ' +
							tag.date
					)
				}
			}
		},
		methods: {
			assignTagsToEvents(eventIndex, tagIndex) {
				console.log('assignTagsToEvents')
				this.$store.commit('addTagToEvent', {
					eventIndex: eventIndex,
					tagIndex: tagIndex
				})
			},
			getTagFromId(id) {
				// console.log(this.$store.state.tags.find((element) => (element.id = id)))
				console.log('getTagFromId: ' + id)

				let tags = this.$store.state.tags
				for (let i = 0; i < tags.length; i++) {
					console.log(tags[i].id)
					if (tags[i].id === id) {
						console.log('YES!')

						return tags[i]
					}
					// return null
				}
				// return this.$store.state.tags.find((element) => (element.id = id))
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
		display: none; /* Invisible */
	}
</style>

<template><p /></template>
