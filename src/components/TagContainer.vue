<template>
	<div>
		<div v-if="this.type === 'event'" class="container">
			<p>What kind of event?</p>
			<div class="tags">
				<TagComponent
					v-for="tag in getTags('type')"
					:key="tag.id"
					:tag="tag.text"
				/>
			</div>
		</div>
		<div v-if="this.type === 'location'" class="container">
			<p>Where?</p>
			<div class="tags">
				<TagComponent
					v-for="tag in getTags('location')"
					:key="tag.id"
					:tag="tag.text"
				/>
			</div>
		</div>

		<div v-if="this.type === 'date'" class="container">
			<p>When?</p>
			<div class="tags">
				<TagComponent
					v-for="tag in getTags('date')"
					:key="tag.id"
					:tag="tag.text"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import TagComponent from './TagComponent.vue'

	export default {
		created() {},
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
		},
		methods: {
			getTags(type) {
				let event = this.$store.state.tags
				let newArr = event.filter((e) => e.type === type)
				return newArr
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
		margin: 10px;
	}

	.container p {
		text-align: center;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		justify-content: flex-start;
	}
</style>
