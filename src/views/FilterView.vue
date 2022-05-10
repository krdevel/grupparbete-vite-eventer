<script>
	import FilterList from '../components/FilterList.vue'
	import TagContainer from '../components/TagContainer.vue'

	export default {
		created() {},
		//Programatisk Router exempel
		/* ,
		methods:{
			tryClick(place){
				this.$router.push('/event/'+place)
			}
		} */
		components: {
			FilterList,
			TagContainer
		}
	}
</script>

<template>
	<main id="filter-view">
		<div>
			<div>
				<TagContainer type="event" />
				<TagContainer type="location" />
				<TagContainer type="date" />
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
						checked
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
					/>
					<label class="btn btn-outline-primary" for="btnradio2"
						><i class="bi bi-grid"></i
					></label>
				</div>
				<FilterList />
			</div>
		</div>
	</main>
</template>

<style>
	#list {
		display: flex;
		flex-direction: column;
	}

	.btn-group {
		align-self: flex-end;
	}
</style>
