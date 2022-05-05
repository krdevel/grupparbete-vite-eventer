<script>
	export default {
		data() {
			return {
				links: [
					{ address: '/', title: 'Home' },
					{ address: '/filter', title: 'Filter' }
				]
			}
		}
	}
</script>

<template>
	<nav
		v-if="links.length !== 0"
		class="navbar navbar-expand-lg navbar-light bg-light"
	>
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<img src="/favicon-196.png" alt="" width="30" height="24" />
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
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

	<!-- <nav v-if="links.length !== 0">
		<ul>
			<li :key="link.address" v-for="link in links">
				<RouterLink :to="link.address">{{ link.title }}</RouterLink>
			</li>
		</ul>
	</nav> -->
</template>
