<template>
	<main>
		<div class="responsive">
			<div class="container-box">
				<TagContainer type="type" heading="Category" />
				<TagContainer type="location" heading="Location" />
				<TagContainer type="date" heading="Date" />
			</div>
			<div class="list-container">
				<div
					class="btn-group"
					role="group"
					aria-label="Basic radio toggle button group"
				>
					<input
						id="btnradio1"
						type="radio"
						class="btn-check"
						name="btnradio"
						autocomplete="off"
						@click="handleListOrGrid('list')"
					/>
					<label class="btn btn-outline-primary shadow-none" for="btnradio1"
						><i class="bi bi-list"></i
					></label>

					<input
						id="btnradio2"
						type="radio"
						class="btn-check shadow-none"
						name="btnradio"
						autocomplete="off"
						checked
						@click="handleListOrGrid('grid')"
					/>
					<label class="btn btn-outline-primary shadow-none" for="btnradio2"
						><i class="bi bi-grid"></i
					></label>
				</div>
				<FilterList :is-list="listOrGrid" />
			</div>
		</div>
	</main>
</template>

<script>
	import FilterList from '../components/FilterList.vue'
	import TagContainer from '../components/TagContainer.vue'

	export default {
		components: {
			FilterList,
			TagContainer
		},
		//Programatisk Router exempel
		data() {
			return {
				// true/1 for list, false/0 for grid
				listOrGrid: false
			}
		},
		created() {},
		methods: {
			handleListOrGrid(value) {
				value === 'list' ? (this.listOrGrid = true) : (this.listOrGrid = false)
			}
		}
	}
</script>

<style>
	#filter-view nav.navbar {
		border: 0.125rem solid #000;
		margin: 1rem;
		padding: 0;
	}

	#filter-view nav.navbar.bg-light {
		background-color: #fff !important;
	}

	#filter-view nav .nav-link {
		font-size: 1.25rem;
		font-weight: 550;
		color: #000;
		text-transform: uppercase;
		padding: 0 2rem;
	}

	#filter-view .responsive {
		display: flex;
	}

	#filter-view .responsive > div {
		padding: 2rem;
	}

	#filter-view .list-container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	/* This overrides Bootstrap */
	#filter-view .list-container .btn-outline-primary {
		border-color: #1f3868;
		color: #1f3868;
	}

	/* This overrides Bootstrap */
	#filter-view .list-container .btn-outline-primary:hover {
		background-color: #f1f6ff;
	}

	/* This overrides Bootstrap */
	#filter-view .list-container .btn-check:checked + .btn-outline-primary {
		border-color: #1f3868;
		background-color: #1f3868;
		color: #fff;
	}

	#filter-view .btn-group {
		align-self: flex-end;
	}

	#filter-view .btn-group + * {
		margin: 2rem 0;
	}

	@media screen and (max-width: 1024px) {
		#filter-view .responsive {
			flex-direction: column;
		}

		#filter-view .container-box {
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
