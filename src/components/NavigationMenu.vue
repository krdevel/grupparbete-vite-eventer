<template>
	<nav class="nav">
		<nav class="navbar navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" @click="resetStore">Ǝ</a>

				<div class="large">
					<div class="d-flex justify-content-end">
						<RouterLink class="nav-link" to="/">Home</RouterLink>
						<RouterLink class="nav-link" to="/admin">ADMIN</RouterLink>
						<a class="nav-link" href="https://www.google.com">
							<i class="bi bi-search"> </i>
						</a>
						<a class="nav-link">
							<i :class="siteLikeClass" @click="toggleSiteLike"> </i>
						</a>
					</div>
				</div>

				<div class="mobile">
					<RouterLink class="nav-link" to="/">
						<i class="bi bi-house-fill nav-item"> </i>
					</RouterLink>
					<a class="nav-link">
						<i class="bi bi-search nav-item"> </i>
					</a>
					<a class="nav-link">
						<i class="nav-item" :class="siteLikeClass" @click="toggleSiteLike">
						</i>
					</a>
					<RouterLink class="nav-link" to="/admin">
						<i class="bi bi-person-circle nav-item"> </i>
					</RouterLink>
				</div>
			</div>
		</nav>
	</nav>
</template>

<script>
	import '../../css/bootstrap.scss'

	export default {
		data() {
			return {}
		},
		computed: {
			siteLikeClass() {
				return (
					'bi ' + (this.$store.state.siteLike ? 'bi-heart-fill' : 'bi-heart')
				)
			}
		},
		created() {},
		methods: {
			resetStore() {
				window.localStorage.removeItem('vuex')
				location.reload()
			},
			toggleSiteLike() {
				this.$store.commit('toggleSiteLike')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mobile {
		display: none;
	}
	.large {
		display: flex;
	}
	nav.navbar {
		margin: 1rem;
		padding: 0;
	}

	nav.navbar.bg-light {
		background-color: #fff !important;
	}

	nav .nav-link {
		cursor: pointer;
		font-size: 1.25rem;
		font-weight: 550;
		color: #000;
		text-transform: uppercase;

		padding: 0 2rem;
	}

	nav .nav-link > .bi {
		font-size: 2rem;
	}

	nav .navbar-brand {
		cursor: pointer;
		font-size: 3rem;
		line-height: 1em;
		font-weight: bold;
	}

	.navbar-light .navbar-toggler {
		border-color: transparent;
		color: #868686;
	}

	.nav-link {
		margin: 0;
		text-align: center;
		margin-top: auto;
		margin-bottom: auto;
	}

	.navbar {
		width: 100%;
	}

	.nav-item {
		list-style-type: none;
	}

	.nav-link > .bi-heart,
	.nav-link > .bi-heart-fill {
		color: red;
	}

	.nav-link > .bi-heart:hover {
		text-shadow: 0 0 0.5rem red;
	}

	@media screen and (max-width: 1024px) {
		.nav-item {
			color: black;
		}
		.large {
			display: none;
		}
		.mobile {
			display: flex;
			width: 100%;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
		}
		.nav {
			display: flex;
			justify-content: center;
		}
		.navbar {
			position: fixed;
			bottom: 0;
			margin-bottom: 1rem;
			border-radius: 25px;
			width: 85%;
		}
		nav.navbar.bg-light {
			background-color: #cd8cc7 !important;
		}

		.navbar-brand {
			display: none;
		}
	}
</style>
