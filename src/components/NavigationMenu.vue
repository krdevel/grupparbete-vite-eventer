<script>
	export default {
		data() {
			return {
				links: [
					{ address: '/', title: 'Home' },
					{ address: '/filter', title: 'Filter' }
				]
			}
		},
		methods: {
			resetStore() {
				window.localStorage.removeItem('vuex')
				location.reload()
			}
		}
	}
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<RouterLink @click="resetStore" class="navbar-brand" to="/">
				<img src="/favicon-196.png" alt="Logo" />
			</RouterLink>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				v-if="links.length !== 0"
				class="collapse navbar-collapse"
				id="navbarNav"
			>
				<ul class="navbar-nav">
					<li class="nav-item" :key="link.address" v-for="link in links">
						<RouterLink class="nav-link" :to="link.address">{{
							link.title
						}}</RouterLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
