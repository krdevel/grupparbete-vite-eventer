<template>
	<main>
		<div class="tag-container-box">
			<TagContainer type="type" heading="Category" />
			<TagContainer type="location" heading="Location" />
			<TagContainer type="date" heading="Time" />
		</div>
		<div class="list-box">
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
		margin: 0.5rem 0;
		padding: 0 2rem;
	}

	#filter-view .navbar-light .navbar-toggler {
		border-color: transparent;
		color: #868686;
	}

	#filter-view main {
		display: column;
		justify-content: space-evenly;
	}

	#filter-view main > .tag-container-box {
		width: 70%;
	}

	#filter-view main > .list-box {
		width: 100%;
		padding: 1rem 1rem 0 1rem;
	}

	#filter-view .tag-container-box {
		width: 35%;
		padding: 2rem 1rem 0 2rem;
	}

	#filter-view .list-box {
		width: 50%;
		padding: 2rem 2rem 0 1rem;
	}

	#filter-view .list-box {
		display: flex;
		flex-direction: column;
	}

	/* This overrides Bootstrap */
	#filter-view .list-box .btn-outline-primary {
		border-color: #1f3868;
		color: #1f3868;
	}

	/* This overrides Bootstrap */
	#filter-view .list-box .btn-outline-primary:hover {
		background-color: #f1f6ff;
	}

	/* This overrides Bootstrap */
	#filter-view .list-box .btn-check:checked + .btn-outline-primary {
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

	/* @media screen and (max-width: 1024px) {
		#filter-view main {
			flex-direction: column;
		}

		#filter-view main > .tag-container-box,
		#filter-view main > .list-box {
			width: 100%;
			padding: 1rem 1rem 0 1rem;
		}
	} */
</style>
