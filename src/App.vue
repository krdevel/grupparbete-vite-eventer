<template>
	<div :id="$route.name">
		<NavigationMenu />
		<RouterView />
		<FooterBox />
	</div>
</template>

<script>
	import NavigationMenu from './components/NavigationMenu.vue'
	import FooterBox from './components/FooterBox.vue'

	export default {
		components: {
			NavigationMenu,
			FooterBox
		}
	}
</script>
