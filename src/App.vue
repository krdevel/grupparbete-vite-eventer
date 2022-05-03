<script>
	import EventTagRelations from './components/EventTagRelations.vue'
	import SearchResultList from './components/SearchResultList.vue'

	import CitiesList from './components/CitiesList.vue'
	import CounterButton from './components/CounterButton.vue'
	import HelloWorld from './components/HelloWorld.vue'

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
			CitiesList,
			CounterButton,
			HelloWorld,
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
	<nav>
		<ul>
			<li>
				<RouterLink to="/">Hem</RouterLink>
			</li>
			<li>
				<RouterLink to="/about">Om</RouterLink>
			</li>
			<li>
				<RouterLink to="/contact">Kontakt</RouterLink>
			</li>
			<!-- Router test, kan tas bort! -->
			<!-- <li>
				<RouterLink to="/event/12">TestEvent</RouterLink>
				<input type="button" @click="tryClick($store.state.events[0].id)" value="Press me!" />
			</li> -->
		</ul>
	</nav>
	<HelloWorld msg="Hello World!" />
	<CitiesList />
	<CounterButton />
	<main>
		<RouterView />
	</main>
</template>
