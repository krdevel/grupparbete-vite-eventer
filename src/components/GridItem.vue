<template>
	<RouterLink :to="'/event/' + event.id">
		<div class="ui-card">
			<h4>{{ event.type }}</h4>
			<img :src="event.image" class="ui-image" alt="Eventbild" />
			<div class="ui-card-data">
				<div class="ui-card-date">
					<div class="event-month">{{ eventMonth }}</div>
					<div class="event-day">{{ eventDay }}</div>
				</div>
				<div class="ui-card-content">
					<h4>{{ event.name }}</h4>
					<div class="event-location">{{ event.location }}</div>
				</div>
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
	a {
		grid-auto-columns: auto;
		justify-self: center;
		text-decoration: none;
		color: inherit;
	}

	.ui-card {
		width: 16.5rem;
		height: 22rem;
		box-shadow: 0 0 0.5rem #868686;
		border-radius: 1rem;
	}

	.ui-card h4 {
		font-style: normal;
		font-weight: 550;
		font-size: 1rem;
		margin: 0;
	}

	.ui-card > h4 {
		color: #868686;
		text-transform: uppercase;
		line-height: 1.75rem;
		padding: 0.5rem 1rem;
	}

	.ui-image {
		width: 100%;
		height: 11rem;
		object-fit: cover;
	}

	.ui-card-data {
		display: flex;
		align-items: center;
		height: 8.25rem;
		padding: 0.5rem;
	}

	.ui-card > div > div > * {
		padding: 0.5rem;
	}

	.ui-card-date {
		width: 25%;
		text-align: center;
	}

	.event-month {
		font-weight: 550;
		text-transform: uppercase;
		color: #ff523a;
	}

	.event-day,
	.event-location {
		color: #868686;
	}

	.ui-card-content {
		width: 75%;
	}

	.ui-card-content > h4 {
		line-height: 1.5rem;
		height: 2.5rem;
		white-space: nowrap;
		text-overflow: ' …';
		overflow: hidden;
	}
</style>
