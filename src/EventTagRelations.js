import store from './store'

const assignTagsToEvents = () => {
	// console.log('assignTagsToEvents' + this.$store.state.events)
	console.log('assignTagsToEvents' + store.state.events)
	// Hardcoded quasi random assignment indexes
	let eventMaxIndex = store.state.events.length
	let tagMaxIndex = store.state.tags.length
	console.log('' + eventMaxIndex + ' ' + tagMaxIndex)

	let eventIndexes = []
	for (let i = 0; i < eventMaxIndex; i++) {
		eventIndexes.push(Math.floor(Math.random() * eventMaxIndex + 1))
	}

	let eventIndex = Math.floor(Math.random() * eventMaxIndex + 1)

	console.log('' + eventIndex)
	console.log('' + eventIndexes)
}

export default { assignTagsToEvents }
