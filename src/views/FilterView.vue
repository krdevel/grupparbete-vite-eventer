<script>
	import SearchResultList from '../components/SearchResultList.vue'
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
			SearchResultList,
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

		<SearchResultList />
	</main>
</template>
