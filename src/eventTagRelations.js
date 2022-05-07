import store from './store'

let reAssignTagsToEvents = true

let storeAreaForRead = store.state
let storeAreaForWrite = store

const getTagById = function (id) {
	// console.log('JavaScript: getTagFromId ____')
	return storeAreaForRead.tags.find((element) => element.id == id)
}

const assignTagsToEvent = function (eventIndex, tagIndex) {
	console.log('JavaScript: assignTagsToEvents')
	storeAreaForWrite.commit('addTagToEvent', {
		eventIndex: eventIndex,
		tagIndex: tagIndex
	})
}

// Ad Hoc setup during development:

function resetStateData() {
	// let newState = store.initialState
	// store.state = store.replaceState()
	// store.replaceState()
	// store.makeNewStore()
}

const assignTagsToEvents = function () {
	console.log('JavaScript: assignTagsToEvents ____')
	printAssignedTags()

	if (reAssignTagsToEvents) {
		// resetStateData()
		// window.localStorage.removeItem('vuex')

		storeAreaForWrite.commit('resetEventsTags')

		// assignTagsToEvent(0, 0)
		// assignTagsToEvent(0, 2)
		// assignTagsToEvent(0, 5)
		// assignTagsToEvent(0, 13)

		// assignTagsToEvent(1, 1)
		// assignTagsToEvent(1, 3)
		// assignTagsToEvent(1, 5)
		// assignTagsToEvent(1, 9)

		// assignTagsToEvent(2, 1)
		// assignTagsToEvent(2, 4)
		// assignTagsToEvent(2, 7)
		// assignTagsToEvent(2, 12)
	}

	// // Print out Events with tags in the console:
	printEventsWithTagsToConsole()
}

const printAssignedTags = function () {
	for (let i = 0; i < storeAreaForRead.events.length; i++) {
		console.log(
			'eventTagRelations Assigned tags: ' + storeAreaForRead.events[i].tags
		)
	}
}

const printEventsWithTagsToConsole = function () {
	let events = storeAreaForRead.events
	for (let i = 0; i < events.length; i++) {
		console.log('Event:')
		console.log(' Name: ' + events[i].name)
		console.log(' Tags:')

		let tags = events[i].tags

		for (let j = 0; j < tags.length; j++) {
			let tag = getTagById(tags[j])
			console.log('   ' + tag.type + ': ' + tag.text)
		}
	}
}

export {
	//
	// Ad Hoc setup during development:
	assignTagsToEvents
}
