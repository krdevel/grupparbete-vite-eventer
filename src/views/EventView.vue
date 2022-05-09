<script>
	export default {
		created() {
			this.fillDatabyId()
		},
		data() {
			return {
				name: 'Broke it!',
				tagBox: []
				//img:"",
				//eventText:""
			}
		},
		methods: {
			fillDatabyId() {
				for (let i = 0; i < this.$store.state.events.length; i++) {
					if (this.$route.params.id == this.$store.state.events[i].id) {
						//Name, img, text för event
						this.name = this.$store.state.events[i].name
						for (let k = 0; k < this.$store.state.events[i].tags.length; k++) {
							for (let j = 0; j < this.$store.state.tags.length; j++) {
								if (
									this.$store.state.events[i].tags[k] ==
									this.$store.state.tags[j].id
								) {
									//push till tagBox
									this.tagBox.push(this.$store.state.tags[j].text)
									console.log(this.tagBox)
								}
							}
						}
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
	.ulSs {
		list-style: none;
	}
</style>
<template>
	<main>
		<div class="eventStyle">
			<!-- <img class="imgData" :src="img"> -->
			<h1 class="nameData">{{ name }}</h1>
			<ul class="ulSs">
				<li :key="tags" v-for="tags in tagBox">{{ tags }}</li>
			</ul>
		</div>
	</main>
</template>
