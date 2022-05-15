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
	// 	margin: 10px;
	// 	width: 130px;
	// 	height: 44px;
	// 	border-radius: 40px;

	// 	// $badge-color: black;
	// }

	.btn:focus {
		box-shadow: 0 0 0 0;
	}
</style>
