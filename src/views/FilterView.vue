<template>
	<main>
		<div class="search-and-tag-container">
			<h1>FIND YOUR EVENT</h1>
			<div class="toggle-tags-div">
				<button
					class="btn toggle-tags-button"
					data-toggle="collapse"
					data-target=".collapse"
				>
					Show filter
				</button>
			</div>
			<div class="tag-container-box collapse">
				<TagContainer type="type" heading="Category" />
				<TagContainer type="location" heading="Location" />
				<TagContainer type="date" heading="Time" />
			</div>
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
				listOrGrid: false,
				tagToggleButtonText: 'Show tags'
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

	#filter-view .navbar-light .navbar-toggler {
		border-color: transparent;
		color: #868686;
	}

	#filter-view h1 {
		font-size: 3rem;
		margin: 0 auto;
		padding: 4rem 0 0;
	}

	#filter-view main {
		display: column;
		justify-content: space-evenly;
	}

	.search-and-tag-container {
		width: 100%;
		margin: 0;
		background-image: url(/images/background.png);
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;

		/* border-width: 4px;
		border-style: solid;
		border-color: #f00; */

		display: flex;
		flex-direction: column;
	}

	.toggle-tags-div {
		/* background-color: #000000; */

		margin: 0 auto 2rem;
		padding: 0;
		/* padding-bottom: 10px; */
		/* font-size: 1rem; */
	}

	.toggle-tags-button {
		background-color: #27ae60;
		color: #fff;
		width: auto;
		height: 2rem;
		line-height: 0.5rem;
		margin: 1.5rem auto 0;
		/* padding-bottom: 10px; */
		/* font-size: 1rem; */
	}

	/* .tag-container-box {
		width: 70%;
		margin: 0 auto;
	} */

	/* #filter-view main > .tag-container-box {
		width: 70%;
		margin: 0 auto;

		border-width: 4px;
		border-style: solid;
		border-color: #f00;
	} */

	#filter-view .btn-outline-primary {
		border-radius: 0.5rem;
		padding: 1rem 1rem 0 1rem;
	}

	#filter-view main > .list-box {
		width: 100%;
		padding: 1rem 1rem 0 1rem;
	}

	#filter-view .tag-container-box {
		background-color: #fff;

		width: 75%;
		/* margin: 0 auto; */
		margin: 1rem auto;

		padding: 3rem 3rem 2rem;
		border-radius: 1.5rem;
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
		background-color: #ffffff00;
		border-color: #1f3868;
		color: #1f3868;
		border-radius: 0.25rem;
		width: auto;
		height: auto;
		margin: 0;
		padding: 0.5rem 1rem;
	}

	/* This overrides Bootstrap */
	#filter-view .list-box .btn-outline-primary:hover {
		background-color: #f1f6ff;
	}

	/* This overrides Bootstrap */
	#filter-view .list-box .btn-check:checked + .btn-outline-primary {
		border-color: #1f3868;
		background-color: #27ae60;
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
