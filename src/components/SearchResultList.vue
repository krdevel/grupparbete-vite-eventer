<script>
	export default {
		created() {
			/*
			fetch('https://avancera.app/cities/')
				.then((response) => response.json())
				.then((events) => {
					this.events = events
				})
*/
			this.filterByTags([])
		},
		data() {
			return {
				//				events: null
			}
		},
		methods: {
			filterByTags(tags) {
				console.log(tags)
			}
		}
	}
</script>

<template>
	<ul v-if="$store.state.events !== null">
		<li :key="event.id" v-for="event in $store.state.events">
			{{ event.name }}
		</li>
	</ul>
</template>
