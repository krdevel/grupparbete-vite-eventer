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
		<h1>Filter</h1>

		<div>
			<div>
				<TagContainer type="event" />
				<TagContainer type="location" />
				<TagContainer type="date" />
			</div>
			<div>
				<FilterList />
			</div>
		</div>
	</main>
</template>
