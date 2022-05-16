<template>
	<div :id="$route.name">
		<NavigationMenu />
		<RouterView />
	</div>
</template>

<script>
	import NavigationMenu from './components/NavigationMenu.vue'

	export default {
		components: {
			NavigationMenu
		}
	}
</script>
