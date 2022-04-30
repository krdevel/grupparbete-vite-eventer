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
					console.log(tags[j])
					// console.log(
					// 	'   Location: ' +
					// 		tags[j].location +
					// 		' Type: ' +
					// 		tags[j].type +
					// 		' Date: ' +
					// 		tags[j].date
					// )
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
	           return this.$store.state.tags.find(element => element.id = id)
	           }
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
