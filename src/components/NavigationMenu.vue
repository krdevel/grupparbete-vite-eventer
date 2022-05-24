<template>
	<nav class="nav">
		<div v-if="isMobile" class="navbar-container mobile">
			<RouterLink class="nav-link" to="/">
				<i class="bi bi-house-fill nav-item"> </i>
			</RouterLink>
			<a class="nav-link">
				<i class="bi bi-search nav-item"> </i>
			</a>
			<a class="nav-link">
				<i class="nav-item" :class="siteLikeClass" @click="toggleSiteLike"> </i>
			</a>
			<RouterLink class="nav-link" to="/admin">
				<i class="bi bi-person-circle nav-item"> </i>
			</RouterLink>
		</div>

		<nav v-else class="navbar navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" @click="resetStore"
					>Ǝ
					<!-- img
						src="../assets/logo.svg"
						alt="Logo"
						@click="resetStore"
					/ -->
				</a>

				<div class="d-flex">
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
		</nav>
	</nav>
</template>

<script>
	import '../../css/bootstrap.scss'

	export default {
		data() {
			return {
				windowWidth: window.innerWidth,
				isMobile: null,
				links: [
					{ address: '/', title: 'Home' },
					{ address: '/admin', title: 'admin' }
				]
			}
		},
		computed: {
			siteLikeClass() {
				return (
					'bi ' + (this.$store.state.siteLike ? 'bi-heart-fill' : 'bi-heart')
				)
			}
		},
		watch: {
			windowWidth(newWidth) {
				if (newWidth >= 768) {
					this.isMobile = false
				} else {
					this.isMobile = true
				}
			}
		},
		created() {
			this.getRes()
			this.$nextTick(() => {
				window.addEventListener('resize', this.getRes)
			})
		},
		methods: {
			resetStore() {
				window.localStorage.removeItem('vuex')
				location.reload()
			},
			getRes() {
				this.windowWidth = window.innerWidth
			},
			toggleSiteLike() {
				this.$store.commit('toggleSiteLike')
			}
		}
	}
</script>

<style lang="scss" scoped>
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

	.navbar-container {
		width: 100%;
		background-color: #1f3868;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
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

	@media screen and (max-width: 768px) {
		.nav {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.navbar-container {
			position: fixed;
			bottom: 0;
			margin-bottom: 10px;
			width: 80%;
			min-width: 350px;
			display: flex;
			justify-content: space-around;
			flex-direction: row;
			border-radius: 25px;
		}

		i {
			color: white;
		}

		.nav-item:hover {
			border-bottom: 2px white solid;
		}
	}
</style>
