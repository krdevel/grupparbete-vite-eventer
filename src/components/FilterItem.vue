<script>
	export default {
		created() {
			this.event = this.$store.state.events.find(
				(element) => element.id === this.id
			)

			/*
			this.event.tags.forEach(tag => {if (tag.id)})

								const tagCounter = this.event.tags.filter((value) =>
						this.$store.state.filteredTags.includes(value)
					).length

			this.tags
*/
		},
		data() {
			return {
				event: undefined
				//				tags: []
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
		}
	}
</script>

<template>
	<li v-if="event !== undefined">
		<RouterLink :to="link"
			><h5 class="title">{{ event.name }}</h5>
		</RouterLink>
	</li>
</template>
