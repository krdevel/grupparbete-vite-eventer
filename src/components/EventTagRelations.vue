<script>
	export default {
		created() {
			this.assignTagsToEvents()
		},
		methods: {
			assignTagsToEvents() {
				console.log('assignTagsToEvents')
				this.$store.commit('addTagToEvent')

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
