<script>
	export default {
		created() {
			this.event = this.$store.state.events.find(
				(element) => element.id === this.id
			)
		},
		data() {
			return {
				event: undefined
			}
		},
		props: {
			id: {
				required: true,
				type: String
			}
		},
		computed: {
			link() {
				return '/event/' + this.event.id
			}
		},
		watch: {},
		methods: {}
	}
</script>

<template>
	<li v-if="event !== undefined">
		<a :href="link">{{ event.name }}</a>
	</li>
</template>
