<template>
	<div>
		<h3>What kind of event?</h3>
		<div v-if="this.type === 'event'" class="container">
			<div class="tags">
				<TagComponent v-for="tag in tags" :key="tag.id" :tag="tag" />
				<TagComponent tag="Testtesttestestsets" />
				<TagComponent tag="Testtesttestestsets" />
				<TagComponent tag="Testtesttestestsets" />
			</div>
		</div>

		<div v-if="this.type === 'where'" class="container">
			<div class="tags">
				<TagComponent v-for="tag in tags" :key="tag.id" :tag="tag" />
				<TagComponent tag="Testtesttestestsets" />
				<TagComponent tag="Testtesttestestsets" />
				<TagComponent tag="Testtesttestestsets" />
			</div>
		</div>

		<div v-if="this.type === 'date'" class="container">
			<div class="tags">
				<TagComponent v-for="tag in tags" :key="tag.id" :tag="tag" />
				<TagComponent tag="Testtesttestestsets" />
				<TagComponent tag="Testtesttestestsets" />
				<TagComponent tag="Testtesttestestsets" />
			</div>
		</div>
	</div>
</template>

<script>
	import TagComponent from './TagComponent.vue'

	export default {
		created() {
			let events = this.$store.state.tags
			let arr = []
			events.forEach((element) => {
				if (element.type === 'type') {
					arr.push(element.text)
				}
			})

			this.tags = arr
		},
		components: {
			TagComponent
		},
		data() {
			return {
				tags: []
			}
		},
		props: {
			type: {
				required: true,
				type: String,
				default: 'event'
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 500px;
		min-height: 200px;
		height: auto;
		border-radius: 5vh;
		background-color: rgb(195, 195, 195);
		border: 1px solid grey;

		-webkit-box-shadow: 0px 0px 29px -3px rgba(0, 0, 0, 0.81);
		box-shadow: 0px 0px 29px -3px rgba(0, 0, 0, 0.81);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		justify-content: flex-start;
	}
</style>
