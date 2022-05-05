<script>
	import EventTagRelations from './components/EventTagRelations.vue'
	import SearchResultList from './components/SearchResultList.vue'

	import TagContainer from './components/TagContainer.vue'
	import EventView from './views/EventView.vue'
	import NavigationMenu from './components/NavigationMenu.vue'

	export default {
		components: {
			EventTagRelations,
			SearchResultList,
			TagContainer,
			EventView,
			NavigationMenu
		}
	}
</script>

<template>
	<TagContainer type="event" />
	<TagContainer type="location" />
	<TagContainer type="date" />

	<EventTagRelations />
	<SearchResultList />
	<EventView />

	<div>
		<NavigationMenu />
		<RouterView />
	</div>
</template>
