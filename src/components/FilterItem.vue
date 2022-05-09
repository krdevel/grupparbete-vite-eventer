<script>
	import { getTagById } from '../eventTagRelations'

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

			this.tags.type = getTagById(this.event.tags[0]).text
			this.tags.location = getTagById(this.event.tags[1]).text
			this.tags.date = getTagById(this.event.tags[2]).text
			this.tags.time = getTagById(this.event.tags[3]).text
		},
		data() {
			return {
				event: undefined,
				tags: {}
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
		<RouterLink :to="link">
			<img :alt="event.name" :src="event.image" />
			<div>
				<h5 class="title">{{ event.name }}</h5>
				<p>{{ tags.date }}</p>
			</div>
		</RouterLink>
	</li>
</template>
