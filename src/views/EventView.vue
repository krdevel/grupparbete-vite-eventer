<script>
	import { getEventById } from '../eventTagRelations'

	export default {
		created() {
			this.event = getEventById(this.$route.params.id)
		},
		data() {
			return {
				event: undefined
			}
		}
	}
</script>
<style lang="scss" scoped>
	.nameData {
		color: white;
		text-shadow: 2px 2px 4px #000000;
	}
	.headerImg {
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		background-size: cover;
		text-align: center;
	}
	.imgText {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.ulSs {
		margin-top: 10px;
		text-align: center;
		list-style: none;
	}
	.list {
		display: inline-block;
		border: 1px solid #000;
		border-radius: 8%;
		border-color: black;
		background-color: #6c757d;
		padding: 5px;
		margin-right: 3em;
		color: #ffffff;
		text-shadow: 2px 2px 4px #000000;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	.imgData {
		border-radius: 8px;
		object-fit: contain;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	.paraText {
		text-align: center;
		font-weight: bold;
	}
	.textBox {
		margin-left: 2em;
		margin-right: 2em;
	}
	i:hover {
		color: red;
	}
</style>
<template>
	<div class="headerImg">
		<img class="imgData" :src="event.image" />

		<div class="imgText">
			<h1 class="nameData">{{ event.name }}</h1>
		</div>
	</div>
	<ul class="ulSs">
		<li class="list">{{ event.type }}</li>
		<li class="list">{{ event.location }}</li>
		<li class="list">{{ event.date }}</li>
		<li class="list">{{ event.time }}</li>
	</ul>
	<div class="textBox">
		<p class="paraText">{{ event.description }}</p>
	</div>

	<i class="bi bi-heart" type="button"></i>
</template>
