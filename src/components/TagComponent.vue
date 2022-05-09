<template>
	<button
		type="button"
		:class="selected ? 'btn-primary' : 'btn-secondary'"
		@click="handleSelect"
		class="btn"
	>
		{{ this.tag }}
	</button>
</template>

<script>
	export default {
		data() {
			return {
				selected: false
			}
		},
		created() {
			if (this.$store.state.filteredTags.includes(this.tagId)) {
				this.selected = true
			}
		},
		props: {
			tag: {
				required: true,
				type: String,
				default: 'tagname'
			},
			tagId: {
				required: true,
				type: String,
				default: 'id'
			}
		},
		methods: {
			handleSelect() {
				this.selected = !this.selected
				this.$store.commit('toggleTag', this.tagId)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn {
		margin: 5px;
		$badge-color: black;
	}
</style>
