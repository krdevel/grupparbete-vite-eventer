<template>
	<div
		class="rounded-corners"
		:class="{ selected: selected }"
		@click="handleSelect"
	>
		<p>
			{{ this.tag }}
		</p>
	</div>
</template>

<script>
	export default {
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
			},

			data() {
				return {
					selected: false
				}
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
	}

	div:hover {
		opacity: 1;
		background-color: rgba(255, 255, 255, 0.2);
		cursor: pointer;
	}

	p {
		color: #fff;
	}

	.selected {
		background-color: grey;
	}

	.rounded-corners {
		border-radius: 50vh;
	}
</style>
