import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

import { v4 as uuidv4 } from 'uuid'

const mutations = {
		addTagToEvent(state, payload) {
			// console.log('addTagToEvent payload: ', payload)
			state.events[payload.eventIndex].tags.push(
				state.tags[payload.tagIndex].id
			)
		},
		toggleTag(state, tagId) {
			// Check if the toggled tag is in the filtered tags list.
			const tagIndex = state.filteredTags.indexOf(tagId)

			// Remove or add it as needed.
			if (tagIndex !== -1) {
				state.filteredTags.splice(tagIndex, 1)
			} else {
				state.filteredTags.push(tagId)
			}
		},
		newToggleTag(state, tag) {
			// Check if the toggled tag is in the filtered tags list.
			const tagIndex = state.dbFilteredTags[tag.type].indexOf(tag.id)

			// Remove or add it as needed.
			if (tagIndex !== -1) {
				state.dbFilteredTags[tag.type].splice(tagIndex, 1)
			} else {
				state.dbFilteredTags[tag.type].push(tag.id)
			}
		},
		resetEventsTags(state) {
			console.log('resetEventsTags')
			for (let i = 0; i < state.events.length; i++) {
				state.events[i].tags = []
			}
		},
		dbSetEventTypeTag(state, data) {
			state.dbEvents.find((event) => event.id === data.eventId).type =
				data.typeTagId
		},
		dbSetEventLocationTag(state, data) {
			state.dbEvents.find((event) => event.id === data.eventId).location =
				data.locationTagId
		},
		dbSetEventDateTag(state, data) {
			state.dbEvents.find((event) => event.id === data.eventId).date =
				data.dateTagId
		},
		dbSetEventTimeTag(state, data) {
			state.dbEvents.find((event) => event.id === data.eventId).time =
				data.timeTagId
		}
	},
	state = {
		events: [
			{
				name: 'Nine Inch Snails',
				tags: [],
				id: uuidv4(),
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/640px-Muse_in_Sydney.jpg',
				description:
					'En konsert är i allmänhet ett musikverk för ett (ibland några) soloinstrument och orkester. Den kallas då också solokonsert. Verken är oftast flersatsiga och med den första satsen i sonatform med en längd om minst 20–30 minuter. Solostämman är vanligen tekniskt avancerad, ofta virtuos. Musiken kan ha formen av antingen en dialog mellan solist och orkester eller mer av solo med ackompanjemang interfolierade av orkesterpartier. En dubbelkonsert är en konsert för två soloinstrument och orkester.'
			},
			{
				name: 'Arsenal - Valencia',
				tags: [],
				id: uuidv4(),
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/640px-Football_iu_1996.jpg',
				description:
					'Matcherna spelas normalt i två halvlekar på 45 minuter vardera med en halvtidspaus runt 15 min. Det lag som gjort flest mål då matchen är slut har vunnit. Om lagen har gjort samma antal mål när matchen är över blir resultatet oavgjort. I vissa turneringar, till exempel utslagningsturneringar, tillåts inte oavgjorda resultat och för att få ett avgörande tillgrips förlängning, straffsparksläggning eller omspel.'
			},
			{
				name: 'Releaseparty',
				tags: [],
				id: uuidv4(),
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hip%2C_Hip%2C_Hurrah%21_Artists%E2%80%99_Party%2C_Skagen_%28Peder_Severin_Kr%C3%B8yer%29_-_Gothenburg_Museum_of_Art_-_F_62.tif/lossy-page1-589px-Hip%2C_Hip%2C_Hurrah%21_Artists%E2%80%99_Party%2C_Skagen_%28Peder_Severin_Kr%C3%B8yer%29_-_Gothenburg_Museum_of_Art_-_F_62.tif.jpg',
				description:
					'Festligheterna pågår under sexton dagar före den första söndagen i oktober på Theresienwiese, som förr var en äng. År 2010 pågick oktoberfesten en dag längre än vanligt, nämligen till den 4 oktober. Detta har beslutats i samband med att festen firade 200-årsjubileum år 2010. Med anledning av festen bryggs ett särskilt oktoberfestöl. Ölet, som serveras i en typ av enliterskannor som kallas Maß, är bärnstensfärgat, och smakrikt. Det får bara tillverkas av lokala bryggerier i München. Ölutskänkningen sker i särskilda tält som rymmer upp till tiotusen gäster och kan ta två månader att resa.'
			},
			{
				name: 'Håkan Hellström',
				tags: [],
				id: uuidv4(),
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/640px-Muse_in_Sydney.jpg',
				description: 'Håkan kommer till Göteborg!'
			},
			{
				name: 'Pubquiz i Vasa',
				tags: [],
				id: uuidv4(),
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/640px-Muse_in_Sydney.jpg',
				description: 'Pubquiz!'
			},
			{
				name: 'Gabriels Änglar!',
				tags: [],
				id: uuidv4(),
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/640px-Muse_in_Sydney.jpg',
				description:
					'Gabriels Änglar kommer äntligen till Göteborg för att sjunga!'
			},
			{
				name: 'NFTs och sånt',
				tags: [],
				id: uuidv4(),
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/640px-Muse_in_Sydney.jpg',
				description: 'Krypto'
			}
		],
		tags: [
			{
				// Type tags
				type: 'type',
				text: 'Konsert',
				id: uuidv4()
			},
			{
				type: 'type',
				text: 'Fotbollsmatch',
				id: uuidv4()
			},
			{
				type: 'type',
				text: 'Fest',
				id: uuidv4()
			},
			{
				type: 'type',
				text: 'Quiz',
				id: uuidv4()
			},
			{
				type: 'type',
				text: 'Krypto',
				id: uuidv4()
			},

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
				type: 'location',
				text: 'Malmö',
				id: uuidv4()
			},
			{
				type: 'location',
				text: 'Helsingborg',
				id: uuidv4()
			},
			{
				type: 'location',
				text: 'Köpenhamn',
				id: uuidv4()
			},
			{
				type: 'location',
				text: 'London',
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
		],
		dbEvents: [
			{
				id: uuidv4(),
				name: 'Nine Inch Snails',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/640px-Muse_in_Sydney.jpg',
				description:
					'En konsert är i allmänhet ett musikverk för ett (ibland några) soloinstrument och orkester. Den kallas då också solokonsert. Verken är oftast flersatsiga och med den första satsen i sonatform med en längd om minst 20–30 minuter. Solostämman är vanligen tekniskt avancerad, ofta virtuos. Musiken kan ha formen av antingen en dialog mellan solist och orkester eller mer av solo med ackompanjemang interfolierade av orkesterpartier. En dubbelkonsert är en konsert för två soloinstrument och orkester.',
				likes: 328
			},
			{
				id: uuidv4(),
				name: 'Arsenal - Valencia',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/640px-Football_iu_1996.jpg',
				description:
					'Matcherna spelas normalt i två halvlekar på 45 minuter vardera med en halvtidspaus runt 15 min. Det lag som gjort flest mål då matchen är slut har vunnit. Om lagen har gjort samma antal mål när matchen är över blir resultatet oavgjort. I vissa turneringar, till exempel utslagningsturneringar, tillåts inte oavgjorda resultat och för att få ett avgörande tillgrips förlängning, straffsparksläggning eller omspel.',
				likes: 92883
			},
			{
				id: uuidv4(),
				name: 'Releaseparty',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hip%2C_Hip%2C_Hurrah%21_Artists%E2%80%99_Party%2C_Skagen_%28Peder_Severin_Kr%C3%B8yer%29_-_Gothenburg_Museum_of_Art_-_F_62.tif/lossy-page1-589px-Hip%2C_Hip%2C_Hurrah%21_Artists%E2%80%99_Party%2C_Skagen_%28Peder_Severin_Kr%C3%B8yer%29_-_Gothenburg_Museum_of_Art_-_F_62.tif.jpg',
				description:
					'Festligheterna pågår under sexton dagar före den första söndagen i oktober på Theresienwiese, som förr var en äng. År 2010 pågick oktoberfesten en dag längre än vanligt, nämligen till den 4 oktober. Detta har beslutats i samband med att festen firade 200-årsjubileum år 2010. Med anledning av festen bryggs ett särskilt oktoberfestöl. Ölet, som serveras i en typ av enliterskannor som kallas Maß, är bärnstensfärgat, och smakrikt. Det får bara tillverkas av lokala bryggerier i München. Ölutskänkningen sker i särskilda tält som rymmer upp till tiotusen gäster och kan ta två månader att resa.',
				likes: 2
			},
			{
				id: uuidv4(),
				name: 'Håkan Hellström',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/640px-Muse_in_Sydney.jpg',
				description: 'Håkan kommer till Göteborg!',
				likes: 1029
			},
			{
				id: uuidv4(),
				name: 'Pubquiz i Vasa',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/640px-Muse_in_Sydney.jpg',
				description: 'Pubquiz!',
				likes: 50
			},
			{
				id: uuidv4(),
				name: 'Gabriels Änglar!',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/640px-Muse_in_Sydney.jpg',
				description:
					'Gabriels Änglar kommer äntligen till Göteborg för att sjunga!',
				likes: 0
			},
			{
				id: uuidv4(),
				name: 'NFTs och sånt',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/640px-Muse_in_Sydney.jpg',
				description: 'Krypto',
				likes: 187
			}
		],
		dbTypeTags: [
			{
				id: uuidv4(),
				text: 'Musik'
			},
			{
				id: uuidv4(),
				text: 'Fotboll'
			},
			{
				id: uuidv4(),
				text: 'Fest'
			},
			{
				id: uuidv4(),
				text: 'Quiz'
			},
			{
				id: uuidv4(),
				text: 'Krypto'
			}
		],
		dbLocationTags: [
			{
				id: uuidv4(),
				text: 'Stockholm'
			},
			{
				id: uuidv4(),
				text: 'Göteborg'
			},
			{
				id: uuidv4(),
				text: 'Malmö'
			},
			{
				id: uuidv4(),
				text: 'Helsingborg'
			},
			{
				id: uuidv4(),
				text: 'Köpenhamn'
			},
			{
				id: uuidv4(),
				text: 'London'
			}
		],
		dbDateTags: [
			{
				id: uuidv4(),
				text: '2022-06-16'
			},
			{
				id: uuidv4(),
				text: '2022-06-17'
			},
			{
				id: uuidv4(),
				text: '2022-06-18'
			},
			{
				id: uuidv4(),
				text: '2022-06-19'
			}
		],
		dbTimeTags: [
			{
				id: uuidv4(),
				text: '17:00'
			},
			{
				id: uuidv4(),
				text: '18:00'
			},
			{
				id: uuidv4(),
				text: '18:30'
			},
			{
				id: uuidv4(),
				text: '19:00'
			},
			{
				id: uuidv4(),
				text: '20:00'
			}
		],
		filteredTags: [],
		dbFilteredTags: {
			type: [],
			location: [],
			date: [],
			time: []
		}
	}

export default createStore({
	mutations,
	state,
	plugins: [new VuexPersistence().plugin],
	strict: true
})
