import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

const mutations = {
		increment(state) {
			state.counter += 1
		}
	},
	state = {
		counter: 0,
		events: [
			{
				name: 'Ett kul event',
				tag: uuidv4(),
				id: uuidv4()
			},
			{
				location: 'Stockholm',
				name: 'Ett halvkul event',
				type: 'Football match',
				id: uuidv4()
			},
			{
				location: 'Stockholm',
				name: 'Releaseparty',
				type: 'Party',
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
		]
	}

export default createStore({ mutations, state, strict: true })
