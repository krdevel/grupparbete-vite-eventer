<template>
	<button
		type="button"
		:class="selected ? 'btn-primary' : 'btn-secondary'"
		class="btn"
		@click="handleSelect"
	>
		{{ tagName }}
	</button>
</template>

<script>
	export default {
		props: {
			tagName: {
				required: true,
				type: String,
				default: 'tagname'
			},
			tagId: {
				required: true,
				type: String,
				default: 'id'
			},
			tagType: {
				required: true,
				type: String,
				default: ''
			}
		},
		data() {
			return {
				selected: false
			}
		},
		created() {
			if (this.$store.state.dbFilteredTags[this.tagType].includes(this.tagId)) {
				this.selected = true
			}
		},
		methods: {
			handleSelect() {
				this.selected = !this.selected

				this.$store.commit('toggleTag', {
					type: this.tagType,
					id: this.tagId
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	// .btn {
	// 	/* This overrides Bootstrap */
	// 	background-color: #f1f6ff;
	// 	color: #1f3868;
	// 	border: 0;
	// 	border-radius: 1.5rem;
	// 	padding: 0.75rem;
	// 	width: 8rem;

	// 	margin: 10px;
	// 	$badge-color: black;
	// }

	// /* This overrides Bootstrap */
	// .btn:focus {
	// 	box-shadow: none;
	// }

	// /* This overrides Bootstrap */
	// .btn.btn-primary {
	// 	// background-color: #1f3868;
	// 	// color: #f1f6ff;
	// }
</style>
