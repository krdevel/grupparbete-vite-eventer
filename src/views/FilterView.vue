<script>
	import FilterList from '../components/FilterList.vue'
	import TagContainer from '../components/TagContainer.vue'

	export default {
		created() {},
		//Programatisk Router exempel

		data() {
			return {
				// true/1 for list, false/0 for grid
				listOrGrid: false
			}
		},

		methods: {
			// tryClick(place){
			// 	this.$router.push('/event/'+place)
			// }
			handleListOrGrid(value) {
				value === 'list' ? (this.listOrGrid = true) : (this.listOrGrid = false)
			}
		},
		components: {
			FilterList,
			TagContainer
		}
	}
</script>

<template>
	<main id="filter-view">
		<div class="responsive">
			<div id="container">
				<TagContainer type="type" heading="What kind of event?" />
				<TagContainer type="location" heading="Where?" />
				<TagContainer type="date" heading="When?" />
			</div>
			<div id="list">
				<div
					class="btn-group"
					role="group"
					aria-label="Basic radio toggle button group"
				>
					<input
						type="radio"
						class="btn-check"
						name="btnradio"
						id="btnradio1"
						autocomplete="off"
						@click="handleListOrGrid('list')"
					/>
					<label class="btn btn-outline-primary" for="btnradio1"
						><i class="bi bi-list"></i
					></label>

					<input
						type="radio"
						class="btn-check"
						name="btnradio"
						id="btnradio2"
						autocomplete="off"
						checked
						@click="handleListOrGrid('grid')"
					/>
					<label class="btn btn-outline-primary" for="btnradio2"
						><i class="bi bi-grid"></i
					></label>
				</div>
				<FilterList :is-list="this.listOrGrid" />
			</div>
		</div>
	</main>
</template>

<style>
	#list {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.btn-group {
		align-self: flex-end;
		margin-bottom: 15px;
	}

	@media screen and (max-width: 1024px) {
		.responsive {
			display: flex;
			flex-direction: column;
		}

		#container {
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
