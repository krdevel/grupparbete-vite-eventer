<template>
	<li>
		<RouterLink :to="link" style="color: inherit">
			<img :alt="event.name" :src="event.image" />
			<div>
				<h5 class="title">{{ event.name }}</h5>
				<p>{{ event.location }}</p>
				<p>{{ event.time }}</p>
			</div>
		</RouterLink>
	</li>
</template>

<script>
	import { getEventById } from '../eventTagRelations'

	export default {
		props: {
			eventId: {
				required: true,
				default: null,
				type: String
			}
		},
		data() {
			return {
				event: undefined
			}
		},
		computed: {
			link() {
				return '/event/' + this.event.id
			}
		},
		created() {
			this.event = getEventById(this.eventId)
		}
	}
</script>
