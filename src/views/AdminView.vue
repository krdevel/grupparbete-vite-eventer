<template>
	<div>
		<form class="list">
			<label> Event Name</label>
			<input v-model="eventName" type="text" placeholder="Gabbes änglar" />
			<label> Event Type</label>
			<input v-model="typeTag" type="text" placeholder="Musik" />
			<label> Event Location</label>
			<input v-model="locationTag" type="text" placeholder="Stockholm" />
			<label> Date</label>
			<input v-model="dateTag" type="text" placeholder="2022-06-16" />
			<label> Time</label>
			<input v-model="timeTag" type="text" placeholder="20:00" />
			<label> Description </label>
			<textarea v-model="description"> </textarea>
			<button type="submit" @click="submit(eventName)">Create</button>
		</form>
	</div>
</template>

<script>
	// import { v4 as uuidv4 } from 'uuid'

	export default {
		data() {
			return {
				eventName: 'Gabbes Änglar',
				typeTag: 'Musik',
				locationTag: 'Göteborg',
				dateTag: '2022-06-18',
				timeTag: '18:00',
				description: '',
				event: {},
				imgUri: 'www.google.com'
			}
		},
		computed: {
			nameOfEvent() {
				return this.eventName
			}
		},
		methods: {
			submit() {
				this.event = {
					id: 'a33abc11-264e-4bbb-82e8-b87226bb4383',
					name: this.eventName,
					type: null,
					location: null,
					date: null,
					time: null,
					image:
						'https://kopakrypto.se/wp-content/uploads/sites/6/2021/12/olika-kryptovalutor.jpg',
					description: null,
					likes: 0,
					likeBool: false
				}

				this.$store.commit('createEvent', this.event)
				this.$store.commit('dbSetEventTags', {
					eventName: this.eventName,
					typeTagText: this.typeTag,
					locationTagText: this.locationTag,
					dateTagText: this.dateTag,
					timeTagText: this.timeTag
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
