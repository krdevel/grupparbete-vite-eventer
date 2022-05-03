<script>
	export default {
		created() {
			// EMPTY!
		},
		data() {
			return {
				events: []
			}
		},
		watch: {
			'$store.state.filteredTagsChanged': function () {
				console.log('watch')
				for (let i = 0; i < this.$store.state.events.length; i++) {
					const tagCounter = this.$store.state.events[i].tags.filter((value) =>
						this.$store.state.filteredTags.includes(value)
					).length

					this.events.push({
						id: this.$store.state.events[i].id,
						name: this.$store.state.events[i].name,
						tagCounter
					})
				}

				const filteredEvents = this.events.filter(
					(value) => value.tagCounter > 0
				)

				this.events = filteredEvents
			}
		}
	}
</script>

<template>
	<ul v-if="events !== null">
		<li :key="event.id" v-for="event in events">
			{{ event.name }}
		</li>
	</ul>
</template>
