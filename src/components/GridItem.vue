<template>
	<div class="ui-card">
		<h4>Fotbollsmatch</h4>
		<img :src="event.image" class="ui-image" alt="..." width="300" />
		<div class="ui-card-body">
			<span class="ui-card-content">
				<p>MAY</p>
				<p>02</p>
			</span>
			<span class="ui-card-content">
				<p id="event-name">{{ event.name }}</p>
				<p>Ullevi Arena</p>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
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
		width: 230px;
		height: 300px;
		left: 24px;
		top: 24px;

		/* White */

		background: #ffffff;
		/* AE Shadow 1 */

		box-shadow: -2px 4px 15px rgba(0, 0, 0, 0.5);
		border-radius: 20px;

		/* Inside auto layout */

		flex: none;
		order: 0;
		flex-grow: 0;
		margin: 0px 10px;
	}

	.ui-card h4 {
		color: #868686;
		/* font-family: 'Inter'; */
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 150%;
		padding-top: 5px;
		padding-left: 10px;
	}

	.ui-image {
		width: 100%;
		height: 150px;
	}

	.ui-card-content {
		margin: 10px;
		display: inline-block;
	}

	#event-name {
		font-weight: bold;
	}
</style>
