import store from './store'

// this.$store.commit('addTagToEvent', {

const assignTagsToEvent = function (eventIndex, tagIndex) {
	console.log('JavaScript: assignTagsToEvents')
	this.store.commit('addTagToEvent', {
		eventIndex: eventIndex,
		tagIndex: tagIndex
	})
}
