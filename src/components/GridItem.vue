<template>
	<RouterLink
		:to="'/event/' + event.id"
		style="text-decoration: none; color: inherit"
	>
		<div class="ui-card">
			<h4>{{ event.type }}</h4>
			<img :src="event.image" class="ui-image" alt="..." width="300" />
			<div class="ui-card-body">
				<span class="ui-card-content">
					<p class="event-month">{{ eventMonth }}</p>
					<p>{{ eventDay }}</p>
				</span>
				<span class="ui-card-content">
					<p class="event-name">{{ event.name }}</p>
					<p>{{ event.location }}</p>
				</span>
			</div>
		</div>
	</RouterLink>
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
			return { event: undefined, eventMonth: '', eventDay: '' }
		},
		created() {
			this.event = getEventById(this.eventId)

			const date = new Date(this.event.date)

			this.eventMonth = date
				.toLocaleDateString('sv-SE', {
					month: 'long'
				})
				.substring(0, 3)

			this.eventDay = date.toLocaleDateString('sv-SE', {
				day: 'numeric'
			})
		}
	}
</script>

<style scoped>
	.ui-card {
		position: static;
		width: 16rem;
		height: 24rem;

		/* White */
		background: #ffffff;

		/* AE Shadow 1 */
		box-shadow: -2px 4px 15px rgba(0, 0, 0, 0.5);
		border-radius: 20px;
	}

	.ui-card h4 {
		color: #868686;
		/* font-family: 'Inter'; */
		font-style: normal;
		font-weight: normal;
		font-size: 1.125rem;
		line-height: 150%;
		text-transform: uppercase;
		margin: 0;
		padding: 0.5rem 1rem;
	}

	.ui-image {
		width: 100%;
		height: 9rem;
		object-fit: cover;
	}

	.ui-card-content {
		margin: 10px;
		display: inline-block;
	}

	.event-name {
		font-weight: bold;
	}

	.event-month {
		text-transform: uppercase;
	}
</style>
