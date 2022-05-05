<template>
	<div :class="{ selected: selected }" @click="handleSelect">
		<p>
			{{ this.tag }}
		</p>
	</div>
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

<style scoped>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px 7.5px 10px 7.5px;
		min-width: 50px;
		width: auto;
		height: 10px;
		padding: 7px;
		border: 1px solid #fff;
		opacity: 0.9;
		transition: 0.3s;
		font-size: 0.8rem;
		border-radius: 50vh;
	}

	div:hover {
		cursor: pointer;
	}

	p {
		color: #fff;
	}

	.selected {
		background-color: grey;
	}
</style>
