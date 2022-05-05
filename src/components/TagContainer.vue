<template>
	<div>
		<div
			class="card"
			v-if="this.type === 'event'"
			style="width: 500px; height: auto"
		>
			<h5 class="card-header">What kind of event?</h5>
			<div class="card-body">
				<TagComponent
					v-for="tag in getTags('type')"
					:key="tag.id"
					:tag="tag.text"
					:tag-id="tag.id"
				/>
			</div>
		</div>

		<div
			class="card"
			v-if="this.type === 'location'"
			style="width: 500px; height: auto"
		>
			<h5 class="card-header">Where?</h5>
			<div class="card-body">
				<TagComponent
					v-for="tag in getTags('location')"
					:key="tag.id"
					:tag="tag.text"
					:tag-id="tag.id"
				/>
			</div>
		</div>

		<div
			class="card"
			v-if="this.type === 'date'"
			style="width: 500px; height: auto"
		>
			<h5 class="card-header">Where?</h5>
			<div class="card-body">
				<TagComponent
					v-for="tag in getTags('date')"
					:key="tag.id"
					:tag="tag.text"
					:tag-id="tag.id"
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
		min-height: 150px;
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

	.card {
		margin: 10px;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		justify-content: flex-start;
	}
</style>
