<script>
	import { getTagById } from '../eventTagRelations'

	export default {
		props: {
			event: {
				default: null,
				type: Object
			}
		},
		computed: {
			link() {
				return '/event/' + this.event.id
			}
		},
		methods: {
			getTags(id) {
				return getTagById(id)
			}
		}
	}
</script>

<template>
	<li>
		<RouterLink :to="link" style="color: inherit">
			<img :alt="event.name" :src="event.image" />
			<div>
				<h5 class="title">{{ event.name }}</h5>
				<p>{{ getTags(event.tags[1]).text }}</p>
				<p>{{ getTags(event.tags[3]).text }}</p>
			</div>
		</RouterLink>
	</li>
</template>
