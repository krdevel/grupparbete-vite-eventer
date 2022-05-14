<template>
	<li>
		<RouterLink :to="link">
			<img :alt="event.name" :src="event.image" />
			<div>
				<div class="header">
					<h5 class="title">{{ event.name }}</h5>
					<div>{{ event.location }}, {{ event.date }}</div>
				</div>
				<p>{{ event.description }}</p>
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

<style scoped>
	a {
		display: flex;
		color: inherit;
		padding: 1rem;
		padding-left: 0;
	}

	img {
		display: block;
		width: 9.75rem;
		height: 6.5rem;
		object-fit: cover;
		margin-right: 1rem;
	}

	a > div {
		width: calc(100% - 10.75rem);
	}

	.header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		margin-bottom: 0.25rem;
	}

	.header > * {
		font-weight: 550;
		margin: 0;
	}

	.header > h5 {
		line-height: 1.75rem;
	}

	.header > div {
		color: #ff523a;
		line-height: 1.5rem;
	}

	p {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		height: 4.5rem;
		overflow: hidden;
		text-overflow: ' …';
		margin-bottom: 0;
	}
</style>
