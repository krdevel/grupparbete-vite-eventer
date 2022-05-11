import store from './store'

let storeAreaForRead = store.state
let storeAreaForWrite = store

let reallyResetStore = false

// Säkert supersmart. Men jag får det inte att funka med reallyResetStore (som pålitligare återställer Vuex till default).
// Så jag bortkommenterar nästa rad så länge:

let reAssignEventsTags = store.state.events[0].tags.length === 0

// let reAssignEventsTags = false

const getTagById = function (id) {
	return storeAreaForRead.tags.find((element) => element.id == id)
}

const assignTagsToEvent = function (eventIndex, tagIndex) {
	// console.log('JavaScript: assignTagsToEvents')
	storeAreaForWrite.commit('addTagToEvent', {
		eventIndex: eventIndex,
		tagIndex: tagIndex
	})
}

const resetStore = function () {
	reAssignEventsTags = false
	window.localStorage.removeItem('vuex')
	reAssignEventsTags = true
}

// Ad Hoc setup during development:
const assignTagsToEvents = function () {
	// assignTagsToEvent(0, 11)

	if (reallyResetStore) {
		resetStore()
	}

	if (reAssignEventsTags) {
		// console.log('Nyyyyyyyyyyyyyy')

		storeAreaForWrite.commit('resetEventsTags')

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

		assignTagsToEvent(3, 1)
		assignTagsToEvent(3, 4)
		assignTagsToEvent(3, 7)
		assignTagsToEvent(3, 12)

		assignTagsToEvent(4, 1)
		assignTagsToEvent(4, 4)
		assignTagsToEvent(4, 7)
		assignTagsToEvent(4, 12)

		assignTagsToEvent(5, 1)
		assignTagsToEvent(5, 4)
		assignTagsToEvent(5, 7)
		assignTagsToEvent(5, 12)

		assignTagsToEvent(6, 1)
		assignTagsToEvent(6, 4)
		assignTagsToEvent(6, 7)
		assignTagsToEvent(6, 12)
	}

	// // Print out Events with tags in the console:
	printEventsWithTagsToConsole()
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

// <!-- NEW AND IMPROVED(?)
const getEventById = (eventId) => {
	// Get the event reference.
	let event = storeAreaForRead.dbEvents.find((event) => event.id === eventId)

	// Deep copy the object.
	event = JSON.parse(JSON.stringify(event))

	// For each tag, replace its ID with the tag's text value.
	event.type = storeAreaForRead.dbTypeTags.find(
		(typeTag) => typeTag.id === event.type
	).text
	event.location = storeAreaForRead.dbLocationTags.find(
		(locationTag) => locationTag.id === event.type
	).text
	event.date = storeAreaForRead.dbDateTags.find(
		(dateTag) => dateTag.id === event.type
	).text
	event.time = storeAreaForRead.dbTimeTags.find(
		(timeTag) => timeTag.id === event.type
	).text

	return event
}

const dbInit = () => {
	// Only run this function once?
	if (reAssignEventsTags === false) {
		return
	}

	storeAreaForWrite.commit('dbSetEventTypeTag', {
		eventId: storeAreaForRead.dbEvents[0].id,
		typeTagId: storeAreaForRead.dbTypeTags[0].id
	})
	storeAreaForWrite.commit('dbSetEventLocationTag', {
		eventId: storeAreaForRead.dbEvents[0].id,
		locationTagId: storeAreaForRead.dbLocationTags[0].id
	})
	storeAreaForWrite.commit('dbSetEventDateTag', {
		eventId: storeAreaForRead.dbEvents[0].id,
		dateTagId: storeAreaForRead.dbDateTags[0].id
	})
	storeAreaForWrite.commit('dbSetEventTimeTag', {
		eventId: storeAreaForRead.dbEvents[0].id,
		timeTagId: storeAreaForRead.dbTimeTags[4].id
	})

	storeAreaForWrite.commit('dbSetEventTypeTag', {
		eventId: storeAreaForRead.dbEvents[1].id,
		typeTagId: storeAreaForRead.dbTypeTags[1].id
	})
	storeAreaForWrite.commit('dbSetEventLocationTag', {
		eventId: storeAreaForRead.dbEvents[1].id,
		locationTagId: storeAreaForRead.dbLocationTags[1].id
	})
	storeAreaForWrite.commit('dbSetEventDateTag', {
		eventId: storeAreaForRead.dbEvents[1].id,
		dateTagId: storeAreaForRead.dbDateTags[1].id
	})
	storeAreaForWrite.commit('dbSetEventTimeTag', {
		eventId: storeAreaForRead.dbEvents[1].id,
		timeTagId: storeAreaForRead.dbTimeTags[0].id
	})

	storeAreaForWrite.commit('dbSetEventTypeTag', {
		eventId: storeAreaForRead.dbEvents[2].id,
		typeTagId: storeAreaForRead.dbTypeTags[2].id
	})
	storeAreaForWrite.commit('dbSetEventLocationTag', {
		eventId: storeAreaForRead.dbEvents[2].id,
		locationTagId: storeAreaForRead.dbLocationTags[1].id
	})
	storeAreaForWrite.commit('dbSetEventDateTag', {
		eventId: storeAreaForRead.dbEvents[2].id,
		dateTagId: storeAreaForRead.dbDateTags[3].id
	})
	storeAreaForWrite.commit('dbSetEventTimeTag', {
		eventId: storeAreaForRead.dbEvents[2].id,
		timeTagId: storeAreaForRead.dbTimeTags[1].id
	})

	storeAreaForWrite.commit('dbSetEventTypeTag', {
		eventId: storeAreaForRead.dbEvents[3].id,
		typeTagId: storeAreaForRead.dbTypeTags[0].id
	})
	storeAreaForWrite.commit('dbSetEventLocationTag', {
		eventId: storeAreaForRead.dbEvents[3].id,
		locationTagId: storeAreaForRead.dbLocationTags[1].id
	})
	storeAreaForWrite.commit('dbSetEventDateTag', {
		eventId: storeAreaForRead.dbEvents[3].id,
		dateTagId: storeAreaForRead.dbDateTags[2].id
	})
	storeAreaForWrite.commit('dbSetEventTimeTag', {
		eventId: storeAreaForRead.dbEvents[3].id,
		timeTagId: storeAreaForRead.dbTimeTags[4].id
	})

	storeAreaForWrite.commit('dbSetEventTypeTag', {
		eventId: storeAreaForRead.dbEvents[4].id,
		typeTagId: storeAreaForRead.dbTypeTags[3].id
	})
	storeAreaForWrite.commit('dbSetEventLocationTag', {
		eventId: storeAreaForRead.dbEvents[4].id,
		locationTagId: storeAreaForRead.dbLocationTags[3].id
	})
	storeAreaForWrite.commit('dbSetEventDateTag', {
		eventId: storeAreaForRead.dbEvents[4].id,
		dateTagId: storeAreaForRead.dbDateTags[3].id
	})
	storeAreaForWrite.commit('dbSetEventTimeTag', {
		eventId: storeAreaForRead.dbEvents[4].id,
		timeTagId: storeAreaForRead.dbTimeTags[2].id
	})

	storeAreaForWrite.commit('dbSetEventTypeTag', {
		eventId: storeAreaForRead.dbEvents[5].id,
		typeTagId: storeAreaForRead.dbTypeTags[0].id
	})
	storeAreaForWrite.commit('dbSetEventLocationTag', {
		eventId: storeAreaForRead.dbEvents[5].id,
		locationTagId: storeAreaForRead.dbLocationTags[1].id
	})
	storeAreaForWrite.commit('dbSetEventDateTag', {
		eventId: storeAreaForRead.dbEvents[5].id,
		dateTagId: storeAreaForRead.dbDateTags[2].id
	})
	storeAreaForWrite.commit('dbSetEventTimeTag', {
		eventId: storeAreaForRead.dbEvents[5].id,
		timeTagId: storeAreaForRead.dbTimeTags[3].id
	})

	storeAreaForWrite.commit('dbSetEventTypeTag', {
		eventId: storeAreaForRead.dbEvents[6].id,
		typeTagId: storeAreaForRead.dbTypeTags[4].id
	})
	storeAreaForWrite.commit('dbSetEventLocationTag', {
		eventId: storeAreaForRead.dbEvents[6].id,
		locationTagId: storeAreaForRead.dbLocationTags[5].id
	})
	storeAreaForWrite.commit('dbSetEventDateTag', {
		eventId: storeAreaForRead.dbEvents[6].id,
		dateTagId: storeAreaForRead.dbDateTags[0].id
	})
	storeAreaForWrite.commit('dbSetEventTimeTag', {
		eventId: storeAreaForRead.dbEvents[6].id,
		timeTagId: storeAreaForRead.dbTimeTags[1].id
	})
}
// NEW AND IMPROVED(?) -->

export {
	//
	// Ad Hoc setup during development:
	getTagById,
	assignTagsToEvents,
	dbInit,
	getEventById
}
