<template>
	<div>
		<div class="card" v-if="this.type === 'event'">
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

		<div class="card" v-if="this.type === 'location'">
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

		<div class="card" v-if="this.type === 'date'">
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
	.card {
		width: 350px;
		height: auto;
		margin: 10px;
	}

	@media screen and (max-width: 1024px) {
		.card {
			width: auto;
		}
	}
</style>
