<template>
	<RouterLink
		:to="'/event/' + fullEvent.id"
		style="text-decoration: none; color: inherit"
	>
		<div class="ui-card">
			<h4>{{ fullEvent.type }}</h4>
			<img :src="fullEvent.image" class="ui-image" alt="..." width="300" />
			<div class="ui-card-body">
				<span class="ui-card-content">
					<p>MAY</p>
					<p>02</p>
				</span>
				<span class="ui-card-content">
					<p class="event-name">{{ fullEvent.name }}</p>
					<p>{{ fullEvent.location }}</p>
				</span>
			</div>
		</div>
	</RouterLink>
</template>

<script>
	import { getEventById } from '../eventTagRelations'

	export default {
		data() {
			return { fullEvent: undefined }
		},
		created() {
			this.fullEvent = getEventById(this.event.id)
		},
		props: {
			event: {
				default: null,
				type: Object
			}
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

		/* Inside auto layout */
		/*
		flex: none;
		order: 0;
		flex-grow: 0;
		margin: 0px 10px;
		*/
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
</style>
