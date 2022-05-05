<script>
	import NavigationMenu from './components/NavigationMenu.vue'

	export default {
		components: {
			NavigationMenu
		}
	}
</script>

<template>
	<div>
		<NavigationMenu />
		<RouterView />
	</div>
</template>
