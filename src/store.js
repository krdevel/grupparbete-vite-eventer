import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

const mutations = {
	increment(state) {
		state.counter += 1
	},
	addTagToEvent(state, payload) {
		// console.log('addTagToEvent payload: ', payload)
		state.events[payload.eventIndex].tags.push(state.tags[payload.tagIndex].id)
	}
}
const getters = {
		getTag: (state) => (type) => {
			console.log('LLLLLLLL___' + type)
			return state.tags.find((element) => element.type == type)
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
				type: 'location',
				text: 'Stockholm',
				id: uuidv4()
			},
			{
				type: 'location',
				text: 'Göteborg',
				id: uuidv4()
			},
			{
				// Type tags
				type: 'type',
				text: 'Concert',
				id: uuidv4()
			},
			{
				type: 'type',
				text: 'Football match',
				id: uuidv4()
			},
			{
				type: 'type',
				text: 'Party',
				id: uuidv4()
			},
			// Date tags
			{
				type: 'date',
				text: '2022-06-16',
				id: uuidv4()
			},
			{
				type: 'date',
				text: '2022-06-17',
				id: uuidv4()
			},
			{
				type: 'date',
				text: '2022-06-18',
				id: uuidv4()
			},
			{
				type: 'date',
				text: '2022-06-19',
				id: uuidv4()
			},
			// Time tags
			{
				type: 'time',
				text: '17:00',
				id: uuidv4()
			},
			{
				type: 'time',
				text: '18:00',
				id: uuidv4()
			},
			{
				type: 'time',
				text: '18:30',
				id: uuidv4()
			},
			{
				type: 'time',
				text: '19:00',
				id: uuidv4()
			},
			{
				type: 'time',
				text: '20:00',
				id: uuidv4()
			}
		]
	}

export default createStore({ mutations, state, getters, strict: true })
