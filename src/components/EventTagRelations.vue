<script>
	export default {
		created() {
			this.assignTagsToEvent(0, 0)
			this.assignTagsToEvent(0, 2)
			this.assignTagsToEvent(0, 5)
			this.assignTagsToEvent(0, 13)

			this.assignTagsToEvent(1, 1)
			this.assignTagsToEvent(1, 3)
			this.assignTagsToEvent(1, 5)
			this.assignTagsToEvent(1, 9)

			this.assignTagsToEvent(2, 1)
			this.assignTagsToEvent(2, 4)
			this.assignTagsToEvent(2, 7)
			this.assignTagsToEvent(2, 12)

			// Print out Events with tags in the console:
			this.printEventWithTagsToConsole()
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
			},
			printEventWithTagsToConsole() {
				let mmm = this.$store.getters[('getTagByID', 'd111')]
				console.log('KKKKKK_____' + mmm)

				let events = this.$store.state.events
				for (let i = 0; i < events.length; i++) {
					console.log('Event:')
					console.log(' Name: ' + events[i].name)
					console.log(' Tags:')

					let tags = events[i].tags

					for (let j = 0; j < tags.length; j++) {
						let tag = this.getTagFromId(tags[j])
						console.log('   ' + tag.type + ': ' + tag.text)
					}
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
