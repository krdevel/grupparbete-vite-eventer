import store from './store'

const assignTagsToEvents = () => {
	// console.log('assignTagsToEvents' + this.$store.state.events)
	console.log('assignTagsToEvents' + store.state.events)
}

// assignTagsToEvents()

export default { assignTagsToEvents }
