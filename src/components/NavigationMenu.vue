<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<img src="/favicon-196.png" alt="Logo" @click="resetStore" />
			<button
				class="navbar-toggler shadow-none"
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
				id="navbarNav"
				class="collapse navbar-collapse"
			>
				<ul class="navbar-nav">
					<li v-for="link in links" :key="link.address" class="nav-item">
						<RouterLink class="nav-link" :to="link.address">{{
							link.title
						}}</RouterLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				links: [{ address: '/', title: 'Home' }]
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

<style>
	nav.navbar img {
		cursor: pointer;
		width: 1.875rem;
		margin: 0.5rem 0.75rem 0.5rem 0;
	}
</style>
