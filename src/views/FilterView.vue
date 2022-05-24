<template>
	<main>
		<div class="search-and-tag-container">
			<h1>FIND YOUR EVENT</h1>
			<!-- div class="toggle-tags-div" -->
			<!-- button
				class="btn toggle-tags-button"
				data-toggle="collapse"
				data-target=".collapse"
				@click="toggleTagToggleButtonText"
			>
				{{ tagToggleButtonText }}
				<svg
					id="toggleButtonSvg"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-sliders"
					viewBox="0 0 16 16"
				>
					<path fill-rule="evenodd" :d="toggleButtonPath" />
				</svg>
			</button -->
			<button class="btn toggle-tags-button" @click="toggleTagToggleButtonText">
				{{ tagToggleButtonText }}
				<svg
					id="toggleButtonSvg"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-sliders"
					viewBox="0 0 16 16"
				>
					<path fill-rule="evenodd" :d="toggleButtonPath" />
				</svg>
			</button>
			<!-- /div -->
			<!-- div class="tag-container-box-container collapse" -->
			<div
				class="tag-container-box-container"
				:class="tagContainerBoxContainerClass"
			>
				<div class="tag-container-box">
					<TagContainer type="type" heading="Category" />
					<TagContainer type="location" heading="Location" />
					<TagContainer type="date" heading="Time" />
					<a class="clear-filters" @click="clearFilters">Clear filters</a>
				</div>
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
		data() {
			return {
				// true/1 for list, false/0 for grid
				listOrGrid: false,
				tagToggleButtonText: 'Show tags',
				revealPath:
					'M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z',
				hidePath:
					'M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z',
				toggleButtonPath: null
			}
		},
		computed: {
			tagContainerBoxContainerClass() {
				return this.tagToggleButtonText == 'Show tags' ? '' : 'open'
			}
		},
		created() {
			this.toggleButtonPath = this.revealPath
		},
		methods: {
			clearFilters() {
				this.$store.commit('resetTags')
			},
			handleListOrGrid(value) {
				value === 'list' ? (this.listOrGrid = true) : (this.listOrGrid = false)
			},
			toggleTagToggleButtonText() {
				/*
				console.log(
					'toggleTagToggleButtonTextthis.tagToggleButtonText: ' +
						this.tagToggleButtonText
				)
				*/
				if (this.tagToggleButtonText == 'Show tags') {
					this.tagToggleButtonText = 'Hide tags'
					this.toggleButtonPath = this.hidePath
				} else {
					this.tagToggleButtonText = 'Show tags'
					this.toggleButtonPath = this.revealPath
				}
			}
		}
	}
</script>

<style>
	#filter-view h1 {
		font-size: 3rem;
		line-height: 1.5;
		margin: 3rem auto;
	}

	#filter-view main {
		display: column;
		justify-content: space-evenly;
	}

	#filter-view .clear-filters {
		cursor: pointer;
		color: #ff523a;
		margin-left: 1rem;
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

	/* This padding adjusts the heading away from the edges on thin screens. */
	.search-and-tag-container > h1 {
		padding: 0 2rem;
	}

	/*
	.toggle-tags-div {
	*/

	/* background-color: #000000; */

	/*
		margin: 0 auto 2rem;
		padding: 0;
	*/

	/* padding-bottom: 10px; */
	/* font-size: 1rem; */

	/*
	}
	*/

	.toggle-tags-button {
		background-color: #27ae60;
		color: #fff;
		/*
		width: auto;
		height: 2rem;
		line-height: 0.5rem;
		padding-top: 0.68rem;
		*/
		margin: 0 auto 3rem;
		/* padding-bottom: 10px; */
		/* font-size: 1rem; */

		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.toggle-tags-button:hover {
		color: rgb(119, 119, 119);
	}

	/*
	#toggleButtonSvg {
		margin-left: 1rem;
		margin-top: -0.2rem;
		padding-top: 0;
	}
	*/

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
		margin-top: 2rem;
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
	}

	#filter-view .tag-container-box-container {
		background-color: #fff;
		width: 75%;
		height: 0;
		margin: 0 auto;
		border-radius: 1.5rem;

		overflow: hidden;
		transition: height 1s, margin 1s;
	}

	#filter-view .tag-container-box-container.open {
		height: 35.25rem;
		margin-bottom: 3rem;
	}

	#filter-view .tag-container-box {
		background-color: #fff;

		width: 100%;
		margin: 0 auto;
		/* margin: 1rem auto; */

		padding: 3rem;
		/* border-radius: 1.5rem; */
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

	@media screen and (max-width: 639px) {
		#filter-view .tag-container-box-container {
			width: 90%;
		}

		#filter-view .tag-container-box {
			padding: 2rem 1rem;
		}

		#filter-view .tag-container-box-container.open {
			height: 53.25rem;
		}
	}
</style>
