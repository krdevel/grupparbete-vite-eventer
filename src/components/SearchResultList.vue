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
		},
		data() {
			return {
				//				events: null
			}
		}
	}
</script>

<template>
	<ul v-if="events !== null">
		<li :key="event.id" v-for="event in $store.state.events">
			{{ event.name }}
		</li>
	</ul>
</template>
