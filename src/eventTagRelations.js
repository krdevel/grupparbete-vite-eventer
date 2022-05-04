import store from './store'

// this.$store.commit('addTagToEvent', {

const assignTagsToEvent = function (eventIndex, tagIndex) {
	console.log('JavaScript: assignTagsToEvents')
	store.commit('addTagToEvent', {
		eventIndex: eventIndex,
		tagIndex: tagIndex
	})
}

const assignTagsToEvents = function () {
	console.log('JavaScript: assignTagsToEvents ____')
	assignTagsToEvent(0, 0)
	assignTagsToEvent(0, 2)
	assignTagsToEvent(0, 5)
	assignTagsToEvent(0, 13)

	assignTagsToEvent(1, 1)
	assignTagsToEvent(1, 3)
	assignTagsToEvent(1, 5)
	assignTagsToEvent(1, 9)

	assignTagsToEvent(2, 1)
	assignTagsToEvent(2, 4)
	assignTagsToEvent(2, 7)
	assignTagsToEvent(2, 12)

	// // Print out Events with tags in the console:
	printEventsWithTagsToConsole()
}

const getTagFromId = function (id) {
	return store.state.tags.find((element) => element.id == id)
}

const printEventsWithTagsToConsole = function () {
	let events = store.state.events
	for (let i = 0; i < events.length; i++) {
		console.log('Event:')
		console.log(' Name: ' + events[i].name)
		console.log(' Tags:')

		let tags = events[i].tags

		for (let j = 0; j < tags.length; j++) {
			let tag = getTagFromId(tags[j])
			console.log('   ' + tag.type + ': ' + tag.text)
		}
	}
}

export default assignTagsToEvents

// export default {
// 	assignTagsToEvent,
// 	assignTagsToEvents
// }
