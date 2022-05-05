<script>
	export default {
		created() {},
		data() {
			return {
				name: this.$store.state.events[0].name,
				tagLocation: this.$store.state.events[0].tags[0],
				tagType: this.$store.state.tags[3].text,
				tagTime: this.$store.state.tags[5].text
				//img:""
			}
		}
	}
</script>
<style>
	.nameData {
		text-align: center;
	}
</style>
<template>
	<main>
		<!-- <h1>Event! id: {{ $route.params.id }}</h1> -->
		<div class="eventStyle">
			<!-- <img class="imgData" :src="img"> -->
			<h1 class="nameData">{{ name }}</h1>
			<p class="tagLoc">
				I {{ tagLocation }} och det är en {{ tagType }} och datumet är
				{{ tagTime }}
			</p>
		</div>
	</main>
</template>
