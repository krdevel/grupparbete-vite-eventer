<script>
	//import { getTagById } from '../eventTagRelations'
	import { getEventById } from '../eventTagRelations'

	export default {
		data() {
			return {
				fullEvent: undefined
			}
		},
		created() {
			this.fullEvent = getEventById(this.event.id)
		},
		props: {
			event: {
				default: null,
				type: Object
			}
		},
		computed: {
			link() {
				return '/event/' + this.fullEvent.id
			}
		},
		methods: {
			/*
			getTags(id) {
				return getTagById(id)
			}
			*/
		}
	}
</script>

<template>
	<li>
		<RouterLink :to="link" style="color: inherit">
			<img :alt="fullEvent.name" :src="fullEvent.image" />
			<div>
				<h5 class="title">{{ fullEvent.name }}</h5>
				<!-- p>{{ getTags(event.tags[1]).text }}</p>
				<p>{{ getTags(event.tags[3]).text }}</p -->
				<p>{{ fullEvent.location }}</p>
				<p>{{ fullEvent.time }}</p>
			</div>
		</RouterLink>
	</li>
</template>
