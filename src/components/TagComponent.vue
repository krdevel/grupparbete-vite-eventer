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
	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	p {
		color: black;
		margin: 0;
	}

	.btn {
		margin: 5px;
		$badge-color: black;
	}

	.selected {
	}
</style>
