import store from './store'

let storeArea = store.state

const getTagFromId = function (id) {
	// console.log('JavaScript: getTagFromId ____')
	return storeArea.tags.find((element) => element.id == id)
}

const assignTagsToEvent = function (eventIndex, tagIndex) {
	console.log('JavaScript: assignTagsToEvents')
	store.commit('addTagToEvent', {
		eventIndex: eventIndex,
		tagIndex: tagIndex
	})
}

export { assignTagsToEvent, getTagFromId }
