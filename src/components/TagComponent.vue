<template>
	<button
		type="button"
		:class="selected ? 'btn-primary' : 'btn-secondary'"
		@click="handleSelect"
		class="btn"
	>
		{{ this.tagName }}
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
			if (this.$store.state.dbFilteredTags[this.tagType].includes(this.tagId)) {
				this.selected = true
			}
		},
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
		methods: {
			handleSelect() {
				this.selected = !this.selected
				//				this.$store.commit('toggleTag', this.tagId)

				this.$store.commit('newToggleTag', {
					type: this.tagType,
					id: this.tagId
				})
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
