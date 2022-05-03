<script>
	import EventTagRelations from './components/EventTagRelations.vue'
	import SearchResultList from './components/SearchResultList.vue'

	import TagContainer from './components/TagContainer.vue'

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
			EventTagRelations,
			SearchResultList,
			TagContainer
		}
	}
</script>

<template>
	<TagContainer type="event" />
	<TagContainer type="location" />
	<TagContainer type="date" />

	<EventTagRelations />
	<SearchResultList />

	<main>
		<RouterView />
	</main>
</template>
