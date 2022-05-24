import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

//import { v4 as uuidv4 } from 'uuid'
//uuidv4()

const mutations = {
		createEvent(state, payload) {
			state.dbEvents.push(payload)
		},
		enableDatabase(state) {
			state.dbLoaded = true
		},
		/*
		addTagToEvent(state, payload) {
			// console.log('addTagToEvent payload: ', payload)
			state.events[payload.eventIndex].tags.push(
				state.tags[payload.tagIndex].id
			)
		},
		*/
		resetTags(state) {
			state.dbFilteredTags.type = []
			state.dbFilteredTags.location = []
			state.dbFilteredTags.date = []
			state.dbFilteredTags.time = []
		},
		toggleTag(state, tag) {
			// Check if the toggled tag is in the filtered tags list.
			const tagIndex = state.dbFilteredTags[tag.type].indexOf(tag.id)

			// Remove or add it as needed.
			if (tagIndex !== -1) {
				state.dbFilteredTags[tag.type].splice(tagIndex, 1)
			} else {
				state.dbFilteredTags[tag.type].push(tag.id)
			}
		},
		/*
		resetEventsTags(state) {
			console.log('resetEventsTags')
			for (let i = 0; i < state.events.length; i++) {
				state.events[i].tags = []
			}
		},
		*/
		dbSetEventTags(state, data) {
			const event = state.dbEvents.find(
				(event) => event.name === data.eventName
			)

			event.type = state.dbTypeTags.find(
				(tag) => tag.text === data.typeTagText
			).id

			console.log(state.dbTypeTags.find((tag) => tag.text === data.typeTagText))

			event.location = state.dbLocationTags.find(
				(tag) => tag.text === data.locationTagText
			).id
			event.date = state.dbDateTags.find(
				(tag) => tag.text === data.dateTagText
			).id
			event.time = state.dbTimeTags.find(
				(tag) => tag.text === data.timeTagText
			).id
		},
		likeAdd(state, Id) {
			let event = state.dbEvents.find((event) => event.id === Id)

			event.likes++
			console.log(event.likes)
		},
		likeMin(state, Id) {
			let event = state.dbEvents.find((event) => event.id === Id)
			event.likes--
			console.log(event.likes)
		},
		likeTrue(state, Id) {
			let event = state.dbEvents.find((event) => event.id === Id)
			event.likeBool = true
		},
		likeFalse(state, Id) {
			let event = state.dbEvents.find((event) => event.id === Id)
			event.likeBool = false
		},
		toggleSiteLike(state) {
			state.siteLike = !state.siteLike
		}
	},
	state = {
		siteLike: false,
		dbLoaded: false,
		/*
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
		*/
		dbEvents: [
			{
				id: '2068f9ac-d543-4ac7-9def-9a61cd901059',
				name: 'Nine Inch Snails',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/640px-Muse_in_Sydney.jpg',
				description:
					'En konsert är i allmänhet ett musikverk för ett (ibland några) soloinstrument och orkester. Den kallas då också solokonsert. Verken är oftast flersatsiga och med den första satsen i sonatform med en längd om minst 20–30 minuter. Solostämman är vanligen tekniskt avancerad, ofta virtuos. Musiken kan ha formen av antingen en dialog mellan solist och orkester eller mer av solo med ackompanjemang interfolierade av orkesterpartier. En dubbelkonsert är en konsert för två soloinstrument och orkester.',
				likes: 328,
				likeBool: false
			},
			{
				id: '4bfef29a-ac10-4f04-82a7-e0a6d0174058',
				name: 'Arsenal - Valencia',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/640px-Football_iu_1996.jpg',
				description:
					'Matcherna spelas normalt i två halvlekar på 45 minuter vardera med en halvtidspaus runt 15 min. Det lag som gjort flest mål då matchen är slut har vunnit. Om lagen har gjort samma antal mål när matchen är över blir resultatet oavgjort. I vissa turneringar, till exempel utslagningsturneringar, tillåts inte oavgjorda resultat och för att få ett avgörande tillgrips förlängning, straffsparksläggning eller omspel.',
				likes: 92883,
				likeBool: false
			},
			{
				id: '1024a86b-687e-433e-b368-a6963e8b9967',
				name: 'Releaseparty',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hip%2C_Hip%2C_Hurrah%21_Artists%E2%80%99_Party%2C_Skagen_%28Peder_Severin_Kr%C3%B8yer%29_-_Gothenburg_Museum_of_Art_-_F_62.tif/lossy-page1-589px-Hip%2C_Hip%2C_Hurrah%21_Artists%E2%80%99_Party%2C_Skagen_%28Peder_Severin_Kr%C3%B8yer%29_-_Gothenburg_Museum_of_Art_-_F_62.tif.jpg',
				description:
					'Festligheterna pågår under sexton dagar före den första söndagen i oktober på Theresienwiese, som förr var en äng. År 2010 pågick oktoberfesten en dag längre än vanligt, nämligen till den 4 oktober. Detta har beslutats i samband med att festen firade 200-årsjubileum år 2010. Med anledning av festen bryggs ett särskilt oktoberfestöl. Ölet, som serveras i en typ av enliterskannor som kallas Maß, är bärnstensfärgat, och smakrikt. Det får bara tillverkas av lokala bryggerier i München. Ölutskänkningen sker i särskilda tält som rymmer upp till tiotusen gäster och kan ta två månader att resa.',
				likes: 2,
				likeBool: false
			},
			{
				id: 'b0c77d22-1868-4386-aad4-d7eac95eb45f',
				name: 'Håkan Hellström',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://www.gp.se/image/policy:1.4500232:1501763025/hakanullevi2.jpg?f=Regular&w=960&$p$f$w=c02bdc1',
				description: 'Håkan dyker upp igen!',
				likes: 1029,
				likeBool: false
			},
			{
				id: '18a89d26-1fa3-4a40-b117-015163f1548f',
				name: 'Pubquiz i Vasa',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://www.iamsterdam.com/media/blog/posts-nl/2018/sacha/diversen/hoogendam-pubquiz.jpg',
				description: 'Pubquiz!',
				likes: 50,
				likeBool: false
			},
			{
				id: '6e905917-04c9-4118-8933-bf77ca2dd91c',
				name: 'Gabriels Änglar!',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://assetsnffrgf-a.akamaihd.net/assets/m/502016247/univ/art/502016247_univ_lsr_lg.jpg',
				description:
					'Gabriels Änglar kommer äntligen till Göteborg för att sjunga!',
				likes: 666,
				likeBool: false
			},
			{
				id: 'e9ac0683-176a-42be-b119-70dc0fe66fc1',
				name: 'NFTs och sånt',
				type: null,
				location: null,
				date: null,
				time: null,
				image:
					'https://kopakrypto.se/wp-content/uploads/sites/6/2021/12/olika-kryptovalutor.jpg',
				description: 'Krypto',
				likes: 187,
				likeBool: false
			}
		],
		dbTypeTags: [
			{
				id: '1f03c836-b8e4-408a-84f0-18828e60b154',
				text: 'Musik'
			},
			{
				id: 'a98e5587-9a9a-40f5-9972-f171a947a807',
				text: 'Fotboll'
			},
			{
				id: 'bef4402c-cd75-421c-903d-632a1652694d',
				text: 'Fest'
			},
			{
				id: '30b71b04-bb92-492c-986d-974884dc55a9',
				text: 'Quiz'
			},
			{
				id: '8d05dc19-339c-4fe1-99d0-ffa3980d07da',
				text: 'Krypto'
			}
		],
		dbLocationTags: [
			{
				id: '6a8b3a05-783d-471f-8781-7d9db2e7fa22',
				text: 'Stockholm'
			},
			{
				id: 'bdb7efe9-3517-474e-a259-55f3dea85a5b',
				text: 'Göteborg'
			},
			{
				id: '32ec40a2-faa0-4f30-85e2-eb79abe049b1',
				text: 'Malmö'
			},
			{
				id: '1b8201be-d3c1-4c3b-8bc4-99d9ee217a9c',
				text: 'Helsingborg'
			},
			{
				id: '3beb3448-e43c-4b82-be6e-b1bf2aae755b',
				text: 'Köpenhamn'
			},
			{
				id: 'cdaa5efc-be1e-47ca-b45f-1d0c17a1c774',
				text: 'London'
			}
		],
		dbDateTags: [
			{
				id: '966f3c2a-e954-483c-a294-5ff44be886a9',
				text: '2022-06-16'
			},
			{
				id: 'e57d245b-dc86-477c-b04f-a3a6de393af0',
				text: '2022-06-17'
			},
			{
				id: 'e566f9dd-3c44-421b-aaf4-e5d872336c9e',
				text: '2022-06-18'
			},
			{
				id: '9d79f00b-e15f-4fd0-b5f2-89e6704fda8e',
				text: '2022-06-19'
			}
		],
		dbTimeTags: [
			{
				id: '8c7825be-61da-41c0-bcff-382649441e8e',
				text: '17:00'
			},
			{
				id: '61b0abdc-3d64-4409-96f2-c88e33580f34',
				text: '18:00'
			},
			{
				id: '2633d9c2-86c8-428b-bb98-74288462b3c5',
				text: '18:30'
			},
			{
				id: 'd39801da-e35f-4867-b09f-15b3b22390b5',
				text: '19:00'
			},
			{
				id: '0f7b0ee7-1719-4cc2-8f57-d82009c4ac05',
				text: '20:00'
			}
		],
		//filteredTags: [],
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
