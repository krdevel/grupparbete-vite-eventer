<script>
	export default {
		created() {
			this.fillDatabyId()
		},
		data() {
			return {
				name: 'Broke it!',
				tagBox: [],
				imgSource: '',
				eventText: 'asdsadasd'
			}
		},
		methods: {
			fillDatabyId() {
				for (let i = 0; i < this.$store.state.events.length; i++) {
					if (this.$route.params.id == this.$store.state.events[i].id) {
						//Name, img, text för event
						this.name = this.$store.state.events[i].name
						//this.imgSource = this.$store.state.events[i].image
						//this.imgSource = '../../../assets/Naruto.jpg'
						this.imgSource = '../../../assets/Touka.png'
						this.eventText = this.$store.state.events[i].description
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
<style lang="scss" scoped>
	.nameData {
		color: black;
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
		opacity: 0.6;
		background-color: #ffffff;
		border: 1px solid black;
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
	}
	.imgData {
		border-radius: 8px;
		width: 50%;
		height: 50%;
	}
</style>
<template>
	<div class="headerImg">
		<img class="imgData" :src="imgSource" height="300" />

		<div class="imgText">
			<h1 class="nameData">{{ name }}</h1>
		</div>
	</div>
	<ul class="ulSs">
		<li class="list" :key="tags" v-for="tags in tagBox">{{ tags }}</li>
	</ul>
	<div>
		<p>{{ eventText }}</p>
	</div>
</template>
