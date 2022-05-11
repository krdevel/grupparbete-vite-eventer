<template>
	<div>
		<div class="card">
			<h5 class="card-header">{{ heading }}</h5>
			<div class="card-body">
				<TagComponent
					v-for="tag in getTags()"
					:key="tag.id"
					:tag-name="tag.text"
					:tag-id="tag.id"
					:tag-type="this.type"
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
				default: 'type'
			},
			heading: {
				required: true,
				type: String,
				default: 'heading'
			}
		},
		methods: {
			getTags() {
				//				let event = this.$store.state.tags
				//				let newArr = event.filter((e) => e.type === type)
				//				return newArr

				const key =
					'db' + this.type.charAt(0).toUpperCase() + this.type.slice(1) + 'Tags'

				return this.$store.state[key]
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
