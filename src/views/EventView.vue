<script>
	export default {
		created() {
			this.setDatabyId()
		},
		data() {
			return {
				name: '',
				tagLocation: this.$store.state.events[0].tags[0],
				tagType: this.$store.state.tags[3].text,
				tagTime: this.$store.state.tags[5].text
				//img:""
			}
		},
		methods: {
			setDatabyId() {
				for (let i = 0; i < this.$store.state.events.length; i++) {
					if (this.$route.params.id == this.$store.state.events[i].id) {
						console.log(true)
						this.name = this.$store.state.events[i].name
						this.tagLocation = ''
					} else {
						console.log(false)
					}
				}
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
