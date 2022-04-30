import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

const mutations = {
		increment(state) {
			state.counter += 1
		},
		addTagToEvent(state, eventIndex, tagIndex) {
			state.events[eventIndex].tags.push(this.tags[tagIndex])
		}
	},
	state = {
		counter: 0,
		events: [
			{
				name: 'Ett kul event',
				tags: [],
				id: uuidv4()
			},
			{
				name: 'Ett halvkul event',
				tags: [],
				id: uuidv4()
			},
			{
				name: 'Releaseparty',
				tags: [],
				id: uuidv4()
			}
		],
		tags: [
			{
				// Location tags
				location: 'Stockholm',
				type: null,
				date: null,
				id: uuidv4()
			},
			{
				location: 'Göteborg',
				type: null,
				date: null,
				id: uuidv4()
			},
			{
				// Type tags
				location: null,
				type: 'Concert',
				date: null,
				id: uuidv4()
			},
			{
				location: null,
				type: 'Football match',
				date: null,
				id: uuidv4()
			},
			{
				location: null,
				type: 'Party',
				date: null,
				id: uuidv4()
			}
			// Date tags
		]
	}

export default createStore({ mutations, state, strict: true })
