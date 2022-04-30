import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

const mutations = {
		increment(state) {
			state.counter += 1
		},
		addTagToEvent(state, payload) {
			// console.log('addTagToEvent payload: ', payload)
			state.events[payload.eventIndex].tags.push(
				state.tags[payload.tagIndex].id
			)
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
				date: '2022-06-16',
				time: '18:30',
				id: uuidv4()
			},
			{
				location: 'Göteborg',
				type: null,
				date: '2022-06-16',
				time: '19:00',
				id: uuidv4()
			},
			{
				// Type tags
				location: null,
				type: 'Concert',
				date: '2022-06-17',
				time: '18:00',
				id: uuidv4()
			},
			{
				location: null,
				type: 'Football match',
				date: '2022-06-18',
				time: '17:00',
				id: uuidv4()
			},
			{
				location: null,
				type: 'Party',
				date: '2022-06-18',
				time: '20:00',
				id: uuidv4()
			}
			// Date tags
		]
	}

export default createStore({ mutations, state, strict: true })
