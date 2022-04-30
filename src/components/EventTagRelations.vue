<script>
	export default {
		created() {
			this.assignTagsToEvents(0, 0)
			this.assignTagsToEvents(0, 2)
			this.assignTagsToEvents(1, 1)

			this.assignTagsToEvents(1, 3)

			let events = this.$store.state.events

			for (let i = 0; i < events.length; i++) {
				console.log('Event:')
				console.log(' name: ' + events[i].name)
				console.log('  Tags:')
				let tags = events[i].tags
				for (let j = 0; j < tags.length; j++) {
					console.log('   ' + tags[j].location)
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

				// console.log('this ', this + ' store ' + this.$store)
			}
		}
		// data() {
		// 	return {
		// 		cities: null
		// 	}
		// }

		// import store from '../store' const assignTagsToEvents = () => {
		// console.log('assignTagsToEvents') console.log('this ', this + ' store ',
		// store.events) //Hardcoded: // this.store.commit('addTagToEvent') //
		// store.state.events[0].tags.push(store.state.tags[0]) //
		// store.state.events[0].tags.push(store.state.tags[2]) //
		// store.state.events[1].tags.push(store.state.tags[1]) //
		// store.state.events[1].tags.push(store.state.tags[3]) // for (let i = 0; i <
		// store.state.events.length; i++) { // console.log('Event name: ' +
		// store.state.events[i]) // } } export default { assignTagsToEvents }
		// </template>
	}
</script>

<style>
	p {
		display: none;
	}
</style>

<template><p /></template>
