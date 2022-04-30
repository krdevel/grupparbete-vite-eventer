import store from './store'

const assignTagsToEvents = () => {
	// console.log('assignTagsToEvents' + this.$store.state.events)
	console.log('assignTagsToEvents' + store.state.events)
	// Hardcoded quasi random assignment indexes
	let eventMaxIndex = store.state.events.length
	let tagMaxIndex = store.state.tags.length
	console.log('' + eventMaxIndex + ' ' + tagMaxIndex)
}

export default { assignTagsToEvents }
