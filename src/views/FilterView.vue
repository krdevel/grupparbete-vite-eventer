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
	<main>
		<h1>Filter</h1>

		<TagContainer type="event" />
		<TagContainer type="location" />
		<TagContainer type="date" />

		<FilterList />
	</main>
</template>
