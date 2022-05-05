<script>
	export default {
		data() {
			return {
				links: [
					{ address: '/', title: 'home' },
					{ address: '/filter', title: 'filter' }
				]
			}
		}
	}
</script>

<template>
	<nav v-if="links.length !== 0">
		<ul>
			<li :key="link.address" v-for="link in links">
				<RouterLink :to="link.address">{{ link.title }}</RouterLink>
			</li>
		</ul>
	</nav>
</template>
