<template>
	<div>
		<form>
			<label> Event Name</label>
			<label> {{ eventName }}</label>
			<input v-model="eventName" type="text" />
			<label> Event Tags</label>
			<input type="text" />
			<label> Event Location</label>
			<input type="text" />
			<label> Event Name</label>
			<input type="text" />
			<button type="submit" @click="submit(eventName)">Create</button>
		</form>
	</div>
</template>

<script>
	// import { v4 as uuidv4 } from 'uuid'

	export default {
		data() {
			return {
				event: {
					id: 'a33abc11-264e-4bbb-82e8-b87226bb4383',
					name: 'test',
					type: 'Musik',
					location: 'Stockholm',
					date: '2022-06-16',
					time: '20:00',
					image: 'https://www.google.com',
					description: 'asd',
					likes: 0,
					likeBool: false
				},
				eventName: 'eventName',
				tags: 'test',
				imgUri: 'www.google.com'
			}
		},
		methods: {
			submit(eventName) {
				this.$store.commit('createEvent', this.event)
				this.$store.commit('dbSetEventTags', {
					eventName: 'Test',
					typeTagText: 'Musik',
					locationTagText: 'Stockholm',
					dateTagText: '2022-06-16',
					timeTagText: '20:00'
				})
			}
		}
	}
</script>

<style lang="scss" scoped></style>
